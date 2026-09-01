import { arguments_assert } from "./arguments_assert.mjs";
import { functions_parameters_baseline_path } from "./functions_parameters_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { functions_name_value_use_names } from "./functions_name_value_use_names.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export async function functions_parameters_baseline_unreachable() {
  arguments_assert(arguments, 0);
  ("Which of the long parameter rows the ratchet is carrying can never be gathered into a record, and which are still work waiting to be done.");
  ("A ROW ON A FUNCTION HANDED OVER AS A VALUE IS A PERMANENT RESIDENT RATHER THAN A TASK. Whoever the function was handed to decides how it gets called, and that call is nowhere in this repo to be rewritten, so both moves that gather a row refuse it - correctly, because rewriting the declaration and leaving that caller behind would hand a row to something now expecting one thing, which arrives as nothing having been sent at all.");
  ("THE COUNT IS THE POINT, NOT THE LIST. A ratchet holding a number reads as that many things left to fix, and read that way it can only ever be finished by emptying it. Separating the two says where the bottom actually is, which is what turns an endless list into a job with an end, and stops the leftovers being read as failure when they are just the shape the code is in.");
  ("IT ASKS THE SAME TWO READINGS THE REFUSAL ASKS, in the same order, rather than a fresh one worded to match - the files naming the function, then which of those hand it over instead of calling it. An answer here and a refusal there cannot then drift apart. What this does not count is the other refusal, a caller handing over some other number of things: that one is fixable, so counting it among the permanent would be wrong.");
  let path = functions_parameters_baseline_path();
  let names = await baseline_known_read(path);
  async function lambda(f_name) {
    let referring = await data_identifiers_search_names(f_name);
    let holders = await functions_name_value_use_names(referring, f_name);
    let handed = list_empty_not_is(holders);
    let r = {
      f_name,
      handed,
    };
    return r;
  }
  let asked = await list_map_async(names, lambda);
  let handed_asked = list_filter_property(asked, "handed", true);
  let handed_names = list_map_property(handed_asked, "f_name");
  let total = list_size(names);
  let handed_count = list_size(handed_names);
  let plain_count = subtract(total, handed_count);
  let v = {
    total,
    handed_count,
    plain_count,
    handed_names,
  };
  return v;
}
