import React from "react"

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"

const ShareButtons = ({ title, url, twitterHandle, tags }) => {
  return (
    <div>
      <FacebookShareButton url={url} className="focus:outline-none mr-2">
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <LinkedinShareButton url={url} className="focus:outline-none mr-2">
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <RedditShareButton
        url={url}
        title={title}
        className="focus:outline-none mr-2"
      >
        <RedditIcon size={40} round={true} />
      </RedditShareButton>

      <WhatsappShareButton
        url={url}
        title={title}
        className="focus:outline-none mr-2"
      >
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  )
}
export default ShareButtons
