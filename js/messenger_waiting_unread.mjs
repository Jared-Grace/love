import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
export async function messenger_waiting_unread() {
  "Answers the chats the last scan of the All list marked unread, oldest first, as each conversation number id and how long ago it shows - read from the private messenger_waiting.json, so no chat is opened and nothing is scanned again.";
  "★ UNREAD MEANS THEY WROTE LAST: a row whose second line is 'Unread message:' holds words of theirs you have not seen, whatever the preview below it says.";
  let file_path = folder_private_path("messenger_waiting.json");
  let d = await file_read_json(file_path);
  function lambda(row) {
    let eq = equal(row.lines[1], "Unread message:");
    return eq;
  }
  function lambda2(row) {
    let r2 = {
      id: row.id,
      ago: row.lines[subtract(row.lines.length, 1)],
    };
    return r2;
  }
  let rows = d.waiting.filter(lambda).map(lambda2);
  let r = {
    read_at: d.read_at,
    count: rows.length,
    rows,
  };
  return r;
}
