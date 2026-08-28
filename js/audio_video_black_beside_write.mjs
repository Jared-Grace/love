import { path_extension_replace } from "./path_extension_replace.mjs";
import { file_extension_mp4 } from "./file_extension_mp4.mjs";
import { audio_video_black_write } from "./audio_video_black_write.mjs";
export async function audio_video_black_beside_write(path_audio) {
  "$plain path_audio";
  "The whole of turning a recording into a film of it from the one thing a person actually has, which is where the recording is: hands back where the film was written.";
  "THE FILM IS WRITTEN BESIDE THE RECORDING AND NAMED AFTER IT. Somebody who has just downloaded a song has that folder open, so a film that appears next to it under the same name needs no explaining and no second question; a film written anywhere else is one they have to be told how to find, and being told is the cost this exists to remove.";
  "IT CHOOSES THE SHAPE OF THE PICTURE RATHER THAN ASKING FOR IT. The picture is black, so its shape decides nothing anybody can see - it only decides how the place the film is going will frame it, and the ordinary wide shape is what those places expect. Somebody who does want a different shape asks the half below this one, which takes the numbers.";
  let extension = file_extension_mp4();
  let path_output = path_extension_replace(path_audio, extension);
  let written = await audio_video_black_write(
    path_audio,
    path_output,
    1920,
    1080,
  );
  return written;
}
