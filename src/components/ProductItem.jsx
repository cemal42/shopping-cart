

function ProductItem({ cart, data, setCart }) {

    const addToCart = (data) => {
        setCart(prev => [...prev, data])
    }

    const findProduct = cart.find(item => item.id === data.id)

    return (
        <div className='p-4 m-2 rounded-lg shadow-md'>
            <img className='w-full h-48 object-cover rounded-t-md' src={data.images[0]} alt="ürün" />

            <div className='mt-4'>
                <h2 className='text-lg mb-2'>{data.title}</h2>
                <p className='font-semibold mb-2 text-gray-700'>{data.price} TL</p>
                <button disabled={findProduct} onClick={() => addToCart(data)} className={`w-full bg-green-500 rounded-md py-[8px] text-white hover:bg-green-600 transition-all ${findProduct && 'opacity-50'}`}>Sepete Ekle</button>
            </div>
        </div>
    )
}

export default ProductItem