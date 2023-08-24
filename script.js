let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('active')
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        menuIcon.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

      });
    };
  });
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

// Update the progress width based on the skill level (0-100%)
function updateProgress(progressElement, skillLevel) {
  progressElement.style.width = skillLevel + '%';
}

// Callback function for the intersection observer
function intersectionCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When the section is in view, animate the progress bars
      const progressBars = entry.target.querySelectorAll('.progress');

      progressBars.forEach(progressBar => {
        const skillLevel = parseInt(progressBar.getAttribute('data-level'));
        updateProgress(progressBar, skillLevel);
      });

      // Stop observing once the animation has played
      observer.unobserve(entry.target);
    }
  });
}

// Create an intersection observer to observe the skills section
const skillsSection = document.querySelector('.skills-section');
const observer = new IntersectionObserver(intersectionCallback, { threshold: 0.1 });
observer.observe(skillsSection);

// Open the skills section
skillsSection.style.opacity = 1;

/* from */

let form=document.querySelector('#form');
    form.addEventListener("submit",(e)=>{
        e.target.btn.innerHTML="submitting";
        let d=new FormData(form);
        fetch(url,{
            method:"POST",
            body:d
        }).then((res)=>res.text())
        .then((finalRes)=>{
            e.target.btn.innerHTML="submitting"; 
            document.getElementById("res").innerHTML=finalRes;
            form.reset();
            setTimeout(()=>{
                document.getElementById("res").innerHTML="";
            },5000)
    })   
    e.preventDefault();
});

