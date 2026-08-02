import { function_read } from "./function_read.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_map } from "./list_map.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { property_set } from "./property_set.mjs";
export async function function_read_multiple(names_comma) {
  "The source of each of several functions, asked in one command - one answer per name, under the name it belongs to.";
  "Reading is what somebody does before deciding, and a decision rarely rests on one function: a caller and the two things it calls, a name and its generic underneath. The single form was run fifty times in a row for a hundred and fifty-five commands nobody wanted to spend, twenty-one deep at its worst, and the log reads that as the shape of a missing command rather than as work.";
  "Answered under the name rather than in a bare list, because a run of sources read straight through is the one shape where losing which is which costs the most - every one of them opens with its imports and they all look alike.";
  "A name nothing in the repo answers to is reported as nothing rather than thrown on, and that is the difference between a sweep and a loop. The single form refuses an unknown name, which is the useful answer when it is the only name asked about; over a list it would throw away every source already read because one name was misspelt.";
  let names_split = text_split_comma_dot(names_comma);
  let names = list_map(names_split, text_trim);
  let found = {};
  for (let f_name of names) {
    async function read_one() {
      let contents_one = await function_read(f_name);
      return contents_one;
    }
    let contents = await catch_null_async(read_one);
    property_set(found, f_name, contents);
  }
  return found;
}
