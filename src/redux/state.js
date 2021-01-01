
let KevinPicture = document.createElement("IMG");
KevinPicture.src = "https://clck.ru/ShAN3";

let state = {
    dialogsPage: {
        users: [
            { id: 1, firstName: 'Kevin', lastName: 'Shortener', picture: KevinPicture},
            { id: 2, firstName: 'John', lastName: 'Wick'},
            { id: 3, firstName: 'Rihanna', lastName: 'Grimes'},
            { id: 4, firstName: 'Stacy', lastName: 'Honk'}
        ],
        messages: [
    { id: 1, message: 'Hey', name: 'Kevin Shortener'},
    { id: 2, message: 'Whats up', name: 'Kevin Shortener'}
]
    },
    profilePage: {}
}

export default state;