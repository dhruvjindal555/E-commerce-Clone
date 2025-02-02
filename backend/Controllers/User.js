const User = require('../models/User'); 

// Fetch user details by ID
exports.getUserDetails = async (req, res) => {
    try {
        const userId = req.user.id; // Get user ID from request object
        const user = await User.findById(userId).select('-password'); // Exclude password from response

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Update user details
exports.updateUserDetails = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from request object
        const updates = req.body; // Get updates from request body

        // Validate required fields if necessary
        if (!updates.fullName || !updates.email) {
            return res.status(400).json({ message: 'Full name and email are required' });
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};
