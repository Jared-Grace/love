import { json_extension } from "./json_extension.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_chapter_sense_groups_given_path() {
  "Where the written-down sense divisions of bible chapters are kept.";
  "It sits among the given data rather than among the found data because nothing works it out. Somebody read the chapter and said where its parts begin and end, and no amount of looking at the letters would produce the same answer.";
  arguments_assert(arguments, 0);
  let f_name = fn_name("bible_chapter_sense_groups_given");
  let path = text_combine_multiple(["data/given/", f_name, json_extension()]);
  return path;
}
