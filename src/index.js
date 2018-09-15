import './scss/index.scss'

(function($){
    //Anonymous functions...

    //helper function to fetch object manifest
    //@returns array
    function getObjectList() {
        $.getJSON("../object-manifest.json", function(data){
            var imgColl = new imageCollection(), id, nameList, imgPath;
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
            imgColl.add(new imageDictionary(id, nameList, imgPath))
        })
    }

    $(function(){
        //Run on DOM ready
        const body = $('body');

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