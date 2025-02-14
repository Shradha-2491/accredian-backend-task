# RESTful APIs for Referral Form Data

## Overview
This project focuses on developing **RESTful APIs** to handle referral form data and store it in a **MySQL database**. The backend is built using **Express.js** and utilizes **Prisma ORM** for database connectivity. Additionally, an email notification feature is implemented using the **Google Mail Service API**.

## Features
### REST APIs:
- **Create Referral API** to save referral form data.
- **Retrieve Referral Data API** to fetch stored referral records.
- **Validation & Error Handling** for secure and robust API operations.

### Database Connectivity:
- Uses **Prisma ORM** for seamless interaction with a **MySQL database**.
- Implements schema validation and proper indexing for optimized queries.

### Error Handling:
- Validates request payloads to ensure all mandatory fields are provided.
- Handles database connection failures gracefully.
- Provides structured error responses for debugging.

### Email Notification:
- Sends referral emails upon successful submission.
- Uses **Google Mail Service API** for handling email delivery.
- Supports customizable email templates.

## Tech Stack
- **Node.js** (Runtime Environment)
- **Express.js** (Backend Framework)
- **Prisma ORM** (Database Management)
- **MySQL** (Relational Database)
- **Google Mail Service API** (Email Notifications)

## Installation & Setup
1. Clone the repository:
   ```sh
   https://github.com/Shradha-2491/accredian-backend-task.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=
     CORS_ORIGIN=
     DATABASE_URL=
     GMAIL_USER=
     GMAIL_PASS=
     ```
5. Run database migrations:
   ```sh
   npx prisma migrate dev
   ```
6. Start the development server:
   ```sh
   npm start
   ```

## API Endpoints
### 1. Create Referral
**Endpoint:** `POST /api/referrals`
**Description:** Saves referral form data to the database and sends an email notification.
**Request Body:**
```json
{
  "referrerName": "John Doe",
  "referrerEmail": "john@example.com",
  "refereeName": "Jane Smith",
  "refereeEmail": "jane@example.com",
  "courseName": "React.js Basics"
}
```
**Response:**
```json
{
  "message": "Referral submitted successfully!"
}
```

## Future Enhancements
- Implement authentication and authorization.
- Add rate limiting for API security.
- Integrate analytics for referral tracking.