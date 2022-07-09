export const FilterData = (data) => {
  const { username, full_name, is_private, profile_pic_url_hd, follower_count, following_count, feed } = data;
  let total_likes = 0,
    total_comments = 0;
  const newFeed = feed?.data?.map((obj) => {
    if (obj.carousel_media !== undefined) {
      return {
        url: obj.carousel_media[0].image_versions2.candidates[0].url,
        comment_count: obj.comment_count,
        like_count: obj.like_count,
      };
    } else {
      return {
        url: obj.image_versions2.candidates[0].url,
        comment_count: obj.comment_count,
        like_count: obj.like_count,
      };
    }
  });
  newFeed?.forEach((feed) => {
    total_comments += feed.comment_count;
    total_likes += feed.like_count;
  });
  return {
    username: "@" + username,
    full_name,
    is_private,
    profile_pic_url_hd,
    follower_count,
    following_count,
    feed: newFeed,
    engagement: ((total_comments + total_likes) / follower_count) * 100,
  };
};
