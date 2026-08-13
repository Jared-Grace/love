import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function storage_key_name_get(app_fn_name, key) {
  "The key a setting is filed under in somebody's browser, named by the word the owning app answers to rather than by the app itself.";
  "The join lives here and nowhere else. A key is a published thing sitting on disks this repo will never see again, so a second place spelling the same join is a second place it can quietly stop matching.";
  "Asking for the name rather than the function is what lets one page read a setting another page filed. Everything under here only ever wanted the name - a page that has to hand over the whole app to say whose setting it is drags that app's entire reading into its own bundle, which for a page that shows one verse is the difference between a page and a reader.";
  let ley = text_combine_multiple([app_fn_name, " ", key]);
  return ley;
}
