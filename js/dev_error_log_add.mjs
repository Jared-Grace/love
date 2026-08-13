import { arguments_assert } from "./arguments_assert.mjs";
import { date_time_zone_now_iso } from "./date_time_zone_now_iso.mjs";
import { dev_error_log_path } from "./dev_error_log_path.mjs";
import { file_append } from "./file_append.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine } from "./text_combine.mjs";
export async function dev_error_log_add(kind, message, where) {
  arguments_assert(arguments, 3);
  ("Writes down one error a page hit, sent here by the band that paints errors onto a /dev/ page. One line each.");
  ("It exists so that finding out what broke on a phone costs the person testing nothing. Before this, the band showed the message and the only way it reached anybody who could act on it was somebody reading a stack trace off a phone screen and typing it back out - which is the slowest and least reliable link in the whole loop, and the reason a quiz that threw at a learner on every correct press went unseen until it was reported by hand.");
  ("where is the whole address of the page, and it is the field that turns a stack trace into a thing that can be reproduced: these apps put what is on the screen into the address, so it names the lesson and the quiz that were showing when the error happened.");
  ("Nothing is left out and nothing is trusted: a page decides what these three words say, so they are written down as given rather than parsed, and whoever reads them later is reading a report rather than a fact.");
  let time = date_time_zone_now_iso();
  let entry = {
    time,
    kind,
    message,
    where,
  };
  let line = json_to(entry);
  let text = text_combine(line, "\n");
  let f_path = dev_error_log_path();
  await file_append(f_path, text);
  let r = {
    written: true,
  };
  return r;
}
