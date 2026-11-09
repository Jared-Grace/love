import { git_commit_full } from "./git_commit_full.mjs";
import { qa_commit_beside_heads } from "./qa_commit_beside_heads.mjs";
import { property_get } from "./property_get.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_commit_entry_beside_matching_is } from "./qa_commit_entry_beside_matching_is.mjs";
export async function qa_commit_named_remembered_is(commit) {
  "Whether the record already holds a judging of the commit you name, worked out beside the neighbours as they stand now - the same question the lookup asks before it would judge, asked without judging.";
  "It asks with the very same named parts the lookup uses, the full commit name and the neighbour comparison, so a yes here is exactly a commit the lookup would hand straight back without joining the line.";
  let named = await git_commit_full(commit);
  let beside = await qa_commit_beside_heads();
  let heads = property_get(beside, "heads");
  let known = await qa_commit_named();
  let remembered = property_get_or_null(known, named);
  let r = qa_commit_entry_beside_matching_is(remembered, heads);
  return r;
}
