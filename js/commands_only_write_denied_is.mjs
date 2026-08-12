import { arguments_assert } from "./arguments_assert.mjs";
import { commands_only_level_off } from "./commands_only_level_off.mjs";
import { commands_only_drafting_folder } from "./commands_only_drafting_folder.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { and } from "./and.mjs";
import { equal } from "./equal.mjs";
export function commands_only_write_denied_is(level, path) {
  "$plain path";
  "Whether the commands-only switch, set to this setting, refuses an editing tool pointed at this place in the repo. The place is spelled the way the repo spells it - from the repo folder down, so js/thing.mjs rather than the whole path from the root of the disk.";
  "This is the whole of the decision, kept here rather than inside the hook that acts on it, because a decision written inside a hook cannot be asked anything. A hook is handed one message at a time by another program, so the only way to find out what it would say about a case is to arrange for that case to actually happen - which for a refusal means arranging to be refused. Here it is a question with an answer, and the corpus beside it asks every case at once.";
  "A place outside the repo is not this switch's business, and it never arrives here: the hook hands over a path from the repo folder down, and has already stood aside for anything it could not spell that way. The memory notes and the session scratch are both outside, so both stay reachable without either being named as an exception.";
  arguments_assert(arguments, 2);
  let off = commands_only_level_off();
  if (equal(level, off)) {
    return false;
  }
  let prefix = commands_only_drafting_folder();
  let drafting = text_starts_with(path, prefix);
  if (drafting) {
    return false;
  }
  if (equal(level, "files")) {
    return true;
  }
  if (equal(level, "js")) {
    let folder = text_starts_with(path, "js/");
    let extension = text_ends_with(path, ".mjs");
    let both = and(folder, extension);
    return both;
  }
  return false;
}
