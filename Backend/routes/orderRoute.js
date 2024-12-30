import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderConteoller.js";
import { adminAuth } from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);

orderRouter.post("/status", adminAuth, updateStatus);

// payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

// user feature
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
