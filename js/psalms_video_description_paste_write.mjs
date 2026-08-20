import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { youtube_video_descriptions_paste } from "./youtube_video_descriptions_paste.mjs";
import { psalms_videos_descriptions_payload_path } from "./psalms_videos_descriptions_payload_path.mjs";
import { psalms_videos_descriptions_paste_path } from "./psalms_videos_descriptions_paste_path.mjs";
export async function psalms_video_description_paste_write(video_id) {
  "$plain video_id";
  "Writes out a paste that gives its words to one song and no other, for trying the whole way through on something small before eleven hundred more follow it.";
  "The way this writes has not been watched going past, so the first thing done with it should cost one video if it is wrong. A run of two hundred that is wrong is two hundred videos to put back; a run of one is one, and the reading-back next door says which of those happened.";
  "The song is looked up in the words already worked out rather than worked out again, so what is tried is exactly what the rest of the run would send, and a try that passes says something about the run.";
  arguments_assert(arguments, 1);
  let path_whole = psalms_videos_descriptions_payload_path();
  let paired = await file_read_json(path_whole);
  let found = null;
  for (let one of paired) {
    let same = equal(one.video_id, video_id);
    if (same) {
      found = one;
      break;
    }
  }
  if (equal(found, null)) {
    throw new Error("no song here is at " + video_id);
  }
  let songs = [
    {
      video_id: found.video_id,
      description: found.description,
    },
  ];
  let paste = youtube_video_descriptions_paste(songs);
  let path = psalms_videos_descriptions_paste_path();
  await file_overwrite(path, paste);
  let r = {
    path: path,
    video_id: found.video_id,
    title: found.title,
    description: found.description,
    letters: paste.length,
  };
  return r;
}
