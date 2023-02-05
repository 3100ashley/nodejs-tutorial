const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 3000;

const customers = [
    {
        "name": "Ashley",
        "industry": "music"
    },
    {
        "name": "John",
        "industry": "networking"
    },
    {
        "name": "Sal",
        "industry": "sports medicine"
    }
]

app.get("/", (req,res) => {
    res.send("hello home page")
});

app.get('/api/customers', (req, res) => {
    res.send({"customers" : customers})
});

app.post('/', (req, res) => {
    res.send("this is a post request")
});

app.post('/api/customers', (req,res) => {
    console.log(req.body)
    res.send(req.body)
})
app.listen(PORT, () => {
    console.log('App listening on port ' +  PORT)
});