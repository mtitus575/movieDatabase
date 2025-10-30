# 🎯 React Router Beginner Practice Project (80 Minutes)

> **Objective:** Build a simple **Movie Database App** that practices core React Router concepts in 80 minutes.
>
> **Focus:** Essential React Router skills, not complex features
>
> **Skill Level:** Absolute Beginner to React Router

---

## 📋 Simplified Project Overview

### **What You'll Build:**

A basic movie database with search, user authentication, and admin features.

### **Core Pages (Only 6!):**

- **Home** - Welcome page with featured movies
- **Movies** - Browse all movies with search
- **MovieDetail** - Individual movie details
- **Login** - Simple authentication
- **Dashboard** - User profile and favorites
- **NotFound** - 404 page

---

## 🗂️ Mock Data (Copy-Paste Ready)

```javascript
// src/data/mockData.js
export const movies = [
  { id: 1, title: "The Matrix", genre: "sci-fi", year: 1999, featured: true },
  { id: 2, title: "Inception", genre: "sci-fi", year: 2010, featured: true },
  {
    id: 3,
    title: "The Godfather",
    genre: "drama",
    year: 1972,
    featured: false,
  },
  { id: 4, title: "Pulp Fiction", genre: "crime", year: 1994, featured: true },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "action",
    year: 2008,
    featured: false,
  },
  { id: 6, title: "Forrest Gump", genre: "drama", year: 1994, featured: false },
];

export const users = {
  user: { password: "123", role: "user", name: "John Doe" },
  admin: { password: "123", role: "admin", name: "Admin User" },
};
```

---

## 🛣️ Route Structure (Simple)

```
/                    // Home with featured movies
/movies              // All movies with search
/movies/:id          // Movie details
/login               // Authentication
/dashboard           // Protected user area
/dashboard/admin     // Admin only (nested)
*                    // 404 page
```

---

## ⏱️ Realistic 80-Minute Timeline

### **Checkpoint 1: Setup & Basic Routes (25 mins)**

### **Checkpoint 2: Basic Movie Display (20 mins)**

### **Checkpoint 3: Simple Search (10 mins)**

### **Checkpoint 4: Basic Login (15 mins)**

### **Checkpoint 5: Bonus Features (Optional - 10 mins)**

**Total: 70-80 minutes** (much more realistic for beginners)

### **Checkpoint 1: Setup & Basic Routes (25 mins)**

**Tasks:**

- [X] Create mock data file (copy-paste provided code)
- [X] Set up BrowserRouter in main.jsx (2 line change)
- [X] Create 4 basic `page` components (simple copy-paste templates)
- [X] Add basic routes in App.jsx
- [X] Create Navigation `component` with Links

**Pre-Built Templates (Copy-Paste):**

```jsx
// src/pages/Home.jsx
function Home() {
  return <div><h1>Home Page</h1><p>Welcome to Movie DB</p></div>
}
export default Home

// src/pages/Movies.jsx
function Movies() {
  return <div><h1>Movies</h1><p>Movie list goes here</p></div>
}
export default Movies

// src/pages/Login.jsx
function Login() {
  return <div><h1>Login</h1><p>Login form goes here</p></div>
}
export default Login

// src/pages/NotFound.jsx
function NotFound() {
  return <div><h1>404 - Not Found</h1><p>Page does not exist</p></div>
}
export default NotFound

// src/components/Navigation.jsx
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/movies">Movies</Link> |
      <Link to="/login">Login</Link>
    </nav>
  )
}
export default Navigation
```

**Test:** Navigate between pages, verify 404 works

---

### **Checkpoint 2: Basic Movie Display (20 mins)**

**Tasks:**

- [X] Update Movies page to show movie list from data
- [X] Add Links to individual movies
- [X] Create MovieDetail page with useParams
- [X] Add basic navigation between pages

**Simple Code (Copy-Paste):**

```jsx
// Update src/pages/Movies.jsx
import { Link } from 'react-router-dom'
import { movies } from '../data/mockData'

function Movies() {
  return (
    <div>
      <h1>Movies</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title} ({movie.year})
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Movies

// Create src/pages/MovieDetail.jsx
import { useParams } from 'react-router-dom'
import { movies } from '../data/mockData'

function MovieDetail() {
  const { id } = useParams()
  const movie = movies.find(m => m.id === parseInt(id))

  if (!movie) return <div>Movie not found</div>

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.year}</p>
    </div>
  )
}
export default MovieDetail

// Update App.jsx - Add new route
<Route path="/movies/:id" element={<MovieDetail />} />
```

---

### **Checkpoint 3: Simple Search (10 mins)**

**Tasks:**

- [X] Add basic search to Movies page
- [X] Use useState for search input
- [X] Filter movies by title only
- [X] No URL updates needed (keep it simple)

**Simple Code:**

```jsx
// Update Movies.jsx with search
import { useState } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/mockData";

function Movies() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Movies</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies..."
      />

      {filteredMovies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title} ({movie.year})
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Movies;
```

---

### **Checkpoint 4: Basic Login (15 mins)**

**Tasks:**

- [X] Create simple login form
- [X] Add useState for username/password
- [X] Use basic if/else for authentication
- [X] Add useNavigate for redirect after login

**Simple Code:**

```jsx
// Update src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (username === "user" && password === "123") {
      alert("Login successful!");
      navigate("/movies");
    } else {
      alert("Invalid credentials. Try: user/123");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username: user"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password: 123"
        />
        <button>Login</button>
      </form>
    </div>
  );
}
export default Login;
```

---

### **Checkpoint 5: Bonus Features (Optional - 10 mins)**

**Tasks:**

- [ ] Add back button to MovieDetail
- [ ] Update Navigation to use NavLink with basic styling
- [ ] Add simple movie counter on Home page

**Simple Code:**

```jsx
// Update MovieDetail.jsx - Add back button
import { useParams, useNavigate } from 'react-router-dom'
import { movies } from '../data/mockData'

function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find(m => m.id === parseInt(id))

  if (!movie) return <div>Movie not found</div>

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{movie.title}</h1>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.year}</p>
    </div>
  )
}
export default MovieDetail

// Update Navigation.jsx - Add NavLink styling
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <NavLink to="/" style={({isActive}) => isActive ? {color: 'red'} : {}}>
        Home
      </NavLink> |
      <NavLink to="/movies" style={({isActive}) => isActive ? {color: 'red'} : {}}>
        Movies
      </NavLink> |
      <NavLink to="/login" style={({isActive}) => isActive ? {color: 'red'} : {}}>
        Login
      </NavLink>
    </nav>
  )
}
export default Navigation
```

{user.role === "admin" && <Link to="/dashboard/admin">Admin Panel</Link>}
<button onClick={onLogout}>Logout</button>
<Outlet />

</div>
);
}

````

**Test:** Login as admin/123, access admin panel

---

## ✅ Success Criteria (Beginner-Friendly)

- [ ] **Basic routing** works between Home, Movies, Login pages
- [ ] **Movie list** displays from mock data
- [ ] **Individual movie details** show when clicking links
- [ ] **Simple search** filters movies by title
- [ ] **Login form** accepts credentials and navigates
- [ ] **Navigation links** work throughout the app
- [ ] **404 handling** shows for invalid routes

## 🎯 Core React Router Concepts Covered

✅ **BrowserRouter** - App setup
✅ **Routes & Route** - Page navigation
✅ **Link** - Navigation between pages
✅ **useParams** - Dynamic movie details
✅ **useState** - Form handling and search
✅ **useNavigate** - Programmatic navigation
✅ **404 Handling** - Catch-all routes
✅ **NavLink** - Active link styling (bonus)

**Advanced concepts removed for beginner focus:**
- Layout Components with Outlet
- Nested Routes
- Route Protection
- Query Parameters
- Location State

---

## 🚀 Time-Saving Tips

1. **Don't style** - Use basic HTML elements
2. **Copy-paste** the mock data exactly
3. **Use simple forms** - Just input + button
4. **Skip validation** - Focus on routing logic
5. **Test frequently** - Verify each checkpoint works

---

## 🆘 Quick Fixes

**Routes not working?**

```jsx
// Check BrowserRouter wraps App in main.jsx
<BrowserRouter>
  <App />
</BrowserRouter>
````

**Parameters undefined?**

```jsx
// Always parseInt for numeric IDs
const movie = movies.find((m) => m.id === parseInt(id));
```

**Search not working?**

```jsx
// Check useSearchParams import
import { useSearchParams } from "react-router-dom";
```

---

**This focused approach ensures you practice every React Router concept in exactly 1 hour!** 🎯
