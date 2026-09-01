import { arguments_assert } from "./arguments_assert.mjs";
import { function_parameters_declaration } from "./function_parameters_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_record_parameter_names } from "./js_record_parameter_names.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { js_function_declaration_params_names_plain } from "./js_function_declaration_params_names_plain.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { function_parameters_record_callers } from "./function_parameters_record_callers.mjs";
import { js_call_named_arguments_record_curried_right } from "./js_call_named_arguments_record_curried_right.mjs";
import { function_parameters_record_apply } from "./function_parameters_record_apply.mjs";
import { js_function_declaration_params_record } from "./js_function_declaration_params_record.mjs";
export async function function_parameters_record(f_name) {
  arguments_assert(arguments, 1);
  ("Give a function one record to take in place of a long row of separate parameters, and rewrite every call in the repo to hand one over, in a single move.");
  ("A ROW OF ARGUMENTS IS READ BY POSITION AND A RECORD IS READ BY NAME, and past a certain length position is a thing a reader has to count on their fingers. Fifteen names in a row also means every call site is fifteen words with nothing on the line saying which is which, so a pair swapped by hand goes on parsing, goes on running, and is found by whoever the wrong thing reaches. Under a record the caller writes the name beside the thing and a swap cannot be written at all.");
  ("THE NAMES INSIDE THE FUNCTION DO NOT CHANGE, which is what makes this behaviour-preserving by reasoning rather than by trying it. The body reads the same words afterwards as before, because the record is unpacked in the parameter list under exactly the names that used to stand there.");
  ("RUNNING IT A SECOND TIME IS SAFE AND IS THE WAY BACK FROM A HALF-DONE ONE. A function already taking its record is said to be done and nothing is written; a call already handing one over is not counted as disagreeing. That is not politeness - the folder is shared and there is no undo in it, so the only recovery a move like this can offer is being run again.");
  ("Four refusals stand in front of the write and each is something the repo answers rather than something guessed. There has to be more than one parameter, or the move buys nothing and only adds a wrapper. Every parameter has to be a plain name, because an unpacked one has no single word to file its thing under. The last two are about calls out of reach and are asked one name along, in the same words the move beside this asks them in.");
  let read = await function_parameters_declaration(f_name);
  let declaration = property_get(read, "declaration");
  let already = js_record_parameter_names(declaration);
  let done = null_is(already);
  if (not(done)) {
    let r2 = {
      f_name,
      names: already,
      files: [],
      already: true,
    };
    return r2;
  }
  let size = property_get(read, "size");
  let several = greater_than(size, 1);
  true_is_assert_json(several, {
    f_name,
    size,
    hint: "this function takes one thing or none, so gathering its parameters into a record would add a wrapper and take nothing away",
  });
  let names = js_function_declaration_params_names_plain(declaration);
  let plain_size = list_size(names);
  let all_plain = equal(size, plain_size);
  true_is_assert_json(all_plain, {
    f_name,
    size,
    names,
    hint: "one of these parameters is not a plain name, so there is no single word to file what the caller hands over under - give it a name of its own first",
  });
  let f_names = await function_parameters_record_callers(f_name, names);
  let arguments_record = js_call_named_arguments_record_curried_right(
    f_name,
    names,
  );
  await function_parameters_record_apply(
    f_name,
    f_names,
    arguments_record,
    js_function_declaration_params_record,
  );
  let r = {
    f_name,
    names,
    files: f_names,
    already: false,
  };
  return r;
}
