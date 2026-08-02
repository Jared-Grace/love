import { function_wrap } from "./function_wrap.mjs";
export async function function_wrap_output_name(f_name_old, f_name_new) {
  ("Wraps a fn and hands back the new name beside the output.");
  ("Wrapping is the one of these three where the caller still needs the name");
  ("afterwards - the variant named for opening shows that file to the human - and a");
  ("plain wrap answers only its output. Carrying the name here is what lets the");
  ("derive-a-name half be shared with copy and rename.");
  let output = await function_wrap(f_name_old, f_name_new);
  let r = {
    output,
    name: f_name_new,
  };
  return r;
}
