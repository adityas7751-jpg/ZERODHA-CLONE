# AI Portfolio Assistant

The dashboard now includes a portfolio-aware AI assistant powered by Google Gemini. The Gemini API key stays on the backend and is never placed in React code.

## 1. Backend environment

Copy `backend/.env.example` to `backend/.env` and set:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Keep this file private and never commit it.

## 2. Start the backend

```powershell
cd backend
npm install
npm start
```

The AI endpoint is `POST http://localhost:3002/ai/chat`.

## 3. Start the dashboard

```powershell
cd dashboard
npm install
npm start
```

The React app uses `REACT_APP_API_URL` when provided; otherwise the AI assistant calls `http://localhost:3002`.

For production, set `REACT_APP_API_URL` to the deployed backend URL and redeploy the dashboard.

The assistant is designed for education and portfolio analysis. It does not guarantee returns or provide certainty about buy/sell decisions.
