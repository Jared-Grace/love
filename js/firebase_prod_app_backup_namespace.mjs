import { text_frozen } from "./text_frozen.mjs";
export function firebase_prod_app_backup_namespace() {
  "The word the backups of a shipped app are kept under on the shared bucket, which is the folder they are already sitting in.";
  "Named after the function that makes them, and frozen anyway - the function wrote the files, and a rename of it moves nothing on the bucket. It was spelled as a reference until now, which said the opposite: that renaming the function should carry the folder with it. That would have left every backup already taken sitting under the old word while every later one went somewhere else, and nothing would have said so.";
  "The same word names a folder on the machine's own disk, and that one is deliberately left as a reference to the function. This repo can move a folder it can hold, so a rename there is honest; it cannot move anything on the bucket. The two words are free to stop matching after a rename, and nothing joins the two stores by their path.";
  let v = text_frozen("firebase_prod_app_backup");
  return v;
}
