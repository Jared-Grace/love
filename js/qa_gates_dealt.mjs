import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
export function qa_gates_dealt(gates, costs, count) {
  "Splits the gates into a given number of shares, putting the slowest gate on whichever share is lightest so far";
  "Handing out every count-th gate is even in the number of gates and wildly uneven in the work, because what a gate costs has nothing to do with where it sits in the list. Measured 2026-08-11 over 172 gates and seven shares: 22, 44, 80, 99, 131, 147 and 150 seconds of work. The wait is the slowest share, so five of the seven sat finished while one of them worked";
  "Slowest first onto the lightest share brought the same 172 gates to 96 seconds each, which is the whole of the work divided by seven exactly. There is nothing to tune - taking the biggest piece first is what leaves only small pieces to correct the imbalance with, and the small ones can always fill a gap the large ones cannot";
  "A gate nobody has timed is given the average of the ones that have. Nought would be the tempting answer and it is the wrong one: every gate added since the last timing would look free, they would all land on one share together, and the share that got them would be the slowest by exactly the amount nobody measured";
  "The answer for a given share does not depend on which share is asking - each run works out the whole deal and then takes its own part - so the several runs need agree about nothing beyond the numbers they all read from the same file";
  let known = [];
  for (let gate of gates) {
    let ms = costs[gate.name];
    if (not_equal(ms, undefined)) {
      known.push(ms);
    }
  }
  let typical = 0;
  if (greater_than(known.length, 0)) {
    let added = 0;
    for (let ms of known) {
      added += ms;
    }
    typical = divide(added, known.length);
  }
  function cost_of(gate) {
    let ms = costs[gate.name];
    if (equal(ms, undefined)) {
      return typical;
    }
    return ms;
  }
  function heaviest_first(one, other) {
    let left = cost_of(other);
    let right = cost_of(one);
    let difference = subtract(left, right);
    return difference;
  }
  let ordered = [...gates].sort(heaviest_first);
  let shares = [];
  let carried = [];
  for (let position = 0; less_than(position, count); position += 1) {
    shares.push([]);
    carried.push(0);
  }
  for (let gate of ordered) {
    let lightest = 0;
    for (let position = 1; less_than(position, count); position += 1) {
      if (less_than(carried[position], carried[lightest])) {
        lightest = position;
      }
    }
    shares[lightest].push(gate);
    carried[lightest] += cost_of(gate);
  }
  return shares;
}
