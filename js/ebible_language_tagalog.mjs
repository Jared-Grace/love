import { ebible_folder_tagalog } from "./ebible_folder_tagalog.mjs";
export function ebible_language_tagalog() {
  "Tagalog, as one of the languages a reader can be handed - its name, the bible it is read from, and the code the address carries for it.";
  "The code is the one the list of every language already gives Tagalog, so a link that chose Tagalog in one app chooses the same Tagalog in this one.";
  let r = {
    name: "Tagalog",
    bible_folder: ebible_folder_tagalog(),
    language_code: "tgl",
  };
  return r;
}
