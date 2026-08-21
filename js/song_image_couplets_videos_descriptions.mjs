import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_videos } from "./song_image_couplets_videos.mjs";
import { song_image_couplets_videos_elsewhere } from "./song_image_couplets_videos_elsewhere.mjs";
import { song_image_couplets_description_fitting } from "./song_image_couplets_description_fitting.mjs";
import { list_add } from "./list_add.mjs";
export async function song_image_couplets_videos_descriptions(channel_id) {
  "$plain channel_id";
  "What would go under every song of this hymn on a channel: each song's name and address, and the description meant for it - built and measured but written nowhere.";
  "IT WRITES NOTHING. A description goes out to everybody who ever opens the song, so a person should be able to read the whole of one before it is put there, and asking for it should not be the same act as publishing it.";
  "The pointing at the verse songs is worked out once from the whole reading and handed to every song, so the song that cannot carry the passages themselves still says where they are.";
  arguments_assert(arguments, 1);
  let hymn_videos = await song_image_couplets_videos(channel_id);
  let elsewhere = song_image_couplets_videos_elsewhere(hymn_videos);
  let descriptions = [];
  for (let hymn_video of hymn_videos) {
    let description = await song_image_couplets_description_fitting(
      hymn_video.verse,
      elsewhere,
    );
    let said = {
      verse: hymn_video.verse,
      title: hymn_video.title,
      video_id: hymn_video.video_id,
      letters: description.length,
      description: description,
    };
    list_add(descriptions, said);
  }
  return descriptions;
}
