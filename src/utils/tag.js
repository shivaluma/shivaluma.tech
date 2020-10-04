export const tag = {
  javascript: {
    bgcolor: "#f0da1f",
    color: "#000",
  },
  fundamentals: {
    bgcolor: "#d3f9d8",
    color: "#000",
  },
  css: {
    bgcolor: "#264de4",
    color: "#fff",
  },
  react: {
    bgcolor: "#61DBFB",
    color: "#fff",
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
