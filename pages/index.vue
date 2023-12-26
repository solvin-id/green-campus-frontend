<template>
  <div>
    <h1>Selamat datang di Universitas Ahmad Dahlan..</h1>
    <button @click="exploreTheTree">
      Pindai QR Code
    </button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  methods: {
    exploreTheTree () {
      // Gantilah ini dengan ID yang diperoleh dari pemindaian QR Code
      this.$router.push('/tree-location')
    }
  }
}
</script>
