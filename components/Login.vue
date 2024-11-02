<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
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
      <button type="submit" class="login-button">Login</button>
    </form>
    <p class="signup-link">
      Don't have an account?
      <a href="/signup">Sign up</a>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  console.log( "Logging in with:", email.value, password.value )
  try {
    const response = await axios.post('http://localhost:3002/api/auth/login/local', {
      email: email.value,
      password: password.value,
    })
    const { token, user } = response.data

      localStorage.setItem('user',  JSON.stringify( user )) // Persistent storage
      sessionStorage.setItem('accessToken', token.accessToken) // Session-only storage
      sessionStorage.setItem('refreshToken', token.refreshToken) // Session-only storage

    // Redirect to the dashboard or home page
    router.push({ path: '/' })
  } catch ( error ) {
    console.log( '---error', error );
    if (error.response && error.response.status === 401) {
      const errorData = error.response.data
      if (errorData.emailError) {
        alert('Email wasn’t found')
      } else if (errorData.passwordError) {
        alert('Password does not match')
      }
    } else {
      alert('An unexpected error occurred')
    }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9; /* Adjust if needed */
}

h2 {
  text-align: center;
  color: #333; /* Adjust if needed */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333; /* Adjust if needed */
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff; /* Replace with your button color */
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: inherit; /* Ensure font matches the theme */
}

.login-button:hover {
  background-color: #0056b3; /* Adjust for hover effect */
}

.signup-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.signup-link a {
  color: #007bff; /* Adjust to match your theme's link color */
  text-decoration: none;
  font-weight: bold;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
