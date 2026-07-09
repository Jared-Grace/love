import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
import { audio_duration } from "../../../love/public/src/audio_duration.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { exec } from "child_process";
import path from "path";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function video_generate(path_image, path_audio, path_output) {
  let d = await audio_duration(path_audio);
  await file_parent_exists_ensure(path_output);
  const cmd = text_combine_multiple([
    '\nffmpeg -y\n-loop 1\n-i "',
    path_image,
    '"\n-i "',
    path_audio,
    '"\n-c:v libx264 \n-tune stillimage \n-c:a aac \n-b:a 192k \n-pix_fmt yuv420p \n-shortest\n-t ',
    d,
    '\n"',
    path_output,
    '"\n',
  ]).replace(/\s+/g, " ");
  let stdout2 = await command_line(cmd);
}
