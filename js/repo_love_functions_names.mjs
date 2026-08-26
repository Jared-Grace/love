import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
export async function repo_love_functions_names() {
  arguments_assert(arguments, 0);
  ("The name of every function this repo holds - the one it is itself written in, rather than one of the repos standing beside it.");
  ("Twenty-eight functions opened by asking the same question and every one of them spelled the repo's name into the asking. The name is the same word in all twenty-eight, so what was written twenty-eight times was not a choice being made twenty-eight times; it was one fact, copied.");
  ("So the name is not asked for here. A reading that takes the repo's name can be pointed at any of them and the caller has to know which one it means, whereas this one is about the repo doing the asking and there is nothing left to get wrong.");
  ("The name is still fetched rather than written down, so the single place it is spelled stays the single place it is spelled.");
  let repo = repo_love_name();
  let f_names = await repo_functions_names(repo);
  return f_names;
}
