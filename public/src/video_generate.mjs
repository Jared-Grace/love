import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
import { audio_duration } from "../../../love/public/src/audio_duration.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { exec } from "child_process";
import path from "path";
export async function video_generate(path_image, path_audio, path_output) {
  let d = await audio_duration(path_audio);
  await file_parent_exists_ensure(path_output);
  const cmd = `
ffmpeg -y
-loop 1
-i "${path_image}"
-i "${path_audio}"
-c:v libx264 
-tune stillimage 
-c:a aac 
-b:a 192k 
-pix_fmt yuv420p 
-shortest
-t ${d}
"${path_output}"
`.replace(/\s+/g, " ");
  let stdout2 = await command_line(cmd);
}
