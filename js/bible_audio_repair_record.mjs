import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_repair_queue } from "./bible_audio_repair_queue.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { ebible_text_to_speech_chapters } from "./ebible_text_to_speech_chapters.mjs";
export async function bible_audio_repair_record(bible_folder) {
  "$plain bible_folder";
  "Records again every chapter of a bible whose sound was spoken before the reading could sound out a name, and hands back what the engine says it did.";
  "★ IT ASKS WHICH CHAPTERS RIGHT BEFORE IT SPEAKS THEM, WHICH IS WHAT MAKES IT SAFE TO RUN EVERY NIGHT. A chapter recorded again holds newer sound and drops out of the answer of its own accord, so running this a second time never does the same chapter twice, and running it after the work is finished does nothing at all rather than doing everything again.";
  "★ NOTHING IS REMOVED FIRST, BECAUSE THE ENGINE WRITES OVER WHAT IS THERE. It makes the chapter's folder if it is missing and writes each piece by its number, so a chapter recorded again simply replaces itself. Removing the folder first would mean a run stopped in the middle left a chapter with no sound in it at all, which is worse than the silence being repaired.";
  "★ AN EMPTY QUEUE IS ANSWERED WITHOUT WAKING THE ENGINE. The engine is a third of a gigabyte of weights read off disk, and asking it to speak nothing would pay that for nothing - so the count is looked at first and the answer says plainly that there was no work rather than pretending a run happened.";
  "★ A QUEUE THAT COULD NOT BE READ IS SAID SO PLAINLY RATHER THAN THROWN. This runs unattended in the night, where a throw is a line in a log nobody reads until a morning's work is already gone; and the asking comes back as nothing rather than complaining when the report cannot be read, so the only place that difference can still be told is here.";
  arguments_assert(arguments, 1);
  let reported = await bible_audio_repair_queue(bible_folder);
  if (not(reported)) {
    let unread = {
      queue: null,
      recorded: false,
      spoken: null,
    };
    return unread;
  }
  let queue = property_get(reported, "queue");
  let none = list_empty_is(queue);
  if (none) {
    let nothing = {
      queue: queue.length,
      recorded: false,
      spoken: null,
    };
    return nothing;
  }
  let codes = list_join_comma(queue);
  let spoken = await ebible_text_to_speech_chapters(bible_folder, codes);
  let done = {
    queue: queue.length,
    recorded: true,
    spoken,
  };
  return done;
}
