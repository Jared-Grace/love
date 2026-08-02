import { function_locals_unread } from "./function_locals_unread.mjs";
import { list_add } from "./list_add.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
export async function functions_locals_unread() {
  "Every love function that binds a name inside itself and never reads it.";
  "A bound name nothing reads is an answer that was worked out and dropped. Sometimes that is honest - a line kept only for what it does along the way - and sometimes it is a step whose result was meant to be handed on and quietly is not, which is the sort that hides for weeks because the code still reads as though it does the thing.";
  "The repair for every one of these already existed and nothing was calling it. That is the shape this is really fixing: a transform with no sweep in front of it can only be run by somebody who already knows which function needs it, which is the one thing they cannot know without a sweep.";
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let finding = await function_locals_unread(name);
    let any = property_list_empty_not_is(finding, "unread");
    if (any) {
      list_add(offenders, finding);
    }
  }
  return offenders;
}
