let currentImageIndex = 0;
const images = document.querySelectorAll('#dropdown img');
const dots = document.querySelectorAll('.dot');


function showImage(index) {
    
    images.forEach((img, idx) => {
        img.style.display = 'none'; 
        
        dots[idx].classList.remove('active'); 
    });

    
    images[index].style.display = 'block'; 
    dots[index].classList.add('active'); 
}


function setCurrentImage(index) {
    currentImageIndex = index;
    showImage(currentImageIndex);
}


function autoSlide() {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    showImage(currentImageIndex);
}


setInterval(autoSlide, 3000);
showImage(currentImageIndex);






// Newsletter form handling

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var email = document.getElementById('email').value;

    
    if (email === "") {
        alert("Please enter a valid email.");
    } else {
        alert("Thank you for subscribing!");
        document.getElementById('email').value = '';
    }
});




// email 

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

  
    if (email === '' || name === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        document.getElementById('reservationForm').reset();
    }
});





// formHandler
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reservationForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function(event) {
       
        event.preventDefault();

        
        thankYouMessage.style.display = "block";

    
        form.style.display = "none";
    });
});
