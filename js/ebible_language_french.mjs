import { ebible_folder_french } from "./ebible_folder_french.mjs";
export function ebible_language_french() {
  "French, as one of the languages a reader can be handed - its name, the bible it is read from, and the code the address carries for it.";
  "The code is the one the list of every language already gives French, so a link that chose French in one app chooses the same French in this one.";
  let r = {
    name: "French",
    bible_folder: ebible_folder_french(),
    language_code: "fra",
  };
  return r;
}
