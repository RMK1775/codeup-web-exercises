// const myPromise = fetch(`https://api.github.com/repo/RMK1775/MiniLabs/events`, {headers: {'Authorization': 'token 93a005c8ebf1cf96fa41ee5519062a1559119144'}})
//     myPromise.then(response => console.log(response));
//     myPromise.catch(error => console.error(error));
//

const lastDateOfCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization' : `token 93a005c8ebf1cf96fa41ee5519062a1559119144`}}).then(resp => resp.json()).then(data => {
        console.log(data);
        let date = ""
        for (let datum of data) {
            if (datum.type === "PushEvent") {
                date = datum.created_at;
                break;
            }
        }
        return date;
    }).then(date => document.getElementsByTagName("body")[0].innerText = date);
}

lastDateOfCommit("RMK1775");

const wait = (time) => new Promise(resolve => setTimeout(() => {
    resolve(`You will see this message after ${time} millisecond(s).`);
}, time));

wait(1200).then((message) => console.log(message));