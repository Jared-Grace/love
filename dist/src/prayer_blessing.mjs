import { prayer_end } from "../../../love/public/src/prayer_end.mjs";
import { text_lord_bless } from "../../../love/public/src/text_lord_bless.mjs";
import { prayer_start } from "../../../love/public/src/prayer_start.mjs";
export function prayer_blessing(blessed) {
  let v2 =
    prayer_start() +
    text_lord_bless() +
    blessed +
    " exceedingly abundantly more than anyone can ask or think " +
    prayer_end();
  return v2;
}
