import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_playlist_videos } from "./youtube_playlist_videos.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { equal } from "./equal.mjs";
import { object_property_names_numbers_sorted } from "./object_property_names_numbers_sorted.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
export async function psalms_videos_descriptions_payload_write_one(channel_id) {
  "$plain channel_id";
  "Everything about the channel that has to be fetched before any song can be paired with its words: what the channel has uploaded, which passage each title names, and the verses of every chapter those titles reach.";
  "The chapters are fetched once each and only then, because thirteen hundred songs share a hundred and fifty chapters and fetching per song asks for the same chapter nine times over. Which chapters are wanted is not known until every title has been read, so the reading of titles and the fetching of chapters are one stretch of work and cannot be separated further.";
  arguments_assert(arguments, 1);
  let uploads_playlist = youtube_channel_uploads_playlist(channel_id);
  let uploads = await youtube_playlist_videos(uploads_playlist);
  let passages = {};
  let chapters_named = {};
  let titles_without_passage = [];
  for (let video of uploads) {
    let passage = psalms_title_passage(video.title);
    if (equal(passage, null)) {
      titles_without_passage.push(video.title);
      continue;
    }
    passages[video.video_id] = passage;
    chapters_named[passage.chapter] = true;
  }
  let chapters = object_property_names_numbers_sorted(chapters_named);
  async function lambda_chapter(chapter) {
    let chapter_code = ebible_chapter_code_pad("PSA", chapter);
    let verses = await ebible_verses_storage_browser("engbsb", chapter_code);
    let held = {
      chapter: chapter,
      verses: verses,
    };
    return held;
  }
  let fetched = await list_map_limited_async(chapters, lambda_chapter, 10);
  let verses_by_chapter = {};
  for (let one of fetched) {
    verses_by_chapter[one.chapter] = one.verses;
  }
  let r = {
    uploads,
    passages,
    titles_without_passage,
    chapters,
    verses_by_chapter,
  };
  return r;
}
