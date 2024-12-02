import React from 'react'

const Visitor = () => {

    const visitors = [
        {
            title: 'Hours',
            desc: 'Tuesday - Sunday, 10:00 AM - 6:00 PM'
        },
        {
          title: 'Admission',
          desc: 'General: $15, Senior (65+): $12, Student: $10, Children under 12: Free'
        }, 
        {
          title: 'Location',
          desc: '123 Main Street, Springfield, IL'
        },
        {
          title: 'Parking',
          desc: 'Free street parking is available in the surrounding area.'
        }       
    ]

  return (
    <section>
        <div className="container vis">
        <h2>Visitor Information</h2>
            <div className="visitors">
                {
                    visitors.map((item, index) => (
                        <div key={index} className="visitor">
                            <h4>{ item.title }</h4>
                            <p>{ item.desc }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Visitor