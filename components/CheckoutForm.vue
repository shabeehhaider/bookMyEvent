<template>
  <div class="tickets-form">
    <h2>Select Your Tickets</h2>

    <!-- Ticket Selection Form -->
    <div class="ticket-selection">
      <div v-for="(ticket, index) in tickets" :key="index" class="ticket-item">
        <label>{{ ticket.name }} - ${{ ticket.price }}</label>
        <div class="quantity-controls">
          <button class="negative" @click="decreaseQuantity(index)">-</button>
          <span>{{ ticket.quantity }}</span>
          <button class="positive" @click="increaseQuantity(index)">+</button>
        </div>
      </div>
    </div>

    <!-- Total Amount -->
    <div v-if="totalAmount > 0" class="total-amount">
      <h3>Total Amount: ${{ totalAmount }}</h3>
    </div>

    <!-- Add to Cart Button -->
    <button v-if="totalAmount > 0" class="add-to-cart" @click="addToCart">
      Add to Cart
    </button>

    <!-- Checkout Section -->
    <div v-if="cart.length > 0" class="checkout-section">
      <h3>Pay Now</h3>
      <p>You have added {{ cart.length }} item(s) to your cart.</p>

      <div class="payment-options">
        <button
          class="pay-button apple-pay"
          @click="selectPaymentMethod('Apple Pay')"
        >
          Apple Pay
        </button>
        <button
          class="pay-button google-pay"
          @click="selectPaymentMethod('Google Pay')"
        >
          Google Pay
        </button>
        <button
          class="pay-button credit-card"
          @click="selectPaymentMethod('Credit Card')"
        >
          Credit Card
        </button>
      </div>

      <!-- Payment Form -->
      <div v-if="selectedPaymentMethod" class="payment-form">
        <h4>{{ selectedPaymentMethod }} Information</h4>

        <!-- Common Fields for All Payment Methods -->
        <label for="name">Full Name:</label>
        <input type="text" v-model="paymentDetails.name" placeholder="Enter your full name" />

        <label for="email">Email:</label>
        <input
          type="email"
          v-model="paymentDetails.email"
          @blur="validateEmail"
          placeholder="Enter your email"
        />
        <span v-if="emailError" class="error">{{ emailError }}</span>

        <label for="phone">Phone Number:</label>
        <input
          type="tel"
          v-model="paymentDetails.phone"
          @blur="validatePhoneNumber"
          placeholder="Enter your phone number"
        />
        <span v-if="phoneError" class="error">{{ phoneError }}</span>

        <!-- Fields for Credit Card Only -->
        <div v-if="selectedPaymentMethod === 'Credit Card'">
          <label for="card-number">Card Number:</label>
          <input
            type="number"
            v-model="paymentDetails.cardNumber"
            @blur="validateCardNumber"
            placeholder="Enter your card number"
          />
          <span v-if="cardError" class="error">{{ cardError }}</span>

          <label for="cvv">CVV:</label>
          <input type="number" v-model="paymentDetails.cvv" @blur="validateCVV" placeholder="Enter your CVV" />
          <span v-if="cvvError" class="error">{{ cvvError }}</span>

          <label for="expiry-date">Expiry Date:</label>
          <input type="month" v-model="paymentDetails.expiryDate" />
        </div>

        <button
          class="confirm-button"
          :disabled="!isFormValid"
          @click="confirmPayment"
        >
          Confirm {{ selectedPaymentMethod }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tickets = ref([
  { name: 'Standard Ticket', price: 50, quantity: 0 },
  { name: 'VIP Ticket', price: 100, quantity: 0 },
  { name: 'Premium Ticket', price: 150, quantity: 0 },
])

const cart = ref([])
const selectedPaymentMethod = ref(null)
const paymentDetails = ref({
  email: '',
  name: '',
  phone: '',
  cardNumber: '',
  cvv: '',
  expiryDate: ''
})

const emailError = ref('')
const phoneError = ref('')
const cardError = ref('')
const cvvError = ref('')

// Increase and decrease quantity functions
const increaseQuantity = (index) => {
  tickets.value[index].quantity++
}

const decreaseQuantity = (index) => {
  if (tickets.value[index].quantity > 0) {
    tickets.value[index].quantity--
  }
}

// Compute total amount based on ticket quantities
const totalAmount = computed(() => {
  return tickets.value.reduce((total, ticket) => {
    return total + ticket.price * ticket.quantity
  }, 0)
})

// Add selected tickets to cart
const addToCart = () => {
  cart.value = tickets.value.filter(ticket => ticket.quantity > 0)
  console.log('Added to cart:', cart.value)
}

// Select Payment Method and reset errors
const selectPaymentMethod = (method) => {
  selectedPaymentMethod.value = method
  emailError.value = ''
  phoneError.value = ''
  cardError.value = ''
  cvvError.value = ''
  paymentDetails.value = {
    email: '',
    name: '',
    phone: '',
    cardNumber: '',
    cvv: '',
    expiryDate: ''
  }
}

// Validation functions
const validateCVV = () => {
  const cvvPattern = /^[0-9]{3,4}$/
  cvvError.value = cvvPattern.test(paymentDetails.value.cvv) ? '' : 'Please enter a valid 3 or 4-digit CVV.'
}

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailError.value = emailPattern.test(paymentDetails.value.email) ? '' : 'Please enter a valid email address.'
}

const validatePhoneNumber = () => {
  const phonePattern = /^[0-9]{10}$/
  phoneError.value = phonePattern.test(paymentDetails.value.phone) ? '' : 'Please enter a valid 10-digit phone number.'
}

const validateCardNumber = () => {
  const cardPattern = /^[0-9]{16}$/
  cardError.value = cardPattern.test(paymentDetails.value.cardNumber) ? '' : 'Please enter a valid 16-digit card number.'
}

const isFormValid = computed(() => {
  return !emailError.value && !phoneError.value && !cardError.value && !cvvError.value
})

const confirmPayment = () => {
  if (isFormValid.value) {
    console.log(`Confirming payment for ${cart.value.length} item(s) using ${selectedPaymentMethod.value}`)
    console.log('Payment details:', paymentDetails.value)
  } else {
    console.log('Please correct the errors before proceeding.')
  }
}
</script>





<style scoped lang="scss">
.tickets-form {
  padding: 20px;
  max-width: 600px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Ticket Selection Styles */
.ticket-selection {
  margin-bottom: 20px;
}

.ticket-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.ticket-item label {
  font-size: 18px;
  color: #333;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-controls button {
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.negative{
    background-color: red;
    &:hover {
      background-color: red;
    }
  }

  &.positive{
    background-color: #4CAF50;
    &:hover {
      background-color: #45a049;
    }
  }
}

.quantity-controls button:hover {
  background-color: #45a049;
}

.quantity-controls span {
  font-size: 16px;
  margin: 0 10px;
  font-weight: bold;
}

.checkout-section{
  margin-top: 40px;
  background: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
}

/* Total Amount and Add to Cart Button */
.total-amount {
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
}

.add-to-cart {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #4CAF50;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.add-to-cart:hover {
  background-color: #45a049;
}

/* Payment Options */
.payment-options {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.pay-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 24px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.apple-pay {
  background-color: #000;
}

.google-pay {
  background-color: #4285f4;
}

.credit-card {
  background-color: #6c63ff;
}

.pay-button:hover {
  opacity: 0.8;
}

/* Payment Form */
.payment-form {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  text-align: left;
}

.payment-form h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

label {
  font-size: 18px;
  color: #333;
  display: block;
  padding-top: 10px;
}

input[type="number"], 
input[type="email"], 
input[type="text"], 
input[type="tel"], 
input[type="month"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

/* Confirm Button */
.confirm-button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #4CAF50;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.confirm-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.confirm-button:hover {
  background-color: #45a049;
}
</style>
