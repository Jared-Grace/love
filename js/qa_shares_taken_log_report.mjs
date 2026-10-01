import { less_than } from "./less_than.mjs";
import { qa_shares_taken_log_path } from "./qa_shares_taken_log_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
import { property_get } from "./property_get.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { divide_round } from "./divide_round.mjs";
import { list_map } from "./list_map.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_size } from "./list_size.mjs";
export async function qa_shares_taken_log_report() {
  "What every run of the gates on this machine has cost, newest first, so that the run in front of you has something to be compared against.";
  "★ THE QUESTION IT EXISTS TO ANSWER IS WHETHER A DURATION IS THE WORK OR THE CROWD, AND THAT QUESTION HAS NO ANSWER FROM ONE READING. The same questions over the same frozen copy have been measured at about two and a half minutes split across a quiet machine, sixteen minutes taken alone, and fifty three when three runs contend. A reader holding one number is holding something that could be any of the three, and the load beside it is what settles which.";
  "★ MEASURED BY THE MISTAKE IT PREVENTS. Two runs timed at about fifty two minutes each were read as proof that the quarter of an hour stated throughout this repo was false. It was not false - fifty two was the contended case, agreeing with the fifty three already written down. The disagreement was manufactured by comparing a contended reading against a solo one, and it reached as far as a wrong note in memory before anybody checked. Every row here carries the load at both ends precisely so that comparison cannot be made blind again.";
  "★ IT SAYS HOW MANY RUNS IT IS SPEAKING FROM AND WHETHER THAT IS TOO FEW, because a spread worked out over two runs is not a spread and will be read as one. Below the floor nothing about typical or unusual may be concluded at all - the rows may still be read one by one, which is a different and honest use of them. The floor is a count rather than a judgement about which conditions have been seen, which is the weaker test of the two: five runs that were all taken on a busy evening clear it and still say nothing about a quiet machine. A reader has the loads in hand and must look.";
  "★ NEITHER THE EVEN DIVISION NOR HOW FAR THE SLOWEST SHARE MISSED IT IS WORKED OUT HERE, ON PURPOSE. Both are arithmetic over what is already in each row, and both are already printed in full at the end of every run by the text that reports the shares. Worked out in two places they would be two readings that can drift, and the one here would be the copy nobody is looking at when the other is corrected.";
  "The run's own length is taken as the slowest share rather than as any total, because the shares are asked side by side and a run is finished when the last of them is. Added up instead, a well divided run would read as the slowest run in the history.";
  "A row whose shares never said how long they took is given nothing rather than nought for its length. The number is missing because the run could not say, which is a fact about that run, and a nought would be read as a run that took no time at all.";
  "Reading the history creates it empty when it is not there yet, so a machine that has never judged anything answers no runs rather than throwing. The file is the local gitignored one and is nobody else's, so creating it costs nothing and removes the one case every later reader would otherwise have to ask about.";
  let f_path = qa_shares_taken_log_path();
  let rows = await file_read_json_initialize(f_path, []);
  function qa_shares_taken_log_report_row(row) {
    let shares_ms = property_get(row, "shares_ms");
    let slowest_ms = list_max_or_null(shares_ms);
    let missing = null_is(slowest_ms);
    let seconds = missing ? null : divide_round(slowest_ms, 1000);
    let solo_ms = property_get(row, "solo_ms");
    let read = {
      at: property_get(row, "at"),
      shards: property_get(row, "shards"),
      seconds,
      solo_seconds: divide_round(solo_ms, 1000),
      load_before: property_get(row, "load_before"),
      load_after: property_get(row, "load_after"),
    };
    return read;
  }
  let reads = list_map(rows, qa_shares_taken_log_report_row);
  let newest_first = list_reverse(reads);
  let runs = list_size(reads);
  let floor = 5;
  let thin = less_than(runs, floor);
  let r = {
    runs,
    thin,
    floor,
    runs_newest_first: newest_first,
  };
  return r;
}
