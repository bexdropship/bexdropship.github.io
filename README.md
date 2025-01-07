# BEX Dropship Dashboard  

The **BEX Dropship Dashboard** is a frontend application built to interact with the Strapi API, designed for managing dropshipping operations efficiently. It provides an intuitive interface for handling product data, orders, and seamless communication with the backend systems.  

## Features  
- User-friendly dashboard for managing dropshipping workflows.  
- Integration with the Strapi API for real-time updates and synchronization.  
- Ability to view and manage product and order details.  
- Secure authentication and role-based access for different users.  
- Optimized for high performance and scalability.  

## Technology Stack  
- **Frontend**: Built using [React](https://reactjs.org/) (or specify if you're using another framework).  
- **Backend**: Powered by the Strapi API.  
- **Database**: MongoDB (via Strapi for storing product and order data).  

## Architecture Overview  
The **BEX Dropship** application serves as the frontend layer in the following architecture:  

1. **Odoo**: The ERP system that handles core business processes, including inventory and order management.  
2. **Strapi**: Middleware that acts as a proxy between the dashboard and Odoo, facilitating API requests.  
3. **MongoDB**: Used by Strapi to store data such as user details and dropshipping configurations.  

### Flow:  
Dropship Users → **BEX Dropship Dashboard** → Strapi → Odoo  

This architecture enables efficient dropshipping operations while minimizing licensing costs by consolidating API interactions through a single Odoo user.  

### Steps  
1. git clone git@github.com:bexsunglasses/bex-dropship-backend.git
2. cd bex-dropship-backend
3. yarn install
4. yarn dev
5. When ready to deploy: **yarn build** then **yarn deploy**
