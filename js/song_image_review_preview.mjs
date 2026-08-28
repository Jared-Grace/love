import { song_image_review_couplets } from "./song_image_review_couplets.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { song_image_page_shell } from "./song_image_page_shell.mjs";
import { song_image_review_row } from "./song_image_review_row.mjs";
export function song_image_review_preview() {
  "the few couplets somebody has been asked to look at this round, on the sandbox app at the hash song_image_review - each with its picture beside what was changed in it, arrows to every other attempt, a keep button to choose one on the spot, and a box to say what is still wrong";
  "it exists because the audit page shows all thirty-six and a round of changes touches six. Handing a reader the whole hymn to find six pictures in spends their attention on the finding, which is the one part nobody needed doing - and worse, it quietly asks them to review the thirty that were already agreed.";
  "everything it has in common with the audit page is drawn by the one that draws both, so the two cannot come to look like different pages. What is left here is the only part that differs: which couplets, and the line at the top saying why these ones.";
  "which couplets these are lives in its own list and not here, so a fresh round is one small edit to that list and this file never changes";
  "WITH NOTHING UNDER REVIEW IT SAYS SO INSTEAD OF COMING UP BLANK, because a page of instructions above an empty space reads as a page that failed to load, and the reader's next move is to reload it and then to ask somebody. An empty list is the finished state here - it means every picture drawn so far has been accepted - and that is worth a sentence, not a silence.";
  let asked_list = song_image_review_couplets();
  let none = list_empty_is(asked_list);
  let said_open =
    "the couplets changed this round, each with what changed in it - " +
    "the arrows under a picture reach every other attempt, keep chooses one, " +
    "and the box files what is still wrong";
  let said_none =
    "nothing is waiting to be looked at - every picture drawn so far has been " +
    "accepted, and this page fills again as soon as a round of changes is made";
  let said = none ? said_none : said_open;
  let root = song_image_page_shell(said);
  for (let asked of asked_list) {
    song_image_review_row(root, asked);
  }
  return root;
}
