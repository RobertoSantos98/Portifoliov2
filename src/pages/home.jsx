import { useState } from "react";
import { FaGithub, FaDownload, FaLinkedin, FaJava, FaReact, FaJs, FaHtml5, FaMobile } from 'react-icons/fa'

import Header from "../layouts/header";
import ImagemHome from '../assets/img-home-content.svg'
import Tecnologias from "../components/tecnology";
import CV from "../Data/CV.pdf"


export default function Home() {

    const tec = [
        { id: 1, nome: "Java", icone: <FaJava /> },
        { id: 2, nome: "React", icone: <FaReact /> },
        { id: 3, nome: "JavaScript", icone: <FaJs /> },
        { id: 4, nome: "HTML e CSS", icone: <FaHtml5 /> },
        { id: 5, nome: "React Native", icone: <FaMobile /> },
        { id: 6, nome: "React Native", icone: <FaMobile /> },
        { id: 7, nome: "React Native", icone: <FaMobile /> }
    ];

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'CV-RobertoSantos.pdf'
        link.click();
    }

    const scrooToElement = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth"});
    }

    return (
        <div className="bg-zinc-900 text-white">

            <header className="w-full absolute">
                <nav className="max-w-6xl mx-auto flex items-end sm:justify-end justify-center text-[12px]">
                    <ul className="flex items-center">
                        <li onClick={() => scrooToElement("sessaoHome")} className="py-6 px-4 hover:bg-orange-600 hover:text-white">
                            <span className="text-neutral-300 text-sm ">Home</span>
                        </li>

                        <li onClick={() => scrooToElement("sessaoSobre")} className="py-6 px-4 hover:bg-orange-600 text-white">
                            <span className="text-neutral-300 text-sm">Sobre</span>
                        </li>

                        <li onClick={() => scrooToElement("sessaoProjetos")} className="py-6 px-4 hover:bg-orange-600 text-white">
                            <span className="text-neutral-300 text-sm">Projetos</span>
                        </li>

                        <li className="py-2 px-2 text-white">
                            <button className="bg-orange-600 hover:bg-orange-500 hover:text-white py-4 px-5 rounded">
                                <span className="text-neutral-300 text-sm hover:text-white">Contato</span>
                            </button>
                        </li>


                    </ul>
                </nav>
            </header>

            <section id="sessaoHome" className="w-full flex flex-1  justify-center py-16 sm:py-24 px-4 h-screen">

                <div className="max-w-6xl flex-col w-full h-full flex sm:flex-row  items-center justify-center shadow">

                    <div className="rounded-tl flex flex-1 items-end sm:items-center justify-center h-full w-full border-l-2 border-t-2 border-orange-600">
                        <img src={ImagemHome} alt="" className="w-80 sm:w-80 lg:w-md" />
                    </div>

                    <div className="rounded-br flex flex-col justify-center items-center flex-1 h-full w-full gap-4 border-b-4 border-r-2 border-zinc-700">
                        <h1 className="text-[28px] sm:text-4xl font-extrabold">Roberto Santos</h1>
                        <p className="text-lg text-neutral-300">Desenvolvedor Full-Stack</p>

                        <div className="flex gap-2.5 text-[12px]">
                            <button onClick={handleDownload}  className="bg-orange-600 py-2 px-4 rounded-sm flex gap-2 items-center hover:bg-orange-500 sm:text-sm cursor-pointer">
                                <FaDownload />
                                Curriculo
                            </button>

                            <button onClick={() => window.open("https://www.github.com/RobertoSantos98", "_blank")} className="border border-neutral-300 py-2 px-4 rounded-sm flex gap-2 items-center hover:bg-neutral-800 sm:text-sm cursor-pointer">
                                <FaGithub />
                                GitHub
                            </button>

                            <button onClick={() => window.open("https://www.linkedin.com/in/robertosantos98", "_blank") } className="cursor-pointer border border-neutral-300 py-2 px-4 rounded-sm flex gap-2 items-center hover:bg-neutral-800 sm:text-sm">
                                <FaLinkedin />
                                <a>LinkedIn</a>
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <section id="sessaoSobre" className="w-full flex h-screen items-center justify-center text-[12px] ">

                <div className="sm:max-w-6xl w-full mx-auto px-4 ">

                    <div className="h-full md:text-lg w-full flex flex-col items-center gap-3.5 text-neutral-300 py-2.5 px-4">
                        <h2 className="text-[26px] md:text-5xl font-bold text-white">Sobre</h2>

                        <p className="wrap-break-word">
                            Desenvolvedor Full-Stack formado em Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e pela construção de soluções eficientes e escaláveis. Possuo experiência no desenvolvimento de aplicações mobile e web, utilizando tecnologias como React e React Native no front-end, além de conhecimentos em Flutter.
                        </p>

                        <p className="wrap-break-word">
                            No back-end, tenho experiência com Node.js, C# (.NET) e Java com Spring Boot, atuando na criação de APIs RESTful, integração com bancos de dados relacionais como PostgreSQL e aplicação de boas práticas de arquitetura, como o padrão MVC.
                        </p>

                        <p className="wrap-break-word">
                            Estou sempre em busca de evolução constante, aprimorando minhas habilidades técnicas e explorando novas tecnologias, com foco em desenvolver soluções que gerem valor real para os usuários.
                        </p>
                    </div>

                    <div className="flex flex-col items-center py-2.5 w-full gap-6 ">
                        <h3 className="text-[26px] md:text-5xl font-bold text-white">
                            Tecnologias e Ferramentas
                        </h3>

                        <div className="overflow-x-auto w-full">
                            <div className="flex gap-6 w-max px-2">
                                {tec.map((t) => (
                                    <div
                                        key={t.id}
                                        className="flex flex-col items-center justify-center h-36 w-32 border border-neutral-300 rounded-md hover:bg-orange-600 hover:border-0 transition"
                                    >
                                        <span className="text-6xl text-zinc-100">
                                            {t.icone}
                                        </span>

                                        <span className="text-sm mt-2 text-zinc-100 text-center break-words">
                                            {t.nome}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div id="sessaoProjetos">
                <Tecnologias />
            </div>

            <div className="bg-orange-600 flex h-74 justify-center items-end py-8">
                Roberto Santos © 2026
            </div>

        </div>
    )
}