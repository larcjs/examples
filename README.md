# LARC Examples

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Examples](https://img.shields.io/badge/examples-30+-blue.svg)](examples/)
[![Apps](https://img.shields.io/badge/demo--apps-5-green.svg)](apps/)

> **Comprehensive examples and demo applications** for the LARC/PAN messaging system

This repository contains a complete collection of examples, tutorials, and full-featured demo applications demonstrating the capabilities of the LARC (Lightweight Asynchronous Relay Core) framework.

## 📚 What's Inside

### 🎓 Examples (`/examples`)
30+ progressive examples from basic concepts to advanced patterns:

1. **[00-intro.html](examples/00-intro.html)** - Introduction to PAN concepts
2. **[01-hello.html](examples/01-hello.html)** - Hello World with PAN
3. **[02-todos-and-inspector.html](examples/02-todos-and-inspector.html)** - Simple todo app with debugging
4. **[03-broadcastchannel.html](examples/03-broadcastchannel.html)** - Cross-tab communication
5. **[04-react-wrapper.html](examples/04-react-wrapper.html)** - Integration with React
6. **[05-lit-wrapper.html](examples/05-lit-wrapper.html)** - Integration with Lit
7. **[06-crud.html](examples/06-crud.html)** - Basic CRUD operations
8. **[07-rest-connector.html](examples/07-rest-connector.html)** - REST API integration
9. **[08-workers.html](examples/08-workers.html)** - Web Workers with PAN
10. **[09-schema-form.html](examples/09-schema-form.html)** - JSON Schema forms
11. **[10-sse-store.html](examples/10-sse-store.html)** - Server-Sent Events
12. **[11-graphql-connector.html](examples/11-graphql-connector.html)** - GraphQL integration
13. **[12-php-connector.html](examples/12-php-connector.html)** - PHP backend integration
14. **[13-sse-pan.html](examples/13-sse-pan.html)** - SSE with PAN messaging
15. **[14-forwarder.html](examples/14-forwarder.html)** - Message forwarding patterns
16. **[15-router.html](examples/15-router.html)** - Client-side routing
17. **[16-websocket.html](examples/16-websocket.html)** - WebSocket integration
18. **[17-enhanced-security.html](examples/17-enhanced-security.html)** - Security features
19. **[17-indexeddb.html](examples/17-indexeddb.html)** - IndexedDB integration
20. **[18-jwt-auth.html](examples/18-jwt-auth.html)** - JWT authentication
21. **[18-typescript-usage.ts](examples/18-typescript-usage.ts)** - TypeScript examples

...and more!

### 🚀 Demo Applications (`/apps`)

Full-featured applications showcasing real-world usage:

#### 1. **Contact Manager** (`/apps/contact-manager`)
Complete contact management system with CRUD operations.

**Features:**
- Add, edit, delete contacts
- Search and filtering
- Persistent storage
- Responsive UI

#### 2. **Invoice Studio** (`/apps/invoice-studio`)
Professional invoice creation and management application.

**Features:**
- Create and edit invoices
- Line item management
- PDF export
- Client database
- Invoice templates

#### 3. **Data Browser** (`/apps/data-browser`)
Generic data browsing and editing interface.

**Features:**
- Connect to any data source
- Grid view with sorting/filtering
- Inline editing
- Export capabilities

#### 4. **Markdown Notes** (`/apps/markdown-notes`)
Simple note-taking app with Markdown support.

**Features:**
- Real-time Markdown preview
- Note organization
- Local storage
- Export to HTML/PDF

#### 5. **Invoice App** (`/apps/invoice`)
Streamlined invoice creation tool.

**Features:**
- Quick invoice generation
- Client management
- Product catalog
- Payment tracking

---

## 🚀 Quick Start

### Running Examples Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/larcjs/larc-examples.git
   cd larc-examples
   ```

2. **Install dependencies (optional):**
   ```bash
   npm install
   ```

3. **Start a local server:**
   ```bash
   npm run dev
   # or use any static server
   # python3 -m http.server 8000
   # npx serve
   ```

4. **Open in browser:**
   ```
   http://localhost:8000/examples/
   http://localhost:8000/apps/
   ```

### Running with CDN (No Installation)

Most examples work directly with CDN links:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script type="module" src="https://unpkg.com/@larcjs/core/src/pan.js"></script>
</head>
<body>
  <!-- Your PAN components here -->
</body>
</html>
```

---

## 📖 Learning Path

### Beginner (Start Here)
1. [00-intro.html](examples/00-intro.html) - Understand PAN concepts
2. [01-hello.html](examples/01-hello.html) - First PAN app
3. [02-todos-and-inspector.html](examples/02-todos-and-inspector.html) - Learn debugging
4. [06-crud.html](examples/06-crud.html) - Basic data operations

### Intermediate
1. [07-rest-connector.html](examples/07-rest-connector.html) - Connect to APIs
2. [09-schema-form.html](examples/09-schema-form.html) - Dynamic forms
3. [15-router.html](examples/15-router.html) - Add routing
4. [Contact Manager](apps/contact-manager/) - Real app example

### Advanced
1. [08-workers.html](examples/08-workers.html) - Offload work to workers
2. [11-graphql-connector.html](examples/11-graphql-connector.html) - GraphQL
3. [17-enhanced-security.html](examples/17-enhanced-security.html) - Security patterns
4. [18-jwt-auth.html](examples/18-jwt-auth.html) - Authentication
5. [Invoice Studio](apps/invoice-studio/) - Complex application

---

## 🔧 Backend Setup (Optional)

Some examples require backend services:

### PHP Backend

1. **Requirements:**
   - PHP 7.4+
   - SQLite or MySQL

2. **Setup:**
   ```bash
   cd apps
   php -S localhost:8080
   ```

3. **Database:**
   ```bash
   # Initialize demo database
   sqlite3 pan_demo.db < setup-demo-db.sqlite.sql
   ```

### Node.js Backend (Coming Soon)

Node/Express alternatives for PHP examples.

---

## 📂 Repository Structure

```
larc-examples/
├── examples/               # Progressive examples (00-18)
│   ├── 00-intro.html
│   ├── 01-hello.html
│   ├── ...
│   ├── index.html         # Examples index page
│   └── assets/            # Shared assets
│
├── apps/                  # Full demo applications
│   ├── contact-manager/
│   ├── invoice-studio/
│   ├── data-browser/
│   ├── markdown-notes/
│   ├── invoice/
│   ├── api.php           # Shared backend API
│   └── README.md         # Apps documentation
│
├── test-*.html           # Manual test pages
├── auth.php              # Authentication backend
├── sse.php               # Server-Sent Events endpoint
└── api-legacy.php        # Legacy API (for reference)
```

---

## 🎯 Example Categories

### By Topic

**Core Concepts:**
- 00-intro, 01-hello, 02-todos-and-inspector

**Data Management:**
- 06-crud, 07-rest-connector, 09-schema-form, 17-indexeddb

**Real-Time Communication:**
- 10-sse-store, 13-sse-pan, 16-websocket

**Framework Integration:**
- 04-react-wrapper, 05-lit-wrapper

**Advanced Patterns:**
- 08-workers, 14-forwarder, 15-router

**Security & Auth:**
- 17-enhanced-security, 18-jwt-auth

### By Difficulty

**Easy:** 00-03, 06
**Medium:** 04-05, 07, 09-10, 15
**Advanced:** 08, 11-14, 16-18

---

## 🛠️ Using Examples as Templates

Each example is self-contained and can serve as a template:

1. **Copy the example file**
2. **Modify for your use case**
3. **Update topic names and data structures**
4. **Add your business logic**

Example:

```bash
# Start from CRUD example
cp examples/06-crud.html my-app.html

# Customize for your data model
# Edit topic names: "items.*" → "products.*"
# Update schema to match your data
```

---

## 🧪 Testing

Run tests for examples:

```bash
npm test
```

Individual example tests:

```bash
npm run test:example -- 06-crud
```

---

## 📋 Requirements

### Browser Requirements
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Optional Backend Requirements
- PHP 7.4+ (for PHP examples)
- SQLite or MySQL (for database examples)
- Node.js 16+ (for build tools)

---

## 🔗 Related Packages

- **[@larcjs/core](https://github.com/larcjs/larc-core)** — Core PAN messaging bus
- **[@larcjs/components](https://github.com/larcjs/larc-components)** — UI components library
- **[@larcjs/devtools](https://github.com/larcjs/larc-devtools)** — Chrome DevTools extension
- **[@larcjs/site](https://github.com/larcjs/larc-site)** — Documentation website

---

## 💡 Contributing

Have a great example to share?

1. Fork the repository
2. Add your example to `examples/` or `apps/`
3. Follow naming convention: `XX-descriptive-name.html`
4. Include comments explaining key concepts
5. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT © Chris Robison

---

## 🆘 Support

- 📖 [Documentation](https://larcjs.github.io/larc-site/)
- 💬 [Discussions](https://github.com/larcjs/larc-examples/discussions)
- 🐛 [Issue Tracker](https://github.com/larcjs/larc-examples/issues)
- 📧 [Email Support](mailto:support@larc.dev)

---

## 🎉 Explore & Learn

Start with [examples/00-intro.html](examples/00-intro.html) and work your way up!

Each example builds on previous concepts, providing a comprehensive learning path for mastering LARC/PAN development.

**Happy coding!** 🚀
