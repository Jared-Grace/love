export function list_map_unordered_at_once() {
  "The most items that may be in flight at one moment when a whole list is asked at once.";
  "Not a speed setting. It is a ceiling on how much of the machine one sweep may hold, and the thing it holds is file handles: a sweep of this repo's function files was measured on 2026-08-11 keeping 8,135 open on a single folder, one per file, none of them closed until the last one answered. Several sweeps run inside one gate run and several gate runs share the box, so they stack, and the machine answers a request past its limit with the word for out of handles rather than with a file.";
  "That failure is worse than slowness, because a reading that ran out of handles still comes back as an answer. A gate that never looked at anything reports red, the commit is written down as refused, and nothing later asks again.";
  "Well above what anything here deliberately asks for - the two places that chose a number for themselves both chose sixteen - so a caller that wanted a smaller number still gets it, and a caller that named no number stops being able to take the whole machine.";
  let count = 256;
  return count;
}
