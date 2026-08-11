import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { folder_memory } from "./folder_memory.mjs";
import { function_paths_frozen_is } from "./function_paths_frozen_is.mjs";
import { not } from "./not.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function function_paths_frozen_gate_run() {
  "Checks that a run inside the frozen copy really did turn on the once-per-name lookup, rather than quietly falling back to asking the disk every time.";
  "It is here because losing that is silent. Nothing breaks and no answer changes; the whole set of questions simply takes three times as long again, and whoever notices has no reason to look at where a function's file is found. The saving was measured in millions of looks at the disk per run, so it is worth a line that says when it stops happening.";
  "Two ways it could stop, and this catches both from the outside: the run forgetting to say the folders are frozen, and the saying being refused because the run no longer stands where the copy is. The second is the likely one - the share is started with the copy as its folder, and that is one word in one line, easy to lose while changing something else.";
  "It asks nothing of a run outside the copy, on purpose. The folder everybody edits is genuinely not frozen, so a run there is right to be slow, and a gate that complained about it would be complaining that the safe thing happened.";
  let here = folder_current_absolute();
  let memory = folder_memory();
  let copy = text_starts_with(here, memory);
  if (not(copy)) {
    let r = {
      checked: false,
      here,
    };
    return r;
  }
  let frozen = function_paths_frozen_is();
  let b = not(frozen);
  not_assert_json(b, {
    hint: "this run stands inside the frozen copy but is still asking the disk where every function lives, once per name per repository - something stopped saying the folders cannot change",
    here,
  });
  let r2 = {
    checked: true,
    here,
    frozen,
  };
  return r2;
}
