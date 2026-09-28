export default function Footer() {
    return (
        <main className="w-screen bg-primary px-5 py-10 ">

            <div className="grid grid-cols-1 md:grid-cols-3">
                <div>
                    <h1 className="font-bold text-lg">TekZen Technologies</h1>
                    <p>Elite software apprenticeship institute based in Indore, India. Mentoring the next generation of systems programmers and full-stack software architects.</p>
                    <div>
                        <span>Campus Indore:</span>
                        <p>Kalyani Market, Near Bhawarkua Main Hub, Indore, MP - 452001</p>
                        <p>Inquiry: +91 9685825273 | info@tekzen.tech</p>
                    </div>
                </div>

            </div>

            <hr className="text-neutral-700"></hr>

            <div className="flex lg:flex-row flex-col justify-between items-center mt-5 text-neutral-300">
                <span>© 2025 Tekzen Technologies Indore, India. All rights reserved.</span>
                <div className="w-full md:w-1/2 flex justify-evenly items-center">
                    <span>Privacy Policy</span>
                    <span>Terms of Enrollment</span>
                    <span>Indore Campus Map</span>
                </div>
            </div>

        </main>
    )
}