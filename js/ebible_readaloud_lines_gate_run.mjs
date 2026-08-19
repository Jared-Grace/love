import { ebible_readaloud_lines_record_assert } from "./ebible_readaloud_lines_record_assert.mjs";
import { ebible_readaloud_lines_offered_unchecked_names } from "./ebible_readaloud_lines_offered_unchecked_names.mjs";
import { ebible_readaloud_lines_offered_unchecked_baseline_path } from "./ebible_readaloud_lines_offered_unchecked_baseline_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_lines_path } from "./ebible_readaloud_lines_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_map } from "./list_map.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_readaloud_lines_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no bible has a chapter written for reading aloud in a different number of lines from the number of verses its own pages mark.");
  ("Every verse of every bible outside a browser is now read as the line the reading-aloud text gives it, numbered by the mark its page carries. Both halves come from the same source and neither knows about the other, so what holds them together is only that the counts agree - a rule measured across three and a half thousand chapters and true in all of them, but nothing enforces it.");
  ("Both ways of breaking it used to be worse than they are now. Where the lines outnumbered the marks the pairing ran off the end and threw, which is how a bible losing its whole index over one verse was found; where the marks outnumbered the lines the chapter was quietly cut short instead, its last verses dropped, every verse before them right, and no error raised anywhere. Neither happens now - a chapter whose counts disagree is answered for with nothing and shown to nobody.");
  ("So what this watches is no longer whether such a chapter exists but how many there are, and it is measured against what the repo already carried rather than against zero. Seventy-two chapters across thirteen bibles were already like this when it was first asked, each needing its own look, and the list only shrinks: a new one fails, and one left in the record after it has been put right fails too. A chapter in the list is a chapter of the Bible nobody can read here, so the number going up is the app quietly offering less than it did.");
  ("A bible whose pages are not on this machine is named apart in the record rather than refused, because not having the files is a fact about a machine and not a fault in a bible.");
  ("This reads only the file. The measuring opens every chapter of every bible and is a command somebody runs.");
  ("What the record has to be true of before any of it is believed is asked next door, in one call, and the chapters found disagreeing come back from it. Three questions live in there and they are worth reading together rather than one at a time, which is why they are not here.");
  let path = ebible_readaloud_lines_path();
  let recorded = await file_read_json(path);
  let bibles = property_get(recorded, "bibles");
  let unmeasured = property_get(recorded, "unmeasured");
  let f_name = fn_name("ebible_readaloud_lines_write");
  list_empty_not_is_assert_json(bibles, {
    hint: text_combine_multiple([
      "the record measures no bible at all, so this gate would pass without asking anything - measure again with ",
      f_name,
      ", which rewrites the record",
    ]),
  });
  ("The four things the call below needs are gathered here rather than fetched in there, because three of them are the whereabouts of a record and the name of the command that rewrites it - facts about this repo's own filing, which is what this gate is the keeper of.");
  let unchecked_names = await ebible_readaloud_lines_offered_unchecked_names();
  let unchecked_path = ebible_readaloud_lines_offered_unchecked_baseline_path();
  let unchecked_write = fn_name(
    "ebible_readaloud_lines_offered_unchecked_baseline_write",
  );
  let f_name_download = fn_name("ebible_languages_readaloud_download");
  let differ = await ebible_readaloud_lines_record_assert(
    f_name_download,
    f_name,
    unchecked_names,
    unchecked_path,
    unchecked_write,
    bibles,
    unmeasured,
  );
  function lambda2(measured) {
    let chapters = property_get(measured, "same");
    return chapters;
  }
  let same_each = list_map(bibles, lambda2);
  function lambda3(measured) {
    let chapters_unread = property_get(measured, "unread");
    let count = list_size(chapters_unread);
    return count;
  }
  let unread_each = list_map(bibles, lambda3);
  let r = {
    bibles: list_size(bibles),
    chapters: list_sum(same_each),
    unread: list_sum(unread_each),
    unmeasured: list_size(unmeasured),
    differ,
  };
  return r;
}
