<template>
  <div>
    <Nav />
    <main>
      <Login />
      <Footer />

    </main>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
});
</script>