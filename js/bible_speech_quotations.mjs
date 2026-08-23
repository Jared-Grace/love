import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function bible_speech_quotations(verses_spans) {
  "The spans of one chapter gathered back into whole quotations - each one the unbroken stretch of quoted text between an opening mark and its closing mark, together with the narration standing immediately before it.";
  "★ THIS UNDOES THE VERSE CUT ON PURPOSE, AND THAT IS NOT A CONTRADICTION OF THE CUT. The cut exists so audio can locate a verse; a quotation exists so a reading can ask who is speaking. One stretch of speech has one speaker however many verses it crosses, so the question is asked of the whole stretch and answered once.";
  "★ THE NARRATION BEFORE IT IS CARRIED ALONG BECAUSE THAT IS WHERE THE SPEAKER'S NAME IS. Jesus answered them, is the sentence that tells a reader whose the next paragraph is, and it is not inside the quotation - it is the last thing before it. A quotation handed over without it is unanswerable by construction.";
  "★ WHERE A QUOTATION OPENS THE CHAPTER THERE IS NOTHING BEFORE IT AND THE FIELD IS EMPTY, WHICH IS A REAL ANSWER RATHER THAN A MISSING ONE. A chapter can begin mid-discourse, and the speaker is then named in the chapter before or nowhere at all. Reporting the emptiness is what lets a count of those exist.";
  "★ THE NARRATION AFTER IT IS CARRIED TOO, BECAUSE ENGLISH PUTS THE ATTRIBUTION ON EITHER SIDE AND A MEASUREMENT THAT ONLY LOOKED BACKWARDS SAID SO. Mark 1:17 reads Come, follow Me, then Jesus said, then and I will make you fishers of men - the speaker is named BETWEEN two halves of his own sentence, and a reading that only looked behind the opening mark found a boat, a net and two fishermen and credited the words to nobody. Which side carries the name is a matter of English style rather than of meaning, so both sides are kept and the answer is whichever one holds it.";
  arguments_assert(arguments, 1);
  let quotations = [];
  let narration_last = "";
  let gathering = null;
  function span_each(span) {
    if (equal(span.depth, 0)) {
      let b = equal(gathering, null);
      if (not(b)) {
        gathering.after = span.text;
      }
      gathering = null;
      narration_last = span.text;
      return;
    }
    if (equal(gathering, null)) {
      gathering = {
        verse_number: span.verse_number,
        before: narration_last,
        after: "",
        text: span.text,
      };
      list_add(quotations, gathering);
      return;
    }
    let left = add(gathering.text, " ");
    gathering.text = add(left, span.text);
  }
  each(verses_spans, span_each);
  return quotations;
}
