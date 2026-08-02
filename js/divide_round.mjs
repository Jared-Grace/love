import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { round } from "./round.mjs";
export function divide_round(number, divisor) {
  arguments_assert(arguments, 2);
  ("One number shared out among another and kept to the nearest whole one - a");
  ("leftover past halfway carries up, and one short of halfway is dropped.");
  ("A wait in thousandths reported in seconds, how many turns a leader gets out of");
  ("the room left. Each wants the closest whole answer rather than the one below");
  ("it, because saying two seconds for a wait of one and nine tenths is nearer the");
  ("truth than saying one.");
  ("Nearest rather than dropping the fraction is a different question, not a");
  ("setting - the sibling that always drops it is its own name.");
  let shared = divide(number, divisor);
  let whole = round(shared);
  return whole;
}
