const h1 ={
    targets :'h1',
    scale: 1.5,
  }
  anime(h1);
  
  
  const img = {
    targets : 'img',
    scale: 3.5,
    rotate:'2000deg',
    duration: 10000,
  }
  
  anime(img);
  
    const line ={
      targets: 'line',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 4000,
      delay:anime.stagger(800),
      loop: false,
      direction: 'alternate',
      autoplay:true,
  
    };
  const btnToStartAnime = anime(line);
  
  
  const playbtn = document.querySelector('#play');
  const pausebtn = document.querySelector('#pause');
  const stopbtn = document.querySelector('#stop');
  
  playbtn.addEventListener('click', btnToStartAnime.play);
  pausebtn.addEventListener('click', btnToStartAnime.pause);
  
  stopbtn.addEventListener('click',function(){
    btnToStartAnime.restart();
    btnToStartAnime.pause();
  })
  
  
  //hover effects
  playbtn.addEventListener('mouseover',function (){
    const animate= anime({
      targets:'#play',
      background: 'rgb(255,255,255)',
  
    });
  })
  
  playbtn.addEventListener('mouseleave',function (){
    const animate= anime({
      targets:'#play',
      background: 'rgb(0,0,0)',
  
    });
  })
  
  