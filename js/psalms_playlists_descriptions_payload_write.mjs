import { psalms_chapter_description } from "./psalms_chapter_description.mjs";
import { psalms_playlist_chapter_ids } from "./psalms_playlist_chapter_ids.mjs";
import { psalms_playlists_descriptions_payload_path } from "./psalms_playlists_descriptions_payload_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { youtube_channel_bible_singing } from "./youtube_channel_bible_singing.mjs";
import { youtube_channel_playlists } from "./youtube_channel_playlists.mjs";
export async function psalms_playlists_descriptions_payload_write() {
  "Pairs every Psalm playlist on the channel with the words of the chapter it holds, and writes the pairs down where something signed in can pick them up and put each one underneath its playlist.";
  "The pairing is made here rather than there because reading needs nobody signed in and writing does, so everything that can be worked out in the quiet is worked out first, and what is left is one small run of changes that can be looked over before it happens.";
  let channel_id = youtube_channel_bible_singing();
  let playlists = await youtube_channel_playlists(channel_id);
  let chapter_ids = psalms_playlist_chapter_ids(playlists);
  let chapters = [];
  for (let named of Object.keys(chapter_ids)) {
    chapters.push(Number(named));
  }
  chapters.sort(function lambda(one, other) {
    return one - other;
  });
  async function lambda_chapter(chapter) {
    let description = await psalms_chapter_description(chapter);
    let held = {
      chapter: chapter,
      playlist_id: chapter_ids[chapter],
      description: description,
    };
    return held;
  }
  let paired = await list_map_limited_async(chapters, lambda_chapter, 10);
  let path = psalms_playlists_descriptions_payload_path();
  await file_overwrite_json(path, paired);
  let r = {
    path: path,
    chapters: paired.length,
  };
  return r;
}
