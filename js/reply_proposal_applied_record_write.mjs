import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals } from "./reply_proposals.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { data_given_reply_applied_folder } from "./data_given_reply_applied_folder.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function reply_proposal_applied_record_write(title, reason) {
  arguments_assert(arguments, 2);
  ("Writes down that one change to the reply rules has stopped waiting, and why, without touching a line of code.");
  ("★ A CHANGE CAN STOP WAITING WITHOUT EVER BEING APPROVED, AND UNTIL NOW NOTHING COULD WRITE THAT DOWN. The only thing that wrote a record was the command that puts a change into the code, so the record and the code were made by one act and a change the code arrived at by another road stayed waiting for ever. Measured 2026-10-01: the personal-data purge rewrote three of these rules straight in the code, and all three sat in the waiting list quoting lines that had stopped existing, holding two gates red since 2026-09-18.");
  ("★ THE REASON IS WRITTEN BECAUSE THE RECORD IS THE ONLY PLACE LEFT THAT CAN HOLD IT. Read against the code those three changes went three different ways - one landed and was then built on, one was overtaken, one was decided the other way about - and a record saying only that a change is no longer waiting flattens all three into the word applied, which for the third one is simply false. The rejected shape was the bare record the applying command writes, and it was rejected here because nothing else in the bench remembers why an entry left the list.");
  ("Nothing reads the reason, and that is the point of it: the list it clears is read by a person deciding what to do next, and the one question a bare record leaves them is the one this answers.");
  ("It writes no worked cases, unlike the applying command, which writes the answers a person had on the screen when they said yes. Nobody said yes here, so there are no such answers, and writing the measured ones would record a result the rules were never asked for.");
  let proposals = await reply_proposals();
  let f_name = list_find_property_get(proposals, "title", title, "fn");
  let folder = data_given_reply_applied_folder();
  await folder_exists_ensure(folder);
  let stored = {
    title: title,
    f_name: f_name,
    reason: reason,
  };
  let named = text_combine_multiple([f_name, ".json"]);
  let p = path_join([folder, named]);
  await file_overwrite_json(p, stored);
  return stored;
}
