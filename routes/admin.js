const path = require('path');
const app = require('express');
const router = app.Router();

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
});

router.post('/add-product',(req,res,next) => {
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    // console.log(req.body);
    res.redirect('/');
});

module.exports = router;