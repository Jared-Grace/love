import { http_error_message_status_or_null } from "./http_error_message_status_or_null.mjs";
import { equal } from "./equal.mjs";
export function http_error_message_absent_is(message) {
  "$plain message";
  "Whether a refused download means the thing asked for is not there, as against meaning the asking itself did not get through.";
  "IT IS ONE JUDGEMENT AND IT IS WRITTEN DOWN ONCE. Every sweep that records what a bible holds rests on it, and it decides which of two entirely different facts gets written into that record - a property of somebody's translation, or a property of a bad afternoon on the network. It sat inside the one caller that needed it first, where nothing could ask it a question; here it can be asked every question there is.";
  "NOT FOUND IS THE ONLY REFUSAL THAT COUNTS AS ABSENCE. It means the far end was reached, is working, and says there is no such thing there, which is exactly the fact wanted. Every other refusal is the far end saying it cannot serve this right now, and a server too busy to answer has said nothing at all about what it holds. So a five hundred, a rate limit, a dropped socket and a body that would not decompress are all one thing here: asked, and could not be told.";
  "THE QUIET ANSWER GRANTS NOTHING. A message this cannot read at all is not absence, because absence is a claim and nothing said it. That way round matters: a run that got no answers writes down no facts, where the other way round it would write down a whole bible of holes that are really its own failures.";
  let status = http_error_message_status_or_null(message);
  let absent = equal(status, 404);
  return absent;
}
