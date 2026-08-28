import { arguments_assert } from "./arguments_assert.mjs";
import { function_new_declaration_from } from "./function_new_declaration_from.mjs";
import { function_from_temp_generic } from "./function_from_temp_generic.mjs";
export async function function_new_from_temp(f_name) {
  "promotes a function drafted in the throwaway folder into the repo, refusing anything that is not exactly one exported function named after itself";
  "the way out of the commands-only switch that does not turn it off. Under that switch the editing tools cannot touch the repo's javascript, so a change no named command can make would have nowhere to go - and the honest answer to that is a new command, not an exemption. This is the one door, and it is narrow on purpose: the name decides the file, so nothing can be written outside js; the one exported declaration must be named for the file, so a draft cannot smuggle a second unit in beside it; and the file must not exist yet, so an existing function still cannot be rewritten except through a transform.";
  "All this half decides is that the name must be free, and the writing step below is the whole of that decision. Reading the draft, canonicalising what landed and taking the draft away are shared with the other half and said there once.";
  arguments_assert(arguments, 1);
  async function function_new_from_temp_write(declaration, base) {
    "The name the file will take is handed over and not looked at, because refusing a name that is already taken is what the writer does with it.";
    await function_new_declaration_from(declaration);
  }
  let output = await function_from_temp_generic(
    f_name,
    function_new_from_temp_write,
  );
  return output;
}
