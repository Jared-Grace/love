import { emoji_trinity } from "./emoji_trinity.mjs";
import { chalk_green } from "./chalk_green.mjs";
import { text_combine } from "./text_combine.mjs";
export async function trinity_green() {
  let s = await chalk_green(text_combine(emoji_trinity(), " "));
  return s;
}
