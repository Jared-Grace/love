import { arguments_assert } from "./arguments_assert.mjs";
import { function_parameters_declaration } from "./function_parameters_declaration.mjs";
import { property_get } from "./property_get.mjs";
export async function function_parameters_count(f_name) {
  arguments_assert(arguments, 1);
  ("$plain f_name");
  ("the name of one function in this repo to look up. It names a function and nothing that runs.");
  ("How many things a caller of this function has to line up in the right order.");
  ("A RECORD COUNTS AS ONE, which is the whole reason this is worth measuring rather than counting the names in the signature. A function written to take a record unpacks fifteen names and still asks its caller for one thing, and a caller writing those names out is writing each of them beside itself and so cannot put two of them the wrong way round. What hurts is the row, not the names in it.");
  ("THE READING OF THE DECLARATION MOVED ONE NAME ALONG. It is the same four lines the two moves that gather a row into a record both begin with, and where it is written says why it reads the declaration rather than the arity assert.");
  let read = await function_parameters_declaration(f_name);
  let count = property_get(read, "size");
  return count;
}
