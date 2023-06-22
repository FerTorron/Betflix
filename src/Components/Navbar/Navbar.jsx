const Navbar = () => {
    return (
        <>
            <nav className="flex items-center relative justify-between px-5 py-6 w-11/12 m-auto">
                <h1 className='text-titleColor font-semibold text-titleSize font-Bebas tracking-wider'>Betflix</h1>
                <ul id="drawer" role="menu" className="sm:gap-8 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 dark:bg-slate-900  ">
                    <li className="font-medium text-sm p-3 hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-primary">
                        <a href="#" className="text-white text-base hover:opacity-70">Inicio</a>
                    </li>
                    <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
                        <a href="#" className="text-white text-base hover:opacity-70">Películas</a>
                    </li>
                    <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
                        <a href="#" className="text-white text-base hover:opacity-70">Series</a>
                    </li>
                </ul>
                <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative transition-all ring-titleColor rounded-full bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfWu5P3XRq40XTOquHgtUR_TZ63XAu2hvQQ&usqp=CAU')]"></div>
            </nav>
        </>
    )
}

export default Navbar