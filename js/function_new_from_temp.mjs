import { property_get } from "./property_get.mjs";
import { function_temp_declaration_read } from "./function_temp_declaration_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_new_declaration_from } from "./function_new_declaration_from.mjs";
import { function_auto } from "./function_auto.mjs";
import { scripts_temp_delete } from "./scripts_temp_delete.mjs";
export async function function_new_from_temp(f_name) {
  "promotes a function drafted in the throwaway folder into the repo, refusing anything that is not exactly one exported function named after itself";
  "the way out of the commands-only switch that does not turn it off. Under that switch the editing tools cannot touch the repo's javascript, so a change no named command can make would have nowhere to go - and the honest answer to that is a new command, not an exemption. This is the one door, and it is narrow on purpose: the name decides the file, so nothing can be written outside js; the one exported declaration must be named for the file, so a draft cannot smuggle a second unit in beside it; and the file must not exist yet, so an existing function still cannot be rewritten except through a transform.";
  "the draft is deleted once it lands, because a draft left behind is a second copy of a function that the repo's own tools do not see, and the next promotion of the same name would find the stale one.";
  arguments_assert(arguments, 1);
  let r = await function_temp_declaration_read(f_name);
  let declaration = property_get(r, "declaration");
  let file_name = property_get(r, "file_name");
  let base = property_get(r, "base");
  await function_new_declaration_from(declaration);
  let output = await function_auto(base);
  await scripts_temp_delete(file_name);
  return output;
}
