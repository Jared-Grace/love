import { python_code_dispatcher_scripts } from "./python_code_dispatcher_scripts.mjs";
import { dispatcher_scripts_python_path } from "./dispatcher_scripts_python_path.mjs";
import { file_read } from "./file_read.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";

// Gate: the generated python mirror must match what JS produces right now.
// The bash guard's deny floor is keyed on this set, so a stale mirror means
// python fences a different set of scripts than JS believes — the drift a
// two-language duplicate invites. Throws so the r.mjs seam exits nonzero.
export async function dispatcher_scripts_python_assert() {
  let path = dispatcher_scripts_python_path();
  let expected = python_code_dispatcher_scripts();
  let actual = await file_read(path);
  if (not(text_is(actual, expected))) {
    console.log("STALE  " + path);
    throw new Error(
      "dispatcher scripts gate: " +
        path +
        " is stale — regenerate with `node scripts/r.mjs dispatcher_scripts_python_write`",
    );
  }
  console.log("fresh  " + path);
  return { fresh: path };
}
