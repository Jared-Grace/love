import { videos_join } from "../../../love/public/src/videos_join.mjs";
import { file_exists_not } from "../../../love/public/src/file_exists_not.mjs";
export async function videos_join_if_exists_not(path_video, paths_videos) {
  const n = await file_exists_not(path_video);
  if (n) {
    await videos_join(paths_videos, path_video);
  }
}
