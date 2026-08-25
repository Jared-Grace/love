export async function functions_names_weights(f_names) {
  "$plain f_names";
  "A list of function names paired with the bytes of the file each one lives in, heaviest first.";
  "The measure is the source file's own bytes, not the share the function takes in a built page. Those differ - a bundler renames, drops what nobody reads, and writes its own wrapping around each one - so a figure here is a guide to where to look rather than a promise of what a cut would save.";
  "Prose weighs the same as work. A function carrying several paragraphs about why it exists is heavy here and yet nearly free once built, because a bundler keeps the strings and the page never reads them - so a fat name near the top is a reason to open the file, never by itself a reason to cut it.";
  "It takes the names rather than finding them, because the interesting question is never all of them: one asker hands it everything a page carries, another hands it only the part sitting below an environment check, and neither ordering belongs inside a weigher.";
  arguments_assert(arguments, 1);
  let paths = await functions_names_to_paths();
  async function measure(f_name) {
    let f_path = property_get(paths, f_name);
    let size = await file_size(f_path);
    let result = {
      f_name,
      size,
    };
    return result;
  }
  let measured = await list_map_unordered_async(f_names, measure);
  function size_of(m) {
    let size = property_get(m, "size");
    return size;
  }
  let sorted = list_sort_number_mapper_reverse(measured, size_of);
  return sorted;
}
