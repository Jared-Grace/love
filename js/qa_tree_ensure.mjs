import { qa_trees_reap } from "./qa_trees_reap.mjs";
import { qa_tree_repos_folder } from "./qa_tree_repos_folder.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { qa_snapshot_siblings_link } from "./qa_snapshot_siblings_link.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { qa_tree_folder } from "./qa_tree_folder.mjs";
import { qa_tree_names_skipped } from "./qa_tree_names_skipped.mjs";
import { folder_copy_fresh } from "./folder_copy_fresh.mjs";
import { path_join } from "./path_join.mjs";
import { qa_snapshot_link } from "./qa_snapshot_link.mjs";
export async function qa_tree_ensure() {
  "Freezes the working folder exactly as it stands, in memory, and answers where the frozen copy is";
  "Work nobody has committed is included, because that is what the gate is asked about before committing - which is the one thing a copy taken from a commit cannot show";
  "Being frozen is the whole point. Several of us edit this one folder, so questions put to the living folder are put to a folder that changes while they are being answered: a complaint may be nothing but somebody saving a file, and a clean answer may be about a file that was broken a moment after it was read. Neither belongs to any one state of the code, so neither can be checked by asking again";
  "The copying is not itself instant, so a file caught half-written is still possible - but the opening shrinks from the length of the whole asking to the length of one copy, and unlike before, asking again settles it";
  let repos = qa_tree_repos_folder();
  let report = await qa_trees_reap();
  await folder_exists_ensure(repos);
  await qa_snapshot_siblings_link(repos);
  let here = folder_current_absolute();
  let folder = qa_tree_folder();
  let skipped = qa_tree_names_skipped();
  await folder_copy_fresh(here, folder, skipped);
  let live = path_join([here, "node_modules"]);
  let link = path_join([folder, "node_modules"]);
  await qa_snapshot_link(live, link);
  return folder;
}
