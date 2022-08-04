const express = require('express');
const multer = require('multer');

const app = express();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname)
    },
});

const upload = multer({ storage: fileStorageEngine });

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.post('/file', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('File Successfully Uploaded');
});

app.listen(5000, () => {
    console.log('Server Running on port 5000')
});