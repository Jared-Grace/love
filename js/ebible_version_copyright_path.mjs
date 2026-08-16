import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
export function ebible_version_copyright_path(bible_folder) {
  "$plain bible_folder";
  "Where a downloaded translation keeps its own statement of who owns it and on what terms - one page eBible ships inside every zip beside the books.";
  "Read off the download rather than off the web, because a search result is somebody's summary of the terms and this is the terms.";
  let joined = ebible_version_download_path_combine(bible_folder, "copr");
  return joined;
}
