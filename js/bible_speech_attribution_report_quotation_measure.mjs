import { arguments_assert } from "./arguments_assert.mjs";
import { bible_speech_quotation_citation_is } from "./bible_speech_quotation_citation_is.mjs";
import { bible_speech_quotation_heading_is } from "./bible_speech_quotation_heading_is.mjs";
import { list_add } from "./list_add.mjs";
import { bible_speech_quotation_gloss_is } from "./bible_speech_quotation_gloss_is.mjs";
import { bible_speech_text_attribution } from "./bible_speech_text_attribution.mjs";
import { bible_speech_text_attribution_after } from "./bible_speech_text_attribution_after.mjs";
import { equal } from "./equal.mjs";
export function bible_speech_attribution_report_quotation_measure(
  book_code,
  citations,
  unattributed,
  attributed,
) {
  "Sorts each quotation in a book into what kind of quoting it is - a heading, an explanation of a word, a citation, a carrying on of the quotation before it, or speech with a verb saying who spoke - and hands back both the sorter and the three lists it keeps itself.";
  arguments_assert(arguments, 4);
  let headings = [];
  let glosses = [];
  let continuations = [];
  let citation_is = bible_speech_quotation_citation_is(book_code);
  function quotation_measure(quotation) {
    let heading_is = bible_speech_quotation_heading_is(quotation);
    if (heading_is) {
      list_add(headings, quotation);
      return;
    }
    let gloss_is = bible_speech_quotation_gloss_is(quotation);
    if (gloss_is) {
      list_add(glosses, quotation);
      return;
    }
    if (citation_is) {
      list_add(citations, quotation);
      return;
    }
    if (quotation.continues_is) {
      list_add(continuations, quotation);
      return;
    }
    let verb_before = bible_speech_text_attribution(quotation.before);
    let verb_after = bible_speech_text_attribution_after(quotation.after);
    let verb = verb_before;
    if (equal(verb, null)) {
      verb = verb_after;
    }
    if (equal(verb, null)) {
      list_add(unattributed, quotation);
      return;
    }
    quotation.verb = verb;
    list_add(attributed, quotation);
  }
  let r = {
    headings,
    glosses,
    continuations,
    quotation_measure,
  };
  return r;
}
