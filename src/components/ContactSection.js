import {
  Send,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  ArrowDown,
} from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-[url('/22.png')] bg-cover bg-center p-8">
      <div className="max-w-lg text-center md:text-left space-y-6">
        <div className="inline-flex items-center border border-black rounded-full px-3 py-1">
          <ArrowDown className="w-4 h-4 mr-1" />
          <span>Contact</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          Interested in <br />
          <span className="bg-black text-white px-2 rounded-md">work</span>
          together?
        </h1>

        <p className="text-lg text-black/80">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other
        </p>

        <button className="inline-flex items-center border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition">
          <Phone className="w-4 h-4 mr-2" />
          Schedule a Call
        </button>
      </div>

      <div className="bg-black text-white rounded-2xl p-6 md:p-8 mt-10 md:mt-0 w-full max-w-md">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-black border-b-2 border-lime-400 focus:outline-none py-2 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-black border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
          />
          <textarea
            placeholder="Describe your project"
            className="w-full bg-black border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400 resize-none"
            rows={3}
          ></textarea>

          <div className="flex items-center space-x-4 flex-wrap">
            <button className="flex items-center border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
              <Send className="h-4 w-4 mr-1" />
              Send
            </button>
            <span className="text-sm">or</span>
            <button className="flex items-center border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
              <Mail className="h-4 w-4 mr-1" />
              Contact me
            </button>
          </div>
        </form>

        <div className="flex items-center space-x-4 mt-6">
          <span className="text-sm">@williamrey</span>
          <span className="h-px w-6 bg-gray-600"></span>
          <a href="#" className="hover:text-lime-400">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-lime-400">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-lime-400">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
