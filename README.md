# FileSamosa

Free peer-to-peer file transfers in your browser.

---

## 🚀 Overview
FileSamosa is a privacy-first, peer-to-peer file sharing app that works directly in your browser. No file size limits, no server storage—files are transferred directly between users using WebRTC.

---

## ✨ Features
- **Peer-to-peer file transfer** (no files stored on server)
- **No login required**
- **Short and long shareable links**
- **Password-protected downloads**
- **Automatic channel expiration**
- **Terms violation reporting**
- **Modern, mobile-friendly UI**

---

## 🏗️ Architecture
- **Frontend:** React (Next.js), Tailwind CSS
- **Backend:** Next.js API routes, Redis (for channel persistence), optional Coturn for TURN relay
- **Peer-to-peer:** WebRTC (via PeerJS)
- **State management:** React Query

---

## 🛠️ Setup & Development

### 1. Clone the repo
```bash
git clone https://github.com/abhinxvz/file_samosa.git
cd file_samosa
```

### 2. Install dependencies
```bash
bun install
# or
npm install
```

### 3. Environment Variables
Create a `.env` file in the root with the following (see `.env.example` if present):
```
REDIS_URL=redis://localhost:6379/0
COTURN_ENABLED=true
TURN_HOST=your.turn.server
```
- `REDIS_URL` (**required in production!**) — URL for Redis instance (Upstash, Redis Cloud, etc.)
- `COTURN_ENABLED` — Enable TURN relay for better connectivity (optional)
- `TURN_HOST` — Hostname for your TURN server (optional)

### 4. Start Redis (locally)
```bash
docker run -p 6379:6379 redis
```

### 5. Run the app
```bash
bun run dev
# or
npm run dev
```

---

## 🏭 Production Deployment
- **Vercel/Netlify:** Set `REDIS_URL` in your environment variables for persistent channels.
- **Docker:** Use `docker compose up` for Redis and Coturn.

---

## 📦 Scripts
- `dev` — Start Next.js in development
- `build` — Build for production
- `start` — Start production server
- `test` — Run unit tests (Vitest)
- `test:e2e` — Run end-to-end tests (Playwright)
- `docker:up` — Start Redis and Coturn via Docker Compose

---

## 🧩 Key Components
- `src/app/api/create/route.ts` — Create a new channel (POST)
- `src/app/api/renew/route.ts` — Renew a channel (POST)
- `src/app/api/destroy/route.ts` — Destroy a channel (POST)
- `src/app/api/ice/route.ts` — Get ICE servers for WebRTC
- `src/channel.ts` — Channel logic (in-memory or Redis)
- `src/hooks/useUploaderChannel.ts` — Uploader channel creation/renewal
- `src/components/Downloader.tsx` — Download logic for receivers
- `src/components/WebRTCProvider.tsx` — WebRTC peer context/provider
- `src/components/ReportTermsViolationButton.tsx` — Report abuse/violation

---

## 🧑‍💻 Contributing
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push and open a pull request

---

## 📝 License
MIT

---
- Built with ❤️ using Next.js, React, PeerJS, and Redis 