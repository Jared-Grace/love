import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { ai_git_command_args } from "./ai_git_command_args.mjs";
import { ai_git } from "./ai_git.mjs";
import { list_add } from "./list_add.mjs";
export async function ai_finish_commit(f_name, args_comma) {
  "Files what a named command wrote under that command's own name, and then sweeps whatever is left under the bare word. Give no name and it is only the sweep.";
  "Both halves are here because a batch of work is almost never one or the other. A command writes its files and notes them; a hand edit beside it notes nothing of itself; and the canonicalizing pass that runs before either writes more files still. Committing only the noted ones would leave the hand edit sitting there for a neighbour's sweep to pick up under a name that says nothing, and sweeping everything would file the hand edit under a command that never touched it.";
  "So the named commit goes first, while the note still holds exactly what the command wrote, and the sweep goes second, over what that left behind. Read back, the log then says two true things instead of one false one.";
  "It is honest about what the named commit over-claims. The canonicalizing pass adds its own repairs to the same note, with no divider in it, so those land under the command's name too. That is not introduced here - it is what already happens whenever the pass is run before a targeted commit - and it is small, because the pass preserves behaviour and the files it touches are the ones being worked on anyway.";
  arguments_assert(arguments, 2);
  let committed = [];
  let named = text_empty_not_is(f_name);
  if (named) {
    let claimed = await ai_git_command_args(f_name, args_comma);
    list_add(committed, claimed);
  }
  let swept = await ai_git();
  list_add(committed, swept);
  return committed;
}
