document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('appointmentForm').addEventListener('submit', function(e){
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    if(name && email && date){
        alert("Appointment successfully booked! We will contact you soon.");
        this.reset();
    } else {
        alert("Please fill all required fields.");
    }
});
