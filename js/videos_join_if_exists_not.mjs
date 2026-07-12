import { videos_join } from "./videos_join.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
export async function videos_join_if_exists_not(path_video, paths_videos) {
  let n = await file_exists_not(path_video);
  if (n) {
    await videos_join(paths_videos, path_video);
  }
}
