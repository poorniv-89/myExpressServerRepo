import express from 'express';

export function renderWelcomeMsg(req, res)
{
    const {name} = req.params;
    console.log({name});
    res.render('feedback', {
        title: 'welcome message',
        heading: `hello ${name}`,
        message: `welcome to our site, ${name}`
    })
}