import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { file_temp } from "./file_temp.mjs";
import { file_write } from "./file_write.mjs";
import { hook_child_stdout } from "./hook_child_stdout.mjs";
import { json_from_property_get } from "./json_from_property_get.mjs";
import { json_lines_text } from "./json_lines_text.mjs";
import { property_get } from "./property_get.mjs";
export async function stop_next_steps_hook_check(entries) {
  "Lays one made-up conversation down as a transcript file and puts it to the REAL stop hook, reporting the verdict that came back - block, or silent when the hook let the turn through.";
  "Spawning the hook rather than importing its reading is the whole point, the same as for the two permission corpora: this file is what Claude Code actually starts at the end of every turn, so a gate built on it cannot pass while the live behaviour is broken.";
  "The transcript is written to a temp file and deleted afterwards. The hook takes a path rather than the conversation itself, so there is no way to ask it anything without one, and a fixture left on disk would be read by the next run of a hook that scans for the newest thing said.";
  arguments_assert(arguments, 1);
  let text = json_lines_text(entries);
  async function lambda(temp_path) {
    await file_write(temp_path, text);
    let cp = await import("child_process");
    let spawn = property_get(cp, "spawn");
    let child = spawn("node", [".claude/hooks/stop_next_steps_remind.mjs"], {
      shell: false,
    });
    let payload = {
      transcript_path: temp_path,
      stop_hook_active: false,
    };
    let stdout = await hook_child_stdout(child, payload);
    let left = stdout.trim();
    if (equal(left, "")) {
      let quiet = {
        decision: "silent",
      };
      return quiet;
    }
    let decision = json_from_property_get(stdout, "decision");
    let spoke = {
      decision,
    };
    return spoke;
  }
  let r = await file_temp(lambda);
  return r;
}
