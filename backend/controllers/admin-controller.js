import Contact from "../models/contact-model.js";
import User from "../models/user-model.js";

// Controller to get all users (admin functionality)
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 }); // Exclude password field from the response
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({});
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
        }
        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

const getAllServices = async (req, res, next) => {
    try {
        return res.status(200).json({ message: "Services endpoint is under construction" });
    } catch (error) {
        next(error)
    }
}

export { getAllContacts, getAllServices, getAllUsers };

