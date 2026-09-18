import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { youtube_video_upload } from "./youtube_video_upload.mjs";
export async function youtube_video_upload_described(file_path, privacy) {
  "$plain file_path";
  "$plain privacy";
  "Puts a film up with the title and the description that were written beside it in a file, so neither has to be typed at a command line.";
  "★ THE WORDS COME OFF THE DISK BECAUSE A DESCRIPTION IS THE ONE PART OF AN UPLOAD A COMMAND LINE CANNOT CARRY. It runs to thousands of characters, it has apostrophes in it, and it has to keep its own line breaks; every one of those is a thing shell quoting either mangles or refuses. Written as a file it is also reviewable before it is sent, which matters for the one field on a film that nobody rereads afterwards.";
  "★ THE FIRST LINE IS THE TITLE AND EVERYTHING BELOW IT IS THE DESCRIPTION. The two were nearly split at the first blank line instead, and nearly kept in separate files; one line is better than a blank-line rule because a description that happens to open with a blank line would silently lose its title, and better than two files because a title and its description go stale as a pair or not at all.";
  "It asks who may watch it and never assumes, exactly as the plainer form does, because that is the one setting on a film that cannot be taken back quietly.";
  arguments_assert(arguments, 2);
  let path_words = text_combine_multiple([file_path, ".description.txt"]);
  let lines = await file_read_lines(path_words);
  let title = list_first(lines);
  let rest = list_skip_1(lines);
  let description = list_join_newline(rest);
  let r = await youtube_video_upload(file_path, title, description, privacy);
  return r;
}
