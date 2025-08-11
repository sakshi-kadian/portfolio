const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm border-t border-gray-700 py-6 px-6 sm:px-8 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        © {new Date().getFullYear()} Sakshi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
