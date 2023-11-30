const Bottom = () => {
  return (
    <footer className="flex flex-col items-center bg-gray-100 pb-20">
      <h1 className="p-10 font-semibold text-2xl">Entre em contato</h1>
      <form className="flex flex-col justify-center items-center space-y-5 px-10">
        <input type="text" placeholder="name" className="py-2 px-6 w-[24rem] md:w-[37rem] 
        rounded-[0.25rem]" />
        <input type="text" placeholder="E-mail" className="py-2 px-6 w-[24rem] md:w-[37rem] 
        rounded-[0.25rem]"/>
        <textarea placeholder="Assunto da mensagem" className="py-2 px-6 
        w-[24rem] md:w-[37rem] rounded-[0.25rem]"/>
        <button 
          className="bg-purple-100 text-[1rem] font-bold
          text-white rounded-[0.25rem] w-[24rem] md:w-[37rem] py-3
          ">
            ENTRAR EM CONTATO
        </button>
      </form>
    </footer>
  )
}

export default Bottom