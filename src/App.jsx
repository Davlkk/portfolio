import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Award,
  Calendar,
  ArrowRight,
  Send,
  GraduationCap,
  Briefcase,
  MessageCircle,
  Instagram,
} from "lucide-react";
import daviRetrato from "./assets/davi_retrat.jpg";
import capaVaspp from "./assets/vasppinicial.png";
import capaMetavision from "./assets/logo_metavision.png";
import capaMuseu from "./assets/museu.png";
import capaInfomovies from "./assets/infomovies.png";
import capaMarquespan from "./assets/marquespão3.jpg";
import fotoFebic2024 from "./assets/febic2024.jpg";
import meetUp from "./assets/certificado_meetup.png";
import feintecCert2024 from "./assets/feintex.jfif";
import fotoFebic2025 from "./assets/febicx.png";
import ipv6Cert from "./assets/ipv6.png";
import batalhaNaval from "./assets/navio.png"

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState("");
  const fullText = "Davi Matheus — Web Designer / Designer Gráfico";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const courses = [
    {
      title: "EMEF Idalino Pedro da Silva",
      description:
        "Escola situada em Parobé/RS, onde estudei durante todo meu ensino fundamental.",
      period: "2013-2022",
      image: null,
    },

    {
      title: "ETEC Monteiro Lobato",
      description:
        "Onde estudei durante todo meu ensino médio — curso Informática (cursando o 3º ano)",
      period: "2023-2025",
      image: null,
    },

    {
      title: "Curso IPV6 - NIC.BR",
      description: "Curso de ipv6 certificado pelo nic.br.",
      period: "2025-2025",
      image: ipv6Cert,
    },
  ];

  const skills = {
    languages: [
      "Java",
      "Python",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "React Native",
      "Node.js + Express",
      "Angular",
      "Bootstrap",
      "Tailwind",
      "Vite",
      "Swagger",
      "Prettier",
    ],
    design: [
      "Corel Draw (avançado)",
      "Photoshop (intermediário)",
      "Canva",
      "Figma",
      "Illustrator (básico)",
      "DaVinci Resolve",
      "Dither Boy",
    ],
    tools: [
      "VSCode",
      "IntelliJ",
      "MySQL Workbench",
      "GitHub",
      "Supabase",
      "VirtualBox",
      "FlutterFlow",
      "Trello",
      "Notion",
    ],
  };

  const events = [
    {
      title: "FEBIC 2024",
      desc: "Feira nacional realizada em Pomerode/SC, onde consegui o 3º lugar na categoria de Ciências Sociais com o projeto MetaVision.",
      date: "09/2024",
      image: fotoFebic2024,
    },
    {
      title: "FEINTEC 2024",
      desc: "Feira de Ciências interna do CIMOL, onde desenvolvi ainda mais meu projeto com dicas e conexões valiosas.",
      date: "11/2024",
      image: feintecCert2024,
    },
    {
      title: "Meetup dos Devs do Paranhana",
      desc: "Evento realizado pela comunidade dos devs do paranhana, local de muito aprendizado e network de qualidade.",
      date: "05/2025",
      image: meetUp,
    },
    {
      title: "Hackatime 2025",
      desc: "Evento realizado na faccat, melhorei minha habilidade de comunicação e criação de ideias, além de aprender a entregar sob pressão.",
      date: "08/2025",
      image: null,
    },
    {
      title: "Taquara Summit 2025",
      desc: "Palestras incríveis e espaço para networking.",
      date: "08/2025",
      image: null,
    },
    {
      title: "FEBIC 2025",
      desc: "Feira nacional realizada em Joinville/SC, apresentei meu projeto e obtive diversos resultados teóricos por meio das apresentaçãoes.",
      date: "09/2025",
      image: fotoFebic2025,
    },
    {
      title: "Oktober Summit 2025",
      desc: "Evento realizado no Alles Blau shopping em Igrejinha/RS, grande local de aprendizado e network.",
      date: "10/2025",
      image: "",
    },
    {
      title: "FEINTEC 2025",
      desc: "Continuação da jornada de aprimoramento e inovação.",
      date: "11/2025",
      image: "",
    },
  ];

  const projects = [
    {
      name: "Metavision - Sistema de Acessibilidade Urbana para Deficientes visuais",
      description: "TCC desenvolvido durante o ensino médio.",
      technologies: [
        "React Native",
        "javascript",
        "Figma",
        "PostgreSQL",
        "Supabase",
      ],
      link: "",
      image: capaMetavision,
    },
    {
      name: "VASPP - Análise de Resultados com IA para o Campeonato Brasileiro",
      description:
        "Projeto escolar envolvendo a criação de um MVP baseado em uma ideia de startup feita em aula.",
      technologies: [
        "React",
        "javascript",
        "Vite",
        "Tailwind",
        "Corel Draw",
        "Figma",
        "Canva",
      ],
      link: "https://www.behance.net/gallery/236820369/Projeto-VASPP",
      image: capaVaspp,
    },
    {
      name: "INFOMOVIES",
      description:
        "Site de filmes feito com o intuito de consumir uma api (fornecida pelo professor) utilizando React.",
      technologies: ["React", "javascript", "HTML", "CSS"],
      link: "https://github.com/Davlkk/API-Filmes-React",
      image: capaInfomovies,
    },

    {
      name: "Museu do rock",
      description:
        "Blog feito em aula consumindo uma api (fornecida pelo professor) com AngularJS.",
      technologies: ["Angular", "javascript", "HTML", "CSS", "Corel Draw"],
      link: "https://github.com/Davlkk/Blog-LP",
      image: capaMuseu,
    },

    {
      name: "Redesign da MARQUESPAN",
      description: "Trabalho pessoal, modernização da logo da MARQUESPAN.",
      technologies: ["Corel Draw"],
      link: "https://www.behance.net/gallery/236788649/Redesign-da-logo-MARQUESPAN",
      image: capaMarquespan,
    },
        {
      name: "Batalha Naval em Java",
      description: "Trabalho escolar feito em dupla, possui o intuito de criar um jogo de batalha naval utilizando a linguagem Java.",
      technologies: ["Java"],
      link: "https://github.com/Davlkk/Batalha-Naval",
      image: batalhaNaval,
    },
  ];

  const experiences = [
    {
      id: 1,
      title: "Gráfica Gaúcha - designer gráfico assistente",
      description:
        "Trabalhei por meio período durante algum tempo como designer gráfico na Gráfica Gaúcha de parobé/RS.",
      period: "2022 - 2025",
    },

    {
      id: 2,
      title: "Athleta - designer de camisas",
      description:
        "Fiz um lote com cerca de 5 camisas para a Athleta de Taquara/RS, por meio de um representante da G7 futevolei.",
      period: "2024 - 2025",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0A192F] to-[#112240] text-[#E6F1FF] font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Inter:wght@400;500;600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Poppins', sans-serif; font-weight: 700; }
        
        .glow-effect { 
          box-shadow: 0 0 20px rgba(0, 184, 217, 0.3);
          transition: all 0.3s ease;
        }
        .glow-effect:hover { 
          box-shadow: 0 0 30px rgba(0, 184, 217, 0.6), 0 0 50px rgba(31, 111, 235, 0.3);
          transform: translateY(-2px);
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(0, 184, 217, 0.6);
          border-radius: 50%;
          animation: float 6s infinite ease-in-out;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -25px;
          top: 0;
          width: 12px;
          height: 12px;
          background: #00B8D9;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 184, 217, 0.8);
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}

        <div className="text-center z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl mb-6 min-h-[120px] md:min-h-[160px]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#8892B0]">
            Criatividade é liberdade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-[#1F6FEB] text-white px-8 py-3 rounded-lg glow-effect font-semibold"
            >
              Ver Portfólio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-[#00B8D9] text-[#00B8D9] px-8 py-3 rounded-lg glow-effect font-semibold bg-transparent hover:bg-[#00B8D9] hover:bg-opacity-10"
            >
              Entrar em Contato
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Davlkk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00B8D9] transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.behance.net/davimateusabreu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00B8D9] transition-colors"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00B8D9] transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:davimawpro@gmail.com"
              className="hover:text-[#00B8D9] transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section
        id="about"
        className={`py-20 px-4 fade-in ${isVisible["about"] ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#1F6FEB] to-[#00B8D9] glow-effect flex items-center justify-center">
                <img
                  src={daviRetrato}
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover glow-effect border-4 border-[#00B8D9]"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-[#00B8D9]">
                Sobre Mim
              </h2>
              <p className="text-lg leading-relaxed text-[#8892B0]">
                Atualmente tenho 18 anos e moro em Parobé/RS, estudo na ETEC
                Monteiro Lobato, onde curso Informática, estando no 3º ano do
                ensino médio. Tenho experiência avançada com Corel Draw e outros
                softwares de design gráfico (Photoshop, Illustrator).<br></br>
                Também sei utilizar alguns frameworks para javascript, como
                React e Angular, além de html e css. No meio da programação
                tenho experiência com Java e Python.<br></br>
                Gosto de jogos digitais, filmes, séries e esportes, sempre vejo
                as coisas de forma crítica. Considero que tenho uma grande
                paciência e sei lidar com a pressão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carreira Estudantil */}
      <section
        id="education"
        className={`py-20 px-4 fade-in ${
          isVisible["education"] ? "visible" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-[#00B8D9]">
            Carreira de estudos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((cors) => (
              <div className="bg-[#112240] border border-[#00B8D9] rounded-lg p-6 glow-effect">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap size={32} className="text-[#00B8D9]" />
                  <h4 className="text-xl">{cors.title}</h4>
                </div>
                <p className="text-[#8892B0]">{cors.description}</p>
                <p className="mt-2">{cors.period}</p>
                {cors.image && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-[#00B8D9] hover:text-[#1F6FEB] transition-colors font-semibold">
                      Ver imagem
                    </summary>
                    <img
                      src={cors.image}
                      alt={cors.title}
                      className="w-full rounded-lg border-2 border-[#00B8D9] mt-4"
                    />
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competências Técnicas */}
      <section
        id="skills"
        className={`py-20 px-4 fade-in ${isVisible["skills"] ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-[#00B8D9]">
            Competências Técnicas
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl mb-6 text-[#1F6FEB]">
                Linguagens e Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#112240] border border-[#1F6FEB] px-4 py-2 rounded-full text-sm hover:bg-[#1F6FEB] hover:bg-opacity-20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-[#1F6FEB]">Design e Edição</h3>
              <div className="flex flex-wrap gap-3">
                {skills.design.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#112240] border border-[#1F6FEB] px-4 py-2 rounded-full text-sm hover:bg-[#1F6FEB] hover:bg-opacity-20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-[#1F6FEB]">
                Ferramentas de Desenvolvimento
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#112240] border border-[#1F6FEB] px-4 py-2 rounded-full text-sm hover:bg-[#1F6FEB] hover:bg-opacity-20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section
        id="projects"
        className={`py-20 px-4 fade-in ${
          isVisible["projects"] ? "visible" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-[#00B8D9]">
            Meus Projetos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project}
                className="bg-[#112240] rounded-lg overflow-hidden glow-effect group"
              >
                <div className="h-48 bg-gradient-to-br from-[#1F6FEB] to-[#00B8D9] flex items-center justify-center">
                  {/*imagem do projeto*/}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  {/*titulo do projeto*/}
                  <h3 className="text-xl mb-3">{project.name}</h3>

                  {/*descrição do projeto*/}
                  <p className="text-[#8892B0] mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/*tecnologias do projeto*/}
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#1F6FEB] bg-opacity-20 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#00B8D9] hover:gap-4 transition-all"
                  >
                    Ver projeto <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiências*/}
      <section
        id="experience"
        className={`py-20 px-4 fade-in ${
          isVisible["experience"] ? "visible" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-[#00B8D9]">
            Experiências Profissionais
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp}
                className="bg-gradient-to-br from-[#112240] to-[#0A192F] border border-[#1F6FEB] rounded-lg p-6 glow-effect"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase size={32} className="text-[#00B8D9]" />
                  <h4 className="text-xl">{exp.title}</h4>
                </div>
                <p className="text-[#8892B0]">{exp.description}</p>
                <p className="mt-2">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section
        id="events"
        className={`py-20 px-4 fade-in ${isVisible["events"] ? "visible" : ""}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-[#00B8D9]">
            Eventos e Participações
          </h2>

          <div className="relative border-l-2 border-[#1F6FEB] pl-8 space-y-8">
            {events.map((event, i) => (
              <div key={i} className="relative timeline-item">
                <div className="bg-[#112240] border border-[#00B8D9] rounded-lg p-6 glow-effect">
                  <div className="flex items-center gap-3 mb-3">
                    <Award size={24} className="text-[#00B8D9]" />
                    <h4 className="text-xl font-semibold">{event.title}</h4>
                  </div>
                  <p className="text-[#8892B0] mb-4">{event.desc}</p>
                  <p>{event.date}</p>

                  {event.image && (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-[#00B8D9] hover:text-[#1F6FEB] transition-colors font-semibold">
                        Ver imagem
                      </summary>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full rounded-lg border-2 border-[#00B8D9] mt-4"
                      />
                    </details>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contact"
        className={`py-20 px-4 fade-in ${
          isVisible["contact"] ? "visible" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-[#00B8D9]">
            Entre em Contato
          </h2>

          <div className="bg-[#112240] border border-[#00B8D9] rounded-lg p-8 md:p-12 glow-effect">
            <p className="text-center text-lg text-[#8892B0] mb-10">
              Vamos conversar? Entre em contato comigo através das plataformas
              abaixo!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="https://wa.me/5551995737308"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-[#0A192F] border-2 border-[#1F6FEB] rounded-lg p-6 hover:border-[#00B8D9] transition-all glow-effect group"
              >
                <MessageCircle
                  size={40}
                  className="text-[#00B8D9] group-hover:scale-110 transition-transform"
                />
                <span className="text-lg font-semibold">WhatsApp</span>
                <span className="text-sm text-[#8892B0]">Mensagem direta</span>
              </a>

              <a
                href="https://instagram.com/davi_matehus_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-[#0A192F] border-2 border-[#1F6FEB] rounded-lg p-6 hover:border-[#00B8D9] transition-all glow-effect group"
              >
                <Instagram
                  size={40}
                  className="text-[#00B8D9] group-hover:scale-110 transition-transform"
                />
                <span className="text-lg font-semibold">Instagram</span>
                <span className="text-sm text-[#8892B0]">davi_matehus_</span>
              </a>

              <a
                href="mailto:davimawpro@gmail.com"
                className="flex flex-col items-center gap-3 bg-[#0A192F] border-2 border-[#1F6FEB] rounded-lg p-6 hover:border-[#00B8D9] transition-all glow-effect group"
              >
                <Mail
                  size={40}
                  className="text-[#00B8D9] group-hover:scale-110 transition-transform"
                />
                <span className="text-lg font-semibold">Email</span>
                <span className="text-sm text-[#8892B0]">
                  davimawpro@gmail.com
                </span>
              </a>

              <a
                href="https://linkedin.com/in/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-[#0A192F] border-2 border-[#1F6FEB] rounded-lg p-6 hover:border-[#00B8D9] transition-all glow-effect group"
              >
                <Linkedin
                  size={40}
                  className="text-[#00B8D9] group-hover:scale-110 transition-transform"
                />
                <span className="text-lg font-semibold">LinkedIn</span>
                <span className="text-sm text-[#8892B0]">
                  Perfil profissional
                </span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-[#1F6FEB]">
              <h3 className="text-xl text-center mb-6 text-[#00B8D9]">
                Onde me encontrar
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://www.behance.net/davimateusabreu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00B8D9] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                  <span className="text-sm">Behance</span>
                </a>
                <a
                  href="https://github.com/Davlkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00B8D9] transition-colors"
                >
                  <Github size={24} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/seuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00B8D9] transition-colors"
                >
                  <Linkedin size={24} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A192F] py-8 px-4 text-center border-t border-[#1F6FEB]">
        <p className="text-[#8892B0]">
          © 2025 — Desenvolvido por Davi Matheus. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Davlkk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00B8D9] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00B8D9] transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
