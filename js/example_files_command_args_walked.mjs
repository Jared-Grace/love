import { arguments_assert } from "./arguments_assert.mjs";
import { example_files_command_cores } from "./example_files_command_cores.mjs";
import { examples_corpus_read } from "./examples_corpus_read.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export async function example_files_command_args_walked() {
  "Every folder example carrying a different number of arguments from the one its core declares, said beside how many examples were actually held up against a core.";
  "THE COUNT IS THE EXAMPLES COMPARED, NOT THE ONES FOUND WRONG. An example is only asked about when the register pairs its command with a core, and an example nothing pairs is passed over in silence - so a register that has been emptied, renamed, or narrowed by an edit leaves every example passed over and the answer clean. That is the same clean answer a corpus that fits gives, and the number of comparisons actually made is the only thing that tells the two apart.";
  "A folder example hands its arguments straight to the core after the folder, so a count that does not fit is a call that cannot run. For an example showing a change that is loud - the run throws where it was meant to work and the corpus goes red. FOR AN EXAMPLE SHOWING A REFUSAL IT IS SILENT, AND WORSE THAN SILENT: a refusal is proved by the core throwing and leaving the folder alone, which is exactly what a wrong count does, so the example passes on the strength of the argument check rather than on the guard it claims to demonstrate.";
  "The count comes from the core rather than from the command, because the core is what the example actually runs, and it is short by one - the folder the example never spells, which the runner puts in front.";
  arguments_assert(arguments, 0);
  let cores = example_files_command_cores();
  let examples = await examples_corpus_read();
  let miscounted = [];
  let compared = [];
  function example_files_command_args_walked_lambda(e) {
    let f_name = property_get(e, "fn");
    let pair = list_find_property_or_null(cores, "name", f_name);
    if (not(pair)) {
      return;
    }
    let core = property_get(pair, "core");
    let declared = property_get(core, "length");
    let wanted = subtract(declared, 1);
    let got = property_list_size(e, "args");
    list_add(compared, f_name);
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
  each(examples, example_files_command_args_walked_lambda);
  let walked = list_size(compared);
  let r = {
    walked,
    miscounted,
  };
  return r;
}
