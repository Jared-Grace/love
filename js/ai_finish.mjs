import { arguments_assert } from "./arguments_assert.mjs";
import { ai_finish_baseline_command_args } from "./ai_finish_baseline_command_args.mjs";
export async function ai_finish() {
  "The end of a piece of work in its ordinary shape: settle the files being edited, commit what is there as hand-made, and ask the whole repo. Nothing has to be named for it.";
  "It takes nothing, and that is the whole reason it exists beside the longer one. A command that declares no arguments cannot be steered by one, which is what lets it be approved once by name and then never interrupt anybody again - and the four steps it stands for are each approved that way already, so without this the tool would have swapped four silent steps for one that stops and asks. Asked for and refused: the longer form cannot be approved, because it declares arguments and reaches down to something that runs commands, so nothing can rule out an argument steering it.";
  "The two things it gives up are the two that are genuinely a choice. Which commit you started from is only ever used to say which files moved underneath you, and that reading stands on its own name for whoever wants it. Naming the command that made the change is for the case where one did - and by the log's own count that is one commit in three, so the shape that needs no name is the common one, not the exception.";
  "Same idea as the bare commit standing beside the one that takes a command and its arguments: the short name is the honest everyday one, and the long name is there for when there is really something to claim.";
  arguments_assert(arguments, 0);
  let r = await ai_finish_baseline_command_args("", "", "");
  return r;
}
