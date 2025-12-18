Installation & Setup
1️. Clone the project
git clone https://github.com/your-repo/zomato-ish.git
cd zomato-ish
2️. Install dependencies
npm install
3️. Start JSON‑Server
npx json-server --watch mock-api/db.json --port 5000
4️. Run Vite development server
npm run dev
Your app will be live at:

http://localhost:5173

API Structure (db.json)
Example:

{
  "restaurants": [
    {
      "id": 1,
      "name": "Spice Hub",
      "cuisine": ["Indian", "Biryani"],
      "rating": 4.5,
      "deliveryTime": 30,
      "costForTwo": 400,
      "image": "https://...",
      "address": "Kochi, Kerala",
      "phone": "+91 9876543210",
      "website": "https://...",
      "description": "A cozy place for biryani lovers.",
      "menu": [
        { "id": 1, "name": "Chicken Biryani", "price": 180 },
        { "id": 2, "name": "Paneer Tikka", "price": 160 }
      ]
    }
  ]
}