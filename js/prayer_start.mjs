import { trinity_name_prayer } from "./trinity_name_prayer.mjs";
import { emoji_bow } from "./emoji_bow.mjs";
import { emoji_trinity } from "./emoji_trinity.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function prayer_start() {
  let v = text_combine_multiple([
    emoji_bow(),
    " In the name of ",
    trinity_name_prayer(),
    " ",
    emoji_trinity(),
    " : ",
  ]);
  return v;
}
