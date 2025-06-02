# Perfume Blog

A modern web application for perfume enthusiasts to share reviews, discover new fragrances, and connect with other perfume lovers.

## 🚀 Features

- User authentication and profile management
- Perfume reviews and ratings
- Search functionality
- Responsive design
- Docker-based development environment

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: FastAPI
- **Database**: PostgreSQL
- **Search Engine**: Elasticsearch (optional)
- **Vector Database**: Qdrant (optional)
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

- Docker and Docker Compose
- Node.js (for local development)
- Git

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/perfume-blog.git
   cd perfume-blog
   ```

2. Start the development environment:
   ```bash
   docker-compose up -d
   ```

3. The application will be available at:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - PostgreSQL: localhost:5433

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
POSTGRES_VERSION=13
POSTGRES_DB=perfume
POSTGRES_USER=hauvo
POSTGRES_PASSWORD=hauvo
```

## 📁 Project Structure

```
perfume-blog/
├── frontend/          # React frontend application
├── webserver/         # Backend server
├── docker-compose.yml # Docker configuration
└── README.md         # Project documentation
```

## 🛠 Development

### Frontend Development
```bash
cd frontend
npm install
npm start
```

### Backend Development
- Install python version 3.9 or higher
```bash
cd webserver
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Hau Vo - voxuanhau1999@gmail.com

Project Link: [https://github.com/hauvo5999/perfume-blog](https://github.com/hauvo5999/perfume-blog)