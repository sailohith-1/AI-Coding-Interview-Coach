# AI Coding Interview Coach

An AI-powered full-stack web application that analyzes source code and provides interview-focused insights. Users can paste code snippets and receive automated language detection, code summaries, complexity analysis, optimization suggestions, and interview questions generated using Google's Gemini model.

---

## Features

- Code language detection
- Automated code summarization
- Time complexity analysis
- Space complexity analysis
- Optimization suggestions
- AI-generated interview questions
- Real-time code analysis through a simple web interface

---

## Tech Stack

### Frontend
- React.js
- JavaScript
- Fetch API

### Backend
- FastAPI
- Python
- Pydantic

### AI Integration
- Google Gemini API

---

## Project Architecture

```text
User
  ↓
React Frontend
  ↓
FastAPI REST API
  ↓
Google Gemini
  ↓
Structured JSON Response
  ↓
Frontend Display
```

---

## How It Works

1. User pastes source code into the application.
2. React sends the code to the FastAPI backend.
3. FastAPI constructs an analysis prompt and sends it to Gemini.
4. Gemini analyzes the code and returns structured JSON.
5. The frontend displays:
   - Programming Language
   - Summary
   - Time Complexity
   - Space Complexity
   - Optimization Suggestions
   - Interview Questions

---

## Example Output

### Input

```python
def add(a, b):
    return a + b
```

### Output

```json
{
  "language": "Python",
  "summary": "Returns the sum of two numbers.",
  "time_complexity": "O(1)",
  "space_complexity": "O(1)",
  "optimization_suggestion": "Already optimal.",
  "interview_questions": [
    "What are function arguments?",
    "How does Python handle parameter passing?",
    "How would you validate input types?"
  ]
}
```

---

## Project Structure

```text
ai-coding-interview-coach
│
├── backend
│   ├── main.py
│   ├── .env
│   └── venv
│
└── frontend
    ├── src
    ├── public
    ├── package.json
    └── node_modules
```

---

## Setup Instructions

### Backend

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install fastapi uvicorn python-dotenv google-genai
```

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

Run the backend:

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

### Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## Future Enhancements

- Syntax-highlighted code editor
- Analysis history storage
- User authentication
- Support for repository-level analysis
- Export analysis reports
- Difficulty-level prediction
- Topic extraction from code

---

## Author

**Sai Lohith Bhojanapalli**

- GitHub: https://github.com/sailohith-1