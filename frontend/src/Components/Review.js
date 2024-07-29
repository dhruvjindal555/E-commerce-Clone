import React from 'react'

function Review({ showAddReview, setShowAddReview }) {
    return (
        <div className={`fixed inset-x-0 xl:inset-y-24  md:inset-y-20 inset-y-36  sm:mx-0 mx-5 h-full  z-10 ${showAddReview ? "" : "hidden"}`}>
            <div className="bg-white p-3 md:p-6 max-w-2xl mx-auto rounded-lg shadow-md relative">
                <button
                    onClick={() => { setShowAddReview(false) }}
                    className="absolute top-2 right-2 text-red-600 text-2xl"
                >
                    &times;
                </button>
                <div className="flex flex-col md:flex-row justify-between items-center mb-4"> {/* Stack vertically on small screens */}
                    <h2 className="text-2xl font-bold">Ratings and Reviews</h2>
                    <span className="text-red-600 mt-2 md:mt-0">Canon LBP-2800B inkjet printer</span> {/* Add margin-top for small screens */}
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Rate your product</label>
                    <div className="flex space-x-1">
                        {Array(5).fill(0).map((_, index) => (
                            <svg key={index} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .288l2.833 8.718H24l-7.176 5.215L19.833 24 12 18.285 4.167 24 7.176 14.221 0 8.006h9.167z" />
                            </svg>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Review Your product</label>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input type="text" placeholder="Title of your review ...." className="w-full px-3 py-2 border border-gray-300 rounded mb-4" />
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea placeholder="Add description for your product .." className="w-full px-3 py-2 border border-gray-300 rounded mb-4 h-32"></textarea>
                </div>

                <div className="mb-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2"> {/* Stack vertically on small screens */}
                    <button className="px-2 bg-blue-100 text-blue-500 py-1 rounded-full mr-2">
                        <i className="fa-regular fa-image"></i>
                    </button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded">Add Review</button>
                </div>
            </div>
        </div>

    )
}

export default Review