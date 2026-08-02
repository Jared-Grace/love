import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function commands_time_ranked(rows) {
  "Reorders grouped waits so the one that has cost the most time altogether comes first.";
  "Counted alone the ranking says what is run often and nothing about what it costs. Worst case alone says what once hung and nothing about whether anybody waits on it twice. The product of the two is the only reading that answers what to make faster - a second saved on the top row is saved every time it runs.";
  function by_total(row) {
    let n = row.seconds_total;
    return n;
  }
  let ranked = list_sort_number_mapper_reverse(rows, by_total);
  return ranked;
}
