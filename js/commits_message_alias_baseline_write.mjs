import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_alias_named } from "./commits_message_alias_named.mjs";
import { property_get } from "./property_get.mjs";
import { commits_message_alias_baseline_path } from "./commits_message_alias_baseline_path.mjs";
import { commits_message_alias_offenders_after_door } from "./commits_message_alias_offenders_after_door.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function commits_message_alias_baseline_write() {
  "Rewrite the record of the commits messaged with an alias key, from what the history carries right now.";
  "A COMMIT MADE UNDER THE DOOR IS RECORDED AND ONE MADE OVER IT IS REFUSED, and that split is the whole of this. Growth used to be refused whichever it was, on the reasoning that a new name could only mean the door had come off. On 2026-08-28 that was measured and was false: the record held five and the history carried twenty one, and every one of the sixteen new ones was made by the human from their own seam, where shorthand is what the seam is for. The door stood on one seam only, so growth ordinarily meant somebody had typed a short word at the keyboard they are allowed to type short words at - and refusing it left the gate red with nobody able to answer it, because the only remedy on offer was closed against the only offenders it was for.";
  ("THAT DEADLOCK IS OVER BECAUSE THE DOOR MOVED, not because the rule was relaxed. Every commit this repo makes is now worded in one place and a short name is spelled out there, so the seam that was producing these has stopped. The commit that did it is named in ",
    fn_name("commits_message_alias_door_commit"),
    ", and an offender is sorted against it rather than let through: under it the message is in the history and cannot be edited, so recording it is the only thing left to do; over it the message was worded by a door that was already shut, so it says the door was gone round and it is refused here as loudly as ever.");
  ("The decision that this needed was the human's and was theirs to make - whether their own commit should carry the full name too - and it was made by putting the spelling out in front of both seams. Nothing here quietly arranged for it.");
  ("The record is not a let-off waiting to be cleared. A message belongs to a commit already in the history, and the only way to change one is to write every commit after it again under a new name.");
  ("WHAT IS WRITTEN DOWN AND WHAT IS SORTED AGAINST THE DOOR ARE NOW TWO DIFFERENT READINGS OF THE SAME OFFENDER, and both come from the one walk. The record is written as the second the commit was made at, because a rewrite of this history renames every commit and on 2026-09-04 one did, killing all fifty one names at once. The sorting is asked by name, because a second cannot say which side of the door a commit fell on. So the rows go to the door and the names go to the record.");
  arguments_assert(arguments, 0);
  let told = await commits_message_alias_named();
  let known = property_get(told, "offenders");
  let rows = property_get(told, "rows");
  let path = commits_message_alias_baseline_path();
  let after = await commits_message_alias_offenders_after_door(rows);
  let f_name = fn_name("git_call_message");
  let f_name2 = fn_name("commits_message_alias_door_commit");
  let hint = text_combine_multiple([
    "a commit made after the door was shut is messaged with an alias key - the spelling out in ",
    f_name,
    " stands in front of every commit this repo makes, so a name here says a commit was worded somewhere that does not pass through it. Find that way in and shut it. Do not move the place named in ",
    f_name2,
    " forward, which hides the commit instead of accounting for it",
  ]);
  list_empty_is_assert_json(after, {
    hint,
    after,
  });
  let r = await baseline_known_write(known, path);
  return r;
}
