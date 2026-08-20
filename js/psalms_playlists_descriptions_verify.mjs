import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { psalms_chapter_description } from "./psalms_chapter_description.mjs";
import { psalms_playlists_chapters } from "./psalms_playlists_chapters.mjs";
import { youtube_playlist_description } from "./youtube_playlist_description.mjs";
export async function psalms_playlists_descriptions_verify() {
  "Reads back, from outside, the words written under every Psalm playlist on the channel, and says which ones do not yet say what the chapter says.";
  "A write that answered kindly is not a reading, and the two have come apart before. This asks the question the other way round, through a door that was never signed in, so a chapter that quietly never arrived has somewhere to show up.";
  let playlisted = await psalms_playlists_chapters();
  async function lambda_chapter(chapter) {
    let wanted = await psalms_chapter_description(chapter);
    let playlist_id = playlisted.chapter_ids[chapter];
    let held = await youtube_playlist_description(playlist_id);
    let same = equal(held, wanted);
    let one = {
      chapter: chapter,
      playlist_id: playlist_id,
      same: same,
      letters_wanted: wanted.length,
      letters_held: held.length,
    };
    return one;
  }
  let read = await list_map_limited_async(
    playlisted.chapters,
    lambda_chapter,
    8,
  );
  let wrong = [];
  for (let one of read) {
    if (equal(one.same, false)) {
      wrong.push(one);
    }
  }
  let r = {
    chapters: read.length,
    matching: subtract(read.length, wrong.length),
    wrong: wrong,
  };
  return r;
}
