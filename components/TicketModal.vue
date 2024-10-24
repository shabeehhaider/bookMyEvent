<!-- TicketModal.vue -->
<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <span class="close-btn" @click="closeModal">&times;</span>
      <h3>Buy Your Event Ticket</h3>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="tickets">Number of Tickets</label>
          <input type="number" id="tickets" v-model="form.tickets" min="1" required />
        </div>
        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const form = ref({
  name: '',
  email: '',
  tickets: 1,
});

const closeModal = () => {
  isOpen.value = false;
};

const submitForm = () => {
  // Handle form submission logic here (e.g., sending data to the server)
  alert(`Tickets booked for ${form.value.name}`);
  closeModal();
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 500px;
}

.close-btn {
  font-size: 24px;
  cursor: pointer;
  float: right;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
}

button.btn {
  background-color: #331391;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
