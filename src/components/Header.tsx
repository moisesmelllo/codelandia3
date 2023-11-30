

const Header = () => {
  return (
    <header className="bg-gray-100 px-12">
      <div className="flex flex-col lg:flex-row justify-around 
      items-center py-10 text-start
       max-w-screen-xl mx-auto">
        <div className="max-w-[581px] mb-12">
          <h1 className="mb-8 font-semibold text-4xl max-w-[32rem]">
            Encontre os <span className="text-purple-100">
            melhores artigos </span> 
            de programação em um só lugar
          </h1>
          <p className="font-normal text-xl mb-8">
            Explore o topo da programação em um só lugar! <br />
            Seu destino único para dicas e tendências atuais.
          </p>
          <button 
            className="bg-purple-100
            text-white px-8 py-2 rounded-md mb-8"
          >
            Buscar artigos
          </button>
        </div>
        <div>
          <img
            src="./images/header.png"
            alt="header"
            className="w-64"
          />
        </div>
      </div>
    </header>
  )
}

export default Header