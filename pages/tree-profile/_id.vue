<template>
  <div>
    <div
      v-if="isSmallScreen"
      class="container w-full grid sm:grid-cols-2 sm:flex sm:flex-col md:hidden"
    >
      <section class="order-2 px-[30px] mt-[70px] sm:w-screen">
        <h1 class="heading1 text-[32px]">
          {{ treeName }}
        </h1>
        <p class="paragraph">
          Nama Ilmiah: <span class="font-semibold">{{ sciName }}</span>
        </p>
        <p class="paragraph">
          {{ desc }}
        </p>
        <button
          class="mt-10 text-center w-full bg-[#7E7E7E] text-white text-lg p-4 mb-5 rounded-lg"
          @click="exploreOtherTrees"
        >
          Jelajahi pohon lainnya?
        </button>
      </section>

      <section class="tree relative order-1 sm:w-screen">
        <div
          class="flex snap-x snap-mandatory overflow-scroll z-10 rounded-l-[40%] ml-5"
        >
          <div class="snap-center flex-shrink-0 scale-y-95 pr-7 w-fit">
            <img src="@/assets/img/Rectangle5.svg" alt="tree-1">
          </div>
          <div class="snap-start flex-shrink-0 scale-y-95 pr-7 w-fit">
            <img src="@/assets/img/Rectangle7.svg" alt="tree-2">
          </div>
          <div class="snap-start flex-shrink-0 scale-y-95 pr-7 w-fit">
            <img src="@/assets/img/Rectangle8.svg" alt="tree-3">
          </div>
          <div class="snap-start flex-shrink-0 scale-y-95 pr-7 w-fit">
            <img src="@/assets/img/Rectangle9.svg" alt="tree-4">
          </div>
        </div>
      </section>
    </div>

    <div
      v-if="isMediumScreen"
      class="w-full h-screen flex flex-col items-center justify-center text-center"
    >
      <img
        src="@/assets/img/logo-2Asset 1@2x.png"
        class="w-24 rounded-xl"
        alt="logo-company"
      >
      <h1 class="heading1 mt-10 text-[28px]">
        We're sorry.
      </h1>
      <p class="paragraph">
        It's look like you're trying to open "Green Campus" on a desktop web.
      </p>
      <p class="paragraph">
        Due to unoptimized performance, we recommend using mobile web for a
        better experience
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TreeProfile',
  middleware: 'requireScan',
  async asyncData ({ params, $axios }) {
    try {
      // Ambil ID dari parameter URL
      const treeId = params.id

      // Panggil API untuk mendapatkan data berdasarkan ID
      const apiUrl = `https://green-campus-backend.vercel.app/api/tree/verify/${treeId}`
      const response = await $axios.get(apiUrl)

      // Kembalikan data yang diinginkan
      console.log(response.data.data.name)
      return {
        treeName: response.data.data.name,
        sciName: response.data.data.sciName,
        desc: response.data.data.description
        // Tambahkan data lainnya yang ingin ditampilkan
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      // Handle error jika diperlukan
    }
  },
  data () {
    return {
      isLargeScreen: false,
      isMediumScreen: false,
      isSmallScreen: false
    }
  },
  computed: {
    ...mapState('tree', ['validTreeSlugs'])
  },

  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize () {
      this.isLargeScreen = window.innerWidth >= 1024
      this.isMediumScreen = window.innerWidth >= 768 && window.innerWidth
      this.isSmallScreen = window.innerWidth < 768
    },
    exploreOtherTrees () {
      this.$router.push({ path: '/tree-location' })
    }
  }
}
</script>
