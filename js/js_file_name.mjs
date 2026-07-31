export function js_file_name(f_name) {
  arguments_assert(arguments, 1);
  "the file a function of this name lives in - its own name with the module suffix on the end";
  "one function to a file is the repo's whole layout, so this step stood written out nineteen times, and the suffix with it.";
  let name = text_combine_multiple([f_name, js_file_suffix()]);
  return name;
}
