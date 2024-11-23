function bookHotel(hotelName) {
    // Display the booking form and pre-fill the hotel name
    document.getElementById('hotel').value = hotelName;
    window.scrollTo(0, document.getElementById('booking-form').offsetTop);
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const hotel = document.getElementById('hotel').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    // Here, you can handle the booking logic (e.g., sending the booking data to a server)
    alert(`Booking Confirmed! \n\nName: ${name} \nHotel: ${hotel} \nCheck-in: ${checkin} \nCheck-out: ${checkout}`);
});