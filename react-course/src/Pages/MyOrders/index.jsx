import Layout from '../../components/Layout'

function MyOrders() {
    return (
        <Layout>
          MyOrders
          <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.order?.slice(-1)[0](product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
        </Layout>
    )
  }
  
  export default MyOrders