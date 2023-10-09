const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home page
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/reservation2.html");
});

app.post("/", function (req, res) {

    const name = req.body.name;
    const mobilenumber = req.body.mobilenumber;
    const guest = req.body.guest;
    const date = req.body.date;
    const time = req.body.time;

    formdata = name + ',' + time + ',' + mobilenumber + ',' + guest + ',' + date +  '\n';

    console.log(formdata);

    fs.appendFile('formdata.csv', formdata, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.send('Thank You, we will be waiting for you. ');

});

app.listen(3000);