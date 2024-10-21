<template>
    <div class="container">
        <div class="box">
            <button @click="goToView1">Go to View 1</button>

            <button @click="goToView2">Go to View 2</button>

            <button @click="goToView3">Go to View 3</button>

            <button @click="goToView4">Go to View 4</button>

            <button @click="goToView5">Go to View 5</button>

            <input v-model="inputWords" placeholder="Ingresa las 5 palabras separadas por un espacio" />
            <button @click="checkWords">Comprobar</button>
            <p v-if="message">{{ message }}</p>

        </div>

    </div>


</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const secretWords = ['manzana', 'naranja', 'platano', 'pera', 'cereza']

const inputWords = ref('')
const message = ref('')

const router = useRouter()

const goToView1 = () => {
    router.push('/View1')
}

const goToView2 = () => {
    router.push('/View2')
}

const goToView3 = () => {
    router.push('/View3')
}

const goToView4 = () => {
    router.push('/View4')
}

const goToView5 = () => {
    router.push('/View5')
}

const checkWords = () => {
    const userWords = inputWords.value.trim().split(' ')

    if (userWords.length !== 5) {
        message.value = 'Debes ingresar exactamente 5 palabras'
        return
    }

    const correct = userWords.every((word, index) => word === secretWords[index])

    message.value = correct ? 'Correcto!' : 'Algunas palabras son incorrectas'
}

</script>

<style scoped>
.container {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box {
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #FF8FD3;
    border: 2px solid black;
    border-radius: 5px;
}
</style>