const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const loginList = []
const usersList = []

app.post('/register', (req, res) => {
    const {login,password} = req.body
    let message = 'register - success'

    switch (true) {
        case loginList.includes(login):
            message = 'use another login name'
            break;

        case !password:
            message = 'use another login password'
            break;
    
        default:
            usersList.push({
                login,
                password
            })
            loginList.push(login)
            break;
    }

    res.send({
        description: message,
        users: usersList
    })
    
});

// app.post('/login', (req, res) => {
//     const name = 'name'
//     console.log('HELLO')

//     res.send(
//         {
//         description: `${req.body.name}`,
//         value: books
//     });
// });

app.post('/login', (req, res) => {
    const {login,password} = req.body
    const indexOfUser = usersList.map(el => el.login).indexOf(login);

    let message = 'login - success'
    let isLogin = indexOfUser && usersList[indexOfUser].password === password


    if(isLogin){
        res.send({
            description: 'login - success'
        })
    }
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));