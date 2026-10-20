import { arguments_assert } from "./arguments_assert.mjs";
export function giveaway_archive_send_waits() {
  arguments_assert(arguments, 0);
  ("How long to wait before each try at handing one file to archive.org, counted in seconds, with the first try waiting for nothing at all.");
  ("★ THE FIRST NUMBER IS A WAIT OF NOTHING SO THAT THE LIST IS THE WHOLE STORY OF THE TRYING. A list of waits alone would always be one shorter than the list of tries, and every reader of it would have to remember that the first try is free - which is exactly the sort of off-by-one that goes unnoticed until a file is dropped after fewer tries than anyone meant. Walking this list once, waiting whatever it says and then trying, makes the count of tries and the count of waits the same number.");
  ("★ WHAT MATTERS IS THE SUM AND NOT THE COUNT. A host that is busy for twenty minutes is not helped by twenty tries two seconds apart; it is helped by waits that grow until they are longer than the trouble. These add up to about half an hour, which is chosen to outlast the kind of busy-ness that is a queue clearing rather than a fault, and to give up long before an unattended run of thirty boxes could sit still all night.");
  ("The waits are this repo's own and nothing is asked of the host, even though the host sometimes says how long to wait. The one function that sends keeps none of the notes that come back, on purpose, so there is nowhere for such an answer to arrive.");
  let waits = [0, 5, 15, 30, 60, 120, 300, 600, 900];
  return waits;
}
