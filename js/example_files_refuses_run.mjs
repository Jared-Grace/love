import { fn_name } from "./fn_name.mjs";
import { example_files_read } from "./example_files_read.mjs";
import { property_get } from "./property_get.mjs";
import { example_files_canonical } from "./example_files_canonical.mjs";
import { example_compare_verdict } from "./example_compare_verdict.mjs";
import { not } from "./not.mjs";
import { folder_temp } from "./folder_temp.mjs";
import { example_files_materialize } from "./example_files_materialize.mjs";
("Run a multi-file GUARD example: materialize e.before, run the directory transform, and");
("expect it to THROW (the tool refusing) AND to leave the folder as it found it. The");
("multi-file twin of ",
  fn_name("example_rejection_run"),
  ", comparing against e.before rather than an e.after.");
export async function example_files_refuses_run(e, lambda) {
  "A refusal has to leave the folder exactly as it found it, and that is asked rather than assumed. Throwing is only half of refusing: a guard standing after the first file is written gives up in the middle, which reads here as a clean refusal while the folder behind it holds a change nobody asked for and no example declared. Measured on the verb next door: deleting a comma list of parameters applies them one at a time, and a two-name list whose second name was a letter short stripped the first argument from the call site before giving up - the folder afterwards held a call the example never declared, and the run before this reading existed called that a clean refusal.";
  "What is compared against is the example's OWN before, so a refusal example still declares nothing extra. That is the whole shape of the check: the folder afterwards must be the folder beforehand, and the example already wrote that down.";
  async function in_sandbox(dir) {
    await example_files_materialize(dir, e.before);
    let threw_in_sandbox = false;
    try {
      await lambda(dir);
    } catch (err) {
      threw_in_sandbox = true;
    }
    let files_in_sandbox = await example_files_read(dir);
    let ran_in_sandbox = {
      threw: threw_in_sandbox,
      files: files_in_sandbox,
    };
    return ran_in_sandbox;
  }
  let ran = await folder_temp(in_sandbox);
  let threw = property_get(ran, "threw");
  if (not(threw)) {
    let allowed = "fail";
    return allowed;
  }
  let files = property_get(ran, "files");
  let got = await example_files_canonical(files);
  let want = await example_files_canonical(e.before);
  let verdict = example_compare_verdict(e.title, got, want);
  return verdict;
}
