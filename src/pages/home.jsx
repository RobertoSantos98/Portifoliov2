import { useState } from "react";
import { 
  FaFigma, FaGithub, FaDownload, FaLinkedin, FaJava, FaReact, FaJs, 
  FaHtml5, FaMobile, FaLayerGroup, FaStackOverflow, FaConnectdevelop,
  FaCode
} from 'react-icons/fa';

import Header from "../layouts/header";
import ImagemHome from '../assets/img-home-content.svg';
import ImagemDestaque from '../assets/img-destaque.png';
import Tecnologias from "../components/tecnology"; 
import CV from "../Data/CV.pdf";

export default function Home() {

    const tec = [
        { id: 1, nome: "Java", icone: <FaJava /> },
        { id: 2, nome: "C#", icone: <FaCode /> },
        { id: 3, nome: "React", icone: <FaReact /> },
        { id: 4, nome: "JavaScript", icone: <FaJs /> },
        { id: 5, nome: "HTML e CSS", icone: <FaHtml5 /> },
        { id: 6, nome: "React Native", icone: <FaMobile /> },
        { id: 7, nome: "Figma", icone: <FaFigma /> }
    ];

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        /* overflow-x-hidden aqui cria a "parede" invisível que impede qualquer elemento de vazar para a direita */
        <div className="relative w-full min-h-screen bg-zinc-950 text-white font-roboto antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden">

            {/* Ambient Glow Effects - Protegidos para não estourarem no mobile */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="hidden sm:block absolute top-[120vh] right-1/4 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header Flutuante Premium com Centralização Nativa */}
            <header className="fixed top-4 inset-x-0 mx-auto z-50 w-[92%] max-w-2xl bg-zinc-900/70 backdrop-blur-md border border-zinc-800/80 rounded-full px-2 py-1.5 shadow-xl shadow-black/40">
                <nav className="w-full">
                    <ul className="flex items-center justify-around sm:justify-end sm:gap-2 w-full">
                        <li className="text-center">
                            <button onClick={() => scrollToElement("sessaoHome")} className="py-2 px-1.5 sm:px-4 hover:text-orange-500 text-neutral-400 text-[11px] sm:text-sm font-medium transition-colors whitespace-nowrap">
                                Home
                            </button>
                        </li>
                        <li className="text-center">
                            <button onClick={() => scrollToElement("sessaoSobre")} className="py-2 px-1.5 sm:px-4 hover:text-orange-500 text-neutral-400 text-[11px] sm:text-sm font-medium transition-colors whitespace-nowrap">
                                Sobre
                            </button>
                        </li>
                        <li className="text-center">
                            <button onClick={() => scrollToElement("sessaoProjetos")} className="py-2 px-1.5 sm:px-4 hover:text-orange-500 text-neutral-400 text-[11px] sm:text-sm font-medium transition-colors whitespace-nowrap">
                                Projetos
                            </button>
                        </li>
                        <li className="sm:pl-2">
                            <a 
                                href="https://www.linkedin.com/in/robertosantos98" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="inline-block bg-orange-600 hover:bg-orange-500 text-white text-[11px] sm:text-sm font-semibold py-2 px-3 sm:px-5 rounded-full transition-all duration-200 shadow-md shadow-orange-600/20 whitespace-nowrap"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Seção Hero / Home */}
            <section id="sessaoHome" className="w-full min-h-screen max-h-320 flex items-center justify-center pt-24 pb-12 px-4 md:px-12 box-border">
                
                {/* Trocado w-[95vw] por w-full max-w-7xl para evitar quebras no motor do Safari/Chrome mobile */}
                <div className="w-full max-w-7xl h-auto md:h-[70vh] max-h-[520px] lg:max-h-[680px] flex flex-col md:flex-row items-stretch justify-center shadow-2xl rounded-3xl bg-zinc-900/10 backdrop-blur-sm border border-zinc-900/50 relative">
                    
                    <div className="absolute inset-0 bg-linear-to-tr from-orange-600/[0.02] to-transparent rounded-3xl pointer-events-none" />

                    {/* Lado Esquerdo: Imagem */}
                    <div className="flex flex-1 items-center justify-center border-l-2 border-t-2 border-orange-600 p-6 md:p-8 rounded-t-3xl md:rounded-tr-none md:rounded-bl-none md:rounded-tl-3xl relative">
                        <img 
                            src={ImagemHome} 
                            alt="Ilustração" 
                            className="w-56 sm:w-72 md:w-80 lg:w-96 xl:w-[400px] max-h-[85%] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]" 
                        />
                    </div>

                    {/* Lado Direito: Texto */}
                    <div className="flex flex-col justify-center items-center md:items-start flex-1 border-r-4 border-b-4 border-zinc-700 rounded-b-3xl md:rounded-bl-none md:rounded-tr-none md:rounded-br-3xl p-6 sm:p-10 md:p-12 lg:p-16 bg-zinc-950/20">
                        <div className="space-y-2 text-center md:text-left w-full">
                            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold font-merriweather tracking-tight leading-tight text-white">
                                Roberto Santos
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-400 font-light">
                                Desenvolvedor <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-bold">Full-Stack</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6 text-xs w-full">
                            <a 
                                href={CV} 
                                download="CV-RobertoSantos.pdf"
                                className="bg-orange-600 hover:bg-orange-500 py-3 px-5 rounded-xl flex gap-2 items-center text-sm font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-orange-600/20 cursor-pointer text-white"
                            >
                                <FaDownload />
                                Currículo
                            </a>
                            <a 
                                href="https://www.github.com/RobertoSantos98" 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-zinc-900/90 border border-zinc-800 hover:border-orange-500/50 py-3 px-5 rounded-xl flex gap-2 items-center text-sm font-medium transition-all duration-300 hover:scale-[1.03] shadow-md cursor-pointer text-neutral-200 hover:text-white"
                            >
                                <FaGithub className="text-base" />
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/robertosantos98" 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-zinc-900/90 border border-zinc-800 hover:border-orange-500/50 py-3 px-5 rounded-xl flex gap-2 items-center text-sm font-medium transition-all duration-300 hover:scale-[1.03] shadow-md cursor-pointer text-neutral-200 hover:text-white"
                            >
                                <FaLinkedin className="text-base text-blue-400" />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* Seção Sobre */}
            <section id="sessaoSobre" className="w-full flex min-h-screen max-h-320 items-center justify-center py-20 border-t border-zinc-900 bg-zinc-950/40">
                <div className="max-w-5xl w-full mx-auto px-4">
                    <div className="w-full flex flex-col items-center gap-6 text-neutral-300 px-4 text-center">
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">Sobre Mim</h2>
                        <div className="w-16 h-1 bg-orange-600 rounded-full -mt-2" />
                        <div className="space-y-4 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400 font-normal">
                            <p>
                                Desenvolvedor <span className="font-semibold text-orange-500">Full-Stack</span> formado em Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e pela construção de soluções eficientes e escaláveis. Possuo experiência no desenvolvimento de aplicações mobile e web, utilizando tecnologias como <strong>React</strong> e <strong>React Native</strong> no front-end.
                            </p>
                            <p>
                                No back-end, sou focado no ecossistema <strong>.NET (C#)</strong> e <strong>Java com Spring Boot</strong>, atuando na criação de <strong>Web APIs RESTful</strong> robustas, integração com bancos de dados relacionais (PostgreSQL/SQL Server) e aplicação de boas práticas de arquitetura, como <strong>Clean Architecture</strong> e princípios <strong>SOLID</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-16 w-full gap-6">
                        <h3 className="text-xl lg:text-2xl font-bold text-zinc-400">Tecnologias e Ferramentas</h3>
                        <div className="overflow-x-auto w-full scrollbar-none py-4">
                            <div className="flex gap-4 w-max mx-auto px-4">
                                {tec.map((t) => (
                                    <div key={t.id} className="flex flex-col items-center justify-center h-32 w-28 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:bg-zinc-900 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-600/5 group">
                                        <span className="text-4xl text-zinc-400 group-hover:text-orange-500 transition-colors duration-300">{t.icone}</span>
                                        <span className="text-xs mt-3 text-zinc-400 group-hover:text-zinc-200 text-center font-medium transition-colors">{t.nome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Métricas Bento Grid */}
            <section className="w-full flex min-h-screen max-h-320 items-center justify-center border-t border-b border-zinc-900 py-20 px-4">
                <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center justify-center gap-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                        <div className="bg-gradient-to-br from-orange-600 to-amber-600 flex items-start flex-col justify-between p-6 h-44 rounded-3xl shadow-xl shadow-orange-600/5 sm:col-span-2 transform hover:scale-[1.01] transition-transform">
                            <span className="text-5xl font-black font-merriweather tracking-tight">+5</span>
                            <div>
                                <h4 className="text-lg font-bold leading-tight">Projetos Full-Stack</h4>
                                <p className="text-xs text-orange-100/80 mt-1">Sistemas completos desenvolvidos de ponta a ponta.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800/80 flex items-start flex-col justify-between p-6 h-44 rounded-3xl transform hover:scale-[1.01] transition-transform group hover:border-zinc-700">
                            <span className="text-3xl text-orange-500"><FaStackOverflow /></span>
                            <div>
                                <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Web & Mobile</h4>
                                <p className="text-xs text-neutral-400 mt-1">Interfaces responsivas e aplicativos nativos fluidos.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800/80 flex items-start flex-col justify-between p-6 h-44 rounded-3xl transform hover:scale-[1.01] transition-transform group hover:border-zinc-700">
                            <span className="text-3xl text-orange-500"><FaConnectdevelop /></span>
                            <div>
                                <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">APIs RESTful</h4>
                                <p className="text-xs text-neutral-400 mt-1">Back-ends performáticos construídos em C# e Java.</p>
                            </div>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800/80 flex justify-between p-6 h-40 rounded-3xl sm:col-span-2 transform hover:scale-[1.01] transition-transform group hover:border-zinc-700 flex-row items-center gap-4">
                            <span className="text-4xl font-black text-zinc-700 group-hover:text-orange-500/80 transition-colors">+20</span>
                            <div>
                                <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Projetos e Repositórios</h4>
                                <p className="text-xs text-neutral-400 mt-0.5">Códigos limpos, versionados e estruturados no GitHub.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-md items-center flex justify-center relative">
                        <img src={ImagemDestaque} alt="Destaques" className="w-80 lg:w-md drop-shadow-2xl opacity-90" />
                    </div>
                </div>
            </section>

            {/* Container de Projetos */}
            <div id="sessaoProjetos" className="bg-zinc-950/20">
                <Tecnologias />
            </div>

            {/* Footer */}
            <footer className="border-t border-zinc-900 bg-zinc-950 flex h-24 justify-center items-center text-xs sm:text-sm text-neutral-500 font-medium tracking-wide">
                <span>Roberto Santos &copy; 2026 &bull; Todos os direitos reservados.</span>
            </footer>

        </div>
    );
}