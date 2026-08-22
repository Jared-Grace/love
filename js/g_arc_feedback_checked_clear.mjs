import { g_arc_feedback_kept_write } from "./g_arc_feedback_kept_write.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { not } from "./not.mjs";
export async function g_arc_feedback_checked_clear(chapter_code) {
  "Drop every note a check filed anywhere in one chapter, leaving every note a person filed exactly where it is, and say how many went.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT CLEARS THE WHOLE CHAPTER AND NOT ONE PERSON, which is the opposite of the person-wise clear beside it, and the reason is what it is dropping. Clearing a person is dangerous because it destroys a reading nobody can reproduce, so it is kept as narrow as revising is. Clearing a check's notes destroys nothing - the check is one command away - so narrowing it would only mean running it once per person to reach the same place.";
  "IT IS WHAT LETS A CHECK BE CHANGED. A check whose findings could not be withdrawn would have to be right the first time, and the first run of the word check filed against thirty-seven of fifty-three lines because it faulted the words the game is FOR - god, sinned, cross. Without this the store would have kept those until somebody deleted the file by hand, taking the person's own notes with them.";
  function note_person(note) {
    let by_check = property_or_null(note, "checked");
    let by_person = not(by_check);
    return by_person;
  }
  let r = await g_arc_feedback_kept_write(chapter_code, note_person);
  return r;
}
