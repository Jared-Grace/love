import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_prefix_run } from "./qa_gates_prefix_run.mjs";
export async function qa_gates_giveaway_run() {
  arguments_assert(arguments, 0);
  ("Asks every giveaway gate of the repo-wide list, and says which ones it asked.");
  ("★ IT TAKES NOTHING SO IT CAN BE GRANTED. The prefix form takes a word, and the gates it can reach run commands and delete files, so no grant can rule out a word steering one of those; with the word fixed here there is nothing left for a caller to steer.");
  let r = await qa_gates_prefix_run("giveaway_");
  return r;
}
