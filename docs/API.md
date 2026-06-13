# StyleSync Backend API Documentation

**Base URL:** `https://api.stylesync.app/v1`

## 🔐 Authentication

All endpoints (except auth) require `Authorization: Bearer {token}` header.

Token obtained from Firebase Authentication.

---

## 👤 Auth Endpoints

### POST /auth/register
Register a new user.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "displayName": "John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "uid": "user_123",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "message": "User registered successfully"
}
```

### POST /auth/login
Login existing user.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "uid": "user_123",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "displayName": "John Doe",
    "email": "user@example.com"
  }
}
```

## 👗 Wardrobe Endpoints

### GET /wardrobe
Get all wardrobe items (paginated).

**Query Parameters:**
- `page` (default: 1)
- `limit` (default: 20, max: 100)
- `category` (optional filter)
- `color` (optional filter)
- `occasion` (optional filter)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "itemId": "item_456",
      "name": "Blue Oxford Shirt",
      "category": "shirt",
      "color": ["blue", "white"],
      "photoUrl": "gs://bucket/items/item_456",
      "style": ["casual", "formal"],
      "occasions": ["work"],
      "addedAt": "2024-01-15T10:30:00Z",
      "favorite": false,
      "wearCount": 5
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "totalPages": 3
  }
}
```

### POST /wardrobe
Add new wardrobe item.

**Request:** (multipart/form-data)
```
photo: [File]
name: "Blue Oxford Shirt"
category: "shirt"
color: ["blue", "white"]
pattern: "solid"
material: "cotton"
style: ["casual", "formal"]
occasions: ["work"]
season: ["spring", "summer"]
fitSize: "M"
```

**Response:**
```json
{
  "success": true,
  "itemId": "item_456",
  "message": "Item added successfully",
  "data": { ...item details }
}
```

### POST /wardrobe/scan
AI scan and identify clothing item from photo.

**Request:** (multipart/form-data)
```
photo: [File]
```

**Response:**
```json
{
  "success": true,
  "detectedItem": {
    "category": "shirt",
    "color": ["blue", "white"],
    "pattern": "solid",
    "material": "cotton",
    "style": ["casual", "formal"],
    "confidence": 0.92
  },
  "message": "Item detected successfully"
}
```

## 🎨 Outfit Endpoints

### GET /outfits
Get all saved outfits.

### POST /outfits
Create new outfit from items.

**Request:**
```json
{
  "name": "Business Casual Blue",
  "items": ["item_456", "item_457", "item_458"],
  "occasion": "work",
  "mood": "confident"
}
```

## 🧠 Recommendations Endpoints

### GET /recommendations
Get outfit recommendations.

**Query Parameters:**
- `mood` (optional)
- `occasion` (optional)
- `limit` (default: 5)

**Response:**
```json
{
  "success": true,
  "weather": {
    "temperature": 72,
    "condition": "sunny",
    "humidity": 45
  },
  "recommendations": [
    {
      "items": ["item_456", "item_457", "item_458"],
      "reason": "Matches your style + today's weather",
      "compatibilityScore": 0.92
    }
  ]
}
```

## 🌦️ Weather Endpoints

### GET /weather
Get current weather for user location.

**Response:**
```json
{
  "success": true,
  "weather": {
    "temperature": 72,
    "condition": "sunny",
    "humidity": 45,
    "location": "New York, USA"
  }
}
```

## ⚙️ Error Responses

All errors follow this format:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invalid request parameters"
  }
}
```