import { folder_temp } from "./folder_temp.mjs";
import { example_files_materialize } from "./example_files_materialize.mjs";
("Run a multi-file GUARD example: materialize e.before, run the directory transform, and");
("expect it to THROW (the tool refusing). Pass iff it threw — the multi-file twin of");
("example_rejection_run. No after-comparison: a refusal changes nothing.");
export async function example_files_refuses_run(e, lambda) {
  async function sandbox(dir) {
    await example_files_materialize(dir, e.before);
    let threw = false;
    try {
      await lambda(dir);
    } catch (err) {
      threw = true;
    }
    return threw;
  }
  let threw = await folder_temp(sandbox);
  return threw ? "pass" : "fail";
}
