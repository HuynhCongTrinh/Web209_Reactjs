import React from 'react'

function About() {
  return (
    <>
    <div className="flex ">
        <div className='mt-96 ml-20'>
            <p>ABOUT</p>
            <h1 className='font-oswald text-4xl'>ADIDAS BRAND MOMENTUM DRIVES BETTER-THAN-EXPECTED RESULTS IN THE FIRST QUARTER OF 2024</h1>
            <div className='flex mt-5'>
                <img src="https://t4.ftcdn.net/jpg/04/17/34/89/360_F_417348945_08aoaDhBzLAfBu5ehXCQgLClPYFBfRpV.jpg" className='rounded-full w-20 h-20 ' alt="" />
                <div className='ml-5 mt-3' >
                    <h3>Herzogenaurach</h3>
                    <p>APRIL 30, 2024</p>
                </div>
            </div>
        </div>
        <div>
            <img src="https://res.cloudinary.com/confirmed-web/image/upload/c_lfill,w_700,h_700/v1714408269/adidas-group/images/2024/04302024_EL_Q1_Press_Release_iucwgw.jpg" alt="" />
        </div>
    </div>
    <div>
        <h3 className='ml-5  text-4xl font-semibold '>Major developments:

Currency-neutral sales up 8% driven by growth in all regions except North America
Double-digit DTC growth reflects strong adidas sell-through
Gross margin improves 6.4pp to 51.2%, reflecting healthier inventory levels, reduced discounting, lower sourcing costs and a more favorable business mix
Operating profit of € 336 million compared to € 60 million in the prior-year period
Inventories down more than € 1.2 billion versus the prior year to € 4.4 billion
Top- and bottom-line guidance upgraded on April 16 due to successful start to the year

adidas CEO Bjørn Gulden:</h3>
        <p className=' ml-5 mt-5 font-sans text-xl p-4'>“I am very happy to see that the business in Q1 developed better than we had expected. Sales, gross margin, and operating profit were all better than initially planned. Our full-price sales in our DTC channels were strong and our sell-out with our retail partners was higher than the sell-in. This means lower inventories, less discounts, and better gross margins both for our retail partners and for us.</p>
        <p className=' ml-5 mt-5 font-sans text-xl p-4'>The growth is of course driven by our Lifestyle business right now, especially Originals footwear, but we also see that the higher end of our Running, Football and Basketball product is doing well. The demand for our footwear franchises Samba, Gazelle, Spezial, and Campus is still very strong and growing, but we also see new franchises like SL72 starting to become high in demand. We feel we have a very strong pipeline of product for the next quarters.</p>
        <p className=' ml-5 mt-5 font-sans text-xl p-4'>The markets are still volatile and not easy, but we feel we are making progress everywhere. The increased brand heat and the improved sell-through is supporting us in building better relationships with our retail partners and it buys us time to continue to invest in making adidas again a better brand and company. We will continue to ‘over invest’ into the product, into the brand, into sales and marketing to ensure continued growth. We will not try to optimize short-term profit. We know we are not as good as we should be, but I feel that we are making the progress that we had hoped for.</p>
        <p className=' ml-5 mt-5 font-sans text-xl p-4'>We now look forward to celebrate the great sports events like the Euro 2024, Copa América, the Olympics and Paralympics. It is a great year for sports – let us all enjoy it!”</p>
        <i className=' ml-5 mt-5 font-sans text-xl p-4'>Thanks You- Björn Gulden !</i>
    </div>
    </>
  )
}

export default About