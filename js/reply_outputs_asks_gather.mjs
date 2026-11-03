import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_asks_lines } from "./reply_asks_lines.mjs";
import { prayer_lines_wrap } from "./prayer_lines_wrap.mjs";
import { list_unique } from "./list_unique.mjs";
import { reply_choices_give } from "./reply_choices_give.mjs";
export function reply_outputs_asks_gather(outputs) {
  arguments_assert(arguments, 1);
  ("Turns the separate lines a person's asks earned into one prayer and one answer about giving, placed where the first ask was. Anything else already in the reply stays where it is.");
  ("★ THE PRAYER IS PUT TOGETHER HERE, AFTER THE MESSAGE IS READ, BECAUSE ITS LINES CANNOT BE KNOWN BEFORE. A person can ask for these in any order, repeat them, and say other things in between, so there is no fixed list of prayers to write out in advance.");
  ("Each line is said once, in the order it was first asked, however many times it was asked.");
  let lines = reply_asks_lines();
  function lambda(output) {
    let r = lines.includes(output);
    return r;
  }
  let asked = outputs.filter(lambda);
  if (equal(asked.length, 0)) {
    return outputs;
  }
  let lines2 = list_unique(asked);
  let prayer = prayer_lines_wrap(lines2);
  let give = reply_choices_give();
  let gathered = [];
  let placed = false;
  for (let output of outputs) {
    let b = lines.includes(output);
    if (not(b)) {
      gathered.push(output);
    } else if (not(placed)) {
      gathered.push(prayer, give);
      placed = true;
    }
  }
  return gathered;
}
