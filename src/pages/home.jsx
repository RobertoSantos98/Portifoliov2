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
        <div className="bg-zinc-900 text-white">

            <Header />

            <section className="w-full flex  justify-center py-12 h-screen">

                <div className="max-w-6xl flex-col flex-1 flex sm:flex-row  items-center justify-center">

                    <div className="flex flex-1 items-end sm:items-center justify-center  ">
                        <img src={ImagemHome} alt="" className="w-80 sm:w-md" />
                    </div>

                    <div className="flex flex-col justify-center items-center flex-1 gap-4 ">
                        <h1 className="text-[28px] sm:text-4xl font-extrabold">Roberto Santos</h1>
                        <p className="text-lg text-neutral-300">Desenvolvedor Full-Stack</p>

                        <div className="flex gap-2.5 text-[12px]">
                            <button className="bg-orange-600 py-2 px-4 rounded-sm flex gap-2 items-center hover:bg-orange-500 sm:text-sm cursor-pointer">
                                <FaDownload />
                                Curriculo
                            </button>

                            <button className="border border-neutral-300 py-2 px-4 rounded-sm flex gap-2 items-center hover:bg-neutral-800 sm:text-sm cursor-pointer">
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

            <section className="w-full flex h-screen items-center justify-center text-[12px]">

                <div className="sm:max-w-6xl w-full mx-auto px-4">

                    <div className="sm:text-lg w-full flex flex-col items-center gap-3.5 text-neutral-300 py-2.5 px-4">
                        <h2 className="text-[26px] sm:text-5xl font-bold text-white">Sobre</h2>

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

                    <div className="flex flex-col items-center py-2.5 w-full gap-3.5">
                        <h3 className="text-[26px] sm:text-5xl font-bold text-white">
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

            <div>
                <Tecnologias />
            </div>

            <div className="bg-orange-600 flex h-74 justify-center items-end py-8">
                Roberto Santos © 2026
            </div>

        </div>
    )
}