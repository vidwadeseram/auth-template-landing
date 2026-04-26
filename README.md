# Auth Template — Landing

Modern marketing/landing page template with authentication flows. Built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

Works with **all 6 backend auth templates** — Python, Rust, Go × single-tenant and multi-tenant.

## Features

- 🎨 **Marketing Landing Page** — Hero, features, pricing, footer sections
- 🔐 **Complete Auth Flows** — Login, register, forgot password, reset password, email verification
- 🌗 **Dark Mode** — System/theme toggle via next-themes
- 📱 **Responsive** — Mobile-first design with shadcn/ui components
- 🔗 **Backend Agnostic** — Works with any of the 6 auth backends via `NEXT_PUBLIC_API_URL`

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** + **shadcn/ui**
- **@vidwadeseram/auth-ui-shared** — Shared API client + auth hooks
- **TanStack Query v5** — Server state management
- **Sonner** — Toast notifications
- **next-themes** — Dark mode

## Getting Started

### Prerequisites

- Node.js 22+
- One of the [auth backend templates](https://github.com/vidwadeseram) running

### Installation

```bash
git clone https://github.com/vidwadeseram/auth-template-landing.git
cd auth-template-landing
npm install --legacy-peer-deps
```

### Configuration

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8001
```

Change the URL based on which backend you're using:
- `http://localhost:8001` — Python single-tenant
- `http://localhost:8002` — Python multi-tenant
- `http://localhost:8003` — Rust single-tenant
- `http://localhost:8004` — Rust multi-tenant
- `http://localhost:8005` — Go single-tenant
- `http://localhost:8006` — Go multi-tenant

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── (meta)/
│   │   ├── login/page.tsx         # Login form
│   │   ├── register/page.tsx      # Registration form
│   │   ├── forgot-password/       # Password reset request
│   │   ├── reset-password/        # Set new password
│   │   └── verify-email/          # Email verification
│   ├── layout.tsx                 # Root layout with providers
│   └── page.tsx                   # Landing page (hero/features/pricing)
├── components/
│   ├── nav.tsx                    # Navigation bar
│   ├── providers.tsx              # Auth, Query, Theme providers
│   └── ui/                        # shadcn/ui components
└── lib/
    └── utils.ts                   # Utility functions
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, pricing |
| `/login` | Email/password login |
| `/register` | New account registration |
| `/forgot-password` | Request password reset email |
| `/reset-password` | Set new password (with token) |
| `/verify-email` | Verify email address |

## Testing

```bash
# Install Playwright
npx playwright install

# Run E2E tests
npx playwright test
```

## Related Repositories

### Frontend Templates
- [auth-ui-shared](https://github.com/vidwadeseram/auth-ui-shared) — Shared npm package
- [auth-template-client](https://github.com/vidwadeseram/auth-template-client) — User dashboard
- [auth-template-admin](https://github.com/vidwadeseram/auth-template-admin) — Admin panel
- [auth-template-superadmin](https://github.com/vidwadeseram/auth-template-superadmin) — Superadmin panel

### Backend Templates
- [python-auth-template](https://github.com/vidwadeseram/python-auth-template)
- [python-multi-tenant-auth-template](https://github.com/vidwadeseram/python-multi-tenant-auth-template)
- [rust-auth-template](https://github.com/vidwadeseram/rust-auth-template)
- [rust-multi-tenant-auth-template](https://github.com/vidwadeseram/rust-multi-tenant-auth-template)
- [go-auth-template](https://github.com/vidwadeseram/go-auth-template)
- [go-multi-tenant-auth-template](https://github.com/vidwadeseram/go-multi-tenant-auth-template)

## License

MIT
