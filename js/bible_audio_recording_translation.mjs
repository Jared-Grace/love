import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_downloaded } from "./ebible_versions_downloaded.mjs";
import { text_split } from "./text_split.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_take } from "./list_take.mjs";
import { list_join } from "./list_join.mjs";
import { list_includes } from "./list_includes.mjs";
import { subtract } from "./subtract.mjs";
export async function bible_audio_recording_translation(bible_folder) {
  "$plain bible_folder";
  "The downloaded translation a folder of recordings was read from, found by dropping words off the end of the folder's name until what is left names a translation that is on this disk.";
  "★ A RECORDING FOLDER IS NAMED FOR THE RUN THAT MADE IT AND NOT ONLY FOR THE TRANSLATION. A folder read at full speed is called engwebu_full_speed, and nothing in that name is a translation, so every question asked of it about its words was answered by a throw. Two hundred and thirteen chapters reported as unjudgeable that way, which read as a fault in the recordings when the fault was that nobody had told the sweep how to read a name.";
  "★ IT ASKS THE DISK WHICH NAMES ARE TRANSLATIONS RATHER THAN CARRYING A LIST OF SUFFIXES. A list of endings to strip would have to be added to the day somebody records a translation slowly, and until then that run's chapters would go on reporting as unjudgeable. Reading the downloads means a run named engbsb_slow resolves on the day it is made, without anybody editing this.";
  "★ THE LONGEST NAME WINS, WHICH IS WHAT KEEPS A REAL TRANSLATION FROM BEING MISTAKEN FOR A RUN OF A SHORTER ONE. Were a translation ever downloaded whose name begins with another's, taking the shortest match would hand back the wrong words and the comparison would report every piece of it as changed. Taking the longest asks the most specific question first.";
  "★ AN UNRESOLVABLE NAME IS HANDED BACK UNCHANGED RATHER THAN TURNED INTO NOTHING. The caller then asks for that translation and is refused, which is exactly what happens today and is the honest answer for a folder of recordings whose words are not on this disk. Returning nothing would move the refusal to a place that has no idea what it is about.";
  arguments_assert(arguments, 1);
  let downloaded = await ebible_versions_downloaded();
  let words = text_split(bible_folder, "_");
  let count = words.length;
  while (greater_than(count, 0)) {
    let taken = list_take(words, count);
    let name = list_join(taken, "_");
    let known = list_includes(downloaded, name);
    if (known) {
      return name;
    }
    count = subtract(count, 1);
  }
  return bible_folder;
}
