export async function qa_commit_verdicts() {
  "Every commit we have already judged, by its name";
  "An empty record is written the first time rather than treated as a fault, because having judged nothing yet is the ordinary state of a thing that has just begun";
  let path = qa_commit_verdicts_path();
  let verdicts = await file_read_json_initialize(path, {});
  return verdicts;
}
