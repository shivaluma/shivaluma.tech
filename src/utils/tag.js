export const tag = {
  javascript: {
    bgcolor: "#fff3bf",
    color: "#000",
  },
  fundamentals: {
    bgcolor: "#d3f9d8",
    color: "#000",
  },
  other: {
    bgcolor: "rgba(0,0,0,.1)",
    color: "#1b1d25",
  },
}

export const getTagColor = tagChild => {
  if (tag[tagChild]) return tag[tagChild]
  return tag.other
}
