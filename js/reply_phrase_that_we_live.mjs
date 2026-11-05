import { reply_phrases } from "./reply_phrases.mjs";
export function reply_phrase_that_we_live() {
  "So that we might live through him, in the words of 1 John 4:9.";
  let r = reply_phrases([
    "that we might live through him",
    "that we may live through him",
    "that we may live by him",
    "that we might liue through him",
    "so that we might live through him",
    "so that we might have life through him",
  ]);
  return r;
}
