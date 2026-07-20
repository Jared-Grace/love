import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_temp } from "./file_temp.mjs";
import { command_line } from "./command_line.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function videos_join(paths_videos, path_output) {
  async function lambda3(temp_path) {
    function lambda4(item) {
      let v = text_combine_multiple(["file '", item, "'"]);
      return v;
    }
    let mapped = list_map(paths_videos, lambda4);
    let contents = list_join_newline(mapped);
    await file_overwrite(temp_path, contents);
    let result2 = await file_parent_exists_ensure(path_output);
    await command_line(
      text_combine_multiple([
        "ffmpeg -f concat -safe 0 -i ",
        temp_path,
        " -c copy ",
        path_output,
      ]),
    );
  }
  let result = await file_temp(lambda3);
}
