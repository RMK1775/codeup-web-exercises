// const myPromise = fetch(`https://api.github.com/repo/RMK1775/MiniLabs/events`, {headers: {'Authorization': 'token 93a005c8ebf1cf96fa41ee5519062a1559119144'}})
//     myPromise.then(response => console.log(response));
//     myPromise.catch(error => console.error(error));
//

// const lastDateOfCommit = username => {
//     return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization' : `token ${GITHUB_API_TOKEN}`}}).then(resp => resp.json()).then(data => {
//         console.log(data);
//         let date = ""
//         for (let datum of data) {
//             if (datum.type === "PushEvent") {
//                 date = datum.created_at;
//                 break;
//             }
//         }
//         return date;
//     }).then(date => document.getElementsByTagName("body")[0].innerText = date);
// }
//
// lastDateOfCommit("RMK1775");
//
// const wait = (time) => new Promise(resolve => setTimeout(() => {
//     resolve(`You will see this message after ${time} millisecond(s).`);
// }, time));
//
// wait(1200).then((message) => console.log(message));

let getDateLastCommit = (username) => {
    let url = `https://api.github.com/users/${username}/events/public` ;
    return fetch(url, {headers: {'Authorization': `token ${GITHUB_API_TOKEN}`}})
        .then(response => response.json())
        .then(events => events.filter(event => event.type === "PushEvent"))
        .then(pushEvents => pushEvents[0].created_at)
        .catch(err => console.error(`Something went amiss: ${err}`));
}



document.getElementById("lookitup").addEventListener("click", ()=>{
    // ev.preventDefault();
    let username = document.getElementById("username").value;
    getDateLastCommit(username)
        .then(date => {
            document.getElementById("output").innerText = date;
        })
})


const wait = (ms) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve("Hello World");
        }, ms);
    })
}

wait(3000).then((data) => console.log('You\'ll see this after 3 seconds ' + data));
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
let random = Math.floor(Math.random()*5000);
wait(random).then(() => console.log(`You'll see this after ${random / 1000} seconds!`))