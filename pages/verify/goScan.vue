<template>
  <div>
    <CodeScanner class="h-screen relative sm:hidden" />
    <!-- <ScanCode /> -->
    <UnOptimized
      class="hidden w-full h-screen sm:flex flex-col items-center justify-center text-center"
    />
  </div>
</template>

<script>
export default {
  name: 'QrCode'
}
</script>

<style lang="scss" scoped></style>
