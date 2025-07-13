# ToDoList App

פרויקט רשימת משימות (Todo List) עם React + .NET + MongoDB

---

## 🚀 איך להפעיל את הפרויקט

### Backend (שרת)

```bash
cd backend
dotnet run


Frontend (לקוח)

cd frontend
npm install
npm run dev


### config.tsx בפרונטאנד 

/**
 * IMPORTANT:
 * אל תשכחו להגדיר את כתובת ה-API כאן.
 * אפשר:
 * 1) להגדיר את המשתנה REACT_APP_API_URL בקובץ .env, לדוגמה:
 *    REACT_APP_API_URL=http://localhost:5139/api/todo
 * 2) או לשנות ישירות את כתובת ה-URL המופיעה כאן למטה.
 */

const URL: string = process.env.REACT_APP_API_URL || 'http://localhost:5139/api/todo';

export default URL;


קובץ .env (יש ליצור אותו בתיקיית frontend)

REACT_APP_API_URL=http://localhost:5139/api/todo



🚀 How to run the project
Backend (Server)
cd backend
dotnet run

Frontend (Client)
cd frontend
npm install
npm run dev


⚠️ Important!
config.tsx file in frontend

cd frontend
npm install
npm run dev

⚠️ Important!
config.tsx file in frontend
/**
 * IMPORTANT:
 * Don't forget to set your API URL here.
 * You can either:
 * 1) Set the REACT_APP_API_URL variable in your .env file, for example:
 *    REACT_APP_API_URL=http://localhost:5139/api/todo
 * 2) Or, directly change the fallback URL below.
 */

const URL: string = process.env.REACT_APP_API_URL || 'http://localhost:5139/api/todo';

export default URL;

REACT_APP_API_URL=http://localhost:5139/api/todo


