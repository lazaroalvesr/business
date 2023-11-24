import Image from "next/image";

export default function BestService() {
  return (
    <div className="max-w-7xl m-auto mt-24 mb-32">
      <h1 className=" 
        text-3xl text-gray-900 text-center">
        Oferecemos o melhor serviço</h1>
      <div className="grid lg:grid-cols-4 justify-center mt-14  gap-8 lg:gap-0">
        <div className="  w-64 h-72 border-b-4 bg-gray-50 border-blue-800 rounded-md">
          <div className="ml-4 mt-10">
            <div>
              <Image
                src={'/img/coroa.png'}
                alt="Foto"
                width={50}
                height={12}
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="font-bold pt-3 pb-3">SEO</h1>
              <p className="text-gray-400 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odit quod !</p>
              <button className="font-bold">Ver mais</button>
            </div>
          </div>
        </div>
        <div className="w-64 h-72 border-b-4 bg-gray-50 border-blue-800 rounded-md">
          <div className="ml-4 mt-10">
            <div>
              <Image
                src={'/img/marketing.png'}
                alt="Foto"
                width={50}
                height={12}
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="font-bold pt-3 pb-3">Marketing</h1>
              <p className="text-gray-400 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odit quod !</p>
              <button className="font-bold">Ver mais</button>
            </div>
          </div>
        </div>

        <div className="  w-64 h-72 bg-blue-800  rounded-md">
          <div className="ml-4 mt-10 text-gray-300">
            <div>
              <Image
                src={'/img/coroa_white.png'}
                alt="Foto"
                width={50}
                height={12}
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="font-bold pt-3 pb-3">Campanha Viral</h1>
              <p className="text-gray-400 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odit quod !</p>
              <button className="font-bold">Ver mais</button>
            </div>
          </div>
        </div>

        <div className="  w-64 h-72 border-b-4 bg-gray-50 border-blue-800 rounded-md">
          <div className="ml-4 mt-10">
            <div>
              <Image
                src={'/img/papel.png'}
                alt="Foto"
                width={50}
                height={12}
                className="rounded-md"
              />
            </div>
            <div>
              <h1 className="font-bold pt-3 pb-3">Outras</h1>
              <p className="text-gray-400 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odit quod !</p>
              <button className="font-bold">Ver mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}