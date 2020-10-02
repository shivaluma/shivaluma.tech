import React from "react"

const Subscribe = () => {
  return (
    <div className="container my-8">
      <div
        className="flex flex-col items-center justify-center px-8 py-8 text-center shadow-md rounded-xl lg:px-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%,#5183f5 25%,#4640ff 100%)",
        }}
      >
        <span className="text-xl font-semibold text-white Muli">
          Subscribe to Newletters .
        </span>
        <span className="text-sm text-white">
          Be the first one to subscribe.
        </span>

        <input
          className="w-64 px-6 py-3 mt-8 bg-gray-200 rounded-lg focus:outline-none"
          placeholder="Email address..."
          aria-labelledby="subscribe-bar"
        ></input>

        <button className="px-6 py-3 mt-5 font-medium text-white bg-black rounded-lg focus:outline-none">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Subscribe
