<template>
  <div>
    <div id="map-wrap" class="h-screen relative sm:hidden">
      <!-- <div v-for="treeLocation in treeLocations" :key="treeLocation.id">
        <p>{{ treeLocation.description }}</p>
      </div> -->
      <client-only>
        <l-map
          :zoom="18"
          :center="[-7.833179507309715, 110.38311848118971]"
          class="z-0"
        >
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

          <l-marker
            v-for="treeLocation in treeLocations"
            :key="treeLocation.id"
            :lat-lng="[treeLocation.lat, treeLocation.lng]"
          >
            <l-popup>
              <div>
                <section class="flex gap-2 items-center">
                  <h1 class="heading1 text-[14px] min-w-max">
                    {{ treeLocation.tree.name }}
                  </h1>
                  <h2
                    class="heading1 text-[12px] items-center border-l-2 border-black pl-2"
                  >
                    {{ treeLocation.tree.sciName }}
                  </h2>
                </section>
                <section class="mt-2 flex gap-4">
                  <div class="flex flex-col gap-y-1">
                    <p>{{ treeLocation.description }}</p>
                  </div>
                  <!-- <img :src="treeLocation.tree.image" class="w-40"> -->
                  <img src="@/assets/img/image-tree.svg" class="w-40">
                </section>
                <button
                  type="button"
                  class="px-[52px] py-[5px] paragraph bg-[#7E7E7E] rounded-md text-white items-center"
                  @click="scanQRCode()"
                >
                  Pilih
                </button>
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </client-only>
      <section
        class="z-50 fixed top-2 right-2 flex gap-2 justify-end items-center"
      >
        <button
          class="bg-[#7E7E7E] rounded-full max-w-max h-max p-1 shadow-lg"
          @click="backOneStep"
        >
          <IconLeftArrow class="" />
        </button>
        <div
          class="border border-slate-500 border-l-2 px-[13px] py-[10px] rounded-xl flex flex-col bg-[#CFCFCF] gap-y-2 bg-opacity-10 backdrop-blur-3xl"
        >
          <h1 class="heading1 text-[14px] min-w-max border-b-2 border-black">
            Jelajahi Sekitar
          </h1>
          <div class="flex flex-col w-full">
            <p class="heading1 text-[10px]">
              Pilih lokasi jelajah pohon sekitarmu
            </p>
            <p class="paragraph text-[12px]">
              Jangan batasi dirimu...
            </p>
          </div>
        </div>
      </section>
      <section
        class="absolute z-50 bottom-0 w-full bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,1)] px-10 py-5 rounded rounded-t-[50px] bg-blend-saturation flex flex-col gap-y-2"
      >
        <span class="paragraph">Pilih Kampus:</span>
        <div class="flex justify-between text-white">
          <button class="bg-[#C7C7C7] px-[17px] py-[9px] rounded-md">
            1
          </button>
          <button class="bg-[#C7C7C7] px-[17px] py-[9px] rounded-md">
            2
          </button>
          <button class="bg-[#C7C7C7] px-[17px] py-[9px] rounded-md">
            3
          </button>
          <button class="bg-[#C7C7C7] px-[17px] py-[9px] rounded-md">
            4
          </button>
          <button class="bg-[#C7C7C7] px-[17px] py-[9px] rounded-md">
            5
          </button>
          <button class="bg-[#C7C7C7] px-[17px] py-[9px] rounded-md">
            6
          </button>
        </div>
      </section>
    </div>
    <UnOptimized
      class="hidden w-full h-screen sm:flex flex-col items-center justify-center text-center"
    />
  </div>
</template>

<script>
import '~/assets/css/leaflet-popup-styles.css'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'TreeLocation',

  computed: {
    ...mapGetters('tree', ['getTree']),
    ...mapState('location', ['treeLocations'])
  },

  mounted () {
    this.getAllTree()
    // this.scanQRCode()
    const treeLocationIds = [1, 2, 3]
    this.getAllTreeLocations(treeLocationIds)
  },

  methods: {
    ...mapMutations('tree', ['setScannedTreeId', 'setScannedTreeData']),
    ...mapActions('tree', ['getAllTree']),
    ...mapActions('location', ['getAllTreeLocations']),

    backOneStep () {
      // Gantilah ini dengan ID yang diperoleh dari pemindaian QR Code
      this.$router.back()
    },
    scanQRCode () {
      // this.$router.push(`/tree-profile/${treeId}`)
      this.$router.push('/verify/goScan')
    }
  }
}
</script>
