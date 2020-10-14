import React from "react"

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"

const ShareButtons = ({ title, url, twitterHandle, tags }) => {
  return (
    <div>
      <FacebookShareButton url={url} className="mr-2 focus:outline-none">
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <LinkedinShareButton url={url} className="mr-2 focus:outline-none">
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <RedditShareButton
        url={url}
        title={title}
        className="mr-2 focus:outline-none"
      >
        <RedditIcon size={40} round={true} />
      </RedditShareButton>

      <WhatsappShareButton
        url={url}
        title={title}
        className="mr-2 focus:outline-none"
      >
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  )
}
export default ShareButtons
