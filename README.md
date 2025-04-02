# DRF Notes

DRF Notes is a project designed to manage and organize notes using Django Rest Framework (DRF). It provides a backend API for creating, reading, updating, and deleting notes.

## Features

- RESTful API for managing notes.
- Authentication and authorization support.
- Easy integration with frontend applications.

## Requirements

- Python 3.8+
- Django 4.0+
- Django Rest Framework 3.13+

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd drf-notes
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:
   ```bash
   python manage.py migrate
   ```

5. Run the development server:
   ```bash
   python manage.py runserver
   ```

## Usage

- Access the API at `http://127.0.0.1:8000/`.
- Use tools like Postman or cURL to interact with the API.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
