export function qa_gate_timings_stale_days() {
  "How old the record of what each gate takes may get before it is worth measuring again.";
  "A fortnight, because the thing being measured moves slowly. A gate is written once and then left alone for weeks, and the numbers only stop describing the repo when a gate is made much faster or a heavy new one joins the list - neither of which happens most days.";
  "Shorter would spend a whole serial run of the gates on a quiet night to learn almost nothing, and a run of them is the heaviest thing this machine does. Longer was what we had: nothing refreshed it at all, and the record still said one gate took seventy-three seconds when it had been brought down to thirty-one - a scheduling error larger than the unevenness the shares exist to remove.";
  let days = 14;
  return days;
}
