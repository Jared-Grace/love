import { python_code_dispatcher_scripts } from "./python_code_dispatcher_scripts.mjs";
import { dispatcher_scripts_python_path } from "./dispatcher_scripts_python_path.mjs";
import { file_read } from "./file_read.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function dispatcher_scripts_python_assert() {
  let path = dispatcher_scripts_python_path();
  let expected = python_code_dispatcher_scripts();
  let actual = await file_read(path);
  if (not(equal(actual, expected))) {
    console.log("STALE  " + path);
    throw new Error(
      "dispatcher scripts gate: " +
        path +
        " is stale — regenerate with `node scripts/r.mjs dispatcher_scripts_python_write`",
    );
  }
  console.log("fresh  " + path);
  return {
    fresh: path,
  };
}
