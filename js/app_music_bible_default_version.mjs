import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export function app_music_bible_default_version() {
  "The translation every passage on the music page is quoted from unless that passage says otherwise, as the folder its chapters sit in and the name a reader is shown it under.";
  "WRITTEN IN ONE PLACE BECAUSE IT IS NOW TWO ANSWERS AND NOT ONE. The page used to ask only which folder to fetch from, and the folder was the whole of it. Now that a passage may be quoted from somewhere else, the page also has to say which translation a reader is looking at - and a folder name is not something to show anybody. Two facts that must agree belong in one function, or the day one of them changes is the day they disagree.";
  "It is also the name the built file is filed under, so changing it here changes where the page looks and what it builds, together.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_english();
  let version = {
    bible_folder: bible_folder,
    name: "Berean Standard Bible",
  };
  return version;
}
