
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var link = document.getElementById('link').value;
    var quantity = document.getElementById('quantity').value;
    var amount = document.getElementById('amount').value * 100;  // Convert to paise

    var options = {
        "key": "RAZORPAY_API_KEY",  // 🔄 Yahan apni Razorpay API Key dalein
        "amount": amount,
        "currency": "INR",
        "name": "Social Media Services",
        "description": "Order Payment",
        "handler": function (response) {
            alert("Payment Successful!");
            window.location.href = "https://yoursite.netlify.app/confirmation.html";  // 🔄 Confirmation page URL
        },
        "prefill": {
            "name": "Customer",
            "email": "customer@example.com"
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
});
