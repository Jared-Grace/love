import { psalms_videos_descriptions_payload_write_video } from "./psalms_videos_descriptions_payload_write_video.mjs";
import { property_get } from "./property_get.mjs";
import { psalms_videos_descriptions_payload_write_one } from "./psalms_videos_descriptions_payload_write_one.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { psalms_videos_descriptions_payload_path } from "./psalms_videos_descriptions_payload_path.mjs";
import { youtube_channel_bible_singing } from "./youtube_channel_bible_singing.mjs";
export async function psalms_videos_descriptions_payload_write() {
  "Pairs every sung Psalm on the channel with the words of the verses it sings, and writes the pairs down where something signed in can pick them up and put each one underneath its video.";
  "The pairing is made here rather than there because reading needs nobody signed in and writing does, so everything that can be worked out in the quiet is worked out first, and what is left is one run of changes that can be looked over before it happens.";
  "Every upload is paired, including a recording the channel carries twice, because both copies are addresses a listener can arrive on and each of them wants its words. Leaving a copy out is right when the question is what order to read a chapter in, and wrong when the question is what a page shows.";
  "The chapters are fetched once each and then the songs are laid out from what is in hand. Thirteen hundred songs share a hundred and fifty chapters, so fetching per song is asking for the same chapter nine times over, and each of those asks holds a turn open for seconds it spends waiting on another machine.";
  "The two kinds of song that get nothing back are handed over by name rather than dropped: one whose name says no passage at all, and one whose name reaches verses its chapter does not have. Counted away they would leave a reader believing the pairs account for the whole channel, and both are things a person has to decide about.";
  let channel_id = youtube_channel_bible_singing();
  let r2 = await psalms_videos_descriptions_payload_write_one(channel_id);
  let verses_by_chapter = property_get(r2, "verses_by_chapter");
  let chapters = property_get(r2, "chapters");
  let titles_without_passage = property_get(r2, "titles_without_passage");
  let passages = property_get(r2, "passages");
  let uploads = property_get(r2, "uploads");
  let paired = [];
  let titles_verses_absent = psalms_videos_descriptions_payload_write_video(
    uploads,
    passages,
    verses_by_chapter,
    paired,
  );
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
