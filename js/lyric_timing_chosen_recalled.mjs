import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { storage_local_get_or_fresh } from "./storage_local_get_or_fresh.mjs";
import { lyric_timing_chosen_first } from "./lyric_timing_chosen_first.mjs";
import { null_is } from "./null_is.mjs";
import { object_merge_replace } from "./object_merge_replace.mjs";
export function lyric_timing_chosen_recalled() {
  arguments_assert(arguments, 0);
  ("The recording this device was last timing, or the first one where it has never timed any.");
  ("THE SCREEN USED TO OPEN ON A PSALM WRITTEN INTO IT, WHICH MADE A REFRESH LOOK LIKE LOST WORK. Somebody timing one psalm across a page reload came back to the screen naming a different one, and the times they had tapped and written were sitting safely in a document nobody was looking at. Nothing had gone; the screen was simply answering the question with yesterday's answer. Remembering the choice is what makes a refresh cost nothing.");
  ("It is remembered on this device rather than on the machine serving the page, because which psalm somebody is part way through is a fact about that person at that moment and not about the work. Two people timing two psalms from two phones are each right.");
  ("★ WHAT IS REMEMBERED IS LAID OVER THE FIRST ANSWER RATHER THAN USED ON ITS OWN, WHICH IS WHAT CARRIES DEVICES THAT REMEMBERED LESS. This used to hold a chapter and nothing else, and every device that has ever opened this screen still has such a value stored on it. Read as it stands, a recording with no ends and no mark is a recording those three questions are unanswered for, and the screen would address its document with the word undefined in the name. Laid over the first answer, the questions it never knew to ask come back answered empty, which is exactly what a plain whole chapter is.");
  ("A stored answer that has been damaged is thrown away rather than raised. The worst this setting can do when it is wrong is open the wrong psalm, which is one press to correct, so refusing to draw the screen over it would be the larger harm.");
  let key = text_frozen("passage");
  let remembered = storage_local_get_or_fresh(
    lyric_timing_chosen_recalled,
    key,
    lyric_timing_chosen_first,
  );
  let chosen = lyric_timing_chosen_first();
  let missing = null_is(remembered);
  if (missing) {
    return chosen;
  }
  object_merge_replace(chosen, remembered);
  return chosen;
}
