import { repo_path_combine } from "./repo_path_combine.mjs";
import { file_read } from "./file_read.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_add } from "./list_add.mjs";
export async function instructions_paths() {
  "Every file the instructions are written across - the one that loads with each session, and each note it points at.";
  "The instructions used to be one file, so everything that reads them opened that file by name. The moment a section moves into a note of its own, every one of those readers goes quiet rather than wrong: the gate that checks the vocabulary tables would find no tables and pass, which is the worst way for a check to fail because it looks exactly like success.";
  "So the readers ask for the whole surface instead of for a path, and the surface is discovered from the links rather than listed here. A note added later is covered by having been linked to, which is the only way a list like this cannot fall behind the thing it describes.";
  let root = repo_path_combine("love", "CLAUDE.md");
  let paths = [root];
  let text = await file_read(root);
  let linked = text.match(/notes\/[a-z0-9_]+\.md/g);
  if (linked) {
    let unique = list_unique(linked);
    for (let relative of unique) {
      let f_path = repo_path_combine("love", relative);
      list_add(paths, f_path);
    }
  }
  return paths;
}
