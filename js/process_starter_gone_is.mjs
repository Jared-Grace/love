import { process_first_id } from "./process_first_id.mjs";
import { process_parent_id_or_null } from "./process_parent_id_or_null.mjs";
import { process_name_or_null } from "./process_name_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export function process_starter_gone_is(pid) {
  "Whether whoever started this process has gone, leaving it hanging from the machine itself.";
  "A process is never left with nothing above it. When the one that started it ends, the machine takes it over, so what it hangs from stops being a session somebody is sitting in and becomes the machine's own keeper. That swap is the only mark a left-behind process carries, because nothing else about it changes.";
  "The keeper is recognised by being the same program as the very first process, rather than by a name written here, because a machine may take its processes over at the top or hand them to a keeper of its own for each person signed in - and those two are the same program under both arrangements, whatever that program is called on the machine in front of you.";
  let parent = process_parent_id_or_null(pid);
  if (null_is(parent)) {
    ("The process ended while being asked about, so there is nobody left watching it either.");
    return true;
  }
  let parent_name = process_name_or_null(parent);
  if (null_is(parent_name)) {
    return true;
  }
  ("The very first process is asked about by name and not singled out beforehand,");
  ("because a process handed straight to it answers this comparison on its own.");
  let first = process_first_id();
  let keeper_name = process_name_or_null(first);
  let gone = equal(parent_name, keeper_name);
  return gone;
}
