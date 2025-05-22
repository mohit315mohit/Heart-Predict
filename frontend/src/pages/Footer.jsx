// // const Footer = () => {
// //     return (
// //       <footer className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-6 mt-16">
// //         <div className="container mx-auto px-4 flex justify-between items-center">
// //           <p>&copy; 2023-2024 Wellness Whisper</p>
// //           <div className="space-x-4">
// //             <a href="#" className="hover:text-purple-300">Privacy</a>
// //             <a href="#" className="hover:text-purple-300">Terms</a>
// //             <a href="#" className="hover:text-purple-300">Back to Top</a>
// //           </div>
// //         </div>
// //       </footer>
// //     );
// //   };
  
// //   export default Footer;
import { ArrowUp } from "lucide-react"; // Make sure to install lucide-react: npm install lucide-react

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-8 mt-16 shadow-inner">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">&copy; 2024–2025 HeartGuard</p>
          <p className="text-sm text-purple-200">Your companion in heart health</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-purple-300 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-purple-300 transition-colors duration-300">
            Terms of Service
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-sm hover:text-purple-300 transition duration-300"
          >
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
