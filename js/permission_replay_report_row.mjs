export function permission_replay_report_row(row) {
  "One line of a friction ranking: what it was, how often it stopped somebody, what the rules say about it now, and the command it happened to be.";
  "Only these four, out of the dozen a counted row carries. The rest are timings, and a wait's length says nothing about whether a rule could end it - a slow thing approved once is an anecdote and a quick thing approved fifty times is the bill.";
  let sample = property_get(row, "sample");
  let worded = equal(typeof sample, "string");
  let command = text_empty();
  if (worded) {
    command = text_start(sample, 120);
  }
  let line = {
    label: property_get(row, "label"),
    count: property_get(row, "count"),
    verdict: property_get(row, "verdict"),
    command,
  };
  return line;
}
