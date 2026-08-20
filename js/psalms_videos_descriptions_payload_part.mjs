import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { psalms_videos_descriptions_payload_parts_path } from "./psalms_videos_descriptions_payload_parts_path.mjs";
export async function psalms_videos_descriptions_payload_part(part_number) {
  "One piece of the words waiting to go under the songs, counted from one, ready to be handed to a signed-in page.";
  "Asking for a piece that is not there is answered with a refusal naming how many there are, rather than with nothing. Nothing looks exactly like a piece with no songs left in it, and somebody reading that would take it for the end of the work and stop.";
  arguments_assert(arguments, 1);
  let path = psalms_videos_descriptions_payload_parts_path();
  let parts = await file_read_json(path);
  let before_first = less_than(part_number, 1);
  let after_last = greater_than(part_number, parts.length);
  if (before_first || after_last) {
    throw new Error(
      "there is no piece " + part_number + " - there are " + parts.length,
    );
  }
  let part = parts[subtract(part_number, 1)];
  return part;
}
