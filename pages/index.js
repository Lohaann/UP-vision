export default function GlowUpLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-black to-black blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm mb-6">
            🚀 Método UP Vision
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Faça Seu <span className="text-green-400">Glow Up</span>
            <br />
            no Digital
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Aprenda como começar na Kiwify, crescer no marketing digital e criar sua primeira renda online mesmo começando do zero.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl text-black font-bold text-lg shadow-2xl shadow-green-500/30">
              QUERO COMEÇAR
            </button>

            <button className="border border-zinc-700 hover:border-green-400 transition px-8 py-4 rounded-2xl text-white font-semibold">
              VER MAIS
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            O que você vai aprender
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Estratégias simples, modernas e práticas para crescer no digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Estrutura Kiwify',
              desc: 'Aprenda a configurar tudo corretamente para começar rápido.'
            },
            {
              title: 'Vendas no TikTok',
              desc: 'Métodos virais para divulgar produtos e atrair pessoas.'
            },
            {
              title: 'Mentalidade Glow Up',
              desc: 'Desenvolva disciplina e visão para crescer online.'
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500/50 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-2xl mb-6">
                ✨
              </div>

              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight mb-6">
              Seu resultado começa
              <span className="text-green-400"> agora.</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Enquanto muitos apenas assistem outras pessoas crescerem na internet,
              você pode começar hoje e construir sua própria evolução digital.
            </p>

            <ul className="space-y-4 text-zinc-300">
              <li>✅ Acesso imediato</li>
              <li>✅ Estratégias práticas</li>
              <li>✅ Método simples</li>
              <li>✅ Atualizações futuras</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-zinc-900 border border-green-500/20 rounded-[2rem] p-10 text-center shadow-2xl shadow-green-500/10">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-3xl font-bold mb-4">Glow Up</h3>
            <p className="text-zinc-300 mb-8">
              Transforme sua mentalidade, presença online e renda através do marketing digital.
            </p>

            <button className="w-full bg-green-500 hover:bg-green-400 transition text-black font-black py-4 rounded-2xl text-lg">
              ENTRAR AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-zinc-500 text-sm">
        © 2026 UP Vision — Criado por Lucas. Todos os direitos reservados.
      </footer>
    </div>
  )
}
