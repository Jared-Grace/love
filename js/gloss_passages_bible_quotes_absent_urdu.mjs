import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_bible_quotes_urdu } from "./gloss_explain_bible_quotes_urdu.mjs";
import { urdu_bible_book_code_or_null } from "./urdu_bible_book_code_or_null.mjs";
import { text_urdu_quote_bare } from "./text_urdu_quote_bare.mjs";
import { gloss_passages_entries_collect_generic } from "./gloss_passages_entries_collect_generic.mjs";
export function gloss_passages_bible_quotes_absent_urdu(
  passages,
  text_index,
  word_keys_read,
  index,
) {
  "Every Urdu explanation in a chapter that quotes another chapter of the Bible by name and number with words that chapter of the Urdu Bible does not hold.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "The Bible checked against is the one the app shows beside the explanation, so a quote that fails here is one the reader can turn to and not find. A quote faithful to some other Urdu translation fails all the same, which is the point: the reader has only this one in front of them.";
  "A chapter the index does not hold counts as not holding the quote, since a citation of a chapter that does not exist is wrong for a plainer reason still.";
  arguments_assert(arguments, 4);
  function entry_read(context) {
    let found = [];
    for (let q of gloss_explain_bible_quotes_urdu(context.explain)) {
      let code = urdu_bible_book_code_or_null(q.book_said);
      if (equal(code, null)) {
        continue;
      }
      let cited = code + " " + q.chapter_said;
      let text = index[cited];
      if (
        not_equal(text, undefined) &&
        text.includes(text_urdu_quote_bare(q.quote))
      ) {
        continue;
      }
      found.push({
        verses_key: context.verses_key,
        word: context.word,
        cited,
        quote: q.quote,
        explain: context.explain,
      });
    }
    return found;
  }
  let r = gloss_passages_entries_collect_generic(
    passages,
    text_index,
    word_keys_read,
    entry_read,
  );
  return r;
}
