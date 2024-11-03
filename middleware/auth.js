export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const user = localStorage.getItem('user');

    // Check if the user is not logged in
    if (!user && to.path !== '/login') {
      return navigateTo('/login');
    }

    // Check if the user is already logged in and trying to access the login page
    if (user && to.path === '/login') {
      return navigateTo('/'); // or redirect to another page, e.g., the home page
    }
  }
});
