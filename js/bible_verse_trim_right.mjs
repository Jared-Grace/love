import { text_empty_is } from "./text_empty_is.mjs";
import { text_last } from "./text_last.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { text_trim_right } from "./text_trim_right.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function bible_verse_trim_right(text) {
  "Takes off the end of a verse whatever follows its last mark of punctuation without being one, so that what is left is the mark itself.";
  "A sentence that finishes inside quotation is followed by the closing quote, and a sentence that finishes inside a parenthesis by the closing bracket. Asked whether it ends on a full stop, such a verse says no and the reader is made to wait for a sentence that finished already. These are taken off first so the question reaches the mark it was about.";
  "THE HYPHEN IS HERE FOR A BIBLE AND NOT FOR A LANGUAGE, added 2026-08-20. Burmese verses in this repo end on the full stop and then a bare dash, which is the typesetter saying the passage runs on rather than anything the language writes. Nothing anywhere ends a sentence on a hyphen, so taking it off can only ever uncover the real last mark - and where that mark turns out to be a comma the verse still rightly answers no, which is what makes this safe to do for every bible at once instead of for one.";
  "THE STRAIGHT APOSTROPHE IS THE CURLY ONE'S TWIN AND WAS MISSING, added 2026-09-05. The Tagalog bible here closes a quotation with the typewriter apostrophe rather than the curly one, so John 4:37 - which finishes its sentence and its quotation together - answered no, and a reader of Tagalog beside Cebuano and English was carried on into verse 38 for a sentence that had already ended in all three. The curly closing quote was here from the start; only the plain spelling of the same mark was not.";
  let suffixes = "\"-'>";
  let closers = new RegExp("^[\\p{Pe}\\p{Pf}\\p{Cf}\\p{Zs}]$", "u");
  let split = text_split_empty(suffixes);
  function lambda(s) {
    let ew = text_ends_with_any(s, split);
    if (ew) {
      return true;
    }
    let empty = text_empty_is(s);
    if (empty) {
      return false;
    }
    let last = text_last(s);
    let matched = text_regex_match(last, closers);
    let closing = null_not_is(matched);
    return closing;
  }
  let trimmed = text_trim_right(lambda, text);
  return trimmed;
}
