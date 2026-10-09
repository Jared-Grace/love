import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { youtube_video_title_write } from "./youtube_video_title_write.mjs";
import { youtube_video_description_write } from "./youtube_video_description_write.mjs";
export async function youtube_video_described_write(video_id, file_path) {
  "$plain video_id";
  "$plain file_path";
  "Gives a video that is already up the title and the description written beside its film in a file - the same words, read the same way, that the API upload puts on a film it sends itself.";
  "★ IT IS THE OTHER HALF OF AN UPLOAD THROUGH STUDIO'S PAGE. That route spends none of the API's daily uploads but leaves the film named after its file and with nothing under it; this puts the words on through the API afterwards, at a few dozen units rather than sixteen hundred.";
  "The first line is the title and everything below it is the description, exactly as the API upload reads the same file, so one file answers for a film whichever way it went up.";
  arguments_assert(arguments, 2);
  let path_words = text_combine_multiple([file_path, ".description.txt"]);
  let lines = await file_read_lines(path_words);
  let title = list_first(lines);
  let rest = list_skip_1(lines);
  let description = list_join_newline(rest);
  let titled = await youtube_video_title_write(video_id, title);
  let described = await youtube_video_description_write(video_id, description);
  let r = {
    video_id,
    title_after: titled.title_after,
    description_length: described.description_after.length,
  };
  return r;
}
