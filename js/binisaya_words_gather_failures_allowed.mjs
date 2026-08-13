export function binisaya_words_gather_failures_allowed() {
  "How many words in a row may fail to be looked up before a gathering run gives up on the whole list.";
  "One word failing says nothing - a name server answers slowly, a connection is refused once. A handful in a row says the other end is not there at all, and a run that keeps going then spends hours asking a site that cannot answer. The number is small on purpose: nothing is lost by stopping, because a word that failed was never written down and the next run asks for it again.";
  let allowed = 5;
  return allowed;
}
