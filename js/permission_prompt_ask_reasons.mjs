import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { permission_prompt_events_blocked } from "./permission_prompt_events_blocked.mjs";
import { list_unique } from "./list_unique.mjs";
import { guard_check } from "./guard_check.mjs";
export async function permission_prompt_ask_reasons(days, seconds_minimum) {
  "Every distinct shell command of the recent waits, put to the guard as it stands today, with the ones it still asks about - or abstains on - grouped by the reason it gives, commonest first.";
  "The question this answers is whether a prompt tells the caller how to get past it. A reason that names the piece at fault and a rewording is one a Claude can act on without the human; a reason shared by hundreds of different commands names nothing, so a large group under one reason is where the advice is missing.";
  "A command the guard now allows or denies is counted but not listed: it never reaches the human today, whatever it cost when it was logged.";
  let events = await permission_prompt_events_blocked(days, seconds_minimum);
  let commands = [];
  for (let event of events) {
    if (equal(event.tool, "Bash") && not_equal(event.command, "")) {
      commands.push(event.command);
    }
  }
  let unique = list_unique(commands);
  let checked = [];
  let next = 0;
  async function worker() {
    while (less_than(next, unique.length)) {
      let command = unique[next];
      next = next + 1;
      let verdict = await guard_check(command);
      checked.push({
        command,
        verdict,
      });
    }
  }
  let workers = [];
  for (let i = 0; less_than(i, 8); i++) {
    let v = worker();
    workers.push(v);
  }
  await Promise.all(workers);
  let decisions = {};
  let groups = {};
  for (let item of checked) {
    let command = item.command;
    let verdict = item.verdict;
    let decision = verdict.decision;
    decisions[decision] = (decisions[decision] ?? 0) + 1;
    if (not_equal(decision, "ask") && not_equal(decision, "silent")) {
      continue;
    }
    let reason = verdict.reason ?? "";
    let key = decision + "\n" + reason;
    if (not(key in groups)) {
      groups[key] = {
        decision,
        reason,
        count: 0,
        samples: [],
      };
    }
    let group = groups[key];
    group.count = group.count + 1;
    if (less_than(group.samples.length, 5)) {
      group.samples.push(command);
    }
  }
  let rows = Object.values(groups);
  function lambda(a, b) {
    let difference = subtract(b.count, a.count);
    return difference;
  }
  rows.sort(lambda);
  let r = {
    distinct: unique.length,
    decisions,
    rows,
  };
  return r;
}
