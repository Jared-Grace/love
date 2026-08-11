import { log } from "./log.mjs";
import { property_get } from "./property_get.mjs";
import { qa_commit_named_head } from "./qa_commit_named_head.mjs";
export async function qa_commit_named_auto_step() {
  "One look by the judging daemon, with a line in the journal saying what it decided";
  "A daemon that says nothing cannot be told apart from a daemon that has died, and the only way left to find out is to go looking at what it was supposed to have written. One line a minute is nothing to a journal and it turns the question into a reading.";
  "What is judged is left out of the line on purpose. It is the gates named at that commit, which is pages of it, and the daemon writes that down properly in its own record - the journal is here to say whether the daemon is awake and why it did or did not start, and those are three small words.";
  let r = await qa_commit_named_head();
  let said = {
    commit: property_get(r, "commit"),
    started: property_get(r, "started"),
    flight: property_get(r, "flight"),
  };
  log(qa_commit_named_auto_step.name, said);
  return said;
}
