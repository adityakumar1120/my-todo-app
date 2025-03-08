const api_key = 'AIzaSyBl1SR9HQxr5zP-APDwdmvwn07Whua68DE'
const api_url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBl1SR9HQxr5zP-APDwdmvwn07Whua68DE`

// console.log(api_url);
// fetch(api_url, {
//     method : 'POST',
//     headers : {"Content-Type" : "application/json"},
//     body : JSON.stringify({
//         "contents": [{
//             "role" : "user",
//         "parts":[{"text": "Write a story about a magic backpack."}]
//         }]
//     })
// })
// .then((res) => res)
// .then((data) => {
//     console.log(data);
// })



// let prompt = 'whats the weather'
// async function getRes() {
//     let response = await fetch(api_url, {
//         method : "POST",
//         headers : {"Content-Type" : "application/json"},
//         body : JSON.stringify({
//             "contents": [{
//                 "role" : "user",
//             "parts":[{"text": prompt}]
//             }]
//         })
//     });
//     let data = await response.json();
//     console.log(data);
// }
// getRes()
