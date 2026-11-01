import { arguments_assert } from "./arguments_assert.mjs";
import { path_bare_downloads } from "./path_bare_downloads.mjs";
export function lyric_video_description_path(path_video) {
  arguments_assert(arguments, 1);
  ("$plain path_video");
  ("Where the words for a lyric video's upload are written: beside the video, named after it - and in Downloads when the video is named bare.");
  let path_located = path_bare_downloads(path_video);
  let r = path_located + ".description.txt";
  return r;
}
