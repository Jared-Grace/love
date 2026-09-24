import { arguments_assert } from "./arguments_assert.mjs";
import { folder_home } from "./folder_home.mjs";
export async function git_history_folder_strip_texts(folder) {
  "$plain folder";
  arguments_assert(arguments, 1);
  ("The runs of characters a commit message should have taken off the front of it, in the order they have to be taken off: a repository's own folder first, and the home folder it sits in second.");
  ("★ THE ORDER IS THE WHOLE OF THIS, WHICH IS WHY IT IS ONE PLACE AND NOT TWO. The repository's folder goes first because taking that off leaves a path a reader can still use - which file a command touched, spelled the way the repository spells its own files. Whatever is left then has the home folder taken off it, which says nothing about which file and only stops the message naming a person. Listed the other way round the short one matches first, every repository path loses only its first two parts, and the messages come out saying neither thing properly.");
  ("★ IT IS SHARED BECAUSE TWO COMMANDS DO THIS AND ONE OF THEM RUNS ONCE A YEAR. The rule is a single line of ordering that is invisible in its result: both orders produce messages that look tidy, and only one of them produces messages that still say which file. A second copy of a rule like that is a copy nobody checks, in a command nobody runs often enough to notice it drifted.");
  ("THE FOLDER IS FOLLOWED RATHER THAN THE REPOSITORY THIS LIVES IN. A caller that names a folder means that folder, and reaching past it to the one these functions were written for would quietly clean the wrong machine's paths out of the right machine's history.");
  ("The home folder is asked for rather than cut off the front of the other one, because a repository does not have to sit inside it, and one that does not would otherwise have its second text worked out from a path that never held it.");
  let home = await folder_home();
  let texts = [folder + "/", home + "/"];
  return texts;
}
