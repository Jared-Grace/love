export function g_arc_review_marks() {
  "The words a review page is laid out with - what stands at the front of a conversation line, a catch_up, an opener, a turn's reference, its Scripture, its after, the turn where the person believes, and a tally line.";
  "ONE SOURCE, because the layout is written at one seam and read back at another. A page is rendered to be read, a person edits it, and the edited page is read back into an arc; spelled twice, an arrow that grew a space on one side alone would stop being recognised, and the reading call could not say what happened - it can only fail to recognise a line that was written correctly.";
  "The number is followed by a DOT AND A SPACE, so a turn's own line is told apart by beginning with a digit and its text begins after the first of these. Nothing else on the page begins with a digit.";
  "Each mark is a PREFIX and no two of them begin the same way, which is what lets a line be recognised by its first characters alone rather than by where it happens to fall. So a page can be edited out of order, or a turn moved, and still read back.";
  let r = {
    conversation: "CONVERSATION ",
    catch_up: "catch_up: ",
    opener: "  opener: ",
    number: ". ",
    reference: "   -> ",
    scripture: "      ",
    after: "   after: ",
    believes: "   BELIEVES: ",
    tally: "* ",
  };
  return r;
}
