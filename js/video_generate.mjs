import { audio_file_duration } from "./audio_file_duration.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
export async function video_generate(path_image, path_audio, path_output) {
  "$plain path_image";
  "$plain path_audio";
  "$plain path_output";
  "Makes a video out of one still picture and one sound file: the picture held on screen for exactly as long as the sound lasts.";
  "THE LENGTH IS ASKED FOR BY HANDING THE PATH OVER AS ONE WORD. It used to be asked by pasting the path into a line of text, which was then taken apart again on its spaces - so a song called Psalm 150.wav was asked about under the name Psalm, there was no such file, and the length came back as nothing. Nothing complained; the video simply came out the wrong length or not at all. The rest of this still builds a line, but there the path sits inside quotation marks, which is what keeps its spaces together.";
  let d = await audio_file_duration(path_audio);
  await file_parent_exists_ensure(path_output);
  let cmd = text_combine_multiple([
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
  await command_line(cmd);
}
