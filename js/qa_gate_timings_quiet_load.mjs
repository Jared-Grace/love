export function qa_gate_timings_quiet_load() {
  "How much work may be on this machine before a timing run is worth taking.";
  "Two, against fourteen processors - so a machine at this is doing almost nothing, and a gate timed on it is being timed rather than watched waiting for a processor. The run measured at this in the small hours came back with the whole machine to itself: two thirds of one processor busy before it started.";
  "Higher would be easier to meet and would be the whole mistake. The reading before this one was taken at a load of thirteen and had to be thrown away, because what it had measured was gates queueing, by a different amount each - which is exactly the error that then goes into the shares.";
  let load = 2;
  return load;
}
