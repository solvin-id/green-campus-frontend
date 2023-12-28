<template>
  <div class="flex flex-col items-center h-screen justify-center gap-y-10 px-5">
    <h1 class="headingBarcode text-2xl">
      QR SCAN
    </h1>
    <div
      id="reader"
      class="w-full items-center flex flex-col justify-center max-h-min py-10 h-[50%]"
    />
  </div>
</template>

<script>
import '@/dist/html5-qrcode.min.css'
import { mapActions } from 'vuex'
import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode'
export default {
  data () {
    return {
      scanning: true // Flag untuk menentukan apakah pemindaian sedang berlangsung
    }
  },
  mounted () {
    const html5QrcodeScanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: { width: 200, height: 200 },
      // rememberLastUsedCamera: true,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    })
    html5QrcodeScanner.render(this.onScanSuccess)
  },
  methods: {
    ...mapActions('tree', ['addValidTreeSlug']),
    onScanSuccess (decodedText, decodedResult) {
      console.log(`Scan result: ${decodedText}`, decodedResult)
      const url =
        decodedText.startsWith('http://') || decodedText.startsWith('https://')
          ? decodedText
          : `http://${decodedText}`

      // Stop pemindaian
      this.scanning = false
      this.addValidTreeSlug(url)

      // Menggunakan window.location.href untuk navigasi ke URL eksternal
      window.location.href = url
      Html5QrcodeScanner.clear()
    },

    onScanError (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped></style>
