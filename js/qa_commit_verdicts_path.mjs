export function qa_commit_verdicts_path() {
  "Where the answer for each commit is kept";
  "It sits in the repo and is committed, so an answer one of us paid for is an answer all of us have, and the file doubles as a record of which commits were ever sound";
  let folder = data_folder();
  let path = path_join([folder, "qa_verdicts.json"]);
  return path;
}
