// export default function ContactSection() {
//     return (
//       <section
//         className="py-16 px-4 bg-cover bg-center"
//         style={{
//           backgroundImage: `url('/22.png')`,
//         }}
//       >
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           {/* LEFT SIDE */}
//           <div>
//             <button className="flex items-center border border-black rounded-full px-4 py-1 mb-6 hover:bg-black hover:text-white transition">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//               <span className="text-sm font-medium">Contact</span>
//             </button>
  
//             <h2 className="text-4xl font-bold mb-4">
//               Interested in <span className="bg-black text-white px-2 rounded">work</span> together?
//             </h2>
  
//             <p className="mb-6 max-w-md">
//               We start every new client interaction with an in-depth discovery call where we get to know each other
//             </p>
  
//             <button className="flex items-center border border-black rounded-full px-5 py-2 hover:bg-black hover:text-white transition">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3 7-1.5 1.5M13 10h7M13 14h5" />
//               </svg>
//               Schedule a Call
//             </button>
//           </div>
  
//           {/* RIGHT SIDE */}
//           <div className="bg-black text-white rounded-2xl p-6">
//             <form className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full bg-black border-b border-lime-400 focus:outline-none py-2"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   className="w-full bg-black border-b border-gray-600 focus:outline-none py-2"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   placeholder="Describe your project"
//                   className="w-full bg-black border-b border-gray-600 focus:outline-none py-2"
//                 ></textarea>
//               </div>
//               <div className="flex items-center space-x-4 mt-4">
//                 <button className="flex items-center border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 8-16 8V4z" />
//                   </svg>
//                   Send
//                 </button>
//                 <span>or</span>
//                 <button className="flex items-center border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 mr-1"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" />
//                   </svg>
//                   Contact me
//                 </button>
//               </div>
//             </form>
  
//             <div className="flex items-center space-x-4 mt-6">
//               <span>@williamrey</span>
//               <span className="h-px w-6 bg-gray-600"></span>
//               <a href="#" className="hover:text-lime-400">🌐</a>
//               <a href="#" className="hover:text-lime-400">📷</a>
//               <a href="#" className="hover:text-lime-400">🐦</a>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
  



// import { Mail, Send, Facebook, Instagram, Twitter } from 'lucide-react';

// export default function ContactForm() {
//   return (
//     <div className="bg-black text-white rounded-2xl p-6 md:p-8 w-full max-w-md mx-auto">
//       <form className="space-y-6">
//         {/* Name */}
//         <input
//           type="text"
//           placeholder="Enter your name"
//           className="w-full bg-black border-b-2 border-lime-400 focus:outline-none py-2 placeholder-gray-400"
//         />

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Your email address"
//           className="w-full bg-black border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400"
//         />

//         {/* Project */}
//         <textarea
//           placeholder="Describe your project"
//           className="w-full bg-black border-b border-gray-600 focus:outline-none py-2 placeholder-gray-400 resize-none"
//           rows={3}
//         ></textarea>

//         {/* Buttons */}
//         <div className="flex items-center space-x-4 flex-wrap">
//           <button className="flex items-center border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
//             <Send className="h-4 w-4 mr-1" />
//             Send
//           </button>
//           <span className="text-sm">or</span>
//           <button className="flex items-center border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
//             <Mail className="h-4 w-4 mr-1" />
//             Contact me
//           </button>
//         </div>
//       </form>

//       {/* Social */}
//       <div className="flex items-center space-x-4 mt-6">
//         <span className="text-sm">@williamrey</span>
//         <span className="h-px w-6 bg-gray-600"></span>
//         <a href="#" className="hover:text-lime-400">
//           <Facebook className="h-4 w-4" />
//         </a>
//         <a href="#" className="hover:text-lime-400">
//           <Instagram className="h-4 w-4" />
//         </a>
//         <a href="#" className="hover:text-lime-400">
//           <Twitter className="h-4 w-4" />
//         </a>
//       </div>
//     </div>
//   );
// }




import { Send, Mail, Phone, Facebook, Instagram, Twitter, ArrowDown } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-[url('/22.png')] bg-cover bg-center p-8"
    >
      {/* Left side */}
      <div className="max-w-lg text-center md:text-left space-y-6">
        <div className="inline-flex items-center border border-black rounded-full px-3 py-1">
          <ArrowDown className="w-4 h-4 mr-1" />
          <span>Contact</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold">
          Interested in <br />
          <span className="bg-black text-white px-2 rounded-md">work</span> together?
        </h1>

        <p className="text-lg text-black/80">
          We start every new client interaction with an in-depth discovery call where we get to know each other
        </p>

        <button className="inline-flex items-center border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition">
          <Phone className="w-4 h-4 mr-2" />
          Schedule a Call
        </button>
      </div>

      {/* Right side */}
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
