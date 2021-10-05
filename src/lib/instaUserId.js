const instaUserId = (INSTAGRAM_ID) =>
  fetch(
    `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${INSTAGRAM_ID}","first":10,"after":null}`,
  )
    .then((res) => res.json())
    .then(({ data }) =>
      data.user.edge_owner_to_timeline_media.edges.map(({ node }) => {
        const { id } = node
        const comments = node.edge_media_to_comment.count
        const likes = node.edge_media_preview_like.count
        const caption = node.edge_media_to_caption.edges[0].node.text
        const thumbnail = node.thumbnail_resources.find(
          (thumbnailItem) => thumbnailItem.config_width === 320,
        )
        const { src, config_width: width, config_height: height } = thumbnail
        const url = `https://www.instagram.com/p/${node.shortcode}`
        return {
          id,
          caption,
          src,
          width,
          height,
          url,
          comments,
          likes,
        }
      }),
    )

export default instaUserId
