import ratelimit from "../config/upstash.js";

export const rateLimiter = async(req,res,next) =>{
    try{
        const {success} = await ratelimit.limit("my-limit-key");

        if(!success){
            return res.status(429).json({ message: "Too many requests, please try again later." });
        }
        next(); // Proceed to the next middleware or route handler
    }
    catch(error){
        console.error("Rate limiter error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}