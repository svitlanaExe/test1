function jQueryMini(element) {
    let initializedElement = document.querySelector(element);

    // Use your imagination below :)
    return {
        css: function (property, value){
            initializedElement.style[property]= value;
            return this;
        },
        addClass: function(className){
        initializedElement.classList.add(className);
        return this;
        }/* ...some magic... */,
        removeClass: function(className){
            initializedElement.classList.remove(className);
            return this;
        } /* ...some magic... */,
        html: function(data){
            if (data){
                initializedElement.innerHTML = data;
                return this;
            }
            return initializedElement.outerHTML;
        }
     /* ...some magic... */,

    }
}
/*

 */

window.onload = function() { // will code after page loaded
    // Usage
    const myElement = jQueryMini('#my-element')
        .css('padding', '150px')
        .css('margin', '150px')
        .css('border', '2px')
        .css('border-color', 'black')
        .css('border-style', 'solid')
        .removeClass('redundant-custom-class')
        .addClass('custom-class')
        .css('text-align', 'center');

    console.log(myElement.html); /* Output:   <div id="my-element" class="custom-class" style="padding: 150px; margin: 150px; border: 2px solid black; text-align: center;">
                                                    <img src="cat.jpg">
                                                </div>
                                    */
    jQueryMini('#my-element2').html('    <img src="cat.jpg"/>');
}