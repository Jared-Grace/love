export async function memory_note_text(name) {
  arguments_assert(arguments, 1);
  "one memory note as it stands on disk, named by its file name. Read-only.";
  "the sibling of the index reader, for the notes the index points at.";
  let folder = memory_folder();
  let path = path_join([folder, name]);
  let text = await file_read(path);
  return text;
}
