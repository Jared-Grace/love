import { song_image_couplets_page_elsewhere } from "./song_image_couplets_page_elsewhere.mjs";
import { song_image_couplets_description_brief } from "./song_image_couplets_description_brief.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_videos } from "./song_image_couplets_videos.mjs";
import { list_add } from "./list_add.mjs";
export async function song_image_couplets_videos_descriptions(channel_id) {
  "$plain channel_id";
  "What would go under every song of this hymn on a channel: each song's name and address, and the description meant for it - built and measured but written nowhere.";
  "IT WRITES NOTHING. A description goes out to everybody who ever opens the song, so a person should be able to read the whole of one before it is put there, and asking for it should not be the same act as publishing it.";
  "EVERY SONG GETS THE SAME SHAPE - the words, the references named, and the address of the page they are written out on. The passages themselves are not put here even under a song of one verse where they would fit, because then two songs on one channel would answer the same question in two different ways, and a person who had read one would not know to look for the other. The page holds more than any description was ever going to.";
  arguments_assert(arguments, 1);
  let hymn_videos = await song_image_couplets_videos(channel_id);
  let elsewhere = song_image_couplets_page_elsewhere();
  let descriptions = [];
  for (let hymn_video of hymn_videos) {
    let description = song_image_couplets_description_brief(
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
