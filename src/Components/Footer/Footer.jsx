import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-[#9538E2] w-full border-t border-purple-200 h-[400px] flex flex-col justify-between">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-bold mb-5">Gadget House</h3>
          <p className="text-sm leading-relaxed text-purple-700">
            Upgrade your tech journey with our cutting‑edge gadgets and
            accessories. Quality assured, customer‑first service.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/#laptops" className="hover:underline">
                Laptops
              </Link>
            </li>
            <li>
              <Link to="/#smartphones" className="hover:underline">
                Smartphones
              </Link>
            </li>
            <li>
              <Link to="/#accessories" className="hover:underline">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/#support" className="hover:underline">
                24/7 Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:underline">
                Returns &amp; Refunds
              </Link>
            </li>
            <li>
              <Link to="/license" className="hover:underline">
                License
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#9538E2] py-4">
        <p className="text-center text-white text-sm">
          © {new Date().getFullYear()} Gadget House. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
