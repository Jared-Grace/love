import { equal } from "./equal.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { psalms_passage_description } from "./psalms_passage_description.mjs";
import { psalms_videos_descriptions_payload_path } from "./psalms_videos_descriptions_payload_path.mjs";
import { youtube_channel_bible_singing } from "./youtube_channel_bible_singing.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_playlist_videos } from "./youtube_playlist_videos.mjs";
export async function psalms_videos_descriptions_payload_write() {
  "Pairs every sung Psalm on the channel with the words of the verses it sings, and writes the pairs down where something signed in can pick them up and put each one underneath its video.";
  "The pairing is made here rather than there because reading needs nobody signed in and writing does, so everything that can be worked out in the quiet is worked out first, and what is left is one run of changes that can be looked over before it happens.";
  "Every upload is paired, including a recording the channel carries twice, because both copies are addresses a listener can arrive on and each of them wants its words. Leaving a copy out is right when the question is what order to read a chapter in, and wrong when the question is what a page shows.";
  "The two kinds of song that get nothing back are handed over by name rather than dropped: one whose name says no passage at all, and one whose name reaches verses its chapter does not have. Counted away they would leave a reader believing the pairs account for the whole channel, and both are things a person has to decide about.";
  let channel_id = youtube_channel_bible_singing();
  let uploads_playlist = youtube_channel_uploads_playlist(channel_id);
  let uploads = await youtube_playlist_videos(uploads_playlist);
  async function lambda_video(video) {
    let passage = psalms_title_passage(video.title);
    if (equal(passage, null)) {
      let unnamed = {
        video_id: video.video_id,
        title: video.title,
        passage: null,
        description: null,
      };
      return unnamed;
    }
    let description = await psalms_passage_description(passage);
    let held = {
      video_id: video.video_id,
      title: video.title,
      passage: passage,
      description: description,
    };
    return held;
  }
  let read = await list_map_limited_async(uploads, lambda_video, 10);
  let paired = [];
  let titles_without_passage = [];
  let titles_verses_absent = [];
  for (let one of read) {
    if (equal(one.passage, null)) {
      titles_without_passage.push(one.title);
      continue;
    }
    if (equal(one.description, null)) {
      titles_verses_absent.push(one.title);
      continue;
    }
    paired.push({
      video_id: one.video_id,
      title: one.title,
      description: one.description,
    });
  }
  let path = psalms_videos_descriptions_payload_path();
  await file_overwrite_json(path, paired);
  let r = {
    path: path,
    videos_total: uploads.length,
    videos: paired.length,
    titles_without_passage: titles_without_passage,
    titles_verses_absent: titles_verses_absent,
  };
  return r;
}
