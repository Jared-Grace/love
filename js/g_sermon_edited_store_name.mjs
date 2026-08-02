import { fn_name } from "./fn_name.mjs";
export function g_sermon_edited_store_name() {
  "The name of the store holding sermons that have been edited by hand, which is the word a folder on this machine is already sitting under.";
  "It spells an app because the app is what first wrote there. Spelled as a reference rather than frozen, because a rename now carries the folder along with it - so the word has to follow the same rename, or the folder moves and this goes on looking where it was. The marker is what lets the word be said without importing the page it names, which is the whole reason this exists: four sermon readers were pulling in a deployed app to learn one word.";
  let v = fn_name("app_g_bible");
  return v;
}
