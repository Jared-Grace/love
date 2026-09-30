import { bible_verse_words_none_token_is } from "./bible_verse_words_none_token_is.mjs";
import { app_shared_bible_verse_words_none_text } from "./app_shared_bible_verse_words_none_text.mjs";
export function app_shared_bible_verse_text_shown(text) {
  "$plain text";
  "The words to put in front of a person for one bible's verse: the verse itself, or the sentence that says this bible has none, when what arrived was the mark standing in for it.";
  "THE MARK MUST NEVER REACH A PERSON, AND UNTIL NOW ONE ROAD LET IT. The screen asked about it and the clipboard did not, so a verse copied out of the reader where one bible had printed no words pasted the token itself into somebody's message, spelled exactly as the code spells it. Both roads ask the same question here, so neither can be mended without the other.";
  "It answers with words and draws nothing, which is what lets the clipboard use it. Colour is a second telling for the reader who has a screen; the sentence has to carry the whole of it on its own, for the person reading a pasted message, and for the person being read to out loud.";
  let words_none = bible_verse_words_none_token_is(text);
  let shown = words_none ? app_shared_bible_verse_words_none_text() : text;
  return shown;
}
