import { property_list_size } from "./property_list_size.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { example_files_command_cores } from "./example_files_command_cores.mjs";
import { examples_corpus_read } from "./examples_corpus_read.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function example_files_command_args_miscounted() {
  arguments_assert(arguments, 0);
  ("Every folder example carrying a different number of arguments from the one its core declares, with both counts and the name of each.");
  ("A folder example hands its arguments straight to the core after the folder, so a count that does not fit is a call that cannot run. For an example showing a change that is loud - the run throws where it was meant to work and the corpus goes red. FOR AN EXAMPLE SHOWING A REFUSAL IT IS SILENT, AND WORSE THAN SILENT: a refusal is proved by the core throwing and leaving the folder alone, which is exactly what a wrong count does, so the example passes on the strength of the argument check rather than on the guard it claims to demonstrate.");
  ("Measured on 2026-08-26: one example in the corpus was passing that way. Its command grew a parameter, the example still spelled the old joined form, and the corpus went on printing a pass for a guard that had not been reached since.");
  ("The count comes from the core rather than from the command, because the core is what the example actually runs, and it is short by one - the folder the example never spells, which the runner puts in front.");
  ("An example naming a command the register does not pair is passed over rather than complained about. That it has no core at all is a different fault with a different reading of its own, and naming it here would report the same thing twice under two headings.");
  let cores = example_files_command_cores();
  let examples = await examples_corpus_read();
  let miscounted = [];
  function lambda(e) {
    let f_name = property_get(e, "fn");
    let pair = list_find_property_or_null(cores, "name", f_name);
    if (not(pair)) {
      return;
    }
    let core = property_get(pair, "core");
    let declared = property_get(core, "length");
    let wanted = subtract(declared, 1);
    let got = property_list_size(e, "args");
    let fits = equal(got, wanted);
    if (fits) {
      return;
    }
    let item = {
      title: e.title,
      f_name,
      core_name: core.name,
      wanted,
      got,
    };
    list_add(miscounted, item);
  }
  each(examples, lambda);
  return miscounted;
}
