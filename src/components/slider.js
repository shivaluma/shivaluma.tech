import React from "react"
import Slider from "react-slick"

import PostCard from "./post-card"
const PostSlider = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: posts.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <Slider {...settings}>
        {posts && posts.map(post => <PostCard post={post} />)}
      </Slider>
    </div>
  )
}

export default PostSlider
