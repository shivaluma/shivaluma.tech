import React from "react"

const Subscribe = () => {
  return (
    <div className="container my-8">
      <div
        className="flex py-8 w-full rounded-xl shadow-md flex-col items-center justify-center px-8 text-center lg:px-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%,#5183f5 25%,#4640ff 100%)",
        }}
      >
        <span className="text-xl text-white font-semibold Muli">
          Subscribe to Newletters .
        </span>
        <span className="text-sm text-white">
          Be the first one to subscribe.
        </span>

        <input
          className="px-6 py-3 bg-gray-200 focus:outline-none mt-8 rounded-lg"
          placeholder="Email address..."
        ></input>

        <button className="px-6 py-3 text-white bg-black font-medium mt-5 rounded-lg focus:outline-none">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Subscribe
