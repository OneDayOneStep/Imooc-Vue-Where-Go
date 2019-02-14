let CurrentCity = '广州'
try {
  if (localStorage.CurrentCity) {
    CurrentCity = localStorage.CurrentCity
  }
} catch (e) {
  console.log(e)
}
export default {
  city: CurrentCity
}
