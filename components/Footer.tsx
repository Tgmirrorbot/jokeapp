import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-blue-500 flex justify-center items-center space-x-4">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white text-2xl" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;