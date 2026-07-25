import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { notification_events } from "./notification_events.mjs";
export function notification_prompts_by_session() {
  "The recorded approval blocks, grouped by the session that blocked. Only the approval ones: the same event also fires when a session is merely idle and wanting a prompt, and counting that as an interruption would inflate the very number this exists to measure.";
  let events = notification_events();
  let by_session = new Map();
  for (let event of events) {
    if (not_equal(event.kind, "permission")) {
      continue;
    }
    let session = event.session;
    let b = by_session.has(session);
    if (not(b)) {
      by_session.set(session, []);
    }
    let times = by_session.get(session);
    list_add(times, event.at);
  }
  return by_session;
}
