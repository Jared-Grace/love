import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_url_encode } from "./text_url_encode.mjs";
export function binisaya_word_url(word) {
  "Where one Cebuano word's dictionary entry sits on binisaya.com.";
  "$plain word";
  "the word is a Cebuano word being looked up, not a path and not anything that runs. It is spelled for an address and joined into one; nothing here reads a file or reaches the network.";
  let encoded = text_url_encode(word);
  let url = text_combine_multiple([
    "https://www.binisaya.com/node/21?search=binisaya&word=",
    encoded,
    "&Search=Search",
  ]);
  return url;
}
