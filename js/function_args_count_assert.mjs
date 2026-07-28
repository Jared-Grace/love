import { list_slice_end } from "./list_slice_end.mjs";
import { subtract } from "./subtract.mjs";
import { function_params_declared } from "./function_params_declared.mjs";
import { list_size } from "./list_size.mjs";
import { error_json } from "./error_json.mjs";
import { greater_than } from "./greater_than.mjs";
export function function_args_count_assert(fn, args) {
  "Refuse a call carrying more arguments than the function declares. Every function here takes an exact number of arguments, and that is what makes an extra or a missing one easy to see, and what lets a parameter be added, moved or removed mechanically. Spreading a longer list into a shorter signature loses none of that loudly - the language simply ignores the tail, so the call reports success having done less than it was asked.";
  "This is where a command line goes wrong. A list has to arrive as one comma-joined word to reach one parameter; typing the items as separate words instead sends them to separate parameters, and every one past the last declared is dropped in silence. A commit message naming the command that made a change is then a claim missing its final arguments.";
  "A missing argument is refused here too, and used not to be. The reason given was that the argument asserts would name it - but only 238 of the 4868 functions that take arguments carry one, so for the rest a missing argument arrived as nothing at all and surfaced files away as whatever nothing first broke. Asking for a report by one of its three names answered RangeError: Invalid time value, five frames deep, naming neither the argument nor the function that wanted it.";
  "Nothing legitimate is refused by this. Of 57002 calls recorded through this seam, 256 were short of what they declared, across 13 functions, and every one of them was a mistake: a report asked for by one name in place of three, a commit command handed the function name without the arguments that make the message replayable, a transform called bare to see what it would say. No function here declares a default, so a parameter left out is never a parameter left to itself.";
  let declared = fn.length;
  let given = list_size(args);
  let extra = greater_than(given, declared);
  if (extra) {
    error_json({
      hint: "this function takes an exact number of arguments and was given more; if one parameter is meant to hold a list, join the items with commas into a single word",
      f_name: fn.name,
      declared,
      given,
      args,
    });
  }
  let short = greater_than(declared, given);
  if (short) {
    let params = function_params_declared(fn);
    let short_by = subtract(declared, given);
    let missing = list_slice_end(params, short_by);
    error_json({
      hint: "this function was not given everything it asks for, so the missing ones would have arrived as nothing at all — would you like to pass the arguments named below?",
      f_name: fn.name,
      declared,
      given,
      wants: params,
      missing,
      args,
    });
  }
}
