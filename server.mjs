import express from 'express';

const app = express();
const PORT = 3000 || 3001;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res)=>{
    res.render('home', {
        title: 'Demo',
        heading: 'Welcome to Express Demo',
        message: 'This is a dynamic content'
    })
})
app.get('/contact', (req, res)=>{
    res.render('contact', {
        title: 'Contact here',
    heading: 'Get in touch with us!',
    message: 'Please fill out the form below to contact us.',
    link: 'https://www.google.com'
    })
})

app.post('/feedback', (req, res)=>{
    const userFeedback = req.body.feedback;
    res.render('feedback', {
        title: 'feedback',
        heading: 'Thanks for Your Feedback!',
        message: `You said: "${userFeedback}"`

    })
})


app.listen(PORT, ()=>{
    console.log(`server is running in port: ${PORT}`);
});
