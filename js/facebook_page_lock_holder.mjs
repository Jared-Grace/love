import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { facebook_page_lock_path } from "./facebook_page_lock_path.mjs";
import { file_read_sync } from "./file_read_sync.mjs";
import { process_command_line_or_null } from "./process_command_line_or_null.mjs";
import { process_parent_id_or_null } from "./process_parent_id_or_null.mjs";
export function facebook_page_lock_holder() {
  "Who holds the facebook browser profile right now, and who is queued for it: each flock process on its lock file, with the run it hangs from and the line each was started from. Answers held false when nothing holds it.";
  "★ ASKS THE KERNEL, NOT A FILE: the lock is the operating system's own (flock), so a holder is a process /proc/locks lists, and a waiter is one it lists behind an arrow. Those are kept only when the process's own command line names this lock file, which flock's always does.";
  let path = facebook_page_lock_path();
  let lines = file_read_sync("/proc/locks").split("\n");
  let holders = [];
  let waiting = [];
  let seen = [];
  for (let line of lines) {
    let fields = line.trim().split(/\s+/);
    let queued = equal(fields[1], "->");
    if (queued) {
      fields.splice(1, 1);
    }
    if (less_than(fields.length, 6)) {
      continue;
    }
    let pid = fields[4];
    if (seen.includes(pid)) {
      continue;
    }
    let command = process_command_line_or_null(pid);
    if (equal(command, null) || not(command.includes(path))) {
      continue;
    }
    seen.push(pid);
    let parent = process_parent_id_or_null(pid);
    let one = {
      pid,
      command,
      parent,
      parent_command: equal(parent, null)
        ? null
        : process_command_line_or_null(parent),
    };
    if (queued) {
      waiting.push(one);
    } else {
      holders.push(one);
    }
  }
  let r = {
    held: greater_than(holders.length, 0),
    path,
    holders,
    waiting,
  };
  return r;
}
