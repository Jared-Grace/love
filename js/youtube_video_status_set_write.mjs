import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { youtube_video_record_write } from "./youtube_video_record_write.mjs";
export async function youtube_video_status_set_write(
  video_id,
  property_name,
  value,
) {
  arguments_assert(arguments, 3);
  ("$plain video_id");
  ("$plain property_name");
  ("$plain value");
  ("Changes one setting in a published video's status - who may watch it, or whether it says it was made with AI - and gives back that setting as YouTube holds it afterwards.");
  ("★ THE WHOLE RECORD IS READ FIRST AND ONLY THE ONE SETTING CHANGED, because putting a record back replaces every part it names entire; a status built from the one field in mind would empty every other setting, silently.");
  ("★ WHAT COMES BACK IS YOUTUBE'S OWN ANSWER, NOT THE VALUE ASKED FOR. A setting YouTube does not take - a channel not yet allowed to publish puts everything back to private - would otherwise be reported as done.");
  ("THE VALUE ARRIVES AS TEXT FROM A COMMAND LINE, so the words true and false are turned into the yes and no YouTube expects; every other value goes as written.");
  let typed = value;
  if (equal(value, "true")) {
    typed = true;
  }
  if (equal(value, "false")) {
    typed = false;
  }
  let record = await youtube_video_record(video_id);
  let status = property_get(record, "status");
  let before = property_get_or_null(status, property_name);
  property_set(status, property_name, typed);
  let answer = await youtube_video_record_write(record);
  let status_after = property_get(answer, "status");
  let after = property_get_or_null(status_after, property_name);
  let r = {
    video_id,
    property_name,
    before,
    after,
  };
  return r;
}
