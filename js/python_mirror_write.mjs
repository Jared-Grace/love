export async function python_mirror_write(mirror) {
  arguments_assert(arguments, 1);
  ("Writes one mirrored list to the file the guard imports it from.");
  let path = property_get(mirror, "path");
  let code = python_code_mirror(mirror);
  await file_write(path, code);
  let written = {
    written: path,
  };
  return written;
}
