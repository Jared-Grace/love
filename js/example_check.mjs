import { equal } from "./equal.mjs";
import { example_transform_run } from "./example_transform_run.mjs";
import { example_rejection_run } from "./example_rejection_run.mjs";
import { example_files_run } from "./example_files_run.mjs";
export async function example_check(e) {
  if (equal(e.kind, "rejection")) {
    let r = await example_rejection_run(e);
    return r;
  }
  if (equal(e.kind, "transform")) {
    let r = await example_transform_run(e);
    return r;
  }
  if (equal(e.kind, "files")) {
    let r = await example_files_run(e);
    return r;
  }
  let r2 = "skip";
  return r2;
}
