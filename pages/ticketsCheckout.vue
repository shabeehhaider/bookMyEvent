<script setup>
definePageMeta({
  middleware: 'auth'
});
</script>

<template>
  <div>
    <Nav />
    <main>
      <CheckoutForm />
      <Footer />

    </main>
  </div>
</template>
