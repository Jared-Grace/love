import { list_random_item } from "./list_random_item.mjs";
export function g_prayer_closing() {
  "how a prayer ENDS — in Jesus' name, for Your glory, or simply amen — one of four, drawn fresh each time. it opens with its own comma because it always joins straight onto the end of a petition, and it is the last thing said, so nothing may be added after it. one list rather than one per prayer: a prayer that ended the same way every time was the loudest tell that the words were assembled, and the closing is the line a player hears most often";
  let closing = list_random_item([
    ", in Jesus' name, amen",
    ", amen",
    ", for Your glory, amen",
    ", in Jesus' name I pray, amen",
  ]);
  return closing;
}
