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
  "WHAT COUNTS AS A CLOSING MARK IS ASKED OF UNICODE RATHER THAN LISTED HERE, because a hand-written list is precisely the thing that was already short. Unicode names the category every mark belongs to, and four of those categories can only ever stand after a sentence has finished - a closing bracket, a closing quote, a mark that is not drawn at all, and a space. A comma and a semicolon are in none of them, so a verse that genuinely stops in the middle of a sentence still rightly answers that it has not finished.";
  "A LETTER OR A DIGIT ENDS THE SEARCH BY FALLING OUTSIDE ALL FOUR, which is what keeps a bible that numbers its verses in the body of the text from answering yes. A trailing figure taken off would uncover the full stop of the sentence before it and this would call that verse finished when it is not.";
  "It answers the marks themselves rather than yes, because the repair is to add them to what is taken off and a yes would not say which to add.";
  let ended = bible_verse_end_is(text);
  if (ended) {
    return null;
  }
  let trimmed = bible_verse_trim_right(text);
  let closers = new RegExp("^[\\p{Pe}\\p{Pf}\\p{Cf}\\p{Zs}]$", "u");
  function bible_verse_end_blocked_closing_is(s) {
    let empty = text_empty_is(s);
    if (empty) {
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
