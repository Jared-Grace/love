import { trinity_name } from "../../../love/public/src/trinity_name.mjs";
import { emoji_bow } from "../../../love/public/src/emoji_bow.mjs";
import { emoji_trinity } from "../../../love/public/src/emoji_trinity.mjs";
export function prayer_start() {
  let v =
    emoji_bow() +
    " In the name" +
    trinity_name() +
    " " +
    emoji_trinity() +
    " : ";
  return v;
}
