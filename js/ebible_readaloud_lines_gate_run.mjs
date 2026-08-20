import { property_list_size } from "./property_list_size.mjs";
import { ebible_readaloud_lines_record_assert } from "./ebible_readaloud_lines_record_assert.mjs";
import { ebible_readaloud_lines_offered_to_fetch_names } from "./ebible_readaloud_lines_offered_to_fetch_names.mjs";
import { ebible_readaloud_lines_offered_to_fetch_baseline_path } from "./ebible_readaloud_lines_offered_to_fetch_baseline_path.mjs";
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
import { ebible_readaloud_heading_only_names } from "./ebible_readaloud_heading_only_names.mjs";
import { ebible_readaloud_heading_only_baseline_path } from "./ebible_readaloud_heading_only_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { ebible_readaloud_lines_differ_as_published_names } from "./ebible_readaloud_lines_differ_as_published_names.mjs";
import { ebible_readaloud_lines_differ_names } from "./ebible_readaloud_lines_differ_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
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
  let unchecked_names = await ebible_readaloud_lines_offered_to_fetch_names();
  let unchecked_path = ebible_readaloud_lines_offered_to_fetch_baseline_path();
  let unchecked_write = fn_name(
    "ebible_readaloud_lines_offered_to_fetch_baseline_write",
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
  ("A chapter published as a heading and nothing else is watched here rather than next door, because the two lists are told apart by what anybody can do about them. Next door names what a fetch would put right; this names what a fetch would not, and it is a separate record so that neither one can hide inside the other.");
  let heading_only_names = await ebible_readaloud_heading_only_names();
  let heading_only_path = ebible_readaloud_heading_only_baseline_path();
  let heading_only_write = fn_name(
    "ebible_readaloud_heading_only_baseline_write",
  );
  let heading_only_hint = text_combine_multiple([
    "this chapter's reading-aloud edition names its book and its number and then stops, so nobody is shown it, and it was not like that before. That is either a chapter its publishers never published or a download that was cut short, and the two look identical from here. Delete that bible's cached copy and fetch it again with ",
    f_name_download,
    ": if words come back, the earlier fetch was the fault; if the same two lines come back, the words are not there to be had and this is one to record with ",
    heading_only_write,
  ]);
  await baseline_names_gate_generic(
    heading_only_names,
    heading_only_path,
    heading_only_hint,
    heading_only_write,
  );
  ("A chapter recorded as having been published in the state it is in is excused from the list that gets worked through, so the one thing that has to stay true of it is that it is still in that state. That is what this asks. A verdict outliving the thing it was reached about is how a chapter comes back broken under cover of being already known, and here it would do it silently, because nothing else looks at that record at all.");
  let as_published = await ebible_readaloud_lines_differ_as_published_names();
  let differ_now = await ebible_readaloud_lines_differ_names();
  let mended = list_difference(as_published, differ_now);
  let f_name_prove = fn_name(
    "ebible_readaloud_lines_differ_as_published_record",
  );
  list_empty_is_assert_json(mended, {
    hint: text_combine_multiple([
      "this chapter is recorded as being read aloud in a different number of lines from the verses its page marks, and it no longer is - so either its publishers have put it right or the record was wrong about it. It must not stay recorded either way, because a name in there excuses that chapter from the list somebody works through. Fetch that bible again and record it afresh with ",
      f_name_prove,
      ", which writes that bible's names from what it finds rather than adding to them, and then measure the lot again with ",
      f_name,
    ]),
    mended,
  });
  function lambda2(measured) {
    let chapters = property_get(measured, "same");
    return chapters;
  }
  let same_each = list_map(bibles, lambda2);
  function lambda3(measured) {
    let count = property_list_size(measured, "unread");
    return count;
  }
  let unread_each = list_map(bibles, lambda3);
  let r = {
    bibles: list_size(bibles),
    chapters: list_sum(same_each),
    unread: list_sum(unread_each),
    heading_only: list_size(heading_only_names),
    unmeasured: list_size(unmeasured),
    differ,
  };
  return r;
}
