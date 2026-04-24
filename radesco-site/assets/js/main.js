(function(){
  var cursor = document.getElementById('cursor-glow');
  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var faqItems = document.querySelectorAll('[data-faq]');
  var statNumbers = document.querySelectorAll('.stat-number');
  var featureCards = document.querySelectorAll('.feature-card');

  document.addEventListener('mousemove', function(e){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  navToggle.addEventListener('click', function(){
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(function(link){
    link.addEventListener('click', function(){
      navLinks.classList.remove('open');
    });
  });

  faqItems.forEach(function(item){
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    question.addEventListener('click', function(){
      var isActive = item.classList.contains('active');
      faqItems.forEach(function(fi){
        fi.classList.remove('active');
        fi.querySelector('.faq-answer').style.maxHeight = '0';
      });
      if(!isActive){
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  function animateCount(el, target){
    var duration = 2000;
    var start = performance.now();
    function update(now){
      var progress = Math.min((now - start) / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target);
      if(progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  var statsDone = false;
  function checkStats(){
    if(statsDone) return;
    var rect = document.getElementById('heroStats').getBoundingClientRect();
    if(rect.top < window.innerHeight){
      statsDone = true;
      statNumbers.forEach(function(el){
        var target = parseInt(el.getAttribute('data-count'));
        animateCount(el, target);
      });
    }
  }

  var particlesContainer = document.getElementById('heroParticles');
  for(var i = 0; i < 30; i++){
    var p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.animationDuration = (6 + Math.random() * 4) + 's';
    particlesContainer.appendChild(p);
  }

  function checkFeatures(){
    featureCards.forEach(function(card){
      var rect = card.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50){
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', function(){
    checkStats();
    checkFeatures();
  });

  checkStats();
  checkFeatures();
})();