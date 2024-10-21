<template>
  <body>
    <div class="box">

      <h3>La palabra secreta es:</h3>
      <p>cereza</p>

      <button>
        <RouterLink to="/">Go to Home</RouterLink>
      </button>

    </div>
  </body>
</template>

<style scoped>
body{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

  
}
.box {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 500px;
  height: 200px;
  background-color: #FF8FD3;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

</style>