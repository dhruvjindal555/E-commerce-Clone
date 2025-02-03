const User = require('../Models/UserSchema');
const Joi = require('joi');
// Define the validation schema using Joi
const userSchema = Joi.object({
    fullName: Joi.string().min(1).required().messages({
        'string.empty': 'Full name is required',
        'any.required': 'Full name is required'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Email must be a valid email address',
        'any.required': 'Email is required'
    }),
    phoneNumber: Joi.string().pattern(/^\d{10}$/).required().messages({
        'string.pattern.base': 'Phone number must be a 10-digit number',
        'any.required': 'Phone number is required'
    }),
    profileUrl: Joi.string().optional(),
    address: Joi.object({
        street: Joi.string().min(1).required().messages({
            'string.empty': 'Street address is required',
            'any.required': 'Street address is required'
        }),
        city: Joi.string().min(1).required().messages({
            'string.empty': 'City is required',
            'any.required': 'City is required'
        }),
        state: Joi.string().optional(),
        pinCode: Joi.string().pattern(/^\d{6}$/).required().messages({
            'string.pattern.base': 'Pin code must be a 6-digit number',
            'any.required': 'Pin code is required'
        }),
        country: Joi.string().min(1).required().messages({
            'string.empty': 'Country is required',
            'any.required': 'Country is required'
        })
    }).required()
});

// Fetch user details by ID
exports.getUserDetails = async (req, res) => {
    try {
        const userId = req.user.id; // Get user ID from request object
        const user = await User.findById(userId).select('-password'); // Exclude password from response

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        return res.status(200).json({ success: true, user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};
// Update user details
exports.updateUserDetails = async (req, res) => {
    try {
        const userId = req.user.id; // Get user ID from request parameters

        // Validate incoming data against the schema
        const { error } = userSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({  user: updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({  message: 'Server error' });
    }
};