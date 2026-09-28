export default function Footer() {
    return (
        <footer className="w-full rounded-t-[5em] text-white bg-primary px-6 sm:px-12 md:px-20 py-16 md:py-24 ">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 lg:gap-20">
                    <div>
                        <h1 className="font-bold text-2xl text-secondary-500">TekZen Technologies</h1>
                        <p className="mt-5 text-neutral-300 leading-relaxed">
                            Elite software apprenticeship institute based in Indore, India. Mentoring the next generation of systems programmers and full-stack software architects.
                        </p>
                        <div className="mt-6 space-y-1.5 text-neutral-300">
                            <span className="font-semibold text-white">Campus Indore:</span>
                            <p>Kalyani Market, Near Bhawarkua Main Hub, Indore, MP - 452001</p>
                            <p>Inquiry: +91 9685825273 | info@tekzen.tech</p>
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-center">
                        <div className="specialization-footer">
                            <h4 className="text-secondary-500 font-bold mb-5 text-lg">Specialization</h4>
                            <div className="space-y-3">
                                <p className="text-white duration-300 hover:text-secondary-500 cursor-pointer">Curriculum Tracks</p>
                                <p className="text-white duration-300 hover:text-secondary-500 cursor-pointer">Engineering Fellowship</p>
                                <p className="text-white duration-300 hover:text-secondary-500 cursor-pointer">Campus Indore</p>
                                <p className="text-white duration-300 hover:text-secondary-500 cursor-pointer">Hire Apprentices</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-secondary-500 font-bold mb-5 text-lg">Connect & Learn</h4>
                        <p className="text-neutral-300 leading-relaxed">
                            Speak with a senior engineering mentor or visit the Indore campus for a live classroom walkthrough.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <button className="bg-secondary-400 hover:bg-secondary-500 text-primary-950 font-medium rounded-full py-2.5 px-5 transition duration-200">
                                WhatsApp Connect
                            </button>
                            <button className="border border-neutral-600 hover:border-neutral-400 bg-[#C1C9C030] rounded-full py-2.5 px-5 transition duration-200">
                                Book Seat
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="border-neutral-700/60 my-12" />

                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-neutral-400">
                    <span>© 2025 Tekzen Technologies Indore, India. All rights reserved.</span>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition">Terms of Enrollment</span>
                        <span className="hover:text-white cursor-pointer transition">Indore Campus Map</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}