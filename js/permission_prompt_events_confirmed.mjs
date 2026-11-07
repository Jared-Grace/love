import { equal } from "./equal.mjs";
import { notification_prompts_by_session } from "./notification_prompts_by_session.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_add } from "./list_add.mjs";
import { permission_prompt_tool_instant_is } from "./permission_prompt_tool_instant_is.mjs";
export function permission_prompt_events_confirmed(events) {
  "The waits that a recorded approval block falls inside - proved interruptions rather than suspected ones. A call started at one moment and returned later; if the same session was recorded blocking on approval somewhere in between, there is nothing left to infer.";
  "A couple of seconds of slack on each end absorbs the ordering between the hook process being started and the timestamp the transcript keeps. Sessions with nothing recorded simply contribute nothing, so this reports only what the log covers - it is silent about everything before the recorder existed, which is the honest answer for that stretch rather than a zero.";
  "★ ONE NOTICE IS ONE PROMPT, NOT ONE PER CALL OPEN AT THE TIME. Calls sent together in one batch hand their results back together, so a file read beside a shell command that asked waits as long as the shell command did, and the notice falls inside both waits. Measured 2026-11-07: twelve of thirteen file-tool rows had a shell call open beside them at their notice, and the shell call was the one asking.";
  "So a file tool, which always finishes at once on its own, is credited with a notice only when no slower call was open at it too - its wait is then explained by nothing but the human. Two slower calls open at one notice are both kept, because nothing recorded says which of them asked. Rejected: dropping every sibling of an allowed call, which needs the native permission engine's answer for a file path, and nothing here can ask it - the file hook stands aside for every ordinary path.";
  let by_session = notification_prompts_by_session();
  let slack = 2000;
  let covering = new Map();
  let notices_of = new Map();
  for (let event of events) {
    let times = by_session.get(event.session);
    if (not(times)) {
      continue;
    }
    let left = Date.parse(event.at);
    let started = subtract(left, slack);
    let ended = Date.parse(event.at) + event.waited + slack;
    let keys = [];
    for (let at of times) {
      let blocked = Date.parse(at);
      if (
        greater_than_equal(blocked, started) &&
        less_than_equal(blocked, ended)
      ) {
        let key = event.session + " " + at;
        list_add(keys, key);
        let b2 = covering.has(key);
        if (not(b2)) {
          covering.set(key, []);
        }
        let list = covering.get(key);
        list_add(list, event);
      }
    }
    notices_of.set(event, keys);
  }
  function slow_is(event) {
    let b3 = permission_prompt_tool_instant_is(event.tool);
    let b = not(b3);
    return b;
  }
  function notice_has_slow(key) {
    let b = covering.get(key).some(slow_is);
    return b;
  }
  let confirmed = [];
  for (let event of events) {
    let keys = notices_of.get(event) || [];
    if (equal(keys.length, 0)) {
      continue;
    }
    let credited = slow_is(event) || not(keys.every(notice_has_slow));
    if (credited) {
      list_add(confirmed, event);
    }
  }
  return confirmed;
}
