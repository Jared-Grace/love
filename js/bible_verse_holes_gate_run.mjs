import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verse_holes_path } from "./bible_verse_holes_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
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
  let recorded = await file_read_json(path);
  let bibles = property_get(recorded, "bibles");
  let shipped = ebible_bible_folders_sorted();
  let property_name = bible_folder_key();
  let measured = list_map_property(bibles, property_name);
  let unmeasured = list_difference(shipped, measured);
  let departed = list_difference(measured, shipped);
  ("A bible nothing was asked of is told apart from one asked and found whole, because only the second is a fact about a bible. The first is an errand that failed, and reading it as a bible without holes is the mistake a hand measurement of the same shape already made once with Urdu.");
  function lambda(entry) {
    let none = property_equals(entry, "asked", 0);
    return none;
  }
  let unasked = list_filter(bibles, lambda);
  ("A bible that answered nothing anywhere is a different thing again from one with holes in it. Every verse of a whole book missing is a folder named wrongly or a bible that was never uploaded, not a bible that counts its verses differently, and it would leave a reader who chose it reading apologies.");
  function lambda2(entry) {
    let asked = property_get(entry, "asked");
    let holes = property_get(entry, "holes");
    let all = list_size_equal(holes, asked);
    return all;
  }
  let empty = list_filter(bibles, lambda2);
  let f_name = fn_name("bible_verse_holes_write");
  list_empty_is_assert_json(unmeasured, {
    hint: text_combine_multiple([
      "a bible is shipped that has never been asked whether it holds the verses a page will ask it for - ask them all with ",
      f_name,
      ", which reaches the network and rewrites the record",
    ]),
    unmeasured,
  });
  let f_name2 = fn_name("bible_verse_holes_write");
  list_empty_is_assert_json(departed, {
    hint: text_combine_multiple([
      "the record holds a bible this repo no longer ships - write it again with ",
      f_name2,
      " so what is checked is what is here",
    ]),
    departed,
  });
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
  });
  let f_name5 = fn_name("ebible_languages");
  list_empty_is_assert_json(empty, {
    hint: text_combine_multiple([
      "this bible answered with nothing for every verse of the measured book, so a reader who chose it would get a line saying so in place of every verse - that is a folder named wrongly or a bible never uploaded rather than one that numbers its verses differently, so check its folder against ",
      f_name5,
    ]),
    empty,
  });
  let r = {
    checked: list_size(shipped),
    unmeasured,
    departed,
    unasked,
    empty,
  };
  return r;
}
