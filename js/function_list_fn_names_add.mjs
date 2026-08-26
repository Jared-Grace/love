import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_list_fn_name_add } from "./function_list_fn_name_add.mjs";
import { each_async } from "./each_async.mjs";
export async function function_list_fn_names_add(f_name, members_comma) {
  arguments_assert(arguments, 2);
  ("Adds several names at once to a function that answers with a list of names, each one spelled there as a name rather than as the function itself.");
  ("The one beside this takes a single name, and a register is nearly always short of more than one - so it was being run once per name, which is the shape this repo treats as a command that has not been written yet. Run that way it leaves nothing behind: the set that was decided on is spread across several invocations and no line records that it was one decision.");
  ("The set is asked for rather than worked out, and that is the point of it. The registers this serves say in their own prose why they are named rather than derived - a derived list would name most of the repo - so which names belong is a judgement, and a command that takes the judgement is the honest shape for it.");
  ("Each name is committed as it lands, under the singular command and its own two arguments, so the log reads as one real replayable command per name. Anything already noted is swept first under the bare word, because the note has no divider in it and would otherwise be filed under the first name here.");
  await function_exists_assert(f_name);
  await ai_git_noted();
  let members = text_split_comma(members_comma);
  async function lambda(member) {
    await function_call_commit(function_list_fn_name_add, [f_name, member]);
  }
  await each_async(members, lambda);
  return members;
}
