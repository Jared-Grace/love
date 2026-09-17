import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_notes_review } from "./app_shared_notes_review.mjs";
export function app_reply_rules_file_notes(card, name) {
  arguments_assert(arguments, 2);
  ("The notes left against one file of a proposed change to the reply rules, and a box to leave another, drawn at the foot of that file's card.");
  ("★ IT IS THE SAME PANEL THE LYRIC VIDEO PICTURES ARE REVIEWED WITH, so a note here is filed, shown and answered exactly the way one is there. A reviewer who says no to a file is left with nothing to press but silence unless there is somewhere to say why, and the why is what the next draft of the change is written from.");
  ("THE FILE'S NAME IS THE KEY, because a proposal's files are addressed by name everywhere else on this bench - the approvals are kept under it too - and a note that outlived one proposal should still be standing when the next draft of the same file comes round.");
  ("THE STORE IS THIS FUNCTION'S OWN NAME, so the notes sit in its folder and are read back by asking for it: ",
    fn_name("notes_read"),
    " with this name and the file's name.");
  ("THERE IS ONE PART, THE CODE. Parts earn a press by being a different place to look for the fault, and a file of code has one; a second press would be a choice every note has to make for nothing.");
  let store = fn_name("app_reply_rules_file_notes");
  let names = ["code"];
  let holder = app_shared_notes_review(card, store, name, name, names);
  return holder;
}
