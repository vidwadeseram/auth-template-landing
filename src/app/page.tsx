import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Nav } from "@/components/nav";

const features = [
  { title: "Core Authentication", desc: "Register, login, logout, token refresh with JWT (HS256)" },
  { title: "Email Verification", desc: "Verify-email flow with expiring tokens via SMTP" },
  { title: "Password Reset", desc: "Forgot-password / reset-password with one-time tokens" },
  { title: "RBAC", desc: "Role-based access control with permissions and admin endpoints" },
  { title: "Multi-Tenant", desc: "Tenant CRUD, member management, invitations with row/schema isolation" },
  { title: "Docker + CI", desc: "Single docker compose up, automated curl tests, GitHub Actions CI" },
];

const plans = [
  { name: "Free", price: "$0", desc: "For personal projects", features: ["Single-tenant auth", "Email verification", "Password reset"] },
  { name: "Pro", price: "$29", desc: "For growing teams", features: ["Multi-tenant support", "RBAC", "Admin dashboard", "Priority support"] },
  { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Everything in Pro", "Schema-per-tenant", "Custom integrations", "SLA"] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="container mx-auto px-4 py-24 text-center">
        <Badge variant="secondary" className="mb-4">Open Source</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Authentication Made Simple
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Production-ready auth templates for Python, Rust, and Go backends. 
          Ship secure authentication in minutes, not weeks.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/register"><Button size="lg">Get Started</Button></Link>
          <Link href="/login"><Button size="lg" variant="outline">Login</Button></Link>
        </div>
      </section>

      <Separator />

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader><CardTitle className="text-lg">{f.title}</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground">{f.desc}</p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => (
            <Card key={p.name} className={p.name === "Pro" ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">{p.price}<span className="text-sm text-muted-foreground">/mo</span></div>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground">✓ {f}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={p.name === "Pro" ? "default" : "outline"}>
                  {p.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Auth Template. MIT License.</p>
          <a href="https://github.com/vidwadeseram" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
