import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { path_name } from "./path_name.mjs";
export async function lyric_video_documents_read() {
  "Every lyric video timing document there is, each one with the name it is filed under, the path it came from and everything it holds.";
  "★ IT IS THE FOLDER READ AND NOTHING ELSE, WHICH IS WHY EVERY QUESTION ASKED OF THESE DOCUMENTS COMES THROUGH IT. Several already did this for themselves - one keeping the ones a person timed by hand, one looking for a missing field, one checking scenes against the shared look - and each was four lines of opening the folder, keeping the json and reading each file. Four lines copied is four lines that drift, and the drift is silent: a copy that filters before it counts reports a smaller folder than the folder, and nothing anywhere goes red.";
  "IT KEEPS THE WHOLE DOCUMENT RATHER THAN THE PART A CALLER WANTED, because a reader that decides what matters is a reader every new question has to be added to. Deciding belongs to whoever asked.";
  "THE NAME IS CARRIED BESIDE THE PATH because most callers want to say which psalm rather than which file, and working it back out of a path is the sort of line that gets written slightly differently each time.";
  arguments_assert(arguments, 0);
  let folder = data_given_lyric_videos_folder();
  let paths = await folder_read_paths_async(folder);
  let paths_json = list_filter_ends_with(paths, ".json");
  let read = [];
  for (let path of paths_json) {
    let document = await file_read_json(path);
    let one = {
      name: path_name(path),
      path,
      document,
    };
    read.push(one);
  }
  return read;
}
