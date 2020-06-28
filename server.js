const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const {
    reset
} = require('nodemon');

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json())
app.use(fileUpload());

app.post('/upload', function (req, res) {
    if (req.files != null) {
        var startup_image = req.files.foo;
        var fileName = req.body.fileName;
        let uploadList = fileName.split('|')
        for (let i = 0; i < uploadList.length - 1; i++) {
            console.log((i + 1) + ". " + uploadList[i])
            startup_image.mv(__dirname + '/images/' + uploadList[i], function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("File " + fileName + " uploaded");
                }
            })
        }
        res.json({
            result: true,
            details: "File" + fileName + " uploaded!"
        })
    }
});

app.post('/removeFile', async (req, res) => {
    let rm_path = __dirname + '\\images\\' + req.body.file_name;
    let rm = await fs.unlinkSync(rm_path);

    res.json({
        result: 'file was removed'
    });

})

app.post('/getFiles', (req, res) => {
    fs.readdir('./images', function (err, items) {
        console.log(items);

        res.json({
            res: items
        })
    });
})


app.listen(3000, () => {
    console.log('server started on port 3000')
});