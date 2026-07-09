import { path_join } from "../../../love/public/src/path_join.mjs";
import { ebible_version_download_path } from "../../../love/public/src/ebible_version_download_path.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function ebible_version_download_path_combine(bible_folder, book_code) {
  let chapters_name = text_combine(book_code, ".htm");
  let file_path = ebible_version_download_path(bible_folder);
  let joined = path_join([file_path, chapters_name]);
  return joined;
}
