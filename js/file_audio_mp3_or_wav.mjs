import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_audio_mp3_or_wav(path_without_extension) {
  ("$plain ", fn_name("path_without_extension"));
  ("The recording that belongs to a chunk, preferring the mp3 and falling back to the wav that an older run left.");
  ("★ THE FALLBACK IS NOT POLITENESS, IT IS THE ONLY THING KEEPING 4604 RECORDINGS REACHABLE. The speaking script wrote wav until 2026-08-27 and now writes mp3, and 4604 wav files with no mp3 beside them were already on this disk when it changed. A reader that spelled one extension would have found none of them, and the way that failure shows up is a video step doing nothing rather than an error, so nothing would have gone red.");
  ("★ THE MP3 IS PREFERRED SO A REPLACEMENT WINS OVER WHAT IT REPLACED. Where both sit beside each other the mp3 is the newer reading, and it is also the one worth keeping, so re-speaking a chapter takes effect without anybody deleting the old file first.");
  arguments_assert(arguments, 1);
  let path_mp = text_combine(path_without_extension, ".mp3");
  let e = await file_exists(path_mp);
  if (e) {
    return path_mp;
  }
  let path_wav = text_combine(path_without_extension, ".wav");
  return path_wav;
}
