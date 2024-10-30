<template>
  <div class="tickets-form">
    <h2>Select Your Tickets</h2>

    <!-- Ticket Selection Form -->
    <div class="ticket-selection">
      <label for="ticket-quantity">Number of Tickets:</label>
      <input
        type="number"
        v-model="ticketQuantity"
        min="1"
        placeholder="Enter ticket quantity"
      />
    </div>

    <div v-if="ticketQuantity > 0" class="checkout-section">
      <h3>Checkout</h3>
      <p>You have selected {{ ticketQuantity }} tickets.</p>

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
          class="pay-button tap-to-pay"
          @click="selectPaymentMethod('Tap to Pay')"
        >
          Tap to Pay
        </button>
      </div>

      <!-- Payment Form -->
      <div v-if="selectedPaymentMethod" class="payment-form">
        <h4>{{ selectedPaymentMethod }} Information</h4>

        <!-- Common Payment Fields -->
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

        <label for="card-number">Card Number:</label>
        <input
          type="number"
          v-model="paymentDetails.cardNumber"
          @blur="validateCardNumber"
          placeholder="Enter your card number"
        />
        <span v-if="cardError" class="error">{{ cardError }}</span>

        <label for="apple-pay-cvv">CVV:</label>
        <input type="number" v-model="paymentDetails.cvv" @blur="validateCVV" placeholder="Enter your CVV" />
        <span v-if="cvvError" class="error">{{ cvvError }}</span>


        <label for="expiry-date">Expiry Date:</label>
        <input type="month" v-model="paymentDetails.expiryDate" />

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

const ticketQuantity = ref(1)
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

// Select Payment Method and reset errors
const selectPaymentMethod = (method) => {
  selectedPaymentMethod.value = method
  emailError.value = ''
  phoneError.value = ''
  cardError.value = ''
  paymentDetails.value = {
    email: '',
    name: '',
    phone: '',
    cardNumber: '',
    cvv: '',
    expiryDate: ''
  }
}

const cvvError = ref('')

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
    console.log(`Confirming payment for ${ticketQuantity.value} ticket(s) using ${selectedPaymentMethod.value}`)
    console.log('Payment details:', paymentDetails.value)
  } else {
    console.log('Please correct the errors before proceeding.')
  }
}
</script>

<style scoped>
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

.ticket-selection {
  margin-bottom: 20px;
}

label {
  font-size: 18px;
  margin-right: 10px;
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

.checkout-section {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

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

.tap-to-pay {
  background-color: #6c63ff;
}

.pay-button:hover {
  opacity: 0.8;
}

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

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

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
