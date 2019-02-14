export default {
  ChangeCurrentCity (soure, city) {
    soure.city = city
    try {
      if (localStorage) {
        localStorage.CurrentCity = city
      }
    } catch (e) {
      console.log(e)
    }
  }
}
