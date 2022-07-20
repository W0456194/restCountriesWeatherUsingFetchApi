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
    let response = await fetch('https://restcountries.com/v2/all?fields=name,region,capital,latlang,flag,countrycode');
    // console.log(response.status);
    // console.log(response.statusText);
    // let data;
    // if (response.status === 200) {
        let data = await response.json();
    // }
    console.log(data);
    // return data;
}
allData();
    //const data = await response.json();
    //console.log(data);
    
