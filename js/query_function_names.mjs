import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { fn_name } from "./fn_name.mjs";
export async function query_function_names() {
  "The names of every function in this repo whose code mentions the one door to the query part of a page address. Read-only.";
  "This is where the two readings of the query part both start, and it is one idea rather than a shared opening: which files are worth opening at all. Written out twice it was two answers that had to agree by hand about which word to look for.";
  "The word looked for is the door's own name, which is exact rather than close. Both readings reach the query part only through that call, so a file that never says the name cannot hold either shape - and this narrows the walk from the whole repo to a handful of trees without narrowing the answer by a single site.";
  "The part after the hash is narrowed by a plain word instead, because it has two doors and the word they share is what they are both called. Here there is one door and it has a name, so the name is the better question.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let word = fn_name("html_query_property_get");
  let names = await repo_functions_names_code_includes(repo_name, word);
  return names;
}
