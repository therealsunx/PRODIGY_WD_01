import logo from './logo.svg';
import './App.css';
import { Link } from 'react-scroll';
import { useRef, useState } from 'react';

const navbarItems = [
  { title: "Home", id: "home" }, { title: "About", id: "about" }, { title: "Services", id: "services" }, { title: "Contact", id: "contact" }
];

const services = [
  {
    title: "Graphic Design",
    description: "Elevate your brand with stunning visuals. Our graphic design services cover everything from logos to marketing materials, ensuring a cohesive and eye-catching brand identity."
  },
  {
    title: "Mobile App Development",
    description: "Transform your ideas into interactive mobile experiences. Our app development services cater to both iOS and Android platforms, delivering user-friendly and innovative solutions for your business needs."
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence and engage your audience with our digital marketing services. From social media management to targeted campaigns, we help you reach and connect with your target customers."
  },
  {
    title: "Content Writing",
    description: "Words that resonate! Our content writing services craft compelling and SEO-friendly content. Whether it's website copy, blog posts, or product descriptions, we create content that captivates and converts."
  },
  {
    title: "E-commerce Solutions",
    description: "Open your virtual store with confidence. Our e-commerce solutions cover everything from website development to payment gateway integration, providing a seamless online shopping experience for your customers."
  },
  {
    title: "Data Analytics",
    description: "Uncover valuable insights from your data. Our data analytics services help you make informed decisions by analyzing and interpreting data. From trend analysis to predictive modeling, we turn raw data into actionable intelligence."
  }
];

function App() {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    mail: '',
    servtype: '',
    servdesc: '',
    budget: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email successfully sent !");
    setForm({
      name: '',
      mail: '',
      servtype: '',
      servdesc: '',
      budget: ''
    });
  }
  return (
    <div className='flex flex-col gradient'>
      <div className='fixed top-0 left-0 w-full flex justify-between rounded-b-2xl bg-[#000c]'>
        <Link
          to="home"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
        >
          <img src={logo} alt="logo" className='w-20 h-20 rounded-xl hover:invert' />
        </Link>
        <div className='flex flex-wrap gap-2 md:gap-8 items-center px-4 lg:px-8 text-sm lg:text-lg'>
          {navbarItems.map((n, i) => (
            <Link
              className='px-2 md:px-8 py-2 rounded-2xl cursor-pointer bg-black hover:invert w-fit'
              to={n.id}
              spy={true}
              offset={-100}
              smooth={true}
              duration={500}
              key={i}
            >
              {n.title}
            </Link>
          ))}
        </div>
      </div>

      <div className='flex flex-col mt-16 justify-center'>
        <div className='min-h-screen flex flex-col p-4 md:p-16 justify-center' id="home">
          <p className='text-3xl md:text-5xl font-mono font-bold'>WELCOME !!</p>
          <p className='mt-12 text-xl'>
            This is the responsive and interactive web page made as a first task during the internship at PRODIGY INFOTECH.
          </p>
          <p className='mt-4 mb-12 text-sm'>
            Clicking on the navigation items takes you to respective pages by scrolling there. I don't know what content to put here so I will just put some random content throughout the page.
          </p>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className='px-10 py-3 bg-white text-black rounded-xl hover:bg-[#0ff] shadow-md border-2 hover:shadow-[#0ff] cursor-pointer w-fit'
          >
            Contact
          </Link>
        </div>

        <div className='min-h-screen flex flex-col gap-4 p-8 md:p-16' id="about">
          <p className='text-3xl md:text-5xl font-mono font-bold'>About</p>
          <p className='text-md'>
            We are a software development company with wide range of solutions for your IT Problems
          </p>

          <p className='mt-6 md:w-2/3'>
            Welcome to SomeRandomCompany Solutions, your gateway to a transformative digital experience! At SomeRandomCompany Solutions,
            we are passionate about delivering a spectrum of cutting-edge services that redefine the way you engage
            with the digital world. Through our expertise in web development, we craft seamless and responsive
            websites, ensuring an impactful online presence for your brand. Dive into the realm of creativity with
            our graphic design services, where every visual element is meticulously curated to tell your unique
            story. As your technology partner, we specialize in mobile app development, offering dynamic solutions
            that cater to the diverse needs of both iOS and Android users. With a keen focus on digital marketing,
            we amplify your brand's voice, reaching your target audience through strategic campaigns. Our commitment
            extends to e-commerce solutions that streamline online transactions, making your business accessible to
            a global audience. At SomeRandomCompany Solutions, we are not just service providers; we are catalysts for your digital
            success. Join us in unlocking the full potential of your brand in the digital era!
          </p>

        </div>

        <div className='min-h-screen flex-col gap-12 p-8 md:p-16' id="services">
          <p className='text-3xl md:text-5xl font-mono font-bold'>Services</p>
          <p className='py-4 text-md'>
            We provide wide range of services
          </p>

          <div className='mt-6 flex flex-wrap gap-8 md:gap-20 justify-around'>
            {services.map((s, i) => (
              <div key={i} className="my-6 px-6 py-4 rounded-xl md:w-[20rem] shadow-xl bg-[#068] hover:bg-[#08a]">
                <p className='text-2xl font-bold py-4 text-center'>{s.title}</p>
                <p>{s.description}</p>
              </div>
            ))}
          </div>

        </div>

        <div className='min-h-screen flex flex-col gap-4 p-8 md:p-16' id="contact">
          <p className='text-3xl md:text-5xl font-mono font-bold'>Contact</p>
          <p className='text-md'>
            You can reach to us for any service.  We will try to get back to you soon !!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-6 p-6 lg:w-1/3 border-2 rounded-2xl border-gray-500 shadow-2xl shadow-black hover:shadow-[#0ff] hover:border-[#0ff]'>
            <div className='flex flex-col'>
              <label className='font-bold px-2'>Name</label>
              <input type="text" name="name" placeholder='John Doe' value={form.name} onChange={handleFormChange} className='px-4 py-2 my-2 bg-[#0000] rounded-xl border-2 shadow-lg   border-black focus:shadow-[#0ff] focus:outline-[#0ff] focus:text-[#0ff]' />
            </div>

            <div className='flex flex-col'>
              <label className='font-bold px-2'>Email</label>
              <input type="text" name="mail" placeholder='johndoe@example.com' value={form.mail} onChange={handleFormChange} className='px-4 py-2 my-2 bg-[#0000] rounded-xl shadow-lg border-2 border-black  focus:shadow-[#0ff] focus:outline-[#0ff] focus:text-[#0ff]' />
            </div>

            <div className='flex flex-col'>
              <label className='font-bold px-2'>Service Type</label>
              <input type="text" name="servtype" placeholder='Web App' value={form.servtype} onChange={handleFormChange} className='px-4 py-2 my-2 bg-[#0000] rounded-xl border-2 border-black shadow-lg  focus:shadow-[#0ff] focus:outline-[#0ff] focus:text-[#0ff]' />
            </div>

            <div className='flex flex-col'>
              <label className='font-bold px-2'>Service Description</label>
              <textarea rows={6} name="servdesc" value={form.servdesc} onChange={handleFormChange} placeholder='Web App for my company with our services, testimonials, etc featured. There should also be a online shopping option for our products.' className='px-4 py-2 my-2 bg-[#0000] rounded-xl border-2 border-black shadow-lg  focus:shadow-[#0ff] focus:outline-[#0ff] focus:text-[#0ff]' />
            </div>

            <div className='flex flex-col'>
              <label className='font-bold px-2'>Budget Range</label>
              <input type="text" name="budget" value={form.budget} onChange={handleFormChange} placeholder='$100 - $500' className='px-4 py-2 my-2 bg-[#0000] rounded-xl border-2 border-black shadow-lg  focus:shadow-[#0ff] focus:outline-[#0ff] focus:text-[#0ff]' />
            </div>

            <button type="submit" className='px-8 py-3 rounded-xl shadow-xl font-bold text-xl bg-[#6666] border-2 hover:shadow-[#0f0] hover:text-[#0f0] hover:border-[#0f0]'>
              Send
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default App;
