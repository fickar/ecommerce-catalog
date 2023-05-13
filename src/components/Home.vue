<template>
<body>
    <header>
      <div class="hero">
        <div class="container">
          <div class="box-hero">
            <div class="box">
              <h1>
                Newest Nikes <br />
                Grab Yours
              </h1>
              <p>good price good quality</p>
              <router-link class="nav-link" to="/Product"><button>BUY</button></router-link>
            </div>
            <div class="box1">
              <img src="../assets/Nike.jpg" alt="" class="nikehome"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  </body>
    
</template>

<script>
export default {
    name : 'Home'
}
</script>

<style>



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}

body {
  background-color: #ffffff;
}

header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("../../assets/img/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.container {
  width: 80%;
  margin-inline: auto;
}

.hero {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #ffffff ;
}

.hero .box-hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  column-gap: 50px;
  align-items: center;
  justify-content: space-between;
}

.hero .box-hero .box:nth-child(1) h1 {
  color: rgb(0, 0, 0);
  font-size: 3vw;
  line-height: 1.3;
  margin-bottom: 20px;
}

.hero .box-hero .box:nth-child(1) p {
  line-height: 2;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
  font-weight: 400;
}

.hero .box-hero .box:nth-child(1) button {
  width: 180px;
  height: 50px;
  background-color: #0050b3;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

.hero .box-hero .box:nth-child(1) button:hover {
  background-color: #053e83;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
}

.hero .box-hero .box:nth-child(2) img {
  width: 100%;
}

.box{
    padding: 70px;
}

.nikehome{
    width: 100%;
}
.box h1{
    font-family: 'Archivo Black', sans-serif;
}
</style>