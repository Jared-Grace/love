import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { path_join } from "./path_join.mjs";
import { example_files_refuses_run } from "./example_files_refuses_run.mjs";
export async function example_files_refuses_run_gate_run() {
  "Gate: the runner that checks refusals has to notice a folder that changed. Throws so the dispatcher seam exits nonzero.";
  "It is the checker being checked rather than a command, and it needs its own gate because the corpus cannot supply the case. Every refusal in the corpus today gives up before writing anything, so all of them pass whether the folder is read back afterwards or not - which is exactly how the reading came to be missing for as long as it was. A guard that gave up half way through would have passed too, and no example would have said so.";
  "The two cases are the two halves of refusing: stopping, and stopping without leaving anything behind. A lambda that throws at once must be accepted, and a lambda that writes a file and only then throws must be rejected.";
  "The two files it makes up are named after nothing. A made-up folder needs a name for its file and it does not care which, and the earlier answer - borrow the name of a real atom, spelled so a rename follows it - put two of the smallest and most widely shipped functions in the repo into what this prints while proving the difference is expected. Read back out of a failure, that accused them, and they had never been asked to do anything.";
  "A name nothing answers to is the safest thing to write here for exactly the same reason it is usually the worst: nothing follows it, so nothing can drag a real function in behind it.";
  let counted = "example_only_counted";
  let firsted = "example_only_firsted";
  let before = [
    {
      name: text_combine_multiple([counted, ".mjs"]),
      source: text_combine_multiple([
        "export function ",
        counted,
        "(list) {\n  return list.length;\n}",
      ]),
    },
  ];
  let e = {
    title: example_files_refuses_run.name,
    before,
  };
  async function refuses_cleanly(dir) {
    throw new Error("refused before touching the folder");
  }
  ("What fails is thrown as a record naming the runner, because a complaint that names nobody is treated as holding everything - the reader cannot show it misses anything, so it stops every deployment rather than the one it belongs to. There is exactly one thing on trial here and it can be named.");
  let clean = await example_files_refuses_run(e, refuses_cleanly);
  let broken = [];
  if (not_equal(clean, "pass")) {
    let item = example_files_refuses_run.name;
    list_add(broken, item);
  }
  list_empty_is_assert_json(broken, {
    hint: "a lambda that threw without touching the folder was not accepted - has the comparison started reading something other than the folder it was given?",
  });
  async function refuses_half_way(dir) {
    let combined = text_combine_multiple([firsted, ".mjs"]);
    let file_path = path_join([dir, combined]);
    let contents = text_combine_multiple([
      "export function ",
      firsted,
      "(list) {\n  return list[0];\n}",
    ]);
    await file_overwrite(file_path, contents);
    throw new Error("refused after writing a file");
  }
  console.log(
    "expected difference below - proving a half-written refusal is caught",
  );
  let half_written = await example_files_refuses_run(e, refuses_half_way);
  let accepted = [];
  if (not_equal(half_written, "fail")) {
    let item2 = example_files_refuses_run.name;
    list_add(accepted, item2);
  }
  list_empty_is_assert_json(accepted, {
    hint: "a lambda that wrote a file and then threw was accepted as a clean refusal - is the folder still being read back and compared against the example's before?",
  });
  let r = {
    clean,
    half: half_written,
  };
  return r;
}
