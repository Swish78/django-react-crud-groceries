# Django + React Groceries Item List App

This repository contains the code for a simple groceries item list app built using Django for the backend and React for the frontend. The app allows users to perform CRUD (Create, Read, Update, Delete) operations on groceries items.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete groceries items.
- **Seamless Integration**: Django backend and React frontend communicate seamlessly using Axios for HTTP requests.
- **Dynamic User Interface**: The React frontend provides a dynamic and interactive user interface for managing groceries items.

## Technologies Used

- **Django**: Python-based web framework for building the backend API.
- **Django Rest Framework (DRF)**: Toolkit for building Web APIs using Django.
- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making requests from the frontend to the backend API.

## Setup Instructions

### Backend (Django)

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:

   ```bash
   python manage.py migrate
   ```

5. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

6. The backend will be accessible at `http://localhost:8000`.

### Frontend (React)

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

4. The frontend will be accessible at `http://localhost:3000`.

## Contribution Guidelines

Contributions are welcome! Feel free to submit issues or pull requests for any improvements or additional features.

## License

This project is licensed under the [MIT License](LICENSE).
