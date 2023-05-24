import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <main
      className={
        'grid grid-cols-1 justify-items-center align-items-center h-screen p-10'
      }
    >
      <section className={'grid justify-items-center align-items-center'}>
        <h2 className="text-2xl font-bold mb-4 text-center">¡Hola!</h2>
        <p className="text-lg text-center">
          Bienvenido a nuestra extensión diseñada para facilitarte el acceso a
          la gran variedad de oportunidades que InfoJobs ofrece en su portal.
          Nuestro objetivo es proporcionarte una herramienta rápida y eficiente
          para buscar ofertas de trabajo que se alineen con tu campo de
          conocimiento y experiencia. Con nuestra extensión, encontrarás el
          camino más directo para descubrir y aplicar a las posiciones que mejor
          se ajustan a tus habilidades e intereses.
        </p>
        <Link href={'/dashboard/search'}>
          <div className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-gray-900 rounded shadow ripple hover:shadow-lg hover:bg-gray-800 focus:outline-none">
            Continuar
          </div>
        </Link>
      </section>
    </main>
  )
}

export default Home
