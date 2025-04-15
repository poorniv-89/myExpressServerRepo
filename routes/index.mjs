import express from 'express';

import { renderContactPage } from './renderContactPage.mjs';
import { renderFeedback } from './renderFeedback.mjs';
import { renderWelcomeMsg } from './renderWelcomeMsg.mjs';

const router = express.Router();

// Define the routes using route.get()
router.get('/contact', renderContactPage);
router.post('/feedback', renderFeedback);
router.get('/welcome/:name', renderWelcomeMsg);

export default router; 