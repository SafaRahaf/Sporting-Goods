const Contact = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 flex justify-center text-slate-800">
        Contact page
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
        width="100%"
        height="400"
        className="border-0 mb-6 px-5"
        loading="lazy"
        title="myFrame"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />

            <textarea
              name="Message"
              required
              autoComplete="off"
              placeholder="Enter your message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>

            <input
              type="submit"
              value="Send"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
