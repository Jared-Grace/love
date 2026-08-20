import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { object_property_names_numbers_sorted } from "./object_property_names_numbers_sorted.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { psalms_passage_verses_description } from "./psalms_passage_verses_description.mjs";
import { psalms_videos_descriptions_payload_path } from "./psalms_videos_descriptions_payload_path.mjs";
import { youtube_channel_bible_singing } from "./youtube_channel_bible_singing.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_playlist_videos } from "./youtube_playlist_videos.mjs";
export async function psalms_videos_descriptions_payload_write() {
  "Pairs every sung Psalm on the channel with the words of the verses it sings, and writes the pairs down where something signed in can pick them up and put each one underneath its video.";
  "The pairing is made here rather than there because reading needs nobody signed in and writing does, so everything that can be worked out in the quiet is worked out first, and what is left is one run of changes that can be looked over before it happens.";
  "Every upload is paired, including a recording the channel carries twice, because both copies are addresses a listener can arrive on and each of them wants its words. Leaving a copy out is right when the question is what order to read a chapter in, and wrong when the question is what a page shows.";
  "The chapters are fetched once each and then the songs are laid out from what is in hand. Thirteen hundred songs share a hundred and fifty chapters, so fetching per song is asking for the same chapter nine times over, and each of those asks holds a turn open for seconds it spends waiting on another machine.";
  "The two kinds of song that get nothing back are handed over by name rather than dropped: one whose name says no passage at all, and one whose name reaches verses its chapter does not have. Counted away they would leave a reader believing the pairs account for the whole channel, and both are things a person has to decide about.";
  let channel_id = youtube_channel_bible_singing();
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
  let paired = [];
  let titles_verses_absent = [];
  for (let video of uploads) {
    let passage = passages[video.video_id];
    if (not(passage)) {
      continue;
    }
    let verses = verses_by_chapter[passage.chapter];
    let description = psalms_passage_verses_description(passage, verses);
    if (equal(description, null)) {
      titles_verses_absent.push(video.title);
      continue;
    }
    paired.push({
      video_id: video.video_id,
      title: video.title,
      description: description,
    });
  }
  let path = psalms_videos_descriptions_payload_path();
  await file_overwrite_json(path, paired);
  let r = {
    path: path,
    videos_total: uploads.length,
    videos: paired.length,
    chapters: chapters.length,
    titles_without_passage: titles_without_passage,
    titles_verses_absent: titles_verses_absent,
  };
  return r;
}
