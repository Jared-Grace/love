import { ebible_folder_indonesian } from "./ebible_folder_indonesian.mjs";
export function ebible_language_indonesian() {
  "Indonesian, as one of the languages a reader can be handed - its name, the bible it is read from, and the code the address carries for it.";
  "The code is the one the list of every language already gives Indonesian, so a link that chose Indonesian in one app chooses the same Indonesian in this one.";
  let r = {
    name: "Indonesian",
    bible_folder: ebible_folder_indonesian(),
    language_code: "ind",
  };
  return r;
}
