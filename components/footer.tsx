'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--text-black)] text-[var(--o-white)] py-10">
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4"
        style={{width: '100%', maxWidth: '1200px', height: 'auto'}}
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
      <div className="flex flex-col md:flex-row justify-between container mx-auto mt-8 text-center text-xs border-t border-[var(--o-border-gray)] pt-4 px-4">
        <div className="flex justify-center space-x-4 mb-4 md:mb-0">
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
        <p className="text-xl md:text-base">©2022 July. All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-2 md:mt-0">
          <span>EN</span>
          <span>USD</span>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1280px) {
          .container {
            padding: 0 20px;
          }
        }
        @media (max-width: 768px) {
          .container {
            width: 100%;
          }
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 480px) {
          .container {
            width: 100%;
          }
          .grid {
            grid-template-columns: 1fr;
          }
          .text-xl {
            font-size: 1.25rem;
          }
          .text-base {
            font-size: 0.875rem;
          }
        }
        @media (max-width: 425px) {
          .container {
            padding: 0 10px;
          }
          .grid {
            grid-template-columns: 1fr;
          }
          .text-xl {
            font-size: 1.125rem;
          }
          .text-base {
            font-size: 0.875rem;
          }
        }
        @media (max-width: 375px) {
          .container {
            padding: 0 5px;
          }
          .grid {
            grid-template-columns: 1fr;
          }
          .text-xl {
            font-size: 1rem;
          }
          .text-base {
            font-size: 0.75rem;
          }
        }
        @media (max-width: 320px) {
          .container {
            padding: 0 5px;
          }
          .grid {
            grid-template-columns: 1fr;
          }
          .text-xl {
            font-size: 0.875rem;
          }
          .text-base {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
