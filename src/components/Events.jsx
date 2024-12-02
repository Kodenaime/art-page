import React from 'react'

import image1 from '../assets/event1.png'
import image2 from '../assets/event2.png'


const Events = () => {

    const events = [
        {
            image: image1,
            title: 'Art History Lecture Series',
            body: 'Every Thursday, 6:00PM - 7:30PM'
        },
        {
            image: image2,
            title: 'Student Porfolio Showcase',
            body: 'Friday May 13th, 4:00PM - 6:00PM'
        }
    ]

  return (
    <section>
        <div className="container events-container">
            <h2>Upcoming Events</h2>
            <div className="events">
                {
                    events.map((item, index) => (
                        <div className="event" key={index}>
                            <img src={ item.image }  />
                            <h4>{ item.title }</h4>
                            <p>{ item.body }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Events