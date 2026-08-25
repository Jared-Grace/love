import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { bible_speech_attribution_report } from "./bible_speech_attribution_report.mjs";
export async function bible_speech_unattributed_bible(bible_folder) {
  "$plain bible_folder";
  "Every quotation in the whole bible that nothing near it attributes, gathered onto one page with the narration on either side - the entire hand work of casting the text, in the order somebody would do it.";
  "★ THIS IS THE WORK ITSELF AND NOT A MEASUREMENT OF IT, WHICH IS WHY IT EXISTS SEPARATELY FROM THE COUNTS. The report says there are a hundred and twenty-nine; a hundred and twenty-nine is a number nobody can act on, and a page holding all of them with their context is a sitting. The difference between those two artefacts is the difference between knowing the price and having done it.";
  "★ THE NARRATION ON BOTH SIDES IS CARRIED BECAUSE ATTRIBUTING A QUOTATION BY HAND IS EXACTLY THE JOB OF READING AROUND IT. A person given only the speech has to open a bible to answer; a person given the sentence before and the sentence after usually does not. Where the surrounding narration is not enough either, the reference is there to go and look with.";
  "★ IT STAYS IN CANONICAL ORDER RATHER THAN SORTING BY ANYTHING, BECAUSE THE ORDER IS PART OF THE ANSWER. Consecutive misses in the same chapter are nearly always the same cause repeated - Job's friends running past whoever announced them is a run rather than a scatter - and sorting by book size or by count would break that run apart and hide the one thing that makes the list shorter than it looks.";
  arguments_assert(arguments, 1);
  let book_codes = ebible_book_codes();
  async function book_each(book_code) {
    let book_report = await bible_speech_attribution_report(
      bible_folder,
      book_code,
    );
    function quotation_each(quotation) {
      quotation.book_code = book_code;
    }
    each(book_report.unattributed_quotations, quotation_each);
    let r = book_report.unattributed_quotations;
    return r;
  }
  let books = await list_map_async(book_codes, book_each);
  let quotations = [];
  function book_quotations_each(book_quotations) {
    function quotation_add(quotation) {
      list_add(quotations, quotation);
    }
    each(book_quotations, quotation_add);
  }
  each(books, book_quotations_each);
  let report = {
    bible_folder,
    quotations: quotations.length,
    rows: quotations,
  };
  return report;
}
