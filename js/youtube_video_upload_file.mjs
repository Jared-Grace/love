import { arguments_assert } from "./arguments_assert.mjs";
import { path_name } from "./path_name.mjs";
import { youtube_video_upload } from "./youtube_video_upload.mjs";
export async function youtube_video_upload_file(file_path, privacy) {
  "$plain file_path";
  "$plain privacy";
  "Puts a film up under the name its own file already carries, which is the whole of what a person has to type when the file was named on purpose.";
  "It exists so that the ordinary case is one path and one word rather than four things in quotes. Everything a command line makes awkward - a name with a comma in it, a description of several sentences - belongs to the fuller version, and a caller with none of those should not have to spell empty ones.";
  "Who may watch it is still asked for and never assumed. It is the one setting here that cannot be taken back quietly: a film that went up open to the world has been seen by the time anybody notices the default was wrong, and no later edit unsees it.";
  "The description is left empty rather than invented from the file name. An empty description is visibly empty and gets written; a description quietly filled with the file's own name reads like an intention and never gets looked at again.";
  arguments_assert(arguments, 2);
  let title = path_name(file_path);
  let description = "";
  let r = await youtube_video_upload(file_path, title, description, privacy);
  return r;
}
