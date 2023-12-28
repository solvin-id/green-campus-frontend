// export default function ({ redirect, route }) {
//   const { qrCode } = route.params

//   // Pemeriksaan apakah qrCode sudah tersedia atau tidak
//   if (!qrCode) {
//     return redirect('/')
//   }

//   // Jika qrCode sudah ada, lanjutkan
//   return Promise.resolve()
// }

// middleware/verifyTreeSlug.js
export default function ({ store, redirect }) {
  console.log('Middleware is running!')

  const validTreeSlugs =
    JSON.parse(localStorage.getItem('addValidTreeSlug')) || []

  console.log('Data in localStorage:', validTreeSlugs)

  if (validTreeSlugs.length === 0) {
    return redirect('/')
  }

  return Promise.resolve()
}
