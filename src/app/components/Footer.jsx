"use client";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                                <path d="M10 5a1 1 0 011 1v6a1 1 0 11-2 0V6a1 1 0 011-1z" />
                            </svg>
                        </div>
                        <p className="text-sm">
                            Car Doctor is a software and web technology company. A team who also a serial entrepreneur.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="#" className="hover:text-white"><span className="sr-only">Facebook</span></a>
                            <a href="#" className="hover:text-white"><span className="sr-only">Twitter</span></a>
                            <a href="#" className="hover:text-white"><span className="sr-only">Instagram</span></a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm font-semibold text-white mb-2">About</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Service</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm font-semibold text-white mb-2">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Support Center</a></li>
                            <li><a href="#" className="hover:text-white">Feedback</a></li>
                            <li><a href="#" className="hover:text-white">Accessibility</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}