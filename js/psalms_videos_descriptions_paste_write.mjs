import { arguments_assert } from "./arguments_assert.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { psalms_videos_descriptions_paste } from "./psalms_videos_descriptions_paste.mjs";
import { psalms_videos_descriptions_paste_path } from "./psalms_videos_descriptions_paste_path.mjs";
export async function psalms_videos_descriptions_paste_write(part_number) {
  "Writes one piece of the work out as a file to open and copy the whole of into a signed-in studio page.";
  "It goes to a file rather than being printed, because the text is tens of thousands of letters and anything that prints it is a thing that might shorten it. A file is the same length when it is read as when it was written.";
  arguments_assert(arguments, 1);
  let paste = await psalms_videos_descriptions_paste(part_number);
  let path = psalms_videos_descriptions_paste_path();
  await file_overwrite(path, paste);
  let r = {
    path: path,
    part: part_number,
    letters: paste.length,
  };
  return r;
}
