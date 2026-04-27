import { useState } from "react";
import { FaGithub, FaDownload, FaLinkedin, FaJava, FaReact, FaJs, FaHtml5, FaMobile } from 'react-icons/fa'

import Header from "../layouts/header";
import ImagemHome from '../assets/img-home-content.svg'
import Tecnologias from "../components/tecnology";


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


    return (
        <div className="bg-zinc-900 text-white min-h-screen">

            <Header />

            <section className="w-full flex  justify-center py-12 h-screen">

                <div className="max-w-6xl flex flex-1 sm:flex-col">

                    <div className="flex items-center">
                        <img src={ImagemHome} alt="" />
                    </div>

                    <div className="flex flex-col justify-center items-center flex-1 gap-4">
                        <h1 className="text-4xl font-extrabold">Roberto Santos</h1>
                        <p className="text-neutral-300">Desenvolvedor Full-Stack</p>

                        <div className="flex gap-2.5">
                            <button className="bg-orange-600 py-2 px-4 rounded-sm flex gap-2 items-center hover:bg-orange-500 text-sm">
                                <FaDownload />
                                Curriculo
                            </button>

                            <button className="border border-neutral-300 py-2 px-4 rounded-sm flex gap-2 items-center hover:bg-neutral-800 text-sm">
                                <FaGithub />
                                GitHub
                            </button>

                            <button className="border border-neutral-300 py-2 px-4 rounded-sm flex gap-2 items-center hover:bg-neutral-800 text-sm">
                                <FaLinkedin />
                                <a href="https://www.linkedin.com/in/robertosantos98">LinkedIn</a>
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full flex h-screen items-center justify-center">

                <div className="max-w-6xl">
                    <div className="text-lg flex flex-col items-center gap-3.5 text-neutral-300 py-2.5">
                        <h2 className="text-5xl font-bold text-white">Sobre</h2>
                        <p>
                            Desenvolvedor Full-Stack formado em Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e pela construção de soluções eficientes e escaláveis. Possuo experiência no desenvolvimento de aplicações mobile e web, utilizando tecnologias como React e React Native no front-end, além de conhecimentos em Flutter.
                        </p>
                        <p>
                            No back-end, tenho experiência com Node.js, C# (.NET) e Java com Spring Boot, atuando na criação de APIs RESTful, integração com bancos de dados relacionais como PostgreSQL e aplicação de boas práticas de arquitetura, como o padrão MVC.
                        </p>
                        <p>
                            Estou sempre em busca de evolução constante, aprimorando minhas habilidades técnicas e explorando novas tecnologias, com foco em desenvolver soluções que gerem valor real para os usuários.
                        </p>
                    </div>

                    <div className="flex flex-col items-center py-2.5 w-full gap-3.5">
                        <h3 className="text-5xl font-bold text-white">Tecnologias e Ferramentas</h3>

                        <div className="overflow-x-auto w-full scroll-auto">
                            <div className="flex gap-6 w-max px-2 ">
                                {
                                    tec.map((t) => (
                                        <div
                                            key={t.id}
                                            className="flex flex-col items-center justify-center h-36 w-32 border border-neutral-300 rounded-md hover:bg-orange-600  hover:border-0 transition ease-in-out hover:shadow-2xs"
                                        >
                                            <span className="text-6xl text-zinc-100">
                                                {t.icone}
                                            </span>

                                            <span className="text-sm mt-2 text-zinc-100">
                                                {t.nome}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <Tecnologias />
            </div>

            <div className="bg-orange-600 flex h-74 justify-center items-end py-8">
                Roberto Santos © 2026
            </div>

        </div>
    )
}