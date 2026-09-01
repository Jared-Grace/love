import { media_join } from "./media_join.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
export async function media_join_if_exists_not(path_output, paths_media) {
  let n = await file_exists_not(path_output);
  if (n) {
    await media_join(paths_media, path_output);
  }
}
