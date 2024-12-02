import React from 'react'

import image1 from '../assets/collection1.png'
import image2 from '../assets/collection2.png'
import image3 from '../assets/collection3.png'

const Collection = () => {

    const collections = [
        {
            image: image1,
            name: 'Classical Collection'
        },
        {
            image: image2,
            name: 'Contemporary Art'
        },
        {
            image: image3,
            name: 'Featured Exhibit'
        }
    ]

  return (
    <section>
        <div className="container collect">
            <div className="collect-top">
                <h1>Explore Our Collection</h1>
                <p>From ancient Greek sculptures to cutting-edge multimedia installations,
                    our gallery showcases a wide range of artistic styles and movements.
                </p>
                <a href="" className="btn">View All</a>
            </div>
            <div className="collections">
                {
                    collections.map((item, index) => (
                        <div key={ index } className="collection">
                            <img src={ item.image }  />
                            <h4> { item.name }</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Collection