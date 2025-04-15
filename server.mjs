import express from 'express';
import router from './routes/index.mjs';  // Import the route module
import fs from 'fs';


const app = express();
const PORT = 3000 || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(router);  

app.set('view engine', 'ejs');
app.set('views', './views');



app.get('/', (req, res)=>{
    res.render('home', {
        title: 'Demo',
        heading: 'Welcome to Express Demo',
        message: 'This is a dynamic content'
    })
})

app.listen(PORT, ()=>{
    console.log(`server is running in port: ${PORT}`);
});
