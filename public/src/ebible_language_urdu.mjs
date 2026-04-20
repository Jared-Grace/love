import { ebible_folder_urdu } from "../../../love/public/src/ebible_folder_urdu.mjs";
export function ebible_language_urdu() {
  let r = {
    name: "Urdu",
    bible_folder: ebible_folder_urdu(),
    language_code: "ur",
  };
  return r;
}
