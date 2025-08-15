export function folder_current_join(result) {
  let current = folder_current();
  let value_string = path_join([current, result]);
  return value_string;
}
