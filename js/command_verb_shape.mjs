import { equal_not } from "./equal_not.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty } from "./text_empty.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function command_verb_shape(command) {
  "the verb a command line runs, read the way an allow rule would have to name it - wrappers that only bound or measure the command taken off the front, and the handful of tools whose first argument is really part of the verb folded into two words";
  "a report and never a decision, which is why it may be a second reading of something the guard already reads. the guard's own reading is the one that decides, and it is asked directly, one command at a time, where the answer matters. what this is for is grouping: an interruption has to be counted under the thing a rule would name, or the ranking says nothing about which rule to write.";
  "the wrappers are stripped for the same reason the guard strips them - otherwise a time limit in front of a command hides the command, and the commonest shape in the whole record reads as the word timeout rather than as the thing that actually prompted.";
  let text = command.trim();
  let words = text.split(/\s+/);
  let wrappers = ["timeout", "time", "xargs", "!", "sudo", "nice", "env"];
  while (greater_than(words.length, 1)) {
    let first = words[0];
    let wrapper_is = list_includes(wrappers, first);
    if (wrapper_is) {
      words = words.slice(1);
      continue;
    }
    ("a bare number or a duration left behind by a stripped time limit belongs to the wrapper, not to the command");
    let duration_is = /^\d+(\.\d+)?[smhd]?$/.test(first);
    if (duration_is) {
      words = words.slice(1);
      continue;
    }
    let flag_is = first.startsWith("-");
    if (flag_is) {
      words = words.slice(1);
      continue;
    }
    let assignment_is = /^[A-Za-z_][A-Za-z0-9_]*=/.test(first);
    if (assignment_is) {
      words = words.slice(1);
      continue;
    }
    break;
  }
  let head = words[0];
  let missing = equal(head, undefined);
  if (missing) {
    let v = text_empty();
    return v;
  }
  ("these carry their operation in the second word, so one word names a whole tool and says nothing about what it was asked to do - and a rule for them is written on the pair");
  let folding = [
    "git",
    "node",
    "npm",
    "npx",
    "gh",
    "systemctl",
    "tmux",
    "docker",
  ];
  let folds = list_includes(folding, head);
  let second = words[1];
  let has_second = equal_not(second, undefined);
  if (folds && has_second) {
    let parts = [];
    list_add_multiple(parts, [head, " ", second]);
    let joined = text_combine_multiple(parts);
    return joined;
  }
  return head;
}
