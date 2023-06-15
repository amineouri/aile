window.addEventListener("scroll", () =>{
    let header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 100)
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value
    var pickupplace = document.getElementById("Lieu").value;
    var pickupDate = document.getElementById("pickup-date").value;
    var returnDate = document.getElementById("return-date").value;
    var carType = document.getElementById("car-type").value;
    alert("bonjour " + name + " ,votre réservation a été prise en charge. Date de prise en charge: " + pickupDate + ", depuis:"+ pickupplace + ", Date de retour: " + returnDate + ", Type de véhicule: " + carType);
  });


  
      let menuIcon = document.querySelector('#hamburger');
      let navbar = document.querySelector('.navbar');
      
    hamburger.addEventListener("click", ()=>{
      menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
        });

        /*---------------------------------------------*/

      document.querySelectorAll(".nav-link").forEach(n => n. addEventListener ("click", () => {
          menuIcon.classList.remove('bx-x');
          navbar.classList.remove('active');
        }));
      let sections = document.querySelectorAll("section");
      let navlinks = docuemnt.querySelectorAll("header nav a");
      window.onscroll = () =>{
        sections.forEach(sec => {
            let top = window.scrollY
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");
            if( top >= offset && top < offset +height){
              links.classList.remove ('active');
              document.queryselector ('header nav a [href*=' + id + ']').classList.add('active');

            }
        })
      }