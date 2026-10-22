import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_psalm_youtube_kept_path } from "./facebook_psalm_youtube_kept_path.mjs";
import { youtube_channel_lyric_videos } from "./youtube_channel_lyric_videos.mjs";
import { youtube_channel_uploads_all } from "./youtube_channel_uploads_all.mjs";
import { not } from "./not.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function facebook_psalm_youtube_public() {
  arguments_assert(arguments, 0);
  ("The psalm lyric videos public on youtube, oldest first, as {videos, youtube_error}. Each time youtube answers, the list is kept on disk; when youtube refuses, the kept list is answered instead and youtube_error says why.");
  ("★ A REFUSED YOUTUBE SIGN-IN DOES NOT STOP THE FACEBOOK POSTS. The sign-in lasts 7 days while the app is in Google's testing mode, and on 2026-10-22 an expired one stopped the 8 PM post. The kept list only lacks what went public since it was kept, so posting from it never posts anything that was not public.");
  ("With nothing kept yet there is nothing to fall back on, so youtube's own refusal is thrown.");
  let kept_path = facebook_psalm_youtube_kept_path();
  let videos = null;
  try {
    let channel_id = youtube_channel_lyric_videos();
    videos = await youtube_channel_uploads_all(channel_id);
  } catch (e) {
    let b2 = await file_exists(kept_path);
    if (not(b2)) {
      throw e;
    }
    let kept = await file_read_json_exists_ensure(kept_path);
    let fallen = {
      videos: kept.videos,
      youtube_error: e.message,
    };
    return fallen;
  }
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
  await file_overwrite_json(kept_path, {
    videos,
  });
  let r = {
    videos,
    youtube_error: null,
  };
  return r;
}
