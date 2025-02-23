import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        // required: true  // Fixed typo
    },
    title: {
        type: String,
        required: true  // Fixed typo
    },
    price: {
        type: Number,
        required: true  // Fixed typo
    },
    qty: {
        type: Number,
        required: true  // Fixed typo
    }
});

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true  // Fixed typo
    },
    items: [cartItemSchema]
}, { timestamps: true });  // Added timestamps

export const Cart = mongoose.model("Cart", cartSchema);
