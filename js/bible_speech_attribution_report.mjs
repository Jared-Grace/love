import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { bible_speech_spans_chapter } from "./bible_speech_spans_chapter.mjs";
import { bible_speech_quotations } from "./bible_speech_quotations.mjs";
import { bible_speech_text_attribution } from "./bible_speech_text_attribution.mjs";
export async function bible_speech_attribution_report(bible_folder, book_code) {
  "$plain bible_folder";
  "$plain book_code";
  "How many of one book's quotations have a speaking verb standing in front of them, and how many are left with nobody credited - the number that says whether giving this book a cast is an afternoon's work or a manuscript's worth of judgement calls.";
  "★ THIS IS THE MEASUREMENT THE CASTING DECISION WAS WAITING ON, AND IT IS WORTH SAYING WHY A GUESS WOULD NOT DO. Every argument about a cast so far has been about what is permitted; none of it says what it COSTS, and the cost is entirely the count of quotations a person has to attribute by hand. If that count is a handful per book, casting is cheap; if it is most of them, casting is a translation project.";
  "★ IT REPORTS AN UPPER BOUND ON ATTRIBUTION AND NOT A TRUTH, BECAUSE THE VERB LIST IS DELIBERATELY GENEROUS. A quotation counted as attributed here has a speaking verb near it, which is not the same as having a subject that names a person. The number to trust is the UNATTRIBUTED one - a quotation with no speaking verb anywhere near it is certainly not attributed, so that side of the count is sound.";
  "★ THE EXAMPLES MATTER MORE THAN THE PROPORTION AND ARE RETURNED FOR THAT REASON. A proportion says how much work there is; the unattributed quotations themselves say what KIND of work it is, and those are different questions. A book whose misses are all one repeated shape is solvable with one rule, and a book whose misses are all different is not.";
  arguments_assert(arguments, 2);
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  let quotations_all = [];
  async function chapter_each(chapter_code) {
    let spans = await bible_speech_spans_chapter(bible_folder, chapter_code);
    let quotations = bible_speech_quotations(spans);
    function quotation_each(quotation) {
      quotation.chapter_code = chapter_code;
      list_add(quotations_all, quotation);
    }
    each(quotations, quotation_each);
    return chapter_code;
  }
  await list_map_async(chapter_codes, chapter_each);
  let attributed = [];
  let unattributed = [];
  function quotation_measure(quotation) {
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
  each(quotations_all, quotation_measure);
  let report = {
    book_code,
    chapters: chapter_codes.length,
    quotations: quotations_all.length,
    attributed: attributed.length,
    unattributed: unattributed.length,
    unattributed_examples: unattributed.slice(0, 12),
  };
  return report;
}
