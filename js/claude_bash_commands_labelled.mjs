import { arguments_assert } from "./arguments_assert.mjs";
import { claude_bash_commands } from "./claude_bash_commands.mjs";
import { bash_command_labelled_is } from "./bash_command_labelled_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_take_spaced } from "./list_take_spaced.mjs";
export async function claude_bash_commands_labelled(days, label, count) {
  "This many whole command lines that reach for one named program, spread evenly across the sessions of the last so many days";
  "A ranking says which programs are reached for and how often. It does not say what they were being asked to do, and the two are easy to confuse: the same name at the top of the list means one thing if it always stands alone and something else entirely if it always stands after a pipe, and only one of those is answered by writing that program as a command of its own. This is the reading that tells them apart, and it exists because the ranking alone was once read as though it had.";
  "The whole line comes back rather than the piece that carried the name, because the piece is the part already known. What is being looked for is what stands around it.";
  "Spread evenly and over a window, which answer different halves of the same worry. The window decides whether the shape is still happening at all; the spreading makes sure the lines shown are not all from one end of it.";
  arguments_assert(arguments, 3);
  let commands = await claude_bash_commands(days);
  function claude_bash_commands_labelled_match(command) {
    let matched = bash_command_labelled_is(command, label);
    return matched;
  }
  let matching = list_filter(commands, claude_bash_commands_labelled_match);
  let taken = list_take_spaced(matching, count);
  let found = {
    days,
    label,
    calls: matching.length,
    commands: taken,
  };
  return found;
}
