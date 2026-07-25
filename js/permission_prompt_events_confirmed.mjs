import { list_add } from "./list_add.mjs";
import { notification_prompts_by_session } from "./notification_prompts_by_session.mjs";
export function permission_prompt_events_confirmed(events) {
  "The waits that a recorded approval block falls inside - proved interruptions rather than suspected ones. A call started at one moment and returned later; if the same session was recorded blocking on approval somewhere in between, there is nothing left to infer.";
  "A couple of seconds of slack on each end absorbs the ordering between the hook process being started and the timestamp the transcript keeps. Sessions with nothing recorded simply contribute nothing, so this reports only what the log covers - it is silent about everything before the recorder existed, which is the honest answer for that stretch rather than a zero.";
  let by_session = notification_prompts_by_session();
  let slack = 2000;
  let confirmed = [];
  for (let event of events) {
    let times = by_session.get(event.session);
    if (!times) {
      continue;
    }
    let started = Date.parse(event.at) - slack;
    let ended = Date.parse(event.at) + event.waited + slack;
    for (let at of times) {
      let blocked = Date.parse(at);
      if (blocked >= started && blocked <= ended) {
        list_add(confirmed, event);
        break;
      }
    }
  }
  return confirmed;
}
