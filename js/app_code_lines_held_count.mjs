import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_lines_held_count(lines) {
  "How many of a program's first lines the line-order quiz holds in place, already put in, so the learner orders only the rest.";
  "EVERY ORDER OF THE LINES LEFT IS TRIED, and n lines have n factorial orders. Measured 2026-10-04 on a desktop: seven lines took a tenth of a second, eight took most of a second, and a phone is several times slower. Rectangle inside another has twelve lines, four hundred and seventy-nine million orders, and the quiz came out blank on a student's phone in the review of lessons 226 to 230. So at most seven lines are left to order.";
  "THE LINES HELD ARE THE FIRST ONES, because in the programs that grow this long the first lines start names with numbers, and those were never what the order is about. A program of seven lines or fewer holds nothing and is asked exactly as before.";
  "Rejected: dropping the order quiz from long programs, which loses the one question about the new lines' order; and judging each tap by searching for some order that finishes, which every helper of the row would need rewriting for, since each reads the whole set of orders still standing.";
  let most = 7;
  let size = list_size(lines);
  let over = subtract(size, most);
  if (less_than(over, 0)) {
    let r = 0;
    return r;
  }
  return over;
}
