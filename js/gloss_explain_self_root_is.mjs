import { list_any } from "./list_any.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_quote_marks_removed } from "./text_quote_marks_removed.mjs";
export function gloss_explain_self_root_is(word, explain) {
  "Whether one word's explanation gives that same word as the root it is built from.";
  "A word cannot come from itself, so an explanation that says so has told the reader nothing while sounding like it told them something - and it is the one failure the root comparison can never catch, because that comparison asks whether the root appears in the prose and a word always appears in its own.";
  "It looks for the word standing immediately after the phrase that introduces a root, rather than anywhere in the sentence, because a right explanation names the word constantly and only a wrong one puts it in that one position.";
  "Quote marks come out before the comparison, so a root named in curly quotes and a root named in straight ones are the same thing here.";
  let word_lower = text_lower_to(word);
  let explain_lower = text_lower_to(explain);
  let bare = text_quote_marks_removed(explain_lower);
  let root_phrase = text_combine("root ", word_lower);
  let root_word_phrase = text_combine("root word ", word_lower);
  let phrases = [root_phrase, root_word_phrase];
  function said_is(phrase) {
    let said = text_includes(bare, phrase);
    return said;
  }
  let r = list_any(phrases, said_is);
  return r;
}
