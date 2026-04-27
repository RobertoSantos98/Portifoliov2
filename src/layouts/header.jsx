

export default function Header() {
    return (
        <>
            <header className="w-full absolute">
                <nav className="max-w-6xl mx-auto flex items-end justify-end ">
                    <ul className="flex items-center">
                        <li className="py-6 px-4 hover:bg-orange-600 hover:text-white">
                            <a href="" className="text-neutral-300 text-sm ">Home</a>
                        </li>

                        <li className="py-6 px-4 hover:bg-orange-600 text-white">
                            <a href="" className="text-neutral-300 text-sm">Sobre</a>
                        </li>

                        <li className="py-6 px-4 hover:bg-orange-600 text-white">
                            <a href="" className="text-neutral-300 text-sm">Projetos</a>
                        </li>

                        <li className="py-2 px-2 text-white">
                            <button className="bg-orange-600 hover:bg-orange-500 hover:text-white py-4 px-5 rounded">
                                <a href="" className="text-neutral-300 text-sm hover:text-white">Contato</a>
                            </button>
                        </li>


                    </ul>
                </nav>
            </header>
        </>
    )
}