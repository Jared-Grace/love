import { arguments_assert } from "./arguments_assert.mjs";
import { function_temp_declaration_read } from "./function_temp_declaration_read.mjs";
import { property_get } from "./property_get.mjs";
import { function_auto } from "./function_auto.mjs";
import { scripts_temp_delete } from "./scripts_temp_delete.mjs";
export async function function_from_temp_generic(f_name, declaration_write) {
  "Promotes a function drafted in the throwaway folder into the repo, leaving the caller to say only how the declaration is written down.";
  "Both halves of the door out of the commands-only switch open and close the same way, and only the middle differs: one refuses a name the repo already answers to, the other insists on it. Everything on either side of that one decision is the same work - reading the draft and refusing anything that is not exactly one exported function named after its own file, canonicalising what landed, and taking the draft away.";
  "That sameness was written out twice, and the warning about why the draft is deleted had already been written twice with it. A run of work shared by two functions is a warning nobody updates the second copy of, which is why it is here once instead.";
  "The draft is taken away once it lands, because a draft left behind is a second copy of a function that the repo's own tools do not see, and the next promotion of the same name would find the stale one.";
  arguments_assert(arguments, 2);
  let r = await function_temp_declaration_read(f_name);
  let declaration = property_get(r, "declaration");
  let file_name = property_get(r, "file_name");
  let base = property_get(r, "base");
  await declaration_write(declaration, base);
  let output = await function_auto(base);
  await scripts_temp_delete(file_name);
  return output;
}
