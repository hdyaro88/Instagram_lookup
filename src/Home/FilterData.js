import { formatNumber } from "../Helper Files/formatNumber";
const getEngagement = (likes, comments, follower) => {
  return ((likes + comments) / follower) * 100;
};
export const FilterData = (data) => {
  const { username, full_name, is_private, profile_pic_url_hd, follower_count, following_count, feed } = data;
  let AvgEngagement = 0,
    total_likes = 0,
    total_comments = 0;
  const newFeed = feed?.data?.map((obj) => {
    if (obj.carousel_media !== undefined) {
      AvgEngagement += getEngagement(obj.like_count, obj.comment_count, follower_count);
      return {
        url: obj.carousel_media[0].image_versions2.candidates[0].url,
        comment_count: obj.comment_count,
        like_count: obj.like_count,
      };
    } else {
      AvgEngagement += getEngagement(obj.like_count, obj.comment_count, follower_count);
      return {
        url: obj.image_versions2.candidates[0].url,
        comment_count: obj.comment_count,
        like_count: obj.like_count,
      };
    }
  });
  newFeed?.forEach((feed) => {
    total_likes += feed?.like_count;
    total_comments += feed.comment_count;
  });
  console.log(AvgEngagement);
  return {
    username: "@" + username,
    full_name,
    is_private,
    profile_pic_url_hd,
    follower_count,
    following_count,
    feed: newFeed,
    likes_per_post: formatNumber(total_likes / newFeed.length),
    comments_per_post: formatNumber(total_comments / newFeed.length),
    engagement: AvgEngagement / newFeed.length,
  };
};





