import Image from "next/image";

export default function Agencia() {
  return (
    <div className="mb-12">
      <div className="max-w-7xl flex-col-reverse mt-20 lg:mt-32 justify-around items-center lg:flex-row flex m-auto">
        <div>
          <div className="ml-4 lg:ml-0">
            <h1 className="font-bold text-3xl pb-7">Nossa Agência</h1>
            <p className="lg:w-[600px] pb-7 text-gray-400">Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
              Perspiciatis quis ducimus aperiam
              et mollitia! Obcaecati deleniti harum,
              dolor ullam quae cupiditate excepturi
              iusto sit architecto voluptate eos
              necessitatibus soluta praesentium?</p>
            <p className="lg:w-[600px] text-gray-400">Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
              Perspiciatis quis ducimus aperiam
              et mollitia! Obcaecati deleniti harum,
              dolor ullam quae cupiditate excepturi
              iusto sit architecto voluptate eos
              necessitatibus soluta praesentium?</p>
          </div>
          <button className="bg-blue-800 text-gray-50 py-2 px-12 rounded-md mt-4 ml-16 lg:ml-0">Comece Agora</button>
        </div>
        <div>
          <Image
            src={'/img/notebook.png'}
            alt="note"
            width={520}
            height={120}
            className="lg:w-[520px]"
          />
        </div>
      </div>
    </div>
  )
}