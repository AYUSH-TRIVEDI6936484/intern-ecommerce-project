import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div
        className="container gap-0 mx-[129px] grid grid-cols-1 md:grid-cols-5"
        style={{width: '1200px', height: '221px'}}
      >
        <div className="p-[15px]">
          <h3 className="font-semibold text-xl mb-4">About Shop</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
            <a
              href="#"
              className="underline"
            >
              Read More
            </a>
          </p>
          <p className="mt-4 text-sm">
            E.{' '}
            <a
              href="mailto:hello@uxper.co"
              className="underline"
            >
              hello@uxper.co
            </a>
            <br />
            T. (00) 342 489 33
          </p>
        </div>
        <div className="p-[15px]">
          <h3 className="font-semibold text-xl mb-4">Company</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Store Locator
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="p-[15px]">
          <h3 className="font-semibold text-xl mb-4">Customer Care</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Size Guide
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Help & FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Return My Order
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Refer A Friend
              </a>
            </li>
          </ul>
        </div>
        <div className="p-[15px]">
          <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Duties & Taxes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Shipping Info
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Term Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="p-[15px]">
          <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Pinterest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Tiktok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between container mx-auto mt-8 text-center text-xs border-t border-gray-700 pt-4 px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            target="_blank"
            aria-label="Visa"
          >
            <i className="link-icon fab fa-cc-visa"></i>
          </a>
          <a
            href="#"
            aria-label="Master Card"
          >
            <i className="link-icon fab fa-cc-mastercard"></i>
          </a>
          <a
            href="#"
            aria-label="Stripe"
          >
            <i className="link-icon fab fa-cc-stripe"></i>
          </a>
          <a
            href="#"
            aria-label="PayPal"
          >
            <i className="link-icon fab fa-cc-paypal"></i>
          </a>
        </div>
        <p className="text-xl">©2022 July. All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <span>EN</span>
          <span>USD</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
