import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function bible_audio_speech_not_started(spoken) {
  "$plain spoken";
  "The folders the engine never began, read off what it said about the run, and an empty list when it said nothing that could be read.";
  "★ A REPORT THAT COULD NOT BE READ MEANS NOTHING WAS REFUSED, NOT THAT EVERYTHING WAS. This is asked in order to decide which chapters to leave alone, so guessing wrong in one direction skips chapters that were recorded and guessing wrong in the other writes a note beside a chapter that was not. Treating silence as nothing refused keeps the behaviour the same as before there was a report at all, which is the only answer that cannot make things worse than they were.";
  "★ FOLDERS ARE WHAT COMES BACK, BECAUSE A FOLDER IS WHAT THE ENGINE WAS GIVEN. It is never told a chapter code; it is told where to write. Matching on the same thing it was handed leaves no room for the two names to be joined up differently at either end.";
  arguments_assert(arguments, 1);
  if (not(spoken)) {
    let unread = [];
    return unread;
  }
  let folders = property_get_or_null(spoken, "not_started");
  if (not(folders)) {
    let none = [];
    return none;
  }
  return folders;
}
