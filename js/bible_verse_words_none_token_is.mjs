import { equal } from "./equal.mjs";
import { bible_verse_words_none_token } from "./bible_verse_words_none_token.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
export function bible_verse_words_none_token_is(text) {
  "$plain text";
  "Whether a piece of verse text is the mark standing in for a verse the translation printed no words for, rather than words somebody can read.";
  "ASK THIS BEFORE DRAWING ANY VERSE. The token is carried in the same place the words are carried, which is what lets it survive every reading that only knows how to pass text along; the cost of that is that a reader which never asks will draw it as if it were scripture.";
  "It is asked of the text alone and not of the verse it came from, because the three readings that cut verses out - the pages, the publisher's own files, and the Sword editions - hand their verses back in three different shapes and all three spell the text the same way.";
  "The whole text has to be the token. A verse that quotes it, were one ever to, is words with a curious word among them and is still a verse; only a verse that is nothing else is the missing.";
  let token = bible_verse_words_none_token();
  let trimmed = whitespace_normalize(text);
  let same = equal(trimmed, token);
  return same;
}
