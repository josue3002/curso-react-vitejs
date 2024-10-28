import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div> 
                    <XMarkIcon 
                    className='h-6 w-6 text-black-500 cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
                
            </div>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                    <span className='font-medium text-md'>${context.productToShow.title}</span>
                    <span className='font-light text-se'>${context.productToShow.description}</span>
                </p>
        </aside>
    )
}

export default CheckoutSideMenu