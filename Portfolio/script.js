let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

 const typed = new Typed('.multiple-text', {
      strings: ['Software Developer','Frontend Developer', 'Backend Developer','UI/UX Designer'],
      typeSpeed: 80,
      backSpeed: 80,
        backDelay: 1200,
        loop: true
    });

    function toggleDetails(id) {
    var x = document.getElementById(id);
    x.style.display = (x.style.display === "none") ? "block" : "none";
  }

  function toggleAbout() {
  const content = document.getElementById("more-about");
  const button = document.querySelector(".about .btn");

  if (content.style.display === "none") {
    content.style.display = "block";
    button.textContent = "Read Less";
  } else {
    content.style.display = "none";
    button.textContent = "Read More";
  }
}

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.onclick = function (e) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
}

function revealEmail() {
  document.getElementById("email").style.display = "block";
}



  document.querySelectorAll('.project-rating').forEach(rating => {
    const stars = rating.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
      star.addEventListener('mouseover', () => {
        stars.forEach((s, i) => {
          s.classList.toggle('hover', i <= index);
        });
      });

      star.addEventListener('mouseout', () => {
        stars.forEach(s => s.classList.remove('hover'));
      });

      star.addEventListener('click', () => {
        stars.forEach((s, i) => {
          s.classList.toggle('selected', i <= index);
        });

        const ratingValue = index + 1;
        const project = rating.dataset.project;
        console.log(`User rated "${project}" with ${ratingValue} stars`);
        
      });
    });
  });
  
    const menuIcon = document.querySelector('#menu-icon');
    const nav = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });


