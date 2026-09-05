import { bible_verse_end_suffixes } from "./bible_verse_end_suffixes.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_find_indices } from "./list_find_indices.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { text_take } from "./text_take.mjs";
import { not } from "./not.mjs";
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
  "WHAT COUNTS AS A CLOSING MARK IS NOW ASKED OF UNICODE RATHER THAN LISTED HERE, added 2026-09-05. Every mark added above was added because one bible was found waiting on a sentence it had already finished, which means the list only ever grew by somebody meeting the next hole - and a sweep of the sixteen opening verses of every bible this repo ships found fourteen more bibles doing exactly that, in five marks nobody had thought of: the French closing guillemet, the no-break space, the hair space, the zero width non joiner and the mark that pops a right-to-left run back. Unicode already knows what kind of mark each of those is, and four of its kinds can only ever stand after a sentence has finished: a closing bracket, a closing quote, a mark that is drawn as nothing, and a space. Asking that question takes the whole class at once, so the closing bracket of Japanese is handled before any bible here writes one.";
  "THE FOUR MARKS STILL WRITTEN OUT ARE THE ONES UNICODE FILES SOMEWHERE ELSE, and each is here for a reason of its own rather than as a leftover. The straight quote and the straight apostrophe are typewriter spellings that Unicode cannot tell from an opening mark, so it files them as neither. The hyphen is a typesetter mark, explained above. The greater-than sign is filed as a piece of mathematics, and seven bibles here spell a closing quotation as two of them because they were typed in plain letters - which is why a verse of theirs ends on a full stop and then two arrows.";
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
  ("A CROSS REFERENCE PRINTED BEHIND THE SENTENCE IS TAKEN OFF WHOLE, added 2026-09-05, and it is the same fault one layer further out. Everything above takes off single marks, which is enough while what stands between the reader and the sentence mark is punctuation. A Hindi bible here finishes its sentence and then prints where else the verse is spoken of, in brackets, so what stands in the way is a span of words and figures - and taken one character at a time that never clears, because the first figure it meets is not a mark and stops it. Counted over the sixteen opening verses of every bible here, one bible does this and it does it twice in one chapter.");
  ("THE SPAN MUST CLOSE THE VERSE, or this would cut at a bracket standing in the middle of one and call the whole remainder a reference. That is the line between an editor writing beside the text and the text writing a parenthesis of its own, and it is the only guard needed, because cutting is undone unless a sentence mark is actually uncovered behind it.");
  ("NOTHING A READER SEES IS CHANGED BY ANY OF THIS. What is trimmed here is only ever asked a question - has this verse finished a sentence - and the verse itself is shown as it was uploaded. So a cut that takes off more than an editor wrote costs a reading unit that ends one verse early, never a word off the page.");
  let ends = bible_verse_end_suffixes();
  let finished = text_ends_with_any(trimmed, ends);
  if (finished) {
    return trimmed;
  }
  let squeezed = text_trim(text);
  let bare = text_empty_is(squeezed);
  if (bare) {
    return trimmed;
  }
  let closers2 = new RegExp("^\\p{Pe}$", "u");
  let final = text_last(squeezed);
  let matched2 = text_regex_match(final, closers2);
  let bracketed = null_not_is(matched2);
  if (not(bracketed)) {
    return trimmed;
  }
  let opening = new RegExp("^\\p{Ps}$", "u");
  function bible_verse_trim_right_opener_is(character) {
    let matched3 = text_regex_match(character, opening);
    let opened = null_not_is(matched3);
    return opened;
  }
  let characters = text_split_empty(squeezed);
  let indices = list_find_indices(characters, bible_verse_trim_right_opener_is);
  let none = list_empty_is(indices);
  if (none) {
    return trimmed;
  }
  let start = list_last(indices);
  let before = text_take(squeezed, start);
  let cut = text_trim_right(lambda, before);
  let revealed = text_ends_with_any(cut, ends);
  if (not(revealed)) {
    return trimmed;
  }
  return cut;
}
