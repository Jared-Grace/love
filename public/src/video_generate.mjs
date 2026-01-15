import { log } from "../../../love/public/src/log.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { exec } from "child_process";
import path from "path";
export function video_generate(path_image, path_audio, path_output) {cl
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
"${path_output}"
`.replace(/\s+/g, " ");
  function lambda(err, stdout, stderr) {
    if (err) {
      console.error("FFmpeg error:", err);
      return;
    }
    console.log("Video created:", path_output);
  }
  exec(cmd, lambda);
}
