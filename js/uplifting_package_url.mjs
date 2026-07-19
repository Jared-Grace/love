import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function uplifting_package_url(bible_folder) {
  let r = text_combine_multiple(["/bible/uplifting/", bible_folder, ".json"]);
  return r;
}
