import { text_frozen } from "./text_frozen.mjs";
export function app_shared_bible_session_id_key() {
  "The word one tab's own identifier is kept under, and the word it stands under in a remembered reading, so the writer and the readers of it cannot disagree about the spelling.";
  "One word for both because it is one thing said twice - the tab that wrote a line down is how that line is found again.";
  "The word is frozen at this site as well as listed as frozen, because it reads as a name a function could easily be given one day - and on that day the canonicalizing pass would turn this value into a reference to it, so every reading already written down would stop matching the tab that wrote it.";
  let v = text_frozen("session_id");
  return v;
}
