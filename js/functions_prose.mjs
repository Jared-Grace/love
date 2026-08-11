import { not } from "./not.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { function_prose_lines } from "./function_prose_lines.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each_async } from "./each_async.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function functions_prose() {
  "What every function in the repo says it is for, gathered into one place - the corpus a search by meaning needs and nothing had yet.";
  "A file that cannot be read is passed over rather than throwing. This runs over every function there is, and ten of these work in the same folder at once, so a file being written at the moment it is read is ordinary rather than exceptional - and losing the whole index to one of them would make the search useless exactly when the repo is busiest.";
  "A function that says nothing about itself is left out entirely, so an empty answer to a search means nobody wrote it down, not that the search was wrong.";
  "Which is why nothing is called silent until it has been asked twice. Reading lines is what makes this fast enough to run over the whole repo, and a paragraph holding a name spelled as a reference is one statement written across three lines, none of them a whole quoted string - so eighty-four functions that say a great deal were being recorded as saying nothing. The second reading parses, and only the files the first found nothing in ever reach it, so it costs eighty-four parses rather than eight thousand.";
  "The lines are kept apart rather than run together, because the two things a reader wants from them are different: matching wants all of it, and showing wants the first line only. Joining here would have forced the search to hand back a paragraph per hit, which is the one thing a list you are scanning must not do.";
  let paths = await functions_names_to_paths();
  let names = properties_get(paths);
  let prose = {};
  async function each_name(f_name) {
    let path = property_get(paths, f_name);
    let code = await file_read_try(path);
    if (not(code)) {
      return;
    }
    let lines = function_prose_lines(code);
    let silent = list_empty_is(lines);
    if (silent) {
      lines = function_prose_lines_sequence(code);
      silent = list_empty_is(lines);
    }
    if (silent) {
      return;
    }
    property_set(prose, f_name, lines);
  }
  await each_async(names, each_name);
  return prose;
}
