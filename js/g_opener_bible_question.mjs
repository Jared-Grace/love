export function g_opener_bible_question() {
  "The one disciple opener that is not arc content - the door where the believer asks a question of Scripture and the player answers it.";
  "It is spelled here rather than inside the opener list because two readers need the same word and neither may drift from the other: the list that OFFERS it to the player, and the arc prompt that must leave it out.";
  "Leaving it out is not a preference. A day's turn budget takes its questions off the top before arcs are sized at all - g_arc_lengths subtracts question_matches_percent from the chapter's matches and only then works out how long each arc may be - so a question turn written into an arc is a turn already paid for somewhere else.";
  "That budget is also why it can have no fixed supply. Conversations are indivisible and a day cannot pack them exactly, so whatever a day cannot spend on arcs falls to questions; a pool that ran out would leave those turns unfillable. An arc has a written length, a filler pool cannot.";
  let r = "a Bible question";
  return r;
}
