import React from 'react'
import ImageSlider from '../components/ImageSlider'


const popularItems = [
  {
    src: require('../assets/images/Popular-item-1.jpg'),
    title: 'ALFREDO FETTUCCINE PASTA',
    price: 129,
  },
  {
    src: require('../assets/images/Popular-item-1.jpg'),
    title: 'CHICKEN PIZZA',
    price: 199,
  },
  {
    src: require('../assets/images/Popular-item-1.jpg'),
    title: 'BURGER DELUXE',
    price: 149,
  },
  {
    src: require('../assets/images/Popular-item-1.jpg'),
    title: 'VEGETABLE SALAD',
    price: 99,
  },
];


const Home = () => {
  return (
    <div>
    <ImageSlider/>

   <div className='container'>
   <div className="row py-5">
    <div>
      <h2>Popular Items</h2>
      <p>Most ordered right now</p>
    </div>
  {popularItems.map((item, index) => (
    <div className="col-3" key={index}>
      <div
        className="popular-item-card p-3 position-relative"
        style={{
          backgroundImage: `url(${item.src})`,
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
            zIndex: 1,
          }}
        ></div>

        <div
          className="d-flex flex-column justify-content-between align-items-center h-100 position-relative"
          style={{ zIndex: 2 }}
        >
          <div>
            <h2 className="popular-item-heading text-center text-white">
              {item.title}
            </h2>
          </div>
          <div className="text-end">
            <span className="popular-item-price d-inline">RS: {item.price}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
   </div>

<div className='container'>
  <img src={require('../assets/images/Online-deals-banner.png')} className='w-100 h-100 rounded-4' alt="" />
<div className='row g-3 py-5'>
<div className='col-6'>
  <div className='w-100 d-flex gap-3 rounded-3 p-3 deals-card'>
  <div className='w-40' >
<div className='w-100'>
  <img src={require('../assets/images/online-deals-1.jpg')} className='w-100 h-100 rounded-3' alt=""  />
</div>
  </div>

  <div className='w-60 d-flex  align-items-center position-relative'>
  <div class="discount-tag">
  <span>30% OFF</span>
</div>
  <div>
    <h4>ONLINE DEAL 01</h4>
    <span>Serves 1 OR 2 --- ANY TWO CHICKEN ROLLS OF YOUR
    CHOICE</span>
    <p><span class="text-muted" style={{textDecoration:'line-through'}}>Rs. 700</span>
    Rs. 490</p>
  </div>
  </div>

  </div>
</div>



</div>
</div>

    </div>
  )
}

export default Home
