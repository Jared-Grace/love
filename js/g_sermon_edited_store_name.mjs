import { text_frozen } from "./text_frozen.mjs";
export function g_sermon_edited_store_name() {
  "The name of the store holding sermons that have been edited by hand, which is the word a folder on this machine is already sitting under.";
  "It spells an app because the app is what first wrote there, and that is the whole of why it must not move: the folder is on a disk, full of work somebody did by hand, and a rename of the app would leave every future read looking under the new word while all of it stays under the old one. Reading the word here rather than reading the app's name off the app is what breaks that link - and it stops four sermon functions importing a whole page in order to learn one word.";
  let v = text_frozen("app_g_bible");
  return v;
}
