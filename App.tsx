import React, { useState } from 'react';
import { 
  Crosshair, 
  Zap, 
  ShieldCheck, 
  Brain, 
  X, 
  CheckCircle2, 
  Target,
  Gem,
  Gift,
  Crown,
  AlertTriangle,
  ArrowRight,
  Play
} from 'lucide-react';
import { CtaButton } from './components/CtaButton';
import { Accordion } from './components/Accordion';
import { TestimonialCard } from './components/TestimonialCard';
import { FaqItem, TestimonialItem } from './types';

// Data
const faqs: FaqItem[] = [
  {
    question: "Funciona em Android e iOS?",
    answer: "Sim! Nosso painel é 100% compatível tanto com dispositivos Android quanto iPhones (iOS), sem necessidade de configurações complexas."
  },
  {
    question: "Precisa de root ou jailbreak?",
    answer: "Não. O método é totalmente seguro e não requer acesso root ou jailbreak no seu aparelho. É baixar e configurar."
  },
  {
    question: "Posso ser banido?",
    answer: "Nosso método foca em sensibilidade e otimização do dispositivo, não alterando os arquivos do jogo. Portanto, o risco é zero se usado conforme as instruções."
  },
  {
    question: "Como funciona o sorteio da conta?",
    answer: "Ao adquirir o Plano Premium, seu nome entra automaticamente na lista do sorteio da conta com o 1º Passe de Elite. O resultado é divulgado semanalmente no grupo VIP."
  },
  {
    question: "Em quanto tempo recebo acesso?",
    answer: "Imediatamente. Assim que o pagamento for confirmado, você recebe o acesso ao painel e tutoriais no seu e-mail."
  }
];

const testimonials: TestimonialItem[] = [
  { name: "Gabriel S.", quote: "Mano, comecei a dar capa na primeira partida. A diferença na sensibilidade é absurda.", avatarInitials: "GS" },
  { name: "Lucas P.", quote: "Peguei o plano Premium pelos dimas e acabei subindo pra Mestre com o painel. Top demais.", avatarInitials: "LP" },
  { name: "Matheus R.", quote: "Agora sim meu boneco respeita. Subi pra Mestre em 3 dias usando essa config.", avatarInitials: "MR" }
];

const painPoints = [
  "Mira no inimigo e só sai tiro no peito",
  "Perde x1 mesmo atirando primeiro",
  "Vê outros players dando capa fácil",
  "Sente que o jogo está injusto com você"
];

function App() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Links de Checkout Configurados
  const VIMEO_VIDEO_ID = "1154491028"; 
  const CHECKOUT_BASIC = "https://pay.sunize.com.br/WQuMtwwr";     // R$ 9,90 (Link de recusa)
  const CHECKOUT_PREMIUM = "https://pay.sunize.com.br/bATaKhuX";   // R$ 19,90 (Link direto)
  const CHECKOUT_UPGRADE = "https://pay.sunize.com.br/bIAmBkvM";   // R$ 13,90 (Promoção no modal)

  const scrollToCheckout = () => {
    const section = document.getElementById('checkout');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBasicPlanClick = () => {
    setShowUpgradeModal(true);
  };

  const handleCloseModal = () => {
    setShowUpgradeModal(false);
    // Redireciona para o checkout Básico (R$ 9,90) ao recusar
    window.location.href = CHECKOUT_BASIC;
  };

  const handleAcceptUpgrade = () => {
    // Redireciona para o checkout da Promoção (R$ 13,90) ao aceitar
    window.location.href = CHECKOUT_UPGRADE;
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-red-900 selection:text-white overflow-x-hidden">
      
      {/* Background Texture/Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black opacity-80"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      {/* UPGRADE MODAL - CLEAN & RESPONSIVE */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
          {/* Overlay Escuro */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => setShowUpgradeModal(false)}></div>
          
          <div className="relative w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-[scaleIn_0.3s_ease-out]">
            
            {/* Header Simples */}
            <div className="bg-zinc-950 p-4 text-center border-b border-zinc-800">
              <h3 className="text-red-500 font-bold text-lg uppercase flex items-center justify-center gap-2 tracking-widest">
                <AlertTriangle className="w-5 h-5" />
                Atenção
              </h3>
            </div>

            <div className="p-5 flex flex-col gap-4">
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-1">
                  Leve o Premium por + R$ 4,00
                </h4>
                <p className="text-zinc-400 text-sm">
                  Oferta única selecionada para seu IP.
                </p>
              </div>

              {/* Box de Comparação Simplificado */}
              <div className="bg-zinc-950/80 rounded-xl p-4 border border-zinc-800 flex flex-col gap-3">
                <div className="flex justify-between items-center text-zinc-500 text-sm line-through">
                  <span>Premium Normal</span>
                  <span>R$ 19,90</span>
                </div>
                
                <div className="flex justify-between items-center border-t border-zinc-800 pt-3">
                  <span className="text-white font-bold flex items-center gap-2">
                    <Gem className="w-4 h-4 text-red-500" />
                    Seu Preço Hoje
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-white">R$ 13,90</span>
                    <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Desconto Aplicado</span>
                  </div>
                </div>
              </div>

              {/* Lista de Vantagens Compacta */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  <span>Painel VIP Completo</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Gift className="w-4 h-4 text-red-600" />
                  <span>Bônus: 500 Diamantes</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Crown className="w-4 h-4 text-red-600" />
                  <span>Sorteio Conta Rara</span>
                </div>
              </div>

              {/* Botão de Aceite */}
              <button 
                onClick={handleAcceptUpgrade}
                className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] mt-2 group"
              >
                QUERO PREMIUM POR R$ 13,90
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Link de Recusa */}
              <button 
                onClick={handleCloseModal}
                className="text-zinc-400 text-sm text-center font-medium hover:text-white underline decoration-zinc-600 underline-offset-4 transition-colors py-3 mt-1"
              >
                Não obrigado, quero apenas o básico sem bônus.
              </button>

            </div>
          </div>
        </div>
      )}

      <main className="relative z-10">
        
        {/* 1. HERO SECTION */}
        <section className="pt-16 pb-12 px-4 md:pt-24 md:pb-16 text-center max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-full backdrop-blur-sm">
            <span className="text-red-500 font-bold text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Método Exclusivo 2024
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
            Cansado de Só Dar <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Peito no Free Fire?</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed mb-6">
            Enquanto alguns jogadores sempre dão capa, você continua perdendo trocação por um <span className="text-white font-semibold underline decoration-red-600/50 underline-offset-4">detalhe invisível</span>.
          </p>
          
          <p className="text-sm md:text-base text-zinc-500 font-semibold uppercase tracking-wide mb-8">
            Não é falta de treino. É falta da ferramenta certa.
          </p>
        </section>

        {/* 2. VSL SECTION */}
        <section className="px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <p className="text-zinc-300 font-semibold mb-4 animate-pulse flex items-center gap-2">
                 <Target className="w-5 h-5 text-red-500" />
                 Assista esse vídeo antes de jogar mais uma partida
              </p>
              
              {/* Video Wrapper */}
              <div className="w-full aspect-video bg-zinc-900 rounded-2xl border-2 border-zinc-800 shadow-[0_0_40px_rgba(220,38,38,0.15)] relative overflow-hidden group">
                 {isVideoPlaying ? (
                   <iframe 
                     className="w-full h-full object-cover animate-in fade-in duration-300"
                     /* Embed do Vimeo */
                     src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&title=0&byline=0&portrait=0`} 
                     title="Free Fire Gameplay" 
                     allow="autoplay; fullscreen; picture-in-picture"
                     allowFullScreen
                     loading="lazy"
                   ></iframe>
                 ) : (
                   <button 
                     className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-zinc-950 cursor-pointer group focus:outline-none z-20"
                     onClick={() => setIsVideoPlaying(true)}
                     aria-label="Assistir vídeo"
                   >
                      {/* Background Image Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-80 z-0 pointer-events-none"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop" 
                        alt="Capa do Vídeo" 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
                      />
                      
                      {/* Pulsing Play Button */}
                      <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] animate-pulse group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] transition-all duration-300 pointer-events-none">
                        <Play fill="white" className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                        
                        {/* Ripple Effect */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-30 animate-ping"></span>
                      </div>
                      
                      <div className="relative z-10 mt-6 bg-black/60 backdrop-blur px-6 py-2 rounded-full border border-white/10 pointer-events-none">
                        <p className="text-white font-bold uppercase tracking-widest text-xs md:text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Clique para Assistir
                        </p>
                      </div>
                   </button>
                 )}
              </div>

              <div className="mt-6 text-center max-w-2xl mx-auto">
                <p className="text-zinc-400 text-sm md:text-base">
                  Descubra por que você só dá peito — e como mudar isso ainda hoje.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FIRST CTA */}
        <section className="px-4 pb-24 text-center">
          <div className="max-w-md mx-auto">
            <CtaButton 
              text="QUERO COMEÇAR A DAR CAPA AGORA"
              subtext="Acesso imediato • Compatível com Android e iOS"
              onClick={scrollToCheckout}
            />
          </div>
        </section>

        {/* 4. PAIN POINTS SECTION */}
        <section className="py-16 bg-zinc-900/30 border-y border-zinc-800/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Você se identifica com isso?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painPoints.map((pain, index) => (
                <div key={index} className="flex items-center gap-4 bg-zinc-950 p-4 rounded-xl border border-zinc-800/50 hover:border-red-900/30 transition-colors">
                  <div className="bg-red-900/20 p-2 rounded-lg min-w-[40px] flex justify-center">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <span className="text-zinc-300 font-medium">{pain}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl md:text-2xl font-bold text-zinc-100">
                O problema não é você. <span className="text-red-500">O jogo mudou.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 5. SOLUTION SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">O Segredo Revelado</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                A Solução Que os Jogadores Mais Usam
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                O Painel foi desenvolvido para ajustar exatamente o que o jogo não explica. 
                Ele corrige o detalhe que separa quem dá peito de quem dá capa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Precisão Cirúrgica", desc: "Ajuste fino para sua mira grudar.", icon: <Crosshair className="w-8 h-8 text-red-500" /> },
                { title: "Full Capa", desc: "Aumente drasticamente sua taxa de HS.", icon: <Target className="w-8 h-8 text-red-500" /> },
                { title: "Reação Rápida", desc: "Ganhe milissegundos preciosos na trocação.", icon: <Zap className="w-8 h-8 text-red-500" /> },
                { title: "Estratégia", desc: "Jogo mais inteligente, não mais difícil.", icon: <Brain className="w-8 h-8 text-red-500" /> },
              ].map((benefit, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900 transition-all hover:-translate-y-1 group">
                  <div className="bg-zinc-950 w-16 h-16 rounded-xl flex items-center justify-center mb-4 border border-zinc-800 group-hover:border-red-900/50 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SOCIAL PROOF */}
        <section className="py-20 bg-zinc-950 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O Que Outros Jogadores Estão Dizendo
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* 7. GUARANTEE SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
            
            <div className="w-20 h-20 bg-zinc-950 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-zinc-800 shadow-xl">
              <ShieldCheck className="w-10 h-10 text-green-500" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Garantia Total de 30 Dias
            </h2>
            
            <p className="text-zinc-400 leading-relaxed mb-8">
              Ou você vê resultado ou devolvemos seu dinheiro. Simples assim. 
              Você não tem <strong className="text-white">nada a perder</strong>, o risco é todo nosso.
            </p>

            <div className="flex justify-center">
              <div className="bg-green-500/10 text-green-500 px-4 py-2 rounded-lg text-sm font-semibold border border-green-500/20">
                RISCO ZERO
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="py-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <Accordion items={faqs} />
        </section>

        {/* 9. FINAL CTA (Price Cards) */}
        <section id="checkout" className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/10 pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center leading-tight">
              Escolha Seu Plano e<br/>
              <span className="text-red-600">Comece a Amassar</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* PLANO BÁSICO */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col hover:border-zinc-600 transition-colors order-2 md:order-1">
                <div className="mb-4">
                  <span className="text-zinc-400 font-bold tracking-wider text-sm">PLANO BÁSICO</span>
                </div>
                
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">R$ 9,90</span>
                  <span className="text-zinc-500 mb-1">/único</span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex items-center gap-3 text-zinc-300">
                     <CheckCircle2 className="w-5 h-5 text-zinc-500" />
                     <span>Painel Regedit (Xit)</span>
                   </li>
                   <li className="flex items-center gap-3 text-zinc-300">
                     <CheckCircle2 className="w-5 h-5 text-zinc-500" />
                     <span>Tutorial de Instalação</span>
                   </li>
                   <li className="flex items-center gap-3 text-zinc-300">
                     <CheckCircle2 className="w-5 h-5 text-zinc-500" />
                     <span>Anti-Ban Seguro</span>
                   </li>
                   <li className="flex items-center gap-3 text-zinc-500 line-through decoration-zinc-500/50 opacity-60">
                     <X className="w-5 h-5" />
                     <span>Bônus: 500 Diamantes</span>
                   </li>
                   <li className="flex items-center gap-3 text-zinc-500 line-through decoration-zinc-500/50 opacity-60">
                     <X className="w-5 h-5" />
                     <span>Sorteio Conta 1º Passe</span>
                   </li>
                </ul>

                <button 
                  onClick={handleBasicPlanClick}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-xl transition-colors border border-zinc-700"
                >
                  QUERO O BÁSICO
                </button>
              </div>

              {/* PLANO PREMIUM */}
              <div className="bg-gradient-to-b from-red-950/30 to-zinc-900 border-2 border-red-600 rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(220,38,38,0.15)] order-1 md:order-2">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black tracking-widest shadow-lg flex items-center gap-2">
                  <Crown size={14} fill="currentColor" /> MAIS VENDIDO
                </div>

                <div className="mb-4">
                  <span className="text-red-400 font-bold tracking-wider text-sm flex items-center gap-2">
                    PLANO PREMIUM <Gem className="w-4 h-4" />
                  </span>
                </div>
                
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-zinc-400 line-through text-lg mr-2">R$ 47,90</span>
                  <span className="text-5xl font-bold text-white">R$ 19,90</span>
                  <span className="text-zinc-500 mb-1">/único</span>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                   <div className="flex items-center gap-3 text-white font-medium">
                     <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
                     <span>Painel Regedit VIP (Xiter)</span>
                   </div>
                   <div className="flex items-center gap-3 text-white font-medium">
                     <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
                     <span>Anti-Ban & Anti-Blacklist</span>
                   </div>
                   
                   {/* Destaque Bonus */}
                   <div className="bg-red-900/20 border border-red-900/30 p-3 rounded-lg flex items-start gap-3">
                      <Gem className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                      <div>
                        <span className="block text-white font-bold text-sm">BÔNUS: 500 Diamantes</span>
                        <span className="text-zinc-400 text-xs">Entregue junto com o painel</span>
                      </div>
                   </div>

                   {/* Destaque Sorteio */}
                   <div className="bg-yellow-900/10 border border-yellow-900/30 p-3 rounded-lg flex items-start gap-3">
                      <Gift className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
                      <div>
                        <span className="block text-white font-bold text-sm">SORTEIO: Conta 1º Passe</span>
                        <span className="text-zinc-400 text-xs">Concorra automaticamente</span>
                      </div>
                   </div>
                </div>

                <CtaButton 
                  text="QUERO O PLANO PREMIUM"
                  subtext="Acesso Imediato + Bônus Exclusivos"
                  fullWidth={true}
                  className="!py-4 !text-xl"
                  onClick={() => window.location.href = CHECKOUT_PREMIUM}
                />
              </div>

            </div>

            <div className="mt-12 flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Payment Icons Simulation */}
               <div className="h-6 w-10 bg-zinc-700 rounded"></div>
               <div className="h-6 w-10 bg-zinc-700 rounded"></div>
               <div className="h-6 w-10 bg-zinc-700 rounded"></div>
               <div className="h-6 w-10 bg-zinc-700 rounded"></div>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-black">
          <div className="flex flex-col gap-2">
            <p>&copy; 2024 Painel Free Fire Pro. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4">
               <a href="#" className="hover:text-zinc-400 transition-colors">Termos de Uso</a>
               <a href="#" className="hover:text-zinc-400 transition-colors">Privacidade</a>
               <a href="#" className="hover:text-zinc-400 transition-colors">Contato</a>
            </div>
            <p className="mt-4 text-xs max-w-lg mx-auto px-4 opacity-60">
              Este site não é afiliado ao Facebook ou Garena Free Fire. Todas as marcas registradas pertencem aos seus respectivos proprietários.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;