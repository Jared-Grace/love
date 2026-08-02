import { json_to } from "./json_to.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import fs from "fs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { notification_log_path } from "./notification_log_path.mjs";
import { notification_events } from "./notification_events.mjs";
export async function notification_hook_check(message) {
  "Feeds one notification payload to the REAL hook and returns the line it recorded, so the recorder is exercised rather than assumed. Spawning the hook is the point: it is the exact process Claude Code runs, so this cannot pass while the live behaviour is broken.";
  "It also asserts the hook writes where the reader reads. That literal is duplicated by necessity - a hook stands alone and cannot import - and a silent drift between the two halves would look exactly like nothing ever blocking.";
  arguments_assert(arguments, 1);
  let hook_path = ".claude/hooks/notification_log.mjs";
  let log_path = notification_log_path();
  let source = fs.readFileSync(hook_path, "utf8");
  let b = source.includes(log_path);
  if (not(b)) {
    throw new Error("hook does not write to " + log_path);
  }
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let payload = json_to({
    hook_event_name: "Notification",
    message,
    session_id: "notification-hook-check",
    cwd: process.cwd(),
  });
  await new Promise(function lambda(resolve, reject) {
    let child = spawn("node", [hook_path], {
      shell: false,
    });
    function on_error(err) {
      reject(err);
    }
    child.on("error", on_error);
    function on_close() {
      resolve(null);
    }
    child.on("close", on_close);
    child.stdin.write(payload);
    child.stdin.end();
  });
  let events = notification_events();
  let last = events[subtract(events.length, 1)];
  return last;
}
