# Employee Directory

A responsive Employee Directory application built with React and TypeScript.
The application fetches employee data from the Random User Generator API and
adapts its layout and navigation behavior based on the viewport size.

This project is implemented as part of a Frontend Engineer coding assessment.

---

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Random User Generator API

---

## How to Run the Project

### Prerequisites

- Node.js >= 16
- npm or yarn

### Steps

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the application

```bash
Visit http://localhost:5173 in your browser.
```

## Application Behavior

### Desktop View (viewport > 768px)

- Employees are displayed in a table layout
- Pagination is used to navigate between pages of data

### Mobile View (viewport ≤ 768px)

- Employees are displayed as a vertical card list
- Infinite scrolling is used to automatically load additional pages

---

## Architectural Decisions & Trade-offs

### State Management

React Hooks combined with custom hooks are used instead of Redux or Context.

**Reasoning:**

- The application scope is small and focused on a single feature
- All state is local to the Employee Directory feature
- No global or cross-feature state sharing is required

Using Redux or Context in this scenario would introduce unnecessary complexity.
The current structure allows easy migration to a global state solution if the
application scales in the future.

---

### Data Fetching Strategy

- API calls are encapsulated within a custom `useEmployees` hook
- Page-based fetching is used for both pagination and infinite scrolling
- A consistent API seed is applied to ensure stable data across requests

**React 18 StrictMode note:**  
In development, effects may run twice by design. To prevent duplicate API calls
(especially for infinite scrolling), fetched pages are tracked to ensure
idempotent requests.

---

### Responsive Design

- Layout switching is handled using a media query hook
- Desktop and mobile views use separate components optimized for their
  respective interaction patterns
- This avoids complex conditional logic within a single component

---

### Error Handling

- Network and API errors are handled at the data-fetching layer
- Unexpected rendering errors are handled using a global React Error Boundary
- This prevents the entire application from crashing due to UI-level errors

---

### Styling

- Tailwind CSS v4 is used for utility-first styling
- Tailwind is integrated using the official Vite plugin for a zero-config setup
- No external UI component libraries are used to keep the implementation minimal

---

### Performance Considerations

- Infinite scrolling is implemented using the IntersectionObserver API
- List-rendering components are memoized to avoid unnecessary re-renders
- Stable UUIDs provided by the API are used as React keys
