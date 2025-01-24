import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

export const stripe = new Stripe(process.env.Stripe_secret_key);.