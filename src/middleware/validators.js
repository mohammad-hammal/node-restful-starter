export const SaveUser = (req, res) => {
    req.checkBody('name')
    .notEmpty()
    .withMessage('name is required');

    req.checkBody('email')
    .notEmpty()
    .withMessage('email is required');

    req.checkBody('email')
    .isEmail()
    .withMessage('email is invalid');

    req.checkBody('password')
    .notEmpty()
    .withMessage('password is required');
};
