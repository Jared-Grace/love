import { trinity_name_prayer } from "../../../love/public/src/trinity_name_prayer.mjs";
import { emoji_bow } from "../../../love/public/src/emoji_bow.mjs";
import { emoji_trinity } from "../../../love/public/src/emoji_trinity.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
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
