const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', e => {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('shaking'); 
       setTimeout(() => {
          key.classList.remove('shaking');
        }, 200);

      });
    }); 

keys.forEach(key => {
window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('shaking'); 
    setTimeout(() => {
     key.classList.remove('shaking');
   }, 200);
});
}); 
 