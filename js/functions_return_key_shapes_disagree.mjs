import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { function_return_key_shapes_disagree } from "./function_return_key_shapes_disagree.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_return_key_shapes_disagree() {
  arguments_assert(arguments, 0);
  ("Every love function whose ways out answer with different sets of keys, each one listed beside the sets it offers, and how many functions were read to find them.");
  ("A caller of one of these reads a key that is there on some paths and missing on others, and is told nothing either way. The commonest way in is a rename that landed on an entry written in the short form and so rewrote the key along with the local; the second commonest is a path added later that was written from memory rather than from the return standing beside it.");
  ("A file that will not parse is passed over rather than reported. Something that is not valid javascript is already every other gate's business, and a shape read off a file that did not parse would be a guess.");
  ("HOW MANY WERE READ COMES BACK BESIDE WHO OFFENDED, AND IT IS COUNTED HERE RATHER THAN WORKED OUT AGAIN BY WHOEVER ASKS. Finding nobody is also what this answers when the list of names it walks is built a new way or stops arriving, and the offenders cannot tell those apart - there are none of them on every run that passes. The count can, by falling to nothing while the verdict stays green. Counting it a second time somewhere else would not: a second reading of the names is a second thing that can go on working after this one has stopped.");
  let names = await repo_love_functions_names();
  let offenders = [];
  for (let name of names) {
    async function asked() {
      let answer = await function_return_key_shapes_disagree(name);
      return answer;
    }
    let finding = await catch_null_async(asked);
    if (not(finding)) {
      continue;
    }
    list_add(offenders, finding);
  }
  let functions = list_size(names);
  let walked = {
    functions,
    offenders,
  };
  return walked;
}
