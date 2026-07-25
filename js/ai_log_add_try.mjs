import { arguments_assert } from "./arguments_assert.mjs";
import { ai_log_add } from "./ai_log_add.mjs";
export async function ai_log_add_try(f_name, args) {
  arguments_assert(arguments, 2);
  ("Recording what ran must never stop what ran. This sits on the one seam every");
  ("command passes through, so a failure here is swallowed on purpose: a missing");
  ("line costs a little evidence, a thrown error would cost the command itself.");
  try {
    await ai_log_add(f_name, args);
  } catch {
    return;
  }
}
