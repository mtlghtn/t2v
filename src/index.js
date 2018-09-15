import './scss/index.scss'

(function($){
    //Anonymous functions...

    //helper function to fetch object manifest
    //@returns array
    function getObjectList() {
        $.getJSON("../object-manifest.json", function(data){

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