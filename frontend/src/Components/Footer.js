import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-100 py-10 mt-10">
            <div className="container mx-auto px-10">
                <div className="flex flex-wrap -mx-4">
                    {/* Information */}
                    <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                        <h2 className="font-bold text-lg mb-4">INFORMATION</h2>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">Home</a></li>
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">Catalog</a></li>
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">Search</a></li>
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">Blog</a></li>
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">About us</a></li>
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">Contact us</a></li>
                        </ul>
                    </div>

                    {/* My Account */}
                    <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                        <h2 className="font-bold text-lg mb-4">MY ACCOUNT</h2>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">My account</a></li>
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">My addresses</a></li>
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">My cart</a></li>
                        </ul>
                    </div>

                    {/* Our Shop */}
                    <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                        <h2 className="font-bold text-lg mb-4">OUR SHOP</h2>
                        <div className="text-gray-700">
                            <p>Address</p>
                            <p className="mt-1">4578 Marmora St, San Francisco D04 89GR</p>
                            <p className="mt-4">Phone</p>
                            <p className="mt-1">1-800-1234-567</p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                        <h2 className="font-bold text-lg mb-4">NEWSLETTER</h2>
                        <p className="text-gray-700 mb-4">Join our mailing list</p>
                        <form className="flex">
                            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-300 rounded-l focus:outline-none" />
                            <button  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-r hover:bg-gray-400 focus:outline-none">
                                &rarr;
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center mt-8 space-x-4">
                    <a href="/" className="text-gray-700 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
                    <a href="/" className="text-gray-700 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                    <a href="/" className="text-gray-700 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                    <a href="/" className="text-gray-700 hover:text-gray-900"><i className="fab fa-youtube"></i></a>
                </div>

                {/* Powered by */}
                <div className="mt-8 text-center text-gray-500">
                    Made by Dhruv Jindal
                </div>
            </div>
        </footer>
    )
}

export default Footer