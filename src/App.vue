<template>
  <div class="grid__container__header border bg-gray-100 border-gray-500 flex justify-center items-center font-semibold text-4xl text-gray-800">
    <h1>Home microfront</h1>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
    beforeCreate() {
      if (!sessionStorage.getItem('token')) {
        window.history.pushState(null, null, '/login');
      } else {
        document.querySelector('#login').style.height = '0';
        document.querySelector('#login').style.display = 'none';
        document.querySelector('.grid__container').classList.remove('grid__container__hidden');
        if (window.location.pathname === '/login'){
          window.history.pushState(null, null, '/angularjs');
        }
      }
    },
  };
</script>

<style>
  .grid__container__header {
    grid-area: 1 / 1 / 2 / 6;
  }
</style>
