import { bible_verse_words_none_token_is } from "./bible_verse_words_none_token_is.mjs";
import { app_shared_bible_verse_words_none_text } from "./app_shared_bible_verse_words_none_text.mjs";
import { text_wrap_brackets } from "./text_wrap_brackets.mjs";
export function app_shared_bible_verse_text_shown(text) {
  "$plain text";
  "The words to put in front of a person for one bible's verse: the verse itself, or the sentence that says this bible has none, when what arrived was the mark standing in for it.";
  "THE MARK MUST NEVER REACH A PERSON, AND UNTIL NOW ONE ROAD LET IT. The screen asked about it and the clipboard did not, so a verse copied out of the reader where one bible had printed no words pasted the token itself into somebody's message, spelled exactly as the code spells it. Both roads ask the same question here, so neither can be mended without the other.";
  "It answers with words and draws nothing, which is what lets the clipboard use it. Colour is a second telling for the reader who has a screen; the sentence has to carry the whole of it on its own, for the person reading a pasted message, and for the person being read to out loud.";
  "The sentence stands in square brackets, which is what bible printing has used for centuries for a word that is not in the text being translated. A reader who has met a bracketed word in a bible already knows what the brackets are saying before reading what is inside them, and a reader who has not loses nothing, because the sentence says it too.";
  "The brackets go into the words rather than onto the screen, so they are still there on somebody's clipboard. The slope the screen adds says the same thing a second time and travels nowhere; these travel.";
  let words_none = bible_verse_words_none_token_is(text);
  if (words_none) {
    let sentence = app_shared_bible_verse_words_none_text();
    let bracketed = text_wrap_brackets(sentence);
    return bracketed;
  }
  let shown = text;
  return shown;
}
