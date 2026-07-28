import { repo_path_combine } from "./repo_path_combine.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { instructions_paths } from "./instructions_paths.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function instructions_notes_unreached() {
  "Every note sitting in the notes folder that nothing in the instructions links to.";
  "A note nothing links to is worse than a note nobody wrote. The checks that read the instructions gather their text by following those links, so an unlinked note is invisible to all of them - a stale function name in it would crash every Claude that followed it, and the gate written to catch exactly that would report no defects, because it never saw the file.";
  "That is the hole the move opened. While the instructions were one file, being read and being present were the same thing; once they span files, a note joins the instructions by being pointed at, and nothing but this asks whether the pointing happened.";
  "The folder's own front page is not instructions and is skipped by name. One exception is left written here rather than in a list of its own - a second one is the moment to make the list, and until then a list would be a name for nothing.";
  let folder = repo_path_combine("love", "notes");
  let files = await folder_read_files(folder);
  let reached = await instructions_paths();
  let unreached = [];
  for (let name of files) {
    let note = text_ends_with(name, ".md");
    if (not(note)) {
      continue;
    }
    let front = equal(name, "README.md");
    if (front) {
      continue;
    }
    let f_path = repo_path_combine("love", "notes/" + name);
    let linked = list_includes(reached, f_path);
    if (not(linked)) {
      list_add(unreached, name);
    }
  }
  return unreached;
}
