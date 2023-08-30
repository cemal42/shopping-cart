

function Cart({ cart, emptyCart }) {

    const totalPrice = cart.reduce((acc, cart) => acc + cart.price, 0)

    return (
        <div className='border w-80 ml-auto p-4 mt-2 rounded-md shadow-md'>
            <h2 className='font-semibold'>Sepet</h2>
            <ul className='my-2'>
                {cart.map(data => (
                    <li key={data.id} className='flex justify-between'>
                        <span>{data.title}</span>
                        <span>{data.price} TL</span>
                    </li>
                ))}
            </ul>
            <hr />
            <p className='my-2 font-semibold text-blue-600'>Toplam : {totalPrice} TL</p>
            <button onClick={emptyCart} className='bg-red-500 w-full py-1 mt-2 rounded-sm text-white hover:bg-red-600 transition-all'>Sepeti Boşalt</button>
        </div>
    )
}

export default Cart