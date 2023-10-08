//welcome message
var user = 'Rodney'
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Apple Watch Ultra reviews.';
var greetingEl = document.getElementByID('greeting');

greetingEl.textContent = greeting;

//product price
var price = 750,
    studentDiscount = .10,
    studentPrice = price - {price *studentDiscount},
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementByID('student-price');

priceEl.textContent=price.toFixed(2);
studentPriceEl.textContent=studentPrice.toFixed(2);