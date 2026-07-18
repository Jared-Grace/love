import { example_transform_run } from "./example_transform_run.mjs";
import { example_rejection_run } from "./example_rejection_run.mjs";
export async function example_check(e) {
  if (e.kind === "rejection") {
    let r = await example_rejection_run(e);
    return r;
  }
  if (e.kind === "transform") {
    let r = await example_transform_run(e);
    return r;
  }
  return "skip";
}
