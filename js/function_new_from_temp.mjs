import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_new_draft_refusals } from "./function_new_draft_refusals.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { function_new_from_temp_write } from "./function_new_from_temp_write.mjs";
import { function_from_temp_generic } from "./function_from_temp_generic.mjs";
export async function function_new_from_temp(f_name) {
  "promotes a function drafted in the throwaway folder into the repo, refusing anything that is not exactly one exported function named after itself";
  "the way out of the commands-only switch that does not turn it off. Under that switch the editing tools cannot touch the repo's javascript, so a change no named command can make would have nowhere to go - and the honest answer to that is a new command, not an exemption. This is the one door, and it is narrow on purpose: the name decides the file, so nothing can be written outside js; the one exported declaration must be named for the file, so a draft cannot smuggle a second unit in beside it; and the file must not exist yet, so an existing function still cannot be rewritten except through a transform.";
  "All this half decides is that the name must be free, and the writing step below is the whole of that decision. Reading the draft, canonicalising what landed and taking the draft away are shared with the other half and said there once.";
  arguments_assert(arguments, 1);
  async function write_when_clean(declaration, base, import_lines, extras) {
    let refusals = await function_new_draft_refusals(
      base,
      declaration,
      import_lines,
    );
    list_empty_is_assert_json(refusals, {
      hint: text_combine_multiple([
        "a new function that reaches the machine needs a person to see it: call a repo function that does the job, or run ",
        fn_name("function_new_from_temp_machine"),
        ", which asks",
      ]),
      base,
      refusals,
    });
    await function_new_from_temp_write(declaration, base, import_lines, extras);
  }
  let output = await function_from_temp_generic(f_name, write_when_clean);
  return output;
}
