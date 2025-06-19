import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='bg-base-300 border-b border-base-content/10'>
            <div className='mx-auto max-w-6xl p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl text-primary font-bold tracking-tighter 
                font-mono'>Take Notes</h1>
                    <Link to={"/create"} className='flex items-center gap-2 px-4 py-2 bg-yellow-600 
                    text-white rounded-lg hover:bg-white hover:text-yellow-600 transition-colors'>
                        <Plus className='w-4 h-4 mr-2' />
                        <span className='font-bold'>Create Note</span>
                    </Link>


                </div>


            </div>

        </header>


    )
}

export default Navbar
