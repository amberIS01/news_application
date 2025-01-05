# News Application

A feature-rich news application built using React for the frontend, Express and Node.js for the backend, and MongoDB for the database. The app allows users to log in, view, add, and manage news articles.

## Features

- **Login System**: Simple login/logout functionality using local storage.
- **News Articles**: Display news articles fetched from the database.
- **Add Article**: Form to add new articles to the database.
- **Protected Routes**: Certain routes are accessible only to logged-in users.
- **Responsive Design**: Optimized for both desktop and mobile users.
- **Error Boundary**: Handles errors gracefully.
- **Scroll to Top**: Smooth scrolling experience.

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - CSS for styling
- **Backend**:
  - Node.js
  - Express
- **Database**:
  - MongoDB (local MongoDB instance)
- **Miscellaneous**:
  - Axios for HTTP requests
  - LocalStorage for session management
  - CORS for cross-origin requests

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally
- Basic knowledge of React and Node.js

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/news-app.git
cd news-app
```
### 2. Install Dependencies
#### Frontend
```bash
cd client
npm install
```
#### Backend
```bash
cd ../server
npm install
```
### 3. Start MongoDB
Ensure MongoDB is running on localhost:27017.

### 4. Configure Environment
No .env file is required. The MongoDB connection string is hardcoded in the backend.

### 5. Run the Application
#### Start Backend
``` bash
cd server
node index.js
```
#### Start Frontend
```bash
cd ../client
npm start
```
The app will be available at http://localhost:3000.

Folder Structure

```
news-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── server/
│   ├── models/
│   │   ├── article.js
│   ├── index.js
│   ├── package.json
├── README.md
```

### API Endpoints

#### Backend Routes
```
POST /api/articles - Add a new article
GET /api/articles - Get all articles
GET /api/articles/:id - Get a specific article by ID
DELETE /api/articles/:id - Delete an article by ID
```

### Future Enhancements
Add user authentication using JWT.
Integrate a third-party news API for fetching real-time news.
Enhance UI/UX with a modern design framework like Material-UI or Tailwind CSS.


## Screenshots:

### Login page:
![Screenshot 2025-01-04 011728](https://github.com/user-attachments/assets/34e0df18-fa93-47d7-bbd5-6e0ae5875e82)

### Home page:
![Screenshot 2025-01-04 011932](https://github.com/user-attachments/assets/ea966bf0-e571-42f3-8467-bc4260f85c6c)

### ‘Read more’ button takes users to the original news article:
![Screenshot 2025-01-04 011820](https://github.com/user-attachments/assets/f6bcea04-60ef-421a-9a60-60a10882ec6e)

### Deleting an article:
![Screenshot 2025-01-04 011830](https://github.com/user-attachments/assets/d77ad1a8-a081-4897-8d43-d8a91050a3c6)

### Adding an article:
![Screenshot 2025-01-04 011916](https://github.com/user-attachments/assets/9916eca0-1234-4c83-9f30-127b65508244)

### New article is added
![Screenshot 2025-01-04 011932](https://github.com/user-attachments/assets/484d7540-b7d8-4a36-99e8-239471af08c8)
