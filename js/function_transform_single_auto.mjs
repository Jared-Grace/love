import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform_single } from "./function_transform_single.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_transform_single_auto(
  f_name_transformer_args_comma,
  f_name,
) {
  arguments_assert(arguments, 2);
  ("Runs one named change over one named function and then canonicalizes the file, which is the pair that is always wanted together.");
  ("A change that writes a call to something the file does not yet bring in leaves the file reading a name nothing answers to. The canonicalizing pass is what brings it in, so until that has run the change is only most of the way done, and a commit taken in between records a file that will not load.");
  ("The other pairing next door goes through a chooser and a changer; this one is for a change that walks the whole file and needs nothing pointed out to it.");
  await function_transform_single(f_name_transformer_args_comma, f_name);
  await function_auto(f_name);
}
