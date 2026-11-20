import { ebible_folder_spanish } from "./ebible_folder_spanish.mjs";
export function ebible_language_spanish() {
  "Spanish, as one of the languages a reader can be handed - its name, the bible it is read from, and the code the address carries for it.";
  "The code is the one the list of every language already gives Spanish, so a link that chose Spanish in one app chooses the same Spanish in this one.";
  let r = {
    name: "Spanish",
    bible_folder: ebible_folder_spanish(),
    language_code: "es",
  };
  return r;
}
