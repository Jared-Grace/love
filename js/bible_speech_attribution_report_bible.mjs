import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { bible_speech_attribution_report } from "./bible_speech_attribution_report.mjs";
export async function bible_speech_attribution_report_bible(bible_folder) {
  "$plain bible_folder";
  "One row per book of how many quotations it holds and how many of them name a speaker, with the whole-bible totals - the price of casting the entire text, in the only unit the work is actually done in.";
  "★ THE WHOLE BIBLE IS MEASURED RATHER THAN A SAMPLE, BECAUSE THE BOOKS DIFFER FAR TOO MUCH FOR A SAMPLE TO MEAN ANYTHING. A gospel is nearly all attributed speech, a letter has almost no quotations at all, and the Song of Songs has speech no mark anywhere admits to. An average over those is a number about nothing; the rows are the finding and the total is only the invoice.";
  "★ THE ROW TO LOOK AT IS THE ONE WITH THE WORST RATIO AND NOT THE BIGGEST COUNT, BECAUSE THE UNATTRIBUTED ONES ARE THE ONLY HAND WORK. A book with two thousand quotations and twenty misses is cheap; a book with sixty quotations and forty misses is where a person has to sit down with the text.";
  arguments_assert(arguments, 1);
  let book_codes = ebible_book_codes();
  let rows = [];
  async function book_each(book_code) {
    let book_report = await bible_speech_attribution_report(
      bible_folder,
      book_code,
    );
    let row = {
      book_code,
      chapters: book_report.chapters,
      quotations: book_report.quotations,
      attributed: book_report.attributed,
      unattributed: book_report.unattributed,
    };
    list_add(rows, row);
    return book_code;
  }
  await list_map_async(book_codes, book_each);
  let quotations = 0;
  let attributed = 0;
  let unattributed = 0;
  function row_each(row) {
    quotations = add(quotations, row.quotations);
    attributed = add(attributed, row.attributed);
    unattributed = add(unattributed, row.unattributed);
  }
  each(rows, row_each);
  let report = {
    bible_folder,
    books: rows.length,
    quotations,
    attributed,
    unattributed,
    rows,
  };
  return report;
}
