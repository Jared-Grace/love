import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { bible_verse_trim_right } from "./bible_verse_trim_right.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_last } from "./text_last.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { text_trim_right } from "./text_trim_right.mjs";
import { bible_verse_end_suffixes } from "./bible_verse_end_suffixes.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { not } from "./not.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function bible_verse_end_blocked_or_null(text) {
  "Answers the closing marks standing between a verse and the sentence mark behind them, or nothing when the verse is not blocked that way.";
  "The fault this looks for was met once and repaired by hand. A Tagalog verse ended its sentence and its quotation together, closing on a full stop and then the typewriter apostrophe, and that apostrophe was not among the marks taken off before the question was asked - so the verse answered that it had not finished, and a reader of three languages was carried on into a verse whose sentence had already ended in all three of them. The marks taken off are written out by hand, so the same hole stands open wherever another bible closes a quotation with a mark nobody here had met.";
  "IT TAKES OFF MORE THAN THE READING IT CHECKS DOES, ON PURPOSE, because a check that can only strip what the reading already strips can never disagree with it. So it takes off anything that is neither a letter nor a figure, which is far wider than the closing marks a verse is really allowed to end on - and where a sentence mark turns up behind that, what it has found is a candidate for a person to read rather than a repair to apply. That width is what found the seven bibles spelling a closing quotation as two greater-than signs, a mark no reasoning about closing quotes would ever have reached.";
  "IT STOPS THE MOMENT IT REACHES A MARK A SENTENCE ENDS ON, and without that it would answer nothing at all. A full stop is neither a letter nor a figure, so a stripper this wide walks straight past the very mark it is looking for and comes out on the letter before it - which reads exactly like a verse that never finished a sentence. Measured 2026-09-05: widened without this line it found none of the fourteen it had just found. A letter or a figure stops it too, which is what keeps a bible that numbers verses in the body of its text from uncovering the stop of the sentence before the number.";
  "It answers the marks themselves rather than yes, because the repair is to add them to what is taken off and a yes would not say which to add.";
  let ended = bible_verse_end_is(text);
  if (ended) {
    return null;
  }
  let trimmed = bible_verse_trim_right(text);
  let closers = new RegExp("^[^\\p{L}\\p{N}]$", "u");
  function bible_verse_end_blocked_closing_is(s) {
    let empty = text_empty_is(s);
    if (empty) {
      return false;
    }
    let suffixes2 = bible_verse_end_suffixes();
    let reached = text_ends_with_any(s, suffixes2);
    if (reached) {
      return false;
    }
    let last = text_last(s);
    let matched = text_regex_match(last, closers);
    let closing = null_not_is(matched);
    return closing;
  }
  let bare = text_trim_right(bible_verse_end_blocked_closing_is, trimmed);
  let suffixes = bible_verse_end_suffixes();
  let revealed = text_ends_with_any(bare, suffixes);
  if (not(revealed)) {
    return null;
  }
  let size = text_size(bare);
  let blocking = text_slice_from(trimmed, size);
  return blocking;
}
