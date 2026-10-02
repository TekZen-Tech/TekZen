import React from "react";
import { Link, useLocation } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact-us" },
    { name: "Testimonials", href: "/testimonial" },
  ];

  const isItemActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    if (href.startsWith("/#")) {
      return false;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 w-full px-4 pt-4 pb-2 z-1000">
      <nav className="max-w-7xl mx-auto bg-[#133e2b] rounded-full px-4 sm:px-6 py-2.5 sm:py-3 md:my-3 flex items-center justify-between shadow-lg border border-[#1b4a35]">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#c8f269] flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#133e2b]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="3.5"
                y="4.5"
                width="17"
                height="15"
                rx="3"
                fill="currentColor"
              />
              <path
                d="M7.5 9.5L10 12L7.5 14.5"
                stroke="#c8f269"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14.5H16.5"
                stroke="#c8f269"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-headline text-base sm:text-lg font-bold leading-tight tracking-tight">
              Tekzen Technologies
            </span>
            <span className="text-[#8cb58f] text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase leading-none mt-0.5">
              CODING INSTITUTE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-body text-sm font-medium">
          {navItems.map((item) => {
            const isActive = isItemActive(item.href);
            const isHash = item.href.startsWith("/#");
            return (
              <li key={item.name}>
                {isHash ? (
                  <a
                    href={item.href}
                    className={`flex items-center gap-1.5 transition-colors duration-200 ${isActive
                      ? "text-[#c8f269] font-semibold"
                      : "text-[#d2ded5] hover:text-white"
                      }`}
                  >
                    <span>{item.name}</span>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1.5 transition-colors duration-200 ${isActive
                      ? "text-[#c8f269] font-semibold"
                      : "text-[#d2ded5] hover:text-white"
                      }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8f269] inline-block" />
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button */}
        <Link
          to="/courses#book-demo"
          className="hidden sm:flex items-center gap-2 bg-[#c8f269] hover:bg-[#bbf264] text-[#133e2b] px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-95 shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-[#133e2b] inline-block" />
          <span>Claim 3-Day Pass</span>
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:text-[#c8f269] rounded-lg focus:outline-none transition-colors"
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle Navigation Menu"
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {openNav && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-[#133e2b] rounded-2xl p-5 border border-[#1b4a35] shadow-xl flex flex-col gap-4 text-white">
          <ul className="flex flex-col gap-3 font-body text-base">
            {navItems.map((item) => {
              const isActive = isItemActive(item.href);
              const isHash = item.href.startsWith("/#");
              return (
                <li key={item.name}>
                  {isHash ? (
                    <a
                      href={item.href}
                      onClick={() => setOpenNav(false)}
                      className={`flex items-center justify-between py-2 transition-colors border-b border-[#1b4a35] ${isActive
                        ? "text-[#c8f269] font-semibold"
                        : "text-[#d2ded5] hover:text-white"
                        }`}
                    >
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setOpenNav(false)}
                      className={`flex items-center justify-between py-2 transition-colors border-b border-[#1b4a35] ${isActive
                        ? "text-[#c8f269] font-semibold"
                        : "text-[#d2ded5] hover:text-white"
                        }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#c8f269]" />
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            to="/courses#book-demo"
            onClick={() => setOpenNav(false)}
            className="flex items-center justify-center gap-2 bg-[#c8f269] hover:bg-[#bbf264] text-[#133e2b] w-full py-3 rounded-full font-body text-sm font-semibold transition-all mt-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#133e2b]" />
            <span>Claim 3-Day Pass</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
