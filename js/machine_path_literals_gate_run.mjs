import { arguments_assert } from "./arguments_assert.mjs";
import { machine_path_literals_allowed } from "./machine_path_literals_allowed.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { machine_path_literals_all } from "./machine_path_literals_all.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function machine_path_literals_gate_run() {
  "QA gate: no function writes out a folder belonging to one machine, apart from the few named as allowed to and the reason each is.";
  "A folder written out at the site is the one thing that stops this work being picked up and carried somewhere else. It is not that it breaks - it is that it does not. A folder that has moved, or that was somebody else's to begin with, is simply not found, and everything reading from the other side goes on saying the thing is looked after. Four separate functions were found spelling one plugged-in drive, and each of the four would have had to be hunted down by hand.";
  "So the answer is one function holding the folder and everybody else asking it, and this is what keeps it that way. Written once, changed in one place.";
  "It stands at the named few rather than at a line drawn under whatever happens to be there today. A count would let a new one in the moment an old one left, and would say nothing about which is which; a name has to be added by somebody able to say why, and the why sits beside it.";
  "How many files were opened comes back with the verdict. Passing here means nothing was found, which is word for word what a reading that had quietly stopped reaching any files would also say, and that number is the only thing telling the two apart.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let allowed = machine_path_literals_allowed();
  let names = object_property_names(allowed);
  let walked = await machine_path_literals_all();
  let files = property_get(walked, "files");
  let sites = property_get(walked, "sites");
  function allowed_not_is(site) {
    let held = property_get(site, "f_name");
    let listed = list_includes(names, held);
    let b = not(listed);
    return b;
  }
  let left = list_filter(sites, allowed_not_is);
  let f_name = fn_name("function_new_getter");
  let f_name2 = fn_name("function_literal_route");
  let f_name3 = fn_name("machine_path_literals_allowed");
  list_empty_is_assert_json(left, {
    hint: text_combine_multiple([
      "a folder belonging to one machine is written out where nothing else can find it - give it a function of its own with ",
      f_name,
      ", move the places that write it onto that function with ",
      f_name2,
      ", or, if it truly has to stay written out, say so and say why in ",
      f_name3,
    ]),
    left,
  });
  let r = {
    files,
    allowed: list_size(names),
    sites: list_size(sites),
  };
  return r;
}
