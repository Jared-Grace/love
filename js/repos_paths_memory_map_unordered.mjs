import { folder_memory_backup } from "./folder_memory_backup.mjs";
import { list_add } from "./list_add.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
export async function repos_paths_memory_map_unordered(lambda$repo_folder) {
  "Every folder this machine's own work is kept in - the source repositories that sit beside each other, and the notes repository kept somewhere else - each one handed to the same question.";
  "The notes are a repository exactly like the others and are committed into by the same sweeps, but they do not sit beside the others, so the list of repositories alone leaves them out. A question asked only of that list can never answer about the notes, while its answer reads as though it had - a silence that looks like a clean result. Two places already remembered to ask twice; the third is what makes it worth a name instead of an exception recalled at each site.";
  let mapped = await repos_paths_map_unordered(lambda$repo_folder);
  let backup = folder_memory_backup();
  let noted = await lambda$repo_folder(backup);
  list_add(mapped, noted);
  return mapped;
}
