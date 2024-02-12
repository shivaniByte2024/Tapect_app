const express = require('express');
const router = express.Router();
const cors = require('cors');
const validator = require('validator');
const bcrypt = require('bcrypt');
const qr_code = require('qrcode');
const User = require('../Models/User');


router.use(cors());

router.post('/', async (req, res) => {
    try {
        const { full_name, email, organization_name, c_password, password } = req.body;

        const generateQRCode = async (uniqueQRCodeString) => {
            try {
                const qrCodeImage = await qr_code.toDataURL(uniqueQRCodeString);
                return qrCodeImage;
            } catch (error) {
                console.error('Error generating QR code:', error);
                throw error; // Handle the error as needed
            }
        };

        function generateRandomNumber() {
            // Generate a random number between 0 and 99999
            const randomNumber = Math.floor(Math.random() * 1000000000000);

            // Format the number with leading zeros
            const formattedNumber = String(randomNumber).padStart(5, '0');

            return formattedNumber;
        }

        // Example usage
        const randomCode = generateRandomNumber();
        const uniqueQRCodeString = randomCode;

        // Validate input (You can use a validation library like 'validator')
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        if (!validator.isLength(password, { min: 6 })) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }
        // Check if the email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        if (password !== c_password) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        if (!organization_name || organization_name.trim() === '') {
            return res.status(400).json({ message: 'Organization name is required' });
        }
        // Hash the password (You can use a library like 'bcrypt')
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user instance
        generateQRCode(uniqueQRCodeString)
            .then(async (qrCodeImage) => {
                qrCodeStr = qrCodeImage;
                const newUser = new User({
                    full_name,
                    email,
                    organization_name,
                    password: hashedPassword,
                    qrCodeString: qrCodeStr,
                    unique_Qr: randomCode,
                });

                // Save the user to the database
                await newUser.save();
            })
            .catch((error) => {
                console.error('Error generating QR code:', error);
            });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;