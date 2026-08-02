import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export function literals_gate_run_generic(walked, complaint) {
  "QA gate: given a walk over every place a published word is written, none of them writes it straight in. Every one of them is held by a function, so it can be frozen. The complaint is received whole, because what kind of word it is and where it was written differ between the callers and nothing else does.";
  "A word like this leaves this repo the moment somebody saves a link or anything is kept under it, and neither of those disks can be reached from here. Written at the site it looks like nothing - a letter or two, or an everyday word, in a line that reads clearly - and rewording it is the sort of tidy-up nobody would think to check. What was kept under the old word is then simply not there, and no later edit brings it back.";
  "Held by a function it can be named in the frozen list, and there an in-place change shows up as a changed value rather than as nothing at all. So this asks the one thing that has to be true before the freeze can watch anything: that there is a name to freeze.";
  "The three commands that repair it are named here rather than at each caller. They are one sequence, and spelled out per caller they drift apart the day the sequence changes - which the reader following the hint finds out only by running the wrong one.";
  "It receives the whole walk rather than the sites alone, so that how many files were opened comes back with the verdict. Passing here means nothing was found, which is also exactly what a walk that opened no files at all would say - so without the count, a reading that had quietly stopped reaching any files would show up as the picture of health.";
  arguments_assert(arguments, 2);
  let files = property_get(walked, "files");
  let sites = property_get(walked, "sites");
  let f_name = fn_name("function_new_getter");
  let f_name2 = fn_name("function_literal_route");
  let f_name3 = fn_name("literals_frozen_record_new");
  list_empty_is_assert_json(sites, {
    hint: text_combine_multiple([
      complaint,
      ", where nothing can watch it - give it a function of its own with ",
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
