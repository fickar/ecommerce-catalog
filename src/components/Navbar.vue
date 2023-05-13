<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VOLIEOSE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/Product">Our Product</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
    name : 'Navbar'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
.navbar-brand{
    font-family: 'Montserrat', sans-serif;
}
.navbar{
  padding: 0 70px !important;
}
</style>