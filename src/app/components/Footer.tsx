import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative">
      <div className="bg-blue-500 max-w-7xl lg:justify-between h-32 lg:w-[1180px] w-[340px] ml-2 -top-16 lg:left-44 absolute flex lg:flex-row flex-col rounded-md items-center m-auto">
        <h1 className="text-3xl text-gray-50 lg:pl-6 pl-2 pt-4">Pronto para começar ?</h1>
        <button className=" mt-4 mr-6
            bg-gray-50 text-blue-900 py-2 px-12 w-56 rounded-md
            ">Contate-nos
        </button>
      </div>
      <div className="max-w-full bg-blue-900 mt-20 pb-6">
        <div className="grid grid-cols-1  lg:grid-cols-4 max-w-7xl m-auto pt-32">
          <div className="ml-12  items-center mt-4">
            <div className="flex items-center">
              <Image
                src={'/img/Logo.png'}
                alt="Logo"
                width={40}
                height={12}
              />
              <div>
                <h1 className="text-gray-50 pl-3 text-2xl">BiznesZone</h1>
              </div>
            </div>
            <div className="mt-4 flex gap-1">
              <div>
                <Image
                  src={'/img/Facebook.png'}
                  alt="facebook_icone"
                  width={40}
                  height={12}
                />
              </div>
              <div>
                <Image
                  src={'/img/Pinterest.png'}
                  alt="facebook_icone"
                  width={40}
                  height={12}
                />
              </div>
              <div>
                <Image
                  src={'/img/X.png'}
                  alt="facebook_icone"
                  width={40}
                  height={12}
                />
              </div>
            </div>
          </div>
          <div className="pt-5 ml-12 lg;ml-0">
            <div>
              <h1 className="text-2xl text-gray-50">Contate-nos</h1>
            </div>
            <div>
              <ul className="text-gray-400 pt-4">
                <li className="pb-2">+00 123 565 456</li>
                <li className="pb-2">BiznesZone@email.com</li>
                <li className="pb-2">BiznesZone@email.com</li>
                <li className="pb-2">City</li>
              </ul>
            </div>
          </div>
          <div className="pt-5 ml-12 lg;ml-0">
            <div>
              <h1 className="text-2xl text-gray-50">Serviços</h1>
            </div>
            <div>
              <ul className="text-gray-400 pt-4">
                <li className="pb-2">SEO</li>
                <li className="pb-2">Marketing</li>
                <li className="pb-2">Campanha Viral</li>
              </ul>
            </div>
          </div>
          <div className="pt-5 ml-12 lg:ml-0">
            <div>
              <h1 className="text-2xl text-gray-50">Sobre nos</h1>
            </div>
            <div>
              <ul className="text-gray-400 pt-4">
                <li className="pb-2">Home</li>
                <li className="pb-2">Sobre nos</li>
                <li className="pb-2">Politica de Privacidade</li>
                <li className="pb-2">Sidemap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}