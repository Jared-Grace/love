import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not_equal } from "./not_equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { path_join } from "./path_join.mjs";
import { example_files_refuses_run } from "./example_files_refuses_run.mjs";
export async function example_files_refuses_run_gate_run() {
  "Gate: the runner that checks refusals has to notice a folder that changed. Throws so the dispatcher seam exits nonzero.";
  "It is the checker being checked rather than a command, and it needs its own gate because the corpus cannot supply the case. Every refusal in the corpus today gives up before writing anything, so all of them pass whether the folder is read back afterwards or not - which is exactly how the reading came to be missing for as long as it was. A guard that gave up half way through would have passed too, and no example would have said so.";
  "The two cases are the two halves of refusing: stopping, and stopping without leaving anything behind. A lambda that throws at once must be accepted, and a lambda that writes a file and only then throws must be rejected.";
  let before = [
    {
      name: text_combine_multiple([fn_name("list_size"), ".mjs"]),
      source: text_combine_multiple([
        "export function ",
        fn_name("list_size"),
        "(list) {\n  return list.length;\n}",
      ]),
    },
  ];
  let e = {
    title: fn_name("example_files_refuses_run"),
    before,
  };
  async function refuses_cleanly(dir) {
    throw new Error("refused before touching the folder");
  }
  let clean = await example_files_refuses_run(e, refuses_cleanly);
  if (not_equal(clean, "pass")) {
    throw new Error(
      "refusal runner gate: a lambda that threw without touching the folder was not accepted - has the comparison started reading something other than the folder it was given?",
    );
  }
  async function refuses_half_way(dir) {
    let file_path = path_join([
      dir,
      text_combine_multiple([fn_name("list_first"), ".mjs"]),
    ]);
    await file_overwrite(
      file_path,
      text_combine_multiple([
        "export function ",
        fn_name("list_first"),
        "(list) {\n  return list[0];\n}",
      ]),
    );
    throw new Error("refused after writing a file");
  }
  console.log(
    "expected difference below - proving a half-written refusal is caught",
  );
  let half_written = await example_files_refuses_run(e, refuses_half_way);
  if (not_equal(half_written, "fail")) {
    throw new Error(
      "refusal runner gate: a lambda that wrote a file and then threw was accepted as a clean refusal - is the folder still being read back and compared against the example's before?",
    );
  }
  let r = {
    clean,
    half: half_written,
  };
  return r;
}
