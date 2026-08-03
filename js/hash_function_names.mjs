import { hash_code_word } from "./hash_code_word.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
export async function hash_function_names() {
  "The names of every function in this repo whose code mentions a page address at all. Read-only.";
  "This is where the two readings of page addresses both start, and it is one idea rather than a shared opening: which files are worth opening at all. Written out twice it was two answers that had to agree by hand about which word to look for.";
  "A file that never says the word cannot hold either shape the readings know, because both are reached through a function whose own name carries it - so this narrows the walk from the whole repo to a handful of trees without narrowing the answer.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let word = hash_code_word();
  let names = await repo_functions_names_code_includes(repo_name, word);
  return names;
}
