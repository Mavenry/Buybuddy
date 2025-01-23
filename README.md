ALX Webstack portfolio Project-
Buyverse

**Overview** 
This is a fully functional e-commerce platform developed as a student project. It integrates robust backend services, an interactive frontend, and essential third-party APIs to deliver a seamless online shopping experience.  

Collaborators
- Sunday Bukola Tijesuni  
- Rabia Aminu Ahmad 

---

## **Features**  
### **Core Functionality**  
- 📝 **User Signup & Login**  
- 🛒 **Shopping Cart**  
- 💳 **Stripe Payment Integration**  
- 🏷️ **Coupon Code System**  
- 📦 **Product and Category Management**  

### **Admin Dashboard**  
- 👑 **Admin Panel for Managing Products, Categories, and Orders**  
- 📊 **Sales Analytics**  

### **Performance & Security
Caching with Redis 
JWT-Based Authentication with Access/Refresh Tokens**  
Secure Data Handling  

Design  
Built with React.js and styled using Tailwind CSS.  

Tech Stack  
React.js      Frontend development for dynamic and interactive UIs. 
Node.js        Backend logic and API management.                 
MongoDB        Database for dynamic data storage.                
Redis          In-memory caching for faster performance.         
Stripe         Secure payment handling.                          
Cloudinary     Image upload and optimization.                    
Tailwind CSS   CSS framework for responsive UI design.          

Setup and Installation
Prerequisites
Node.js  
MongoDB and Redis installed or accessible as a service  
Stripe and Cloudinary API keys  

Environment Variables  
Create a `.env` file in the root directory with the following keys:  
```env
PORT=5000
MONGO_URI=your_mongo_uri
UPSTASH_REDIS_URL=your_redis_url
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Installation Steps  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-repo/Buyverse.git
   cd Buyverse
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Build the frontend:  
   ```bash
   npm run build
   ```  
4. Start the server:  
   ```bash
   npm run start
   ```

---
**Link to Demo Video**
https://youtu.be/9h2erMfTv8A?si=BU4HbKNuGkyN73Zk

## **Development Process**
### **Architecture**  
- **Frontend:** React.js for the user interface.  
- **Backend:** Node.js with Express.js for business logic.  
- Database Layer: MongoDB and Redis.  

### **Third-Party Integrations**  
- Stripe: Payment gateway for secure checkout.  
- Cloudinary: Image management and optimization.  
- Redis: Session caching and performance optimization.

Successes
- Seamless integration of multiple technologies.  
- Efficient caching and secure payment implementation.  
- Comprehensive admin panel for managing the platform.
- 
Challenges
- Optimizing API performance for high data loads.  
- Managing complex state in the shopping cart.  

Improvements
- Add wishlist functionality for users.  
- Implement email notifications for orders and events.  
- Enhance the admin dashboard with more detailed analytics.

Lessons Learned
- Importance of modular architecture for scalability.  
- Benefits of caching for performance.  

---

Next Steps
- Deploy the application on a cloud platform.  
- Add multi-language and multi-currency support.  


 License
This project is licensed under the [MIT License](LICENSE).  

Contributors
- Sunday Bukola Tijesuni  
- Rabia Aminu Ahmad

Acknowledgments
Thanks to the open-source community for libraries and tools used in this project.  
