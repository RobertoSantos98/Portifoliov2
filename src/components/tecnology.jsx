import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Projetos as listaProjetos } from '../Data/Projetos/Projeto';

// Imports obrigatórios do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projetos() {
    return (
        <section className='flex items-center justify-center w-full min-h-screen py-16 max-w-6xl mx-auto px-4'>
            <div className='w-full flex flex-col items-center justify-center'>
                
                <div className='text-center mb-10'>
                    <h2 className='text-3xl sm:text-5xl font-bold text-white'>Projetos</h2>
                    <p className='text-neutral-400 text-sm mt-2'>Alguns dos trabalhos e aplicações que desenvolvi</p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    // Configuração para deixar o portfólio fluido em qualquer tela
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="w-full pb-14"
                    style={{
                        "--swiper-pagination-color": "#f97316",
                        "--swiper-pagination-bullet-inactive-color": "#525252",
                        "--swiper-navigation-color": "#f97316",
                    }}
                >
                    {listaProjetos.map((p) => (
                        <SwiperSlide key={p.id} className="h-full">
                            <div className='relative pt-12 h-full flex flex-col items-center'>
                                
                                {/* Container da Imagem/Logo centralizada na borda superior do card */}
                                <div className='absolute top-0 z-10 w-24 h-24 bg-zinc-700 rounded-full border-4 border-zinc-900 overflow-hidden shadow-lg flex items-center justify-center'>
                                    {p.logo ? (
                                        <img src={p.logo} alt={`Logo do projeto ${p.nome}`} className='w-full h-full object-cover' />
                                    ) : (
                                        <div className="w-full h-full bg-orange-600 flex items-center justify-center font-bold text-xl text-white">
                                            {p.nome.substring(0, 2).toUpperCase()}
                                        </div>
                                    )}
                                </div>

                                {/* Card de Conteúdo */}
                                <div className="bg-zinc-800 border border-zinc-700/50 rounded-xl flex flex-col items-center justify-between gap-4 px-6 pt-16 pb-6 h-[400px] shadow-2xl w-full">
                                    
                                    <div className="flex flex-col items-center gap-2 w-full">
                                        <h3 className="text-orange-500 font-bold text-2xl text-center">
                                            {p.nome}
                                        </h3>

                                        {/* Badges de Tecnologia */}
                                        <div className="flex flex-wrap justify-center gap-1.5 my-2">
                                            {p.Tecnologias.map((t, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-zinc-900 border border-zinc-700 text-xs px-2.5 py-0.5 rounded-full text-neutral-300 font-medium"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-neutral-300 text-sm text-center line-clamp-4 overflow-hidden mt-2">
                                            {p.descricao}
                                        </p>
                                    </div>

                                    {/* Links Semânticos de Ação */}
                                    <div className="flex gap-3 w-full mt-auto">
                                        <a 
                                            href={p.linkGit} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors duration-200"
                                        >
                                            <FaGithub />
                                            GitHub
                                        </a>

                                        <a 
                                            href={p.linkLinked} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 border border-zinc-600 hover:bg-zinc-700 text-neutral-200 font-medium py-2.5 px-4 rounded-lg text-sm transition-all duration-200"
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            Detalhes
                                        </a>
                                    </div>
                                    
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}