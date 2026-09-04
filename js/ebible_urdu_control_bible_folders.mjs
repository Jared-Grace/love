import { ebible_folder_urdu_control } from "./ebible_folder_urdu_control.mjs";
import { ebible_folder_urdu_control_roman } from "./ebible_folder_urdu_control_roman.mjs";
export function ebible_urdu_control_bible_folders() {
  "The translations this repo reads but may not carry a word of: the ones consulted as evidence, whose terms freeze their own words.";
  "Both printings of the second Urdu bible, in Urdu letters and in Latin ones. Each is named by the function that already spells it, so this list follows them rather than repeating them, and a rename reaches here.";
  "It is a list of the ones actually read, not of every such translation on the disk. A translation nobody here opens cannot have leaked into anything, and gathering the words of all of them would spend an enormous amount of reading to prove something about files that were never near them. When a further one starts being consulted, its name belongs on this list in the same commit that starts consulting it.";
  let control = ebible_folder_urdu_control();
  let roman = ebible_folder_urdu_control_roman();
  let folders = [control, roman];
  return folders;
}
