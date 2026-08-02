import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export function key_literals_gate_run_generic(walked, part) {
  "QA gate: given a walk over every place one part of a page address is named, no word is written straight into it. Every one of them is held by a function, so it can be frozen. The part is named so the complaint can say which half of the address it is about.";
  "A word in an address is published the moment somebody saves the link or sends it on, and a saved link is on a disk nobody here can reach. Written at the site it looks like nothing: a letter or two, in a line that reads clearly, and rewording it is the sort of tidy-up nobody would think to check. Every link anybody kept then asks for a word the page no longer answers to.";
  "Held by a function it can be named in the frozen list, and there an in-place change shows up as a changed value rather than as nothing at all. So this asks the one thing that has to be true before the freeze can watch anything: that there is a name to freeze.";
  "It stands at zero rather than at a line already drawn, because both halves of the address were cleared before this was written. Nothing here is being lived with.";
  "The part after the hash and the part after the question mark ask exactly this, and differ only in which walk hands the sites over.";
  "It receives the whole walk rather than the sites alone, so that how many files were opened comes back with the verdict. Passing here means nothing was found, which is also exactly what a walk that opened no files at all would say - so without the count, a reading that had quietly stopped reaching any files would show up as the picture of health.";
  arguments_assert(arguments, 2);
  let files = property_get(walked, "files");
  let sites = property_get(walked, "sites");
  let f_name = fn_name("function_new_getter");
  let f_name2 = fn_name("function_literal_route");
  let f_name3 = fn_name("literals_frozen_record_new");
  list_empty_is_assert_json(sites, {
    hint: text_combine_multiple([
      "a word is written straight into ",
      part,
      " of a page address, where nothing can watch it - give it a function of its own with ",
      f_name,
      ", move the sites onto that function with ",
      f_name2,
      ", then name the function in the frozen list and record it with ",
      f_name3,
    ]),
    sites,
  });
  let r = {
    files,
    sites: list_size(sites),
  };
  return r;
}
