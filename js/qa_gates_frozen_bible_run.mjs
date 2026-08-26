import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_bible_names } from "./qa_gates_bible_names.mjs";
import { qa_gates_frozen_names_run } from "./qa_gates_frozen_names_run.mjs";
export async function qa_gates_frozen_bible_run() {
  "Every Bible gate this repo judges, run inside the frozen copy, answering with the ones that complained there.";
  "IT TAKES NO SET BECAUSE THE SET IS NOT A CHOICE. Which gates are about the Bible is derived from the list the judging itself walks, so this cannot drift from what is actually judged.";
  arguments_assert(arguments, 0);
  let gate_names = qa_gates_bible_names();
  let r = await qa_gates_frozen_names_run(gate_names);
  return r;
}
