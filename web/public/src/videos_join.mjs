import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export async function videos_join(paths_videos, path_output) {
  async function lambda3(temp_path) {
    function lambda4(item) {
      let v = "file '" + item + "'";
      return v;
    }
    let mapped = list_map(paths_videos, lambda4);
    let contents2 = list_join_newline(mapped);
    await file_overwrite(temp_path, contents2);
    let stdout = await command_line(
      "ffmpeg -f concat -safe 0 -i " + temp_path + " -c copy " + path_output,
    );
  }
  let result = await file_temp(lambda3);
}
