import { HiOutlineShoppingCart } from 'react-icons/hi'

function Header({ cart }) {
    return (
        <div className='px-20 py-5 flex justify-between items-center pt-3 mb-6 bg-white shadow-md sticky top-0'>

            <h1 className='text-3xl font-semibold '>Alışveriş Sepeti</h1>

            <div className='relative'>
                <HiOutlineShoppingCart className='text-3xl' />
                {cart.length > 0 && <span className='bg-red-500 text-white rounded-full flex w-5 h-5 items-center justify-center absolute -top-2 -right-3 text-sm'>{cart.length}</span>}
            </div>

        </div>
    )
}

export default Header