import { ebible_folder_japanese } from "./ebible_folder_japanese.mjs";
export function ebible_language_japanese() {
  "Japanese, as one of the languages a reader can be handed - its name, the bible it is read from, and the code the address carries for it.";
  "The code is the one the list of every language already gives Japanese, so a link that chose Japanese in one app chooses the same Japanese in this one.";
  let r = {
    name: "Japanese",
    bible_folder: ebible_folder_japanese(),
    language_code: "jpn",
  };
  return r;
}
