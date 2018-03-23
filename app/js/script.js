document.addEventListener('DOMContentLoaded', function(){
    var wraper=document.getElementById('wrapper');
    var topLayer=document.querySelector('.top');
    var bottomLayer=document.querySelector('.bottom');
    var hendler=document.querySelector('.handle');

    var skew=0;
    var delta=0;

    if(wraper.className.indexOf('skewed')!=-1){
       skew=1200;
    }

    wraper.addEventListener('mousemove', function(e){
        delta=(e.clientX-window.innerWidth/2)*0.5;
        hendler.style.left= e.clientX+delta+'px';
        topLayer.style.width= e.clientX+skew+delta+'px';
    })
})