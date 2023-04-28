import { Router } from 'express'
import { body, validationResult } from 'express-validator'

const router = Router()

// User routes
// router.post('/user', createUser);
// router.get('/user/:id', getUser);
// router.put('/user/:id', updateUser);
// router.delete('/user/:id', deleteUser);

// UserSettings routes
// router.get('/user/:id/settings', getUserSettings);
// router.put('/user/:id/settings', updateUserSettings);

// Partner routes
// router.post('/partner', createPartner);
// router.get('/partner/:id', getPartner);
// router.put('/partner/:id', updatePartner);
router.put('/partner/:id', body('name').isString(), (req, res) => {
    const errors = validationResult(req)
    console.log(errors)

    if(!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    }
})
// router.delete('/partner/:id', deletePartner);

// Tweet routes
// router.get('/partner/:id/tweets', getTweets);
// router.post('/partner/:id/tweets', createTweet);
// router.put('/partner/:id/tweets/:tweetId', updateTweet);
// router.delete('/partner/:id/tweets/:tweetId', deleteTweet);

// Reminder routes
// router.get('/partner/:id/reminders', getReminders);
// router.post('/partner/:id/reminders', createReminder);
// router.put('/partner/:id/reminders/:reminderId', updateReminder);
// router.delete('/partner/:id/reminders/:reminderId', deleteReminder);

// PasswordResetRequest routes
// router.post('/password-reset-request', createPasswordResetRequest);
// router.get('/password-reset-request/:id', getPasswordResetRequest);
// router.put('/password-reset-request/:id', updatePasswordResetRequest);
// router.delete('/password-reset-request/:id', deletePasswordResetRequest);


export default router