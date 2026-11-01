import { text_frozen } from "./text_frozen.mjs";
export function bible_word_article_sites_recent_key() {
  "The word the sites a reader last opened articles on are kept under on the device, so the writer and the reader of them cannot disagree about the spelling.";
  "Frozen because it is kept on readers' devices: once written there, a new spelling would forget every reader's choice.";
  let v = text_frozen("sites_recent");
  return v;
}
