import { bible_shipped_record_checked } from "./bible_shipped_record_checked.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { bible_verse_holes_entry_empty_is } from "./bible_verse_holes_entry_empty_is.mjs";
import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verse_holes_path } from "./bible_verse_holes_path.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_verse_holes_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every bible this repo ships has been asked for the verses a page will ask it for, and none of them answered with nothing throughout.");
  ("A page walks the English index and asks every language the reader chose for each verse on it. A bible that does not have one gets a line saying so in its place, which is a small kindness where it happens once and a page of apologies where it happens everywhere - and nothing about adding a bible asks which of the two it will be.");
  ("So the answer is measured for every bible on the list and kept in a file, and this refuses a bible that is on the list and not in the file. The holes themselves are left in the record rather than refused, because a bible numbering its verses its own way is not a fault to be fixed by failing a build - it is a thing somebody has to read and decide about. What is refused is not knowing.");
  ("This reads only the file. The measuring reaches the network and is a command somebody runs; the checking has to run wherever the rest of the gates run.");
  let path = bible_verse_holes_path();
  let f_name = fn_name("bible_verse_holes_write");
  let record = await bible_shipped_record_checked(
    path,
    f_name,
    "whether it holds the verses a page will ask it for",
  );
  ("WHEN THE RECORD WAS MEASURED TRAVELS WITH EVERY FINDING TAKEN OUT OF IT, because both of the ones refused below are answered with the same instruction - go and measure again - and how old the record is decides whether that instruction is worth anything. A far end that would not answer an hour ago is worth asking again; one that would not answer in a record from before the last upload says nothing about today at all.");
  let measured_at = property_get(record, "measured_at");
  let bibles = property_get(record, "bibles");
  let shipped = property_get(record, "shipped");
  let unmeasured = property_get(record, "unmeasured");
  let departed = property_get(record, "departed");
  ("A bible nothing was asked of is told apart from one asked and found whole, because only the second is a fact about a bible. The first is an errand that failed, and reading it as a bible without holes is the mistake a hand measurement of the same shape already made once with Urdu.");
  function lambda(entry) {
    let none = property_equals(entry, "asked", 0);
    return none;
  }
  let unasked = list_filter(bibles, lambda);
  ("A bible with none of the measured book is counted apart from one with holes in it, and reported rather than refused. It was refused once, on the reading that a whole book missing meant a folder named wrongly or a bible never uploaded. That reading was measured and it was wrong: of the forty-one bibles this found, thirty-eight hold other books and simply do not include this one - a gospel published on its own, a New Testament on its own, a Hebrew Old Testament. Refusing those refused a fact about a translation, which nobody can repair.");
  ("The fault it was reaching for is real and is checked by its own gate now, against a record of what storage actually holds. That record can tell an empty folder from a partial bible; this one is reading a single book and never could.");
  let empty = list_filter(bibles, bible_verse_holes_entry_empty_is);
  ("A chapter nobody could get an answer about is refused outright, and it is the only one of these that says nothing at all about a bible. The other findings are facts somebody has to read and decide about; this one is the measuring itself being unfinished, and the remedy is to measure again rather than to go and look at a bible.");
  ("It is refused rather than reported because the alternative was tried by accident and is what this whole check now exists to prevent. An ask that failed used to be recorded as a chapter the bible does not hold, which is a wrong fact in the shape of a right one - believed for as long as nobody happens to check an entry by hand.");
  function lambda3(entry) {
    let any = property_list_empty_not_is(entry, "chapters_unreachable");
    return any;
  }
  let unreachable = list_filter(bibles, lambda3);
  let f_name3 = fn_name("ebible_folder_english");
  let f_name4 = fn_name("bible_verse_holes_write");
  list_empty_is_assert_json(unasked, {
    hint: text_combine_multiple([
      "nothing was asked of this bible at all, so the record says nothing about it while looking like it says it is whole - the list of verses to ask for comes from the English index, so check ",
      f_name3,
      " has a bible with one uploaded, then measure again with ",
      f_name4,
    ]),
    unasked,
    measured_at,
  });
  ("The transient finding is refused after the standing ones on purpose. A bible that is shipped and never measured, or measured and no longer shipped, is true until somebody changes the roster; a chapter that would not answer this afternoon may answer this evening. Reporting the passing thing first would bury the lasting one under it.");
  let f_name6 = fn_name("bible_verse_holes_write");
  list_empty_is_assert_json(unreachable, {
    hint: text_combine_multiple([
      "these bibles were asked and the far end never answered, so the record says nothing about the chapters named - that is this run having failed rather than anything being wrong with the bible, so measure again with ",
      f_name6,
      ", and if the same chapters come back unreachable twice then the far end really is refusing them and it is worth looking at by hand",
    ]),
    unreachable,
    measured_at,
  });
  let r = {
    checked: list_size(shipped),
    measured_at,
    unmeasured,
    departed,
    unasked,
    empty,
    unreachable,
  };
  return r;
}
