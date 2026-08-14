import { arguments_assert } from "./arguments_assert.mjs";
export function qa_gates_countless_baseline_path() {
  "Where the walk-count ratchet keeps the gates that already said nothing about how much they reached. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  arguments_assert(arguments, 0);
  let path = "data/qa_gates_countless_baseline.json";
  return path;
}
