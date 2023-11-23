import Image from "next/image";

export default function Solutions() {
  return (
    <div className="bg-blue-900 w-full max-w-full lg:h-[600px] pb-12">
      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 ml-3" >
          <div className="mt-20 ">
            <Image
              src={'/img/laptop.jpg'}
              alt="ola"
              width={462}
              height={12}
              className="rounded-3xl lg:w-[462px] w-[340px]"
            />
          </div>
          <div className="mt-20">
            <h1 className="text-gray-50 text-2xl">Soluções Simples</h1>
            <p className="text-gray-400 lg:w-[600px] py-5">Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
              Quod incidunt commodi facere
              animi sunt explicabo, nulla
              voluptatum omnis fuga quam earum
              id, neque, labore molestiae
              corporis suscipit deleniti
              ipsam mollitia!</p>
            <div>
              <ul>

                <li className="flex pb-3 text-gray-100 items-center">
                  <div className="flex items-center justify-center mr-8
                w-8 h-8 text-lg bg-blue-800/80 rounded-full
                ">
                    <span className="w-2 h-20 lg:h-8 bg-blue-800/80 mt-14"></span>
                    <span className="-ml-2">1</span></div>
                  <div>
                    <p>Contate-nos</p>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </li>

                <li className="flex pb-3 text-gray-100 items-center">
                  <div className="flex items-center justify-center mr-8
                w-8 h-8 text-lg bg-blue-800/80 rounded-full
                ">
                    <span className="w-2  h-20 lg:h-8 bg-blue-800/80 mt-14"></span>
                    <span className="-ml-2">2</span></div>
                  <div>
                    <p>Consulta</p>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </li>

                <li className="flex pb-3 text-gray-100 items-center">
                  <div className="flex items-center justify-center mr-8
                w-8 h-8 text-lg bg-blue-800/80 rounded-full
                ">
                    <span className="w-2  h-20 lg:h-8 bg-blue-800/80 mt-14"></span>
                    <span className="-ml-2">3</span></div>
                  <div>
                    <p>Faça a encomenda</p>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </li>

                <li className="flex pb-9 text-gray-100 items-center">
                  <div className="flex items-center justify-center mr-8
                w-8 h-8 text-lg bg-blue-800/80 rounded-full
                "><span>4</span></div>
                  <div>
                    <p>Pagamento</p>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-4">
              <button className="
            bg-gray-50 text-blue-900 py-2 px-12 w-44 rounded-md
            ">Iniciar </button>
              <button
                className="border border-gray-100 ml-4
              text-gray-50 py-2 px-5 w-64 rounded-md
             "
              >Consulte Mais informação</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}