import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_version_download_url(bible_folder, name) {
  let v = text_combine_multiple([
    "https://ebible.org/Scriptures/",
    bible_folder,
    "_",
    name,
    ".zip",
  ]);
  return v;
}
