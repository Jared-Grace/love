import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
import { functions_prose_silent_oversize_names } from "./functions_prose_silent_oversize_names.mjs";
import { functions_prose_silent_oversize_baseline_path } from "./functions_prose_silent_oversize_baseline_path.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_prose_silent_oversize_gate_run() {
  "QA gate: a function too big to be read off its own name says what it is for.";
  "It was built for a loss nobody was going to notice. Cutting an oversize function hands back a child holding half the work and none of the sentences - the prose stays with the half that kept the original name, and the new half arrives describing nothing. Four functions were cut in one afternoon and every one of the six children came back silent; each was written up by hand, and nothing anywhere would have said so if one had been missed.";
  "Measured against the baseline rather than against zero, and the sweep it ratchets says at length why that is the only honest way to ask. A hundred and ninety functions were already silent, and a gate that failed until each had a sentence would be answered with sentences written to clear a gate rather than to say anything. What this holds is the part that is fair to ask: a function written today is not allowed to be the hundred and ninety-first.";
  "Whoever trips it has just written the function, so the sentence costs a line and is true. That is the whole difference between this and asking the same thing of the backlog.";
  arguments_assert(arguments, 0);
  let told = await functions_prose_silent_oversize_names();
  let walked = property_get(told, "walked");
  let names = property_get(told, "names");
  let name_write = fn_name("functions_prose_silent_oversize_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    walked,
    names,
    functions_prose_silent_oversize_baseline_path(),
    text_combine_multiple([
      "these functions hold too much work for their name to say what they are for, and say nothing themselves - write one line for each with ",
      fn_name("function_prose_add"),
      ", or cut them back under the floor",
    ]),
    name_write,
  );
  return r;
}
