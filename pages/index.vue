<template>
  <div>
    <nav class="bg-slate-600 w-full flex py-5 px-3 fixed">
      <div class="flex gap-1">
        <span class="w-5 h-5 bg-red-600 rounded-full" />
        <span class="w-5 h-5 bg-yellow-300 rounded-full" />
        <span class="w-5 h-5 bg-green-400 rounded-full" />
      </div>
    </nav>
    <section
      class="w-full flex flex-col items-center h-screen justify-center gap-9"
    >
      <img
        src="@/assets/img/sign-emergency-code-sos_131_icon-icons.com_57207.svg"
        alt=""
      >
      <h1 class="heading1 text-base text-center">
        Maaf, Kamu Tidak Memiliki Akses Kehalaman Ini <br>Tolong Scan Kode QR
        Yang Ada Pada Pohon Terlebih Dahulu
      </h1>
      <button
        class="bg-slate-400 px-5 py-3 rounded-md heading1 text-white"
        @click="exploreTheTree"
      >
        Scan Kode QR
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  methods: {
    exploreTheTree () {
      // Gantilah ini dengan ID yang diperoleh dari pemindaian QR Code
      this.$router.push('/verify/goScan')
    }
  }
}
</script>
