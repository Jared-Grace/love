import { folder_read } from "./folder_read.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_combine } from "./text_combine.mjs";
import { process_folder_or_null } from "./process_folder_or_null.mjs";
import { process_own_id } from "./process_own_id.mjs";
export async function processes_folder_within(folder) {
  "Which running processes are working inside a folder, whether in it or under it.";
  "Never the one asking. It is working somewhere too, and a caller that is about to end everything this answers would otherwise end itself first and never reach the rest.";
  "The whole of /proc is read because there is nowhere else the answer lives, and most of what comes back is not a process at all. Those cost one failed look each and are told apart by failing it, rather than by deciding beforehand which names look like numbers.";
  let entries = await folder_read("/proc");
  let mine = process_own_id();
  let found = [];
  ("What counts as under the folder is spelled with the separator on the end on purpose. Without it a folder next to the one asked about, whose name merely begins with the same letters, reads as being inside it - and the caller here ends what it is told about, so that mistake is not a wrong list, it is somebody else's work killed.");
  let under = text_combine(folder, "/");
  for (let entry of entries) {
    let own = equal(entry, mine);
    if (own) {
      continue;
    }
    let working = process_folder_or_null(entry);
    if (equal(working, null)) {
      continue;
    }
    let same = equal(working, folder);
    let beneath = text_starts_with(working, under);
    let within = or(same, beneath);
    if (within) {
      list_add(found, entry);
    }
  }
  return found;
}
