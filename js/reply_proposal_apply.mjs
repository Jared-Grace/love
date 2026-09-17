import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_waiting } from "./reply_proposals_waiting.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { reply_approved_all } from "./reply_approved_all.mjs";
import { reply_proposal_approved_is } from "./reply_proposal_approved_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { reply_proposal_drawn } from "./reply_proposal_drawn.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { function_source_formatted_overwrite } from "./function_source_formatted_overwrite.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { reply_proposal_cases_record } from "./reply_proposal_cases_record.mjs";
import { data_given_reply_applied_folder } from "./data_given_reply_applied_folder.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function reply_proposal_apply(title) {
  arguments_assert(arguments, 1);
  ("Puts one change to the reply rules into the code: the function it alters is rewritten as the approved lines say, and the change is written down as applied.");
  ("★ IT REFUSES UNLESS EVERY FILE IS APPROVED AS IT STANDS, AND ASKS THAT AGAIN ITSELF. Whatever called this has already asked, but the answer can change between the asking and the writing, and a change put into the code without a person's yes on every line is the one thing this whole bench exists to prevent.");
  ("★ WHAT IS WRITTEN IS THE APPROVED LINES WITH THE REMOVED ONES LEFT OUT, NOT THE CHANGE WORKED OUT AGAIN. The kept lines and the added lines, in the order they were shown, are exactly the file a person said yes to, so nothing is written that was not on their screen.");
  ("Only the function the change alters is written. The new files a change brings are already in the code, which is how they could be shown whole; files a change says would go are named only in its questions and nobody approved their going, so they are left for a person to take out.");
  ("The file is put through the canonicalizing pass after it is written, because the added lines were written by hand and name functions whose imports they do not carry.");
  let waiting = await reply_proposals_waiting();
  let proposal = list_find_property(waiting, "title", title);
  let approvals = await reply_approved_all();
  let approved = await reply_proposal_approved_is(proposal, approvals);
  assert_json(approved, {
    title,
    hint: "every file this change touches must be approved, in the wording it has now, before it goes into the code",
  });
  let drawn = await reply_proposal_drawn(proposal);
  let lines = property_get(drawn, "lines");
  function kept_is(line) {
    let r = text_starts_with_not(line, "-");
    return r;
  }
  let kept = list_filter(lines, kept_is);
  function unsigned(line) {
    let r = text_slice_from(line, 1);
    return r;
  }
  let after_lines = list_map(kept, unsigned);
  let after = list_join_newline(after_lines);
  let f_name = property_get(proposal, "fn");
  await function_source_formatted_overwrite(f_name, after);
  let checked = await function_auto_checked(f_name);
  let ok = property_get(checked, "ok");
  assert_json(ok, {
    f_name,
    checked,
    hint: "the approved lines were written but the canonicalizing pass refused the file - read it before anything else runs it",
  });
  await reply_proposal_cases_record(title);
  let folder = data_given_reply_applied_folder();
  await folder_exists_ensure(folder);
  let stored = {
    title: title,
    f_name: f_name,
  };
  let named = text_combine_multiple([f_name, ".json"]);
  let p = path_join([folder, named]);
  await file_overwrite_json(p, stored);
  return stored;
}
