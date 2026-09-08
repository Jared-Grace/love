import { data_given_reply_approvals_folder } from "./data_given_reply_approvals_folder.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { reply_approved_path } from "./reply_approved_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function reply_approved_write(f_name, text) {
  "Writes down that a reviewer has passed one file as it stands, keeping the very lines they passed.";
  "★ A SNAPSHOT AND NOT A MARK. What anybody needs afterwards is not whether the file was approved but WHICH LINES were approved, and only the text as it was passed can answer that. It means no verdict can quietly go out of date: change a line and the stored text stops matching on its own, so an approval is withdrawn by exactly the change that made it wrong and by nothing else. A yes kept as a yes would still read yes over a file that had been rewritten underneath it, and that is the one failure that matters here - it would let a change through on a reading of something else.";
  "APPROVING AGAIN SIMPLY MOVES IT FORWARD. A file is revised and passed again, so a second verdict is the ordinary case and not a mistake to be caught; the snapshot is replaced and the first verdict stops mattering, which is what a reviewer means by having approved it.";
  "★ IT IS KEPT IN THE REPOSITORY AND NOT IN STORAGE, because the whole purpose of the verdict is to be acted on by somebody reading the repository. These replies go out in one person's voice and nothing may be applied to the rules until that person has said so; a verdict living on a server is a verdict the next person to open this code cannot see, which would leave the permission being claimed rather than shown.";
  "The name of the file is written into the record as well as into its own name. A file read on its own then says what it is a verdict on, and a record that got moved or renamed says so by disagreeing with itself instead of quietly answering for the wrong file.";
  let folder = data_given_reply_approvals_folder();
  await folder_exists_ensure(folder);
  let stored = {
    f_name: f_name,
    text: text,
  };
  let p = reply_approved_path(f_name);
  await file_overwrite_json(p, stored);
  return stored;
}
