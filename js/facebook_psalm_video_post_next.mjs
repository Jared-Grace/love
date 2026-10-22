import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_psalm_posted_path } from "./facebook_psalm_posted_path.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { not } from "./not.mjs";
import { file_read } from "./file_read.mjs";
import { equal } from "./equal.mjs";
import { youtube_channel_lyric_videos } from "./youtube_channel_lyric_videos.mjs";
import { youtube_channel_uploads_all } from "./youtube_channel_uploads_all.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_psalm_video_post } from "./facebook_psalm_video_post.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function facebook_psalm_video_post_next() {
  arguments_assert(arguments, 0);
  ("Posts to facebook the oldest psalm lyric video that is public on youtube and not posted to facebook yet, and records it - so one scheduled run is one post, and once facebook has caught up each run picks up whatever youtube gained since.");
  ("★ IT TAKES NOTHING ON PURPOSE: it is run by a timer, and it finds its own next one from youtube and the record, so it cannot drift from what is actually public.");
  ("★ ONLY PUBLIC ON YOUTUBE: a private youtube upload is held back, often a retry copy; the human's rule is public on facebook iff public on youtube.");
  ("A title is matched to the film by the first line of the description file uploaded beside it. When several films share a title, the cut one is the one uploaded.");
  let ledger_path = facebook_psalm_posted_path();
  let ledger = await file_read_json_exists_ensure(ledger_path);
  let path_folder = folder_user_downloads_path("");
  let names = await folder_read_files(path_folder);
  let by_title = {};
  for (let name of names) {
    let b2 = name.startsWith("Psalm");
    if (not(b2) || not(name.endsWith(".mp4.description.txt"))) {
      continue;
    }
    let description_path = folder_user_downloads_path(name);
    let text = await file_read(description_path);
    let title = text.split("\n")[0].trim();
    let film = description_path.slice(0, -".description.txt".length);
    let held = by_title[title];
    if (equal(held, undefined) || name.includes(" cut)")) {
      by_title[title] = film;
    }
  }
  let channel_id = youtube_channel_lyric_videos();
  let videos = await youtube_channel_uploads_all(channel_id);
  function lambda(v) {
    let r2 = equal(v.privacy, "public") && v.title.startsWith("Psalm");
    return r2;
  }
  videos = videos.filter(lambda);
  function lambda2(a, b) {
    let r3 = less_than(a.published_at, b.published_at) ? -1 : 1;
    return r3;
  }
  videos.sort(lambda2);
  let missing = [];
  for (let v of videos) {
    if (not_equal(ledger[v.title], undefined)) {
      continue;
    }
    let film = by_title[v.title];
    if (equal(film, undefined)) {
      missing.push(v.title);
      continue;
    }
    let r = await facebook_psalm_video_post(film);
    ledger[v.title] = {
      video_id: v.video_id,
      file_path: film,
      posted_at: new Date().toISOString(),
    };
    await file_overwrite_json(ledger_path, ledger);
    let r4 = {
      posted: v.title,
      file_path: film,
      missing,
      steps: r.steps,
      cover: r.cover,
      cover_error: r.cover_error,
    };
    return r4;
  }
  let r5 = {
    posted: null,
    missing,
  };
  return r5;
}
