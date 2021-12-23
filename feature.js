$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    wrapAround:true,
    freeScroll: true
  });

  const carouselSlide = document.querySelector('.carousel-slie');
  const carouselImages = document.querySelector('.carousel-slie');

  //Buttons
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  //Counter
  let Counter = 1;
  const size = carouselImages[0].clientWidth;
  carouselSlide.getElementsByClassName.transform = 'translateX('+ (-size* counter) + 'px)';

  //Button Listeners
  nextBtn.addEventListener("click", ()=>{
    if (counter <= carouselImages.Length -1) return;
    carouselSlide.getElementsByClassName.transition = "transform 0 .4s ease-in-out";
    counter++;
    carouselSlide.getElementsByClassName.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  prevBtn.addEventListener("click", ()=>{
    carouselSlide.getElementsByClassName.transition = "transform 0 .4s ease-in-out";
    counter--;
    carouselSlide.getElementsByClassName.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id==='lastClone'){
      carouselSlide.getElementsByClassName.transition = "none";
      counter = carouselImages.Length -2;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });

  carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id==='firstClone'){
      carouselSlide.style.transition = "none";
      counter = carouselImages.Length -counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });