Todo Calendar Application
---
A full-stack Todo Calendar web application built using Django, SQLite, and modern HTML, CSS, and JavaScript.
This project allows users to manage tasks efficiently by selecting dates from a dynamic calendar and assigning priorities and time slots to each task.

🚀 Features
--
Interactive 12-Month Calendar (2026)
Month-wise navigation (January to December)
Date selection directly from the calendar

📝 Task Management
--
Add tasks with title, time, and priority
Priority levels: High, Medium, Low
Delete completed or expired tasks

💾 Persistent Storage
--
All tasks are stored in SQLite database

🧭 Clean UI Layout
--
Top navigation bar
Left panel: Large calendar view
Right panel: Task creation and task list

⚡ Backend + Frontend Integration
--
Django handles routing, views, and database
Frontend communicates seamlessly with backend

🛠 Tech Stack
Layer	Technology
Backend	Django
Database	SQLite
Frontend	HTML, CSS, JavaScript
IDE	Visual Studio Code
Language	Python 3

📂 Project Structure
--

todo_calendar/
│
├── tasks/
│   ├── migrations/
│   ├── templates/
│   │  
└── tasks/
│   │       └── index.html
│   
├── static/
│   │   ├── style.css
│   │   └── calendar.js
│   
├── models.py
│   ├── views.py
│   ├── urls.py
│

├── todo_calendar/
│   ├── settings.py
│   ├── urls.py
│

├── db.sqlite3
├── manage.py
└── README.md

⚙️ Setup & Installation
---
1️. Clone the repository
git clone <your-github-repo-url>
cd todo_calendar

2️. Create and activate virtual environment
python -m venv venv
venv\Scripts\activate

3️. Install dependencies
pip install django

4️. Run database migrations
python manage.py makemigrations
python manage.py migrate

5️. Start the server
python manage.py runserver

6️. Open in browser
http://127.0.0.1:8000/

📸 UI Overview
---
Top Bar: Application title (Todo Calendar)
Left Panel: Large monthly calendar with navigation
Right Panel: Task input form and task list

🔮 Future Enhancements
---
User authentication (per-user tasks)
Highlight calendar dates with tasks
Disable past dates
Edit/update tasks
REST API integration
Mobile-responsive UI

📌 Use Case
---
This project is ideal for:
Learning Django full-stack development
Demonstrating frontend–backend integration
Portfolio projects for beginners/intermediate developers
Understanding calendar-based task management systems

