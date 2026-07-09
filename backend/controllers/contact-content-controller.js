import ContactContent from "../models/contact-content-model.js";

// Create new contact content (POST)
export const contactContentForm = async(req, res, next) =>{
    try {
        const response = req.body;
        await ContactContent.create(response);
        res.status(200).json({Message: 'Contact Content sent successfully'})
    } catch (error) {
        next(error);
    }
}

// Get all contact content (GET)
export const getContactContent = async (req, res, next) => {
    try {
        const contactContent = await ContactContent.find();
        res.status(200).json({
            success: true,
            data: contactContent
        });
    } catch (error) {
        next(error);
    }
}