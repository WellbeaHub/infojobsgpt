import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main className="max-w-[1500px]">
      <div className="flex-row flex mb-6">
        <div className="bg-[#222222] h-[3rem] w-[22rem] p-5 rounded-2xl flex flex-row text-white justify-between items-center">
          <p className="text-sm text-[#fdfdfd]">Search Result</p>
          <p className="text-[0.60rem] text-[#b4b4b4]">29 Jobs Found</p>
        </div>
        <div className="bg-[#f8f8f8] border border-gray-200 h-[3rem] ml-5 rounded-2xl flex flex-row text-black justify-between items-center focus:bg-black flex-1">
          <p className="ml-3 absolute">🔥</p>
          <input
            placeholder="Search for job title or company name"
            type="text"
            className="h-10 w-full rounded-2xl font-sans placeholder-black bg-transparent font-light focus:outline-none px-10 placeholder-gray-500/50"
          />
        </div>
        {/* <div className="bg-gray-100/80 border border-gray-200 h-10 ml-5 p-3 rounded-2xl flex flex-row text-black justify-between items-center">
          <p className="text-xs">🔥</p>
        </div> */}
      </div>

      <div className="w-[22rem] bg-gray-100/80 rounded-[1.5rem] p-6">
        <div className="flex flex-row items-center justify-between mb-5">
          <div className="flex flex-row">
            <div className="h-16 w-16 bg-red-200 rounded-2xl" />
            <div className="ml-4">
              <p className="text-[0.80rem] font-medium line-clamp-1">Apple</p>
              <p className="font-bold line-clamp-1">UI Designer</p>
              <p className="text-[0.80rem] font-medium line-clamp-1">Madrid</p>
            </div>
          </div>
          <p>🔥</p>
        </div>

        <div className="flex flex-row flex-wrap items-center gap-4">
          <div className="bg-white p-[0.3rem] px-5 rounded-xl">
            <p className="text-[0.80rem]">Contrato indefinido</p>
          </div>
          <div className="bg-white p-[0.3rem] px-5 rounded-xl">
            <p className="text-[0.80rem]">Jornada completa</p>
          </div>
          <div className="bg-white p-[0.3rem] px-5 rounded-xl">
            <p className="text-[0.80rem]">45.000 € - 50.000 €</p>
          </div>
        </div>

        <p className="line-clamp-3 mt-5 text-sm text-black/50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          similique nisi amet illum id laborum, a animi minus tempore fugit
          officiis quisquam sint eos sed! Ipsa aspernatur corporis illo
          doloremque?
        </p>
        <hr className="border border-black/25 mt-4" />
        <div className="flex flex-row justify-between items-center mt-2">
          <p className="line-clamp-3 text-[0.5rem] text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 🤟🏻
          </p>
          <span className="text-[0.5rem]">1h ago</span>
        </div>
      </div>
    </main>
  )
}

export default Home
