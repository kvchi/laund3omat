import React, { useState } from 'react'
import { machine_seethrough } from '../assets/Images'
import { IoLocationOutline, IoLogoInstagram, IoPhonePortraitOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'

export default function Contact() {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
  }


  return (
    <main className="bg-white">
      <section className="px-4 bg-primary mb-3 relative">
      <img src={machine_seethrough} alt="machine seethrough" className="absolute w-full h-full left-0 top-0 object-cover opacity-40" />
      <div className=" relative items-center justify-center flex gap-6">
          <aside className="text-center justify-center py-20">
            <p className="py-2 px-6 text-white font-bold text-sm md:text-3xl w-max">Contact Us</p>
          </aside>
          </div>
      </section>
          <div className="container mx-auto ml-20 m-20 flex flex-col md:flex-row items-center gap-6">
            <aside className="flex-1 flex flex-col gap-4">
            <p className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">Get in touch</p>
            <h3 className="text-2xl md:text-4xl font-bold text-dark">Let&apos;s talk with Us</h3>
            <p className="text-sm md:text-base leading-loose text-justify text-dark/60"> Welcome to Laund3omat! We are here to make your laundry experience as convenient and hassle-free as possible. Whether you have questions about our services, need assistance with a machine, or want to share feedback, we are always ready to help.</p>
            <div className="map-section rounded-md">
            <iframe width="90%" height="260" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Laund3omat)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
            </div>
            <div className="container flex flex-col md:flex-row tems-center gap-4 mt-10">
              <aside className="flex-1 flex flex-col gap-4">
              {
                  [
                    { id: "123450", heading: "Physical Address", text: "1 Grafton Street, Dublin, Ireland", icon: <IoLocationOutline />},
                    { id: "123451", heading: "Instagram", text: "@Laund3omat", icon: <IoLogoInstagram />},
                  ].map( contact =>
                    <div key={contact.id} className="flex gap-3">
              <span className="text-2xl md:text-3xl text-secondary flex-shrink-0 mt-1">
              {contact.icon}
              </span>
              <div className="">
                    <h5 className="text-lg md:text-xl text-dark font-bold">{contact.heading}</h5>
                    <p className="text-sm md:text-base text-dark/60">{contact.text}</p>
                  </div>
              </div>
                  )
                }
              </aside>
              <aside className="flex-1 flex flex-col gap-4">
              {
                  [
                    { id: "123450", heading: "Phone Number", text: "+234 9166750338", icon: <IoPhonePortraitOutline />},
                    { id: "123451", heading: "Email Address", text: "www.Laund3omat@gmail.com", icon: <MdOutlineMailOutline />},
                  ].map( contact =>
                    <div key={contact.id} className="flex gap-3">
              <span className="text-2xl md:text-3xl text-secondary flex-shrink-0 mt-1">
              {contact.icon}
              </span>
              <div className="">
                    <h5 className="text-lg md:text-xl text-dark font-bold">{contact.heading}</h5>
                    <p className="text-sm md:text-base text-dark/60">{contact.text}</p>
                  </div>
              </div>
                  )
                }
              </aside>
            </div>
            </aside>
            <aside className="flex-1 flex flex-col gap-4 ">
            <form action="" className='bg-secondary flex flex-col rounded-md w-full gap-4 max-w-md p-4'>
          <h3 data-aos="zoom-in-down" data-aos-delay="100" className="text-white text-xl md:text-3xl text-center font-bold">Send Us a message</h3>
              <div className='flex flex-row gap-4'>
              <input type="text" value={inputs.name} name='name' onChange={handleChange} required placeholder='Name e.g kvchi' className="flex-1 p-1 outline-none rounded-md" />
              <input type="email" value={inputs.email} name='email' onChange={handleChange} required placeholder='Email@mail.com' className="flex-1 p-1 outline-none rounded-md" />
              </div>
              <input type="text" value={inputs.subject} name='subject' onChange={handleChange} required placeholder='subject' className="flex-1 p-1 outline-none rounded-md" />
              <textarea name="message" value={inputs.message} onChange={handleChange} required placeholder='Message' className="flex-1 p-1 outline-none rounded-md w-full h-48"></textarea>
              <button className="bg-primary text-white rounded-md text-xl font-bold">Send</button>
            </form>

            </aside>
          </div>
    </main>
  )
}
