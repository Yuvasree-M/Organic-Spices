
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
document.getElementById('getStartedBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        location.href = '#product';
    }
});


    let cart = [];
    let Total = 0;

    function addToCart(itemName, itemPrice) {
        
        cart.push({ name: itemName, price: itemPrice});

        const cartItems = document.getElementById('cart-items');
        const newItem = document.createElement('li');
        newItem.textContent = `${itemName} - ₹${itemPrice.toFixed(2)}`;
        cartItems.appendChild(newItem);

        Total += itemPrice;
        document.getElementById('Total').textContent = Total.toFixed(2);
    }

    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.parentElement.querySelector('h5').textContent;
            const itemPrice = parseFloat(this.parentElement.querySelector('.card-text').textContent.split('Price - ')[1].replace('Rs.', ''));
            addToCart(itemName, itemPrice);
        });
    });

    
    document.getElementById('orderNow').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        document.getElementById('orderForm').style.display = 'block';
    });

    
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!name || !email) {
            alert('Please fill out all required fields.');
            return;
        }

        cart = [];
        subtotal = 0;
        document.getElementById('cart-items').innerHTML = '';
        document.getElementById('Total').textContent = '0.00';
        document.getElementById('orderForm').reset();
        document.getElementById('orderForm').style.display = 'none';
    });

    function notifyOwner(name, email, cart, subtotal) {
        console.log(`Order from ${name} (${email})`);
        console.log('Items:', cart);
        console.log('Total: ', Total.toFixed(2));
    }

    document.getElementById('orderForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

      document.getElementById('thankYouMessage').style.display = 'block';
      document.getElementById('orderForm').style.display = 'none';
  
      document.getElementById('continueShopping').style.display = 'block';
      clearCart();
      alert('Order confirmed. Notification sent to the application owner.');
  });
  
  function clearCart() {
      document.getElementById('cart-items').innerHTML = '';
      document.getElementById('Total').innerText = '0.00';
  }
  
  
  document.getElementById('continueShopping').addEventListener('click', function() {
      location.href = '#product'; 
  });

  document.getElementById('Contact').addEventListener('submit', function(e) {
    e.preventDefault();
    const messageSent = document.getElementById('messageSent');
    messageSent.style.display = 'block';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  
  
    setTimeout(() => {
      messageSent.style.display = 'none';
    }, 3000);
  });
  
  
  