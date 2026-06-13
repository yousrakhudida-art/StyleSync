# StyleSync Database Schema

## 🗄️ Firestore Collections

### 1. Users Collection
**Path:** `users/{userId}`

```javascript
{
  userId: "user_123",
  email: "user@example.com",
  displayName: "John Doe",
  profilePhoto: "gs://bucket/photos/user_123",
  
  // Profile Settings
  preferences: {
    stylePreference: ["casual", "formal", "sporty"],
    favoriteColors: ["blue", "black", "white"],
    notificationsEnabled: true,
  },
  
  // Avatar/Body Info
  bodyMeasurements: {
    height: "5'10\"",
    weight: 180,
    size: "M", // XS, S, M, L, XL, XXL
    bodyType: "athletic", // slim, athletic, curvy, average
  },
  
  // Location for weather
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
    city: "New York",
    country: "USA",
  },
  
  // Stats
  createdAt: Timestamp,
  updatedAt: Timestamp,
  lastLogin: Timestamp,
  
  // Preferences
  theme: "light", // light, dark
  language: "en",
}
```

### 2. Wardrobe Collection
**Path:** `users/{userId}/wardrobe/{itemId}`

```javascript
{
  itemId: "item_456",
  userId: "user_123",
  
  // Basic Info
  name: "Blue Oxford Shirt",
  category: "shirt", // shirt, pants, dress, skirt, jacket, shoes, accessories
  subcategory: "oxford", // formal, casual, etc.
  
  // Photo
  photoUrl: "gs://bucket/items/item_456",
  photoData: {
    uploadedAt: Timestamp,
    size: 2.5, // MB
  },
  
  // Attributes
  color: ["blue", "white"], // primary and secondary colors
  pattern: "solid", // solid, striped, plaid, floral, etc.
  material: "cotton", // cotton, polyester, wool, linen, etc.
  
  // Styling
  style: ["casual", "formal", "sporty", "trendy"],
  occasions: ["work", "casual", "party", "gym", "date"],
  season: ["spring", "summer", "fall", "winter"],
  
  // Condition & Fit
  condition: "good", // excellent, good, fair, needs-repair
  fitSize: "M",
  
  // Metadata
  addedAt: Timestamp,
  lastWornAt: Timestamp,
  wearCount: 12,
  favorite: false,
  archived: false,
  
  // Tags for easy search
  tags: ["office", "casual-friday", "comfortable"],
}
```

### 3. Outfits Collection
**Path:** `users/{userId}/outfits/{outfitId}`

```javascript
{
  outfitId: "outfit_789",
  userId: "user_123",
  
  // Outfit Composition
  items: [
    { itemId: "item_456", category: "shirt" },
    { itemId: "item_457", category: "pants" },
    { itemId: "item_458", category: "shoes" },
  ],
  
  // Details
  name: "Business Casual Blue",
  description: "Perfect for casual Friday at the office",
  
  // Context
  occasion: "work",
  mood: "confident",
  weatherConditions: {
    temperature: 72,
    condition: "sunny",
    humidity: 45,
  },
  season: "spring",
  
  // Visualization
  outfitImage: "gs://bucket/outfits/outfit_789", // Rendered image
  avatarPreview: "gs://bucket/avatars/outfit_789_preview",
  
  // Metadata
  createdAt: Timestamp,
  usedCount: 3,
  lastUsedAt: Timestamp,
  favorite: true,
  archived: false,
  rating: 4.5, // User's rating
  
  // Tags
  tags: ["office", "spring", "casual-friday"],
}
```

## 🔐 Security Rules

```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
      
      match /{document=**} {
        allow read, write: if request.auth.uid == userId;
      }
    }
    
    // Public analytics (read-only)
    match /ml/recommendationModel/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth.token.admin == true;
    }
  }
}
```

## 📊 Indexes

**Composite Indexes:**

1. **Wardrobe queries**
   - Collection: `wardrobe`
   - Fields: `userId` (Asc), `category` (Asc), `occasion` (Asc)

2. **Outfit history**
   - Collection: `outfitHistory`
   - Fields: `userId` (Asc), `wornAt` (Desc)

3. **Recommendations**
   - Collection: `recommendations`
   - Fields: `userId` (Asc), `generatedAt` (Desc)