const progress=document.querySelector('.progress-bar');
window.addEventListener('scroll',function(){
    const ywidth=window.pageYOffset;
   const height=document.documentElement.scrollHeight;
    const scrolled= (ywidth/height) * 200;
    progress.style.width = `${scrolled}%`;

})