import express from 'express';

export function renderFeedback(req, res){
    const userFeedback = req.body.feedback;
    res.render('feedback', {
        title: 'feedback',
        heading: 'Thanks for Your Feedback!',
        message: `You said: "${userFeedback}"`

    })
}