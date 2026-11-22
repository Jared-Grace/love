import { ebible_folder_swahili } from "./ebible_folder_swahili.mjs";
export function ebible_language_kenya() {
  let r = {
    name: "Kiswahili (Swahili)",
    bible_folder: ebible_folder_swahili(),
    language_code: "swh",
  };
  return r;
}
