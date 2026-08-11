export function function_paths_frozen_is() {
  "Whether this process has been told the folders it reads cannot change under it.";
  "False unless somebody said so, which is the safe way round: a process that never mentions the question gets the answer that is true of the living folder.";
  let object = global_function_initialize_object(function_paths_frozen_enable);
  let frozen = property_exists(object, "frozen");
  return frozen;
}
