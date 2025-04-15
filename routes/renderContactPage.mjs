import express from 'express';

export function renderContactPage(req, res)
{
        res.render('contact', {
            title: 'Contact here',
        heading: 'Get in touch with us!',
        message: 'Please fill out the form below to contact us.',
        link: 'https://www.google.com'
        })
}