import { list_size } from "./list_size.mjs";
import { error_json } from "./error_json.mjs";
import { greater_than } from "./greater_than.mjs";
export function function_args_count_assert(fn, args) {
  "Refuse a call carrying more arguments than the function declares. Every function here takes an exact number of arguments, and that is what makes an extra or a missing one easy to see, and what lets a parameter be added, moved or removed mechanically. Spreading a longer list into a shorter signature loses none of that loudly - the language simply ignores the tail, so the call reports success having done less than it was asked.";
  "This is where a command line goes wrong. A list has to arrive as one comma-joined word to reach one parameter; typing the items as separate words instead sends them to separate parameters, and every one past the last declared is dropped in silence. A commit message naming the command that made a change is then a claim missing its final arguments.";
  "Only extra arguments are refused. A missing one arrives as nothing at all, and the argument asserts already name it.";
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
}
