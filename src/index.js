import './scss/index.scss'

const imageCollection = require('./imageCollection');
const imageDictionary = require('./imageDictionary');

(function($){
    //Anonymous functions...

    //helper function to fetch object manifest
    function getObjectList() {
        var collection;
        $.getJSON("object-manifest.json", function(data){
            var id, nameList, imgPath;
            collection = new imageCollection();
            $.each(data, function(k,v){
                switch(k){
                    case 'id':
                        id = v;
                        break;
                    case 'name':
                        nameList = v;
                        break;
                    case 'imagePath':
                        imgPath = v;
                        break;
                }
            });
            collection.add((new imageDictionary(id, nameList, imgPath)).getDict());
            sessionStorage.setItem('imgColl', JSON.stringify(collection.getDict()));
        });
    }
    getObjectList();


    $(function(){
        //Run on DOM ready
        const body = $('body'), canvas = $('.output'), imgColl = JSON.parse(sessionStorage.getItem('imgColl'));

        if(canvas.length > 0){
            var cwidth = (window.innerWidth*85/100), cheight = (window.innerHeight*80/100), ctx = canvas[0].getContext("2d");
            ctx.canvas.width = cwidth*2;
            ctx.canvas.height = cheight*2;
        }

        body.on('click', 'button.go-back', function(e){
            window.history.back();
        });

        //validate form before submit, also strip tags to prevent XSS
        body.on('submit', '#scriptInput', function(e){
            e.preventDefault();
            var scriptInput = $('#scriptInput'),
                textContent = scriptInput.find('.input'),
                submitText = textContent.val();
            textContent.val(stripHTML(submitText));

            this.submit();
        });

        function stripHTML(dirtyString) {
            var container = document.createElement('div');
            var text = document.createTextNode(dirtyString);
            container.appendChild(text);
            return container.innerHTML; // innerHTML will be a xss safe string
        }
    })

})(jQuery)