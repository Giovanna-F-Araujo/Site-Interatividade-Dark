'use strict'
const switcher = document.querySelector.Selector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className === "light-theme"){
        this.texContent = "Dark";
    }
    else{
        this.texContent = "Light";
    }
    console.log('Current class name: ' + className);
});