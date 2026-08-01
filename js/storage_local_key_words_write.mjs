export async function storage_local_key_words_write() {
  "Writes the record of which words reach a browser storage key today, exactly as the source has them now.";
  "Run this only when a published word is deliberately being abandoned - the setting saved under it is still on somebody's disk and nothing here can reach it any more. The shrunken record standing in the commit is the visible sign that it was chosen rather than typed over by accident.";
  "Recording a word that has newly escaped is the other, harmless half, and it has its own command. This one cannot tell the two apart, which is exactly why it is not the one to reach for by default.";
  arguments_assert(arguments, 0);
  let found = await storage_local_key_words_found();
  let path = storage_local_key_words_path();
  await file_overwrite_json(path, found);
  return path;
}
