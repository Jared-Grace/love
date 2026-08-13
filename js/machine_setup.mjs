import { window_open_current_workspace_setup } from "./window_open_current_workspace_setup.mjs";
import { claude_auto_compact_window_set } from "./claude_auto_compact_window_set.mjs";
import { list_add } from "./list_add.mjs";
export async function machine_setup() {
  "Everything a fresh machine needs once, in one place - run it after cloning the repo onto a new computer, and again whenever a step is added here.";
  "Every step is safe to run a second time and reports whether it actually changed anything, so re-running is how you adopt a new step rather than something to avoid.";
  let steps = [];
  let compact = await claude_auto_compact_window_set();
  list_add(steps, compact);
  let windows = await window_open_current_workspace_setup();
  list_add(steps, windows);
  let r = {
    steps,
  };
  return r;
}
