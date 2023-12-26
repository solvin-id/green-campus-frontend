<template>
  <div>
    <div id="map-wrap" class="h-screen relative sm:hidden">
      <client-only>
        <l-map
          :zoom="18"
          :center="[-7.833179507309715, 110.38311848118971]"
          class="z-0"
        >
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

          //ANCHOR - Mangga
          <l-marker :lat-lng="[-7.833461704838198, 110.38324415567656]">
            <l-popup class="">
              <div>
                <section class="flex gap-2 items-center">
                  <h1 class="heading1 text-[14px] min-w-max">
                    Pohon Mangga
                  </h1>
                  <h2
                    class="heading1 text-[12px] items-center border-l-2 border-black pl-2"
                  >
                    Nama Ilimiah..
                  </h2>
                </section>
                <section class="mt-2 flex gap-4">
                  <div class="flex flex-col gap-y-1">
                    <span class="paragraph">Pohon berada di:</span>
                    <span class="paragraph">1. Sebelah timur kolam ikan</span>
                    <span class="paragraph">2. Pohon menjulang tinggi</span>
                    <span class="paragraph">3. Berada dipaling ujung timur</span>
                  </div>
                  <img src="@/assets/img/image-tree.svg" class="w-40">
                </section>
                <button
                  type="button"
                  class="px-[52px] py-[5px] paragraph bg-[#7E7E7E] rounded-md text-white items-center"
                  @click="scanQRCode('Mangga')"
                >
                  Pilih
                </button>
              </div>
            </l-popup>
          </l-marker>

          //ANCHOR - Jeruk
          <l-marker :lat-lng="[-7.833509426168886, 110.38288136900373]">
            <l-popup class="">
              <div>
                <section class="flex gap-2 items-center">
                  <h1 class="heading1 text-[14px] min-w-max">
                    Pohon Jeruk
                  </h1>
                  <h2
                    class="heading1 text-[12px] items-center border-l-2 border-black pl-2"
                  >
                    Nama Ilimiah..
                  </h2>
                </section>
                <section class="mt-2 flex gap-4">
                  <div class="flex flex-col gap-y-1">
                    <span class="paragraph">Pohon berada di:</span>
                    <span class="paragraph">1. Sebelah timur kolam ikan</span>
                    <span class="paragraph">2. Pohon menjulang tinggi</span>
                    <span class="paragraph">3. Berada dipaling ujung timur</span>
                  </div>
                  <img src="@/assets/img/image-tree.svg" class="w-40">
                </section>
                <button
                  type="button"
                  class="px-[52px] py-[5px] paragraph bg-[#7E7E7E] rounded-md text-white items-center"
                  @click="scanQRCode('Jeruk')"
                >
                  Pilih
                </button>
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </client-only>
      <section
        class="w-full z-50 fixed top-2 right-2 flex gap-2 justify-end items-center"
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
export default {
  name: 'TreeLocation',

  methods: {
    backOneStep () {
      // Gantilah ini dengan ID yang diperoleh dari pemindaian QR Code
      this.$router.back()
    },
    scanQRCode (treeId) {
      this.$router.push(`/tree-profile/${treeId}`)
    }
  }
}
</script>
