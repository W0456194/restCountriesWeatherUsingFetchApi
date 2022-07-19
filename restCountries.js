// // API for get requests
// let fetchRes = fetch(
//     "https://restcountries.com/v2/{service}?fields={name},{capitol},{Latlng},{Flag},{countryCode},{region},{subregion},{population},{area},{timezones},{currencies},{languages},{borders}}");
// //https://restcountries.com/v2/all?fields=name,capital,currencies
//             // fetchRes is the promise to resolve
//             // it by using.then() method
//             fetchRes.then(res =>
//                 res.json()).then(d => {
//                     console.log(d)
//                 })


const allData = async () => {
const res = await fetch("https://restcountries.com/v2/all?fields=name,capital,currencies");
const data = await res.json();
console.log(data);
}
allData();