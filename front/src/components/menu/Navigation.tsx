import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className='flex flex-col gap-5 border w-[300px] p-5 items-center mx-auto relative top-96'>
        <Link className='text-3xl' to="/game">Jouer</Link>
        <Link className='text-3xl' to="/cards-collection">Collection</Link>
        <Link className='text-3xl' to="/shop">Boutique</Link>
        <Link className='text-3xl' to="/settings">Paramètres</Link>
    </nav>
  )
}
