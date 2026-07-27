import { text_includes } from "./text_includes.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { or } from "./or.mjs";
export function commits_scratch_path_is(path) {
  "Whether a changed file was somebody's scratch rather than the repo's work.";
  "A probe is written to watch a transform run and deleted in the same sitting,";
  "so it arrives in the history as a file added and later removed. Counted as";
  "editing, it says a whole shape of change keeps happening that no transform";
  "covers — when what happened is that a throwaway was thrown away.";
  "Told apart by the two words this repo already names them with, and reported";
  "as its own number rather than quietly dropped, because a reader deciding what";
  "to build should see how much was set aside and on what grounds.";
  let probe = text_includes(path, "probe");
  let temporary = text_ends_with(path, "_tmp.mjs");
  let scratch = or(probe, temporary);
  return scratch;
}
