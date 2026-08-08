import React from "react";
import { Link } from "react-router-dom";
import {
    FaGithub as Github,
    FaTwitter as Twitter,
    FaLinkedin as Linkedin,
} from "react-icons/fa";

const FooterLink = ({ href, to, children }) => {
    const className =
        "block text-gray-400 hover:text-white transition-colors duration-200";

    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
};

const SocialLink = ({ href, children }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
        >
            {children}
        </a>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-6 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">InvoGen</h2>

                        <p className="text-gray-400">
                            The simplest way to create & send professional
                            invoices.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold mb-4">
                            Product
                        </h3>

                        <ul className="space-y-2">
                            <li>
                                <FooterLink href="#features">
                                    Features
                                </FooterLink>
                            </li>

                            <li>
                                <FooterLink href="#testimonials">
                                    Testimonials
                                </FooterLink>
                            </li>

                            <li>
                                <FooterLink href="#faqs">FAQs</FooterLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold mb-4">
                            Company
                        </h3>

                        <ul className="space-y-2">
                            <li>
                                <FooterLink to="/about">About Us</FooterLink>
                            </li>

                            <li>
                                <FooterLink to="/contact">Contact</FooterLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold mb-4">Legal</h3>

                        <ul className="space-y-2">
                            <li>
                                <FooterLink to="/privacy">
                                    Privacy Policy
                                </FooterLink>
                            </li>

                            <li>
                                <FooterLink to="/terms">
                                    Terms of Service
                                </FooterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 py-8 mt-16">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">
                            &copy; 2025 InvoGen. All rights reserved.
                        </p>

                        <div className="flex space-x-4">
                            <SocialLink href="#">
                                <Twitter className="w-5 h-5" />
                            </SocialLink>

                            <SocialLink href="https://github.com/rohis2404">
                                <Github className="w-5 h-5" />
                            </SocialLink>

                            <SocialLink href="https://www.linkedin.com/in/dev-with-rohit">
                                <Linkedin className="w-5 h-5" />
                            </SocialLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
