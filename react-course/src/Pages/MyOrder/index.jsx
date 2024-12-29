import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  console.log(index)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black-500 cursor-pointer'/>
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0]?.products?.map(product => {
            return (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                />
            )
          })
        }
      </div>
    </Layout>
  )
}

export default MyOrder