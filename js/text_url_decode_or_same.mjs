import { text_url_decode } from "./text_url_decode.mjs";
import { catch_null } from "./catch_null.mjs";
import { equal_loose } from "./equal_loose.mjs";
export function text_url_decode_or_same(word) {
  "One word read back out of an address, or the word exactly as it came when it is not a valid spelling of anything.";
  "$plain word";
  "DECODING THROWS ON A LONE PERCENT SIGN. Somebody searching for 100% hands over a word the decoder refuses, and a refusal here would take down the whole address rather than the one word it could not read - so an unreadable word is kept as it was written, which is what it looked like to whoever typed it anyway.";
  "the word is a piece of an address being read, not a path and not anything that runs.";
  function lambda() {
    let v = text_url_decode(word);
    return v;
  }
  let decoded = catch_null(lambda);
  let failed = equal_loose(decoded, null);
  if (failed) {
    return word;
  }
  return decoded;
}
