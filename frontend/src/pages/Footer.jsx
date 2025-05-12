const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-6 mt-16">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2023-2024 Wellness Whisper</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-purple-300">Privacy</a>
            <a href="#" className="hover:text-purple-300">Terms</a>
            <a href="#" className="hover:text-purple-300">Back to Top</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;