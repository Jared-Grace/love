import { function_identifier_rename_checked } from "./function_identifier_rename_checked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_shadowing_function_rename(
  f_name,
  name,
  name_after,
) {
  arguments_assert(arguments, 3);
  ("Clear the OTHER kind of hiding: a name bound at the function's own level over");
  ("a repo function of that name, so that function stops meaning itself anywhere");
  ("in the file. There is no inner binding to move here - the thing being hidden");
  ("is not a line above, it is the whole repo - so the rename is over the whole");
  ("function rather than one scope inside it.");
  ("The twin beside this one covers the inner kind, and the two are kept apart on");
  ("purpose: each refuses what the other is for, so neither can quietly do a job");
  ("it was not written for and report success.");
  ("The guards are the twin's guards, asked again here because they belong to the");
  ("edit and not to either implementation of it.");
  let r = await function_identifier_rename_checked(f_name, name, name_after);
  return r;
}
