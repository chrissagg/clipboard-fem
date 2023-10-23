import Image from 'next/image'
import images from './constants/images'


export default function Home() {
  return (
    <div className="min-h-screen bg-semiwhite bg-[url('/assets/bg-header-mobile.png')] bg-top bg-no-repeat bg-contain min-w-full">
      <div className="container flex flex-col items-center px-5">
        <main className="flex flex-col pt-[125px] items-center">
          <h1 className="text-transparent opacity-0 h-0">Clipboard</h1>
          <Image src={images.logo} height={125} width={125} alt='clipboard-logo'></Image>

          <h2 className='head-text text-darkGray mt-[4rem]'>A history of everything you copy</h2>
          <p className='p-text text-grayish mt-2'>Clipboard allows you to track and organize everything you copy. Instantly acces your clipboard on all your devices.</p>
        </main>
      </div>
    </div>
  )
}

//'../assets/logo.svg'