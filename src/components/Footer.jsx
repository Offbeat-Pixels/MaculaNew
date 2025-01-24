import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="min-h-fit bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Header Section */}
      <header className="max-w-7xl lg:ml-40 2xl:ml-80  px-10 pt-8 pb-4">
        <div className=" mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4">
            Turn Your Vision Into Reality.
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
            Let's Reinvent{" "}
            <span className=" italic">Success Together!</span>
          </h2>
        </div>

        {/* Navigation */}
        <nav className=" flex w-[80%]   mt-8">
          <ul className=" md:flex md:space-x-6 md:text-sm">
            <li>
              <Link to="/" className="hover:text-[#6B8E23]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#6B8E23]">
                Our Service
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#6B8E23]">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#6B8E23]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#6B8E23]">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex ml-auto space-x-4">
            <a to="/" className="text-gray-600 hover:text-[#6B8E23]">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a to="/" className="text-gray-600 hover:text-[#6B8E23]">
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </header>

      <div className=" flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl border shadow-md p-4 overflow-hidden max-w-5xl">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className=" md:w-5/6  md:flex ">
              <LazyLoadImage
                src="https://picsum.photos/200"
                alt=""
                className=" rounded-2xl w-full md:w-[50%]  md:h-[20rem] object-cover"
              />
              <div className="grid grid-cols-2 px-1 gap-1 rounded-lg ">
                <LazyLoadImage
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="img1"
                  className="rounded-2xl md:w-28 h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
                <LazyLoadImage
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="img1"
                  className="rounded-2xl md:w-28 h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
                <LazyLoadImage
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="img1"
                  className="rounded-2xl md:w-28 h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
                <LazyLoadImage
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="img1"
                  className=" rounded-2xl md:w-28 h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Section  */}
            <div className="md:w-[60%] md:py-14 md:pr-5 ">
              <h2 className="text-3xl  text-gray-800 mb-4">
                Book Your Consultation with Macula Consultant
              </h2>
              <p className="text-gray-600 mb-6 text-justify ">
                At Macula Consultant, we redefine consultancy through a dynamic
                fusion of innovation, expertise, and strategic vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center md:space-x-3">
                  <input
                    type="text"
                    placeholder="Have a question?"
                    className="flex-1 px-4 py-2 border  rounded-3xl focus:outline-none focus:ring-2 border-[#67883B] focus:ring-green-500"
                  />
                  <button className="bg-[#67883B] text-white md:px-6 md:py-2 px-1 py-2 rounded-3xl hover:bg-green-700 transition-colors">
                    Let's Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © Macula Consultant - All Rights Reserved 2025.
      </footer>
    </div>
  );
}
