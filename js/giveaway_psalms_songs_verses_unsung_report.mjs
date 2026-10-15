import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_verses_unsung } from "./giveaway_psalms_songs_verses_unsung.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export async function giveaway_psalms_songs_verses_unsung_report() {
  arguments_assert(arguments, 0);
  ("Says, chapter by chapter, how far the singing in the giveaway record has got through each psalm and what is left of it, finished chapters first so that what may be given away stands at the top.");
  ("★ THIS IS A REPORT AND DELIBERATELY NOT A GATE. A psalm with verses nobody has sung yet is not a fault - it is the ordinary state of nearly every psalm in the book, and a gate on it would fail the build a hundred and forty times for work that has not been done yet. What is checked is the judging itself, by written cases next door, and what is printed here is the state of the singing.");
  ("The finished chapters are printed first because they are the answer to the question that was actually asked: which box may go out. The unfinished ones follow in the order the book has them, with the runs nobody has sung, which are the words the next recordings will be named with.");
  ("The number of chapters looked at is said at the end even though every one of them is printed, so that a run whose fetching half failed is told apart from a record that holds nothing.");
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let report = await giveaway_psalms_songs_verses_unsung(rows);
  let whole = [];
  let part = [];
  for (let one of report.chapters) {
    let whole_is = list_empty_is(one.missing);
    if (whole_is) {
      list_add(whole, one);
      continue;
    }
    list_add(part, one);
  }
  for (let one2 of whole) {
    console.log(
      "psalm " +
        one2.chapter +
        "  all " +
        one2.verse_last +
        " verses sung, in " +
        one2.songs +
        " recordings",
    );
  }
  for (let one3 of part) {
    console.log(
      "psalm " +
        one3.chapter +
        "  of " +
        one3.verse_last +
        " verses, not sung: " +
        one3.missing.join(" ") +
        "  (in " +
        one3.songs +
        " recordings)",
    );
  }
  for (let chapter of report.chapters_unknown) {
    console.log("psalm " + chapter + "  how many verses it has is not known");
  }
  for (let name of report.names_unread) {
    console.log(name + "  its verses do not read as verses");
  }
  console.log(
    "giveaway verses unsung: chapters sung whole " +
      whole.length +
      "  part sung " +
      part.length +
      "  of rows: " +
      rows.length,
  );
  let r = {
    chapters_whole: whole.length,
    chapters_part: part.length,
    chapters_unknown: report.chapters_unknown.length,
    names_unread: report.names_unread.length,
    rows: rows.length,
  };
  return r;
}
