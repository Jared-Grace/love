import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_lockups_paged } from "./youtube_lockups_paged.mjs";
export async function youtube_playlist_videos(playlist_id) {
  "Every video of one public youtube playlist, in the order the playlist puts them, each as its watch code and its title.";
  "Nobody is signed in for this, so it is the playlist as a stranger would find it. That is the right reading to check a playlist against: what its owner can see is not the question a listener is asking.";
  arguments_assert(arguments, 1);
  let items = await youtube_lockups_paged(
    {
      browseId: "VL" + playlist_id,
    },
    "video",
  );
  let videos = [];
  for (let item of items) {
    videos.push({
      video_id: item.content_id,
      title: item.title,
    });
  }
  return videos;
}
