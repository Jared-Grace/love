import { ebible_folder_portuguese } from "./ebible_folder_portuguese.mjs";
export function ebible_language_portuguese() {
  "Portuguese, as one of the languages a reader can be handed - its name, the bible it is read from, and the code the address carries for it.";
  "The code is the one the list of every language already gives Portuguese, so a link that chose Portuguese in one app chooses the same Portuguese in this one.";
  let r = {
    name: "Portuguese",
    bible_folder: ebible_folder_portuguese(),
    language_code: "por",
  };
  return r;
}
