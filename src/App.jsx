import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Zap,
  Shield,
  Star,
  Check,
} from "lucide-react"

/* =========================
   DATA
========================= */
const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#prices", label: "Preços" },
  { href: "#faq", label: "FAQ" },
]

const features = [
  {
    title: "Design Responsivo",
    description:
      "Layout adaptável que funciona perfeitamente em celular, tablet e desktop.",
    icon: <Sparkles className="size-10 text-fuchsia-400" />,
  },
  {
    title: "Alta Performance",
    description:
      "Páginas rápidas e otimizadas para melhorar a experiência do usuário.",
    icon: <Zap className="size-10 text-emerald-400" />,
  },
  {
    title: "Segurança",
    description:
      "Boas práticas para proteger dados e garantir navegação segura.",
    icon: <Shield className="size-10 text-sky-400" />,
  },
  {
    title: "Conversão Otimizada",
    description:
      "Elementos estratégicos para transformar visitantes em clientes.",
    icon: <Star className="size-10 text-amber-400" />,
  },
  {
    title: "Código Limpo",
    description:
      "Estrutura organizada, fácil de manter e escalar no futuro.",
    icon: <ArrowRight className="size-10 text-violet-400" />,
  },
  {
    title: "Animações Suaves",
    description:
      "Microinterações modernas que deixam o site mais profissional.",
    icon: <Sparkles className="size-10 text-pink-400" />,
  },
]

const depoimentos = [
  {
    name: "Ana Silva",
    text: "Minha landing ficou linda e converteu muito mais.",
  },
  {
    name: "Carlos Lima",
    text: "Entrega rápida e design profissional.",
  },
  {
    name: "Mariana Rocha",
    text: "Simples, moderno e eficiente.",
  },
]

/* =========================
   APP
========================= */
export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      {/* =========================
          NAVBAR
      ========================= */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha Marca</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-fuchsia-300 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE MENU
      ========================= */}
      {open && (
        <div className="fixed inset-0 z-[999] md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-80 bg-slate-900/95 border-l border-white/10 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Sparkles className="size-5 text-fuchsia-400" />
                <span className="font-semibold">Minha Marca</span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-xl hover:bg-white/10 transition"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-5 py-4 text-lg text-slate-200 hover:bg-white/10 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#prices"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition"
            >
              Começar agora <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      )}

      {/* =========================
          HERO
      ========================= */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Acelere sua presença online com uma landing{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
            simples e eficaz
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl text-slate-300"
        >
          Crie páginas modernas, rápidas e focadas em conversão com visual
          profissional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-3"
        >
          <a
            href="#prices"
            className="inline-flex items-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition"
          >
            Comece agora <ArrowRight className="size-4" />
          </a>

          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 font-medium hover:bg-white/5 transition"
          >
            Ver recursos
          </a>
        </motion.div>
      </section>

      {/* =========================
          FEATURES
      ========================= */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold">Tudo que você precisa</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-fuchsia-500/40 transition"
            >
              <div className="flex gap-3">
                {feature.icon}
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          DEPOIMENTOS
      ========================= */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold">Quem usou, aprovou</h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {depoimentos.map((dep) => (
            <blockquote
              key={dep.text}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>

              <p className="mt-3 text-slate-300">{dep.text}</p>
              <footer className="mt-3 text-sm text-slate-400">
                {dep.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* =========================
          PREÇOS
      ========================= */}
      <section id="prices" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Plano único, sem complicação
            </h2>

            <p className="mt-2 max-w-md text-slate-300">
              Acesso completo por apenas R$49/mês.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {[
                "Acesso ilimitado",
                "Suporte prioritário",
                "Atualizações constantes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <p className="text-sm text-slate-400">Plano Mensal</p>

            <p className="mt-2 text-5xl font-extrabold">
              R$49
              <span className="text-lg font-medium text-slate-400">/mês</span>
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition"
            >
              Começar agora <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center gap-2 text-sm text-slate-400">
          <span>Minha Marca © {new Date().getFullYear()}</span>
          <a href="#" className="hover:text-fuchsia-400 transition">
            Política de privacidade
          </a>
        </div>
      </footer>
    </div>
  )
}
