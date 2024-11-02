<template>
  <div class="signup-form">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          v-model="name"
          id="name"
          placeholder="Enter your name"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          v-model="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          v-model="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select v-model="gender" id="gender" required>
          <option value="" disabled>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          v-model="dateOfBirth"
          id="dateOfBirth"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          v-model="phoneNumber"
          id="phoneNumber"
          placeholder="Enter your phone number"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="status">Status:</label>
        <select v-model="status" id="status" required>
          <option value="" disabled>Select status</option>
          <option value="Resident">Resident</option>
          <option value="Tourist">Tourist</option>
        </select>
      </div>
      
      <div class="form-group" v-if="status === 'Tourist'">
        <label for="passportNumber">Passport Number:</label>
        <input
          type="text"
          v-model="passportNumber"
          id="passportNumber"
          placeholder="Enter your passport number"
          required
        />
      </div>
      
      <div class="form-group" v-if="status === 'Resident'">
        <label for="emiratesID">Emirates ID:</label>
        <input
          type="text"
          v-model="emiratesID"
          id="emiratesID"
          placeholder="Enter your Emirates ID"
          required
        />
      </div>
      
      <button type="submit" class="signup-button">Sign Up</button>
    </form>
    <p class="login-link">
      Already have an account?
      <a href="/login">Login</a>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const gender = ref('')
const dateOfBirth = ref('')
const phoneNumber = ref('')
const status = ref('')
const passportNumber = ref('')
const emiratesID = ref('')

const handleSignUp = async () => {
  const customerData = {
    name: name.value,
    email: email.value,
    password: password.value,
    gender: gender.value,
    dateOfBirth: dateOfBirth.value,
    phoneNumber: phoneNumber.value,
    status: status.value,
    passportNumber: passportNumber.value,
    emiratesID: emiratesID.value,
    userPassword: 'customer123'
  }
  console.log( "Signing up with:---", customerData );
  try {
    const response = await axios.post('http://localhost:3002/api/customers/create', customerData)
    console.log('Sign-up successful:', response.data)
    alert('Customer created successfully!')
    
    // Redirect to login page after successful signup
    router.push('/login')
  } catch (error) {
    console.error( 'Sign-up error:', error );
    if (error.response && error.response.status === 400) {
      const errorData = error.response.data
      alert(errorData.message)
    } else {
      alert('An unexpected error occurred')
    }
  }
}
</script>

<style scoped>
.signup-form {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9; 
}

h2 {
  text-align: center;
  color: #333; 
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"],
input[type="password"], /* Added password field styling */
select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}


.signup-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff; 
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: inherit; 
}

.signup-button:hover {
  background-color: #0056b3;
}

.login-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.login-link a {
  color: #007bff; 
  text-decoration: none;
  font-weight: bold;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>

