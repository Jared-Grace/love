import { fn_name } from "./fn_name.mjs";
export function permission_write_atoms() {
  "the functions everything else in this repo goes through to put bytes on disk or take a file away, named so a walk of the call graph can ask whether an argument ends up written down";
  "one narrow place rather than every name holding the word write, because the narrow place is the one that cannot be got around: a caller that writes a file without passing through here would also be invisible to the note that records what to commit, and that would be noticed for a different reason first.";
  let overwrite = fn_name("file_overwrite_uncached");
  let delete_f = fn_name("file_delete");
  let atoms = [overwrite, delete_f];
  return atoms;
}
