import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_size } from "./text_size.mjs";
import { add_1 } from "./add_1.mjs";
export function git_object_name_path(line) {
  "One line naming an object and the path it sits at, split into the two.";
  "Git prints this pair the same way from more than one place - the objects a history reaches, and the entries one commit tracks - so the reading belongs in one place rather than beside each of them.";
  "Split at the FIRST space and never at every space, because a path is allowed to hold spaces and an object name is not. Splitting at every space quietly truncates exactly the paths a reader is least likely to have thought about, and the answer still looks like a path.";
  arguments_assert(arguments, 1);
  let name = text_split_first(line, " ");
  let path = text_skip(line, add_1(text_size(name)));
  let r = {
    name,
    path,
  };
  return r;
}
