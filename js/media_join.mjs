import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_temp } from "./file_temp.mjs";
import { command_line } from "./command_line.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function media_join(paths_media, path_output) {
  "$plain paths_media";
  "$plain path_output";
  "Joins a run of sound or picture files end to end into one file, keeping what is in them untouched.";
  "★ IT OVERWRITES WHAT IS ALREADY AT THE OUTPUT RATHER THAN ASKING. It never used to meet one, because the only caller that skipped work skipped it whenever the file existed at all. That caller compares dates now, so it does call this over a file already there - and the tool underneath, asked without being told, stops and waits for somebody at a keyboard to answer a question nobody is going to see.";
  "★ IT IS NAMED FOR SOUND AND PICTURES TOGETHER BECAUSE THE TOOL IT ASKS DOES NOT KNOW THE DIFFERENCE. What is handed over is a list of files and an instruction to lay them end to end and copy the contents across without re-encoding, which is the same instruction and the same right answer for a chapter cut into forty spoken pieces as for a run of little videos. It was called a video join for as long as only videos asked for it, and that name turned every later reader away from the one thing that already did what they wanted.";
  async function lambda3(temp_path) {
    function lambda4(item) {
      let v = text_combine_multiple(["file '", item, "'"]);
      return v;
    }
    let mapped = list_map(paths_media, lambda4);
    let contents = list_join_newline(mapped);
    await file_overwrite(temp_path, contents);
    await file_parent_exists_ensure(path_output);
    let command = text_combine_multiple([
      "ffmpeg -y -f concat -safe 0 -i ",
      temp_path,
      " -c copy ",
      path_output,
    ]);
    await command_line(command);
  }
  await file_temp(lambda3);
}
