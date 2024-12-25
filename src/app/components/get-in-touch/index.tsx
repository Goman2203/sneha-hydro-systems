import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

export default function GetInTouch() {
  return (
    <div id="get-in-touch" className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-24 py-12 h-svh">
        <div className="grid grid-cols-4 gap-4">
          <div className="py-12 px-14 col-span-2">
            <div className="header text-3xl font-bold text-zinc-900 mb-6">
              We're here to help you with water solutions
            </div>
            <form className="">
              <div className="w-full mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="w-full mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="+919999999999"
                />
              </div>
              <div className="w-full mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  rows={4}
                  placeholder="Enter your message here"
                />
              </div>
            </form>
          </div>
          <div className="col-span-2 bg-zinc-100 m-8 text-black">
            <iframe
              src={`https://www.google.com/maps?q=17.558641649719917,78.3421958957839&z=15&output=embed`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="p-4">
              <p className="font-bold">Get in touch</p>

              <a href="tel:+919849014089" className="block mb-0">
                <FaPhone className="inline" /> +91 9849014089
              </a>

              <a href="mailto:govindmannava06@gmail.com" className="block">
                <MdOutlineMail className="inline" /> govindmannava06@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
