export async function function_name_to_path_search_cached(f_name) {
  "Where a function's file lives, worked out once per name and kept for the rest of the process.";
  "Only for a process reading folders that cannot change, because what is kept is an answer about a folder rather than about the code - a file arriving or leaving makes it wrong, not merely old.";
  "What is kept is the asking rather than the answer, so two callers wanting the same name at the same moment wait on one look at the disk between them instead of starting two.";
  function lambda() {
    let asked = function_name_to_path_search_live(f_name);
    return asked;
  }
  let info = await global_function_property_lambda_info_async(
    function_name_to_path_search_cached,
    f_name,
    lambda,
  );
  let search = property_get(info, "value");
  return search;
}
