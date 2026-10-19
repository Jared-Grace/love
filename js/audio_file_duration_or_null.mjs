import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { audio_file_duration } from "./audio_file_duration.mjs";
export async function audio_file_duration_or_null(path) {
  arguments_assert(arguments, 1);
  ("$plain path");
  ("How many seconds of sound a file holds, or nothing at all when the file cannot be read as sound yet.");
  ("★ A FILE BEING WRITTEN RIGHT NOW IS UNREADABLE RATHER THAN BROKEN, AND THAT IS THE WHOLE REASON THIS EXISTS. An mp4 keeps the table saying where everything is at the end of the file, so a render in progress is a perfectly healthy file with no table, and asking its length fails. Measured on 2026-10-19 a walk over five hundred and sixty-five songs died on one sixty-four megabyte video a peer was still rendering, and took every other answer with it. A length that cannot be read is an ordinary state of a shared folder, so it is reported as nothing rather than thrown.");
  ("★ NOTHING MEANS UNKNOWN AND MUST NEVER BE READ AS A LENGTH. A caller comparing lengths has to treat nothing as not matching, because an unknown length agrees with every other unknown one - two files mid-render would otherwise prove themselves a pair. Compared for equality by mistake that is exactly what would happen, which is why this says nothing instead of zero.");
  async function lambda() {
    let r = await audio_file_duration(path);
    return r;
  }
  let answer = await catch_null_async(lambda);
  return answer;
}
