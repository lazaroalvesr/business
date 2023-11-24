import Image from "next/image";

export default function Main() {
  return (
    <div className="lg:max-w-7xl 
    m-auto lg:flex-row flex-col lg:mt-32 mt-16 mb-12 
    justify-between flex">
      <div className="pl-4 lg:pl-0 pb-6 lg:pb-0">
        <h1 className=" 
        text-5xl text-gray-900 lg:w-96 w-[320px]"
        >Nós criamos a solução para os seus negócios</h1>
        <p className="text-gray-400 lg:w-80 pt-4">Lorem ipsum dolor sit,
          amet consectetur adipisicing elit.
          Ut perspiciatis natus dolore repudiandae
          facere? Blanditiis nihil quia iure velit maxime.
        </p>
        <button className="bg-blue-800 text-gray-50 py-2 px-12 rounded-md mt-4">Comece Agora</button>
      </div>
      <div>
        <Image
          src={'/img/scrum.jpg'}
          alt="Foto"
          width={300}
          height={12}
          className="lg:w-[500px] rounded-md w-[320px] ml-4 lg:ml-0"
        />
      </div>
    </div>
  )
}