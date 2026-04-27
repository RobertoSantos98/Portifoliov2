import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaGithub, FaList } from 'react-icons/fa'

import 'swiper/css';
import 'swiper/css/pagination';

export default function Tecnologias() {

    const projetos = [
        { id: 1, nome: "SimuQuestion", descricao: "Um App para gerenciar perguntas e criar cards para estudo.", Tecnologias: ["React Native com Expo", "Python"] },
        { id: 2, nome: "FloraApp", descricao: "Um App para gerenciar plantio de arvores.", Tecnologias: ["React Native com Expo", "Java"] },

    ]

    return (
        <div className='w-full h-screen max-w-6xl mx-auto flex-col items-center'>
            <div className='flex items-center justify-center'>
                <p className='text-5xl font-bold my-5'>Projetos</p>

            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                effect='coverflow'
                style={{
                    "--swiper-pagination-color": "#f97316", // ativa (laranja)
                    "--swiper-pagination-bullet-inactive-color": "#525252", // inativa
                }}
            >
                {projetos.map((p) => (
                    <SwiperSlide key={p.id}>
                        <div className='w-full min-h-130 flex items-end justify-center'>
                            <span className="bg-neutral-400 h-52 w-52 rounded-full absolute top-0" />



                            <div
                                className="bg-neutral-800 flex flex-col items-center justify-center gap-3 px-6 h-100 rounded shadow-2xl w-full"
                                id={p.id}
                            >
                                <p className="text-orange-600 font-bold text-4xl text-center">
                                    {p.nome}
                                </p>

                                <p className="text-neutral-300 text-lg text-center">
                                    {p.descricao}
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    {p.Tecnologias.map((t, index) => (
                                        <span
                                            key={index}
                                            className="bg-neutral-700 text-sm px-2 py-1 rounded text-white"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2 mt-4">
                                    <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded transition">
                                        <FaGithub />
                                        GitHub
                                    </button>

                                    <button className="flex items-center gap-2 border border-neutral-600 hover:bg-neutral-700 py-2 px-4 rounded transition">
                                        <FaList />
                                        Sobre
                                    </button>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}