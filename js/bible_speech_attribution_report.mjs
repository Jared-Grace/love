import { bible_speech_quotation_citation_is } from "./bible_speech_quotation_citation_is.mjs";
import { bible_speech_quotation_heading_is } from "./bible_speech_quotation_heading_is.mjs";
import { bible_speech_text_attribution_after } from "./bible_speech_text_attribution_after.mjs";
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
  "★ THE UNATTRIBUTED QUOTATIONS ARE RETURNED IN FULL AS WELL AS IN A SAMPLE, BECAUSE THE TWO ARE READ FOR DIFFERENT REASONS. A dozen examples are what somebody skims to see what SHAPE the misses are; the whole list is what somebody sits down with to actually attribute them. The sample is kept beside the full list rather than replaced by it, because a report of the whole Bible printed with every miss in it is a report nobody reads.";
  "★ A SPEECH THAT CROSSES A CHAPTER BOUNDARY IS ATTRIBUTED BY THE CHAPTER BEFORE IT AND NOT BY A PERSON. Job 4 announces Eliphaz and then never closes his quotation, because he is still talking in Job 5, so Job 5 opens inside a quotation with no narration in front of it. Asked whether the previous chapter ended unclosed, this answers yes and the speaker carries over. Forty-six of what were a hundred and twenty-nine misses are that one shape, and all fourteen of Job's are.";
  "★ THE CHAPTERS ARE GATHERED IN ORDER RATHER THAN AS THEY FINISH, WHICH IS WHAT THE CONTINUATION RULE NEEDS AND WHAT THE OLD SHAPE THREW AWAY. They are fetched all at once and were being pushed into one list as each returned, so a book's quotations arrived in whatever order the disk answered in. Nothing was wrong with the counts, because a count does not care; the moment a rule asks about the chapter BEFORE, the order stops being cosmetic.";
  "★ TWO KINDS OF QUOTATION ARE TAKEN OUT BEFORE ANY VERB IS LOOKED FOR, AND NEITHER OF THEM IS AN ATTRIBUTION PROBLEM. A quotation in a letter is the author citing something and keeps his voice, so it is counted as a citation and asked nothing further. A quotation in verse zero is inside a superscription and is never read aloud at all, so it is counted as a heading. Both used to land in the unattributed pile, where they looked like work waiting for a person; a third of the whole remainder was these two.";
  arguments_assert(arguments, 2);
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  async function chapter_each(chapter_code) {
    let spans = await bible_speech_spans_chapter(bible_folder, chapter_code);
    let quotations = bible_speech_quotations(spans);
    function quotation_each(quotation) {
      quotation.chapter_code = chapter_code;
    }
    each(quotations, quotation_each);
    let unclosed_is = bible_speech_spans_unclosed_is(spans);
    let chapter = { chapter_code, quotations, unclosed_is };
    return chapter;
  }
  let chapters = await list_map_async(chapter_codes, chapter_each);
  let quotations_all = [];
  let unclosed_previous = false;
  function chapter_gather(chapter) {
    let first = true;
    function quotation_each(quotation) {
      let announced = quotation.before.trim();
      let silent_is = equal(announced, "");
      quotation.continues_is = first && silent_is && unclosed_previous;
      first = false;
      list_add(quotations_all, quotation);
    }
    each(chapter.quotations, quotation_each);
    unclosed_previous = chapter.unclosed_is;
  }
  each(chapters, chapter_gather);
  let attributed = [];
  let unattributed = [];
  let citations = [];
  let headings = [];
  let continuations = [];
  let citation_is = bible_speech_quotation_citation_is(book_code);
  function quotation_measure(quotation) {
    let heading_is = bible_speech_quotation_heading_is(quotation);
    if (heading_is) {
      list_add(headings, quotation);
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
  each(quotations_all, quotation_measure);
  let report = {
    book_code,
    chapters: chapter_codes.length,
    quotations: quotations_all.length,
    attributed: attributed.length,
    citations: citations.length,
    headings: headings.length,
    continuations: continuations.length,
    unattributed: unattributed.length,
    unattributed_examples: unattributed.slice(0, 12),
    unattributed_quotations: unattributed,
  };
  return report;
}
