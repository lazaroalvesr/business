import Image from "next/image";

export default function Avaliacao() {
  return (
    <div className="max-w-7xl m-auto pt-12 pb-32">
      <div className="flex justify-between">
        <div className="hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="m-auto">
          <h1 className="text-3xl font-bold lg:w-full w-56 text-center ">O que os Clientes Dizem</h1>
        </div>
        <div className="hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 pt-14 relative justify-center">
        <div className="hidden lg:block bg-gray-50 w-44 h-56 absolute -left-36 rounded-md"></div>
        <div className="bg-gray-50 w-[343px] ml-2 lg:ml-0 lg:w-96 h-64 rounded-md ">
          <div className="lg:ml-12 ml-6 mt-12">
            <div className="flex items-center">
              <Image
                src={'/img/avatar_1.png'}
                alt="avatar"
                width={64}
                height={12}
              />
              <div className="pl-2">
                <h1>Johan Dogs</h1>
                <p>Empresário</p>
              </div>
              <div className="ml-20">
                <Image
                  src={'/img/aspas.png'}
                  alt="12"
                  width={41}
                  height={12}
                />
              </div>
            </div>
            <div>
              <p className="text-gray-400 w-80 pt-4">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sunt iure ratione nihil
                cum veniam quia mollitia consequatur. </p>
            </div>
          </div>
          <div className="lg:-ml-7 -ml-14">
            <Image
              src={'/img/avaliacao.png'}
              alt="avaliacao"
              width={351}
              height={12}
            />
          </div>
        </div>
        <div className="bg-gray-50  w-[343px] ml-2 lg:ml-0 lg:w-96 h-64 rounded-md ">
          <div className="lg:ml-12 ml-6 mt-12">
            <div className="flex items-center">
              <Image
                src={'/img/avatar_2.png'}
                alt="avatar"
                width={64}
                height={12}
              />
              <div className="pl-3">
                <h1>jhon Doese</h1>
                <p>Empresário</p>
              </div>
              <div className="ml-20">
                <Image
                  src={'/img/aspas.png'}
                  alt="12"
                  width={41}
                  height={12}
                />
              </div>
            </div>
            <div>
              <p className="text-gray-400 w-80 pt-4">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sunt iure ratione nihil
                cum veniam quia mollitia consequatur. </p>
            </div>
          </div>
          <div className="lg:-ml-7 -ml-14">
            <Image
              src={'/img/avaliacao.png'}
              alt="avaliacao"
              width={351}
              height={12}
            />
          </div>
        </div>
        <div className="bg-gray-50  w-[343px] ml-2 lg:ml-0 lg:w-96 h-64 rounded-md ">
          <div className="lg:ml-12 ml-6 mt-12">
            <div className="flex items-center">
              <Image
                src={'/img/avatar_3.png'}
                alt="avatar"
                width={64}
                height={12}
              />
              <div className="pl-3">
                <h1>Jonathan watkl</h1>
                <p>Empresário</p>
              </div>
              <div className="lg:ml-20 ml-16">
                <Image
                  src={'/img/aspas.png'}
                  alt="12"
                  width={41}
                  height={12}
                />
              </div>
            </div>
            <div>
              <p className="text-gray-400 w-80 pt-4">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sunt iure ratione nihil
                cum veniam quia mollitia consequatur. </p>
            </div>
          </div>
          <div className="lg:-ml-7 -ml-14">
            <Image
              src={'/img/avaliacao.png'}
              alt="avaliacao"
              width={351}
              height={12}
            />
          </div>
        </div>
        <div className="hidden lg:block bg-gray-50 w-36 h-56 absolute -right-28 rounded-md"></div>
      </div>
    </div>
  )
}