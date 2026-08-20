import { json_to } from "./json_to.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { psalms_videos_descriptions_payload_path } from "./psalms_videos_descriptions_payload_path.mjs";
import { psalms_videos_descriptions_payload_parts_path } from "./psalms_videos_descriptions_payload_parts_path.mjs";
export async function psalms_videos_descriptions_payload_parts_write(
  letters_most,
) {
  "Cuts the words of every song into pieces, each piece no longer than the number of letters asked for, and writes the pieces down as one list of them.";
  "The whole thing is a quarter of a million letters and the only way into a signed-in youtube page is somebody pasting it there, so it has to arrive in pieces or it does not arrive at all. How big a piece a browser will take is not a fact this repo can work out, so it is asked for rather than guessed at.";
  "The pieces are kept in one file rather than as a file each, because a run that makes five pieces after a run that made nine would leave four files behind that still read as work waiting to be done, and pasting one of those a second time is a change nobody asked for.";
  "It cuts every song there is, done or not. The one next door that asks youtube what is still missing first is the one to run before a sitting; this one is for starting over from nothing.";
  arguments_assert(arguments, 1);
  let path_whole = psalms_videos_descriptions_payload_path();
  let paired = await file_read_json(path_whole);
  let parts = psalms_videos_descriptions_parts_cut(paired, letters_most);
  let path = psalms_videos_descriptions_payload_parts_path();
  await file_overwrite_json(path, parts);
  let sizes = [];
  for (let one of parts) {
    sizes.push(one.length);
  }
  let r = {
    path: path,
    parts: parts.length,
    videos: paired.length,
    videos_by_part: sizes,
  };
  return r;
}
