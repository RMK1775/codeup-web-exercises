const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const knowsThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log("Knows 3 languages or more")
console.dir(knowsThreeLanguages);

const emailList = users.map(user => user.email)
console.log("Email Roster");
console.dir(emailList);

const yearsOfExperience = users.reduce((total, user) => {return total + user.yearsOfExperience}, 0);
let averageYrsOfXp = yearsOfExperience / users.length;
console.log("Users total years of experience: " + yearsOfExperience + "\nAverage yr.s of xp: " + averageYrsOfXp);

let longestEmail = emailList.reduce((longest, emailAddress) => (emailAddress.length > longest.length) ? emailAddress : longest, "a@codeup.com");
console.log(longestEmail);

const instructorIntro = users.reduce((message, user) => message += `${user.name}, `, "Your instructors are: ").slice(0, -2);
console.log(instructorIntro);

