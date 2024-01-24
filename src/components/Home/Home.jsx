import { HomeContent } from './HomeContent'
import { Nav } from './Nav'
import { TopLeftImg } from './TopLeftImg'

export function Home () {
  return (
    <div className='h-screen w-screen relative flex justify-between text-center items-center text-white flex-col mx-auto'>
      <TopLeftImg />
      <HomeContent />
      <Nav />
    </div>
  )
}
