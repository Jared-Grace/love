import { emoji_trinity } from "../../../love/public/src/emoji_trinity.mjs";
import { chalk_green } from "../../../love/public/src/chalk_green.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function trinity_green() {
  let s = await chalk_green(text_combine(emoji_trinity(), " "));
  return s;
}
