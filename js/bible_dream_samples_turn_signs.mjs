import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function bible_dream_samples_turn_signs(samples) {
  "Say which way a line bends at each of its points - one for one way, minus one for the other, nothing at all where it runs straight - giving one answer for every sample handed in.";
  "The bend is read from the two steps meeting at the point, by the sign of their cross product. That is a bend and not a direction: it says nothing about which way along the line the hand went, and reversing the whole list leaves every sign as it was in magnitude. So a shape's bumps are a property of the shape, which is what they have to be for anything built on them to be the same shape's ornament whichever way it was drawn.";
  "The small dead band around nothing is what makes a straight run read as straight. Samples are taken at even distances along a curve and so carry rounding, and without a band a dead straight line would come back as a rapid alternation of the two signs and every ornament built on it would be nonsense.";
  "The two ends are given nothing, because a bend needs a step on each side of it and an end has only one.";
  let count = list_size(samples);
  let signs = [];
  list_add(signs, 0);
  let index = 1;
  while (less_than(index, subtract(count, 1))) {
    let back_sideways = subtract(
      samples[index].x,
      samples[subtract(index, 1)].x,
    );
    let back_up = subtract(samples[index].y, samples[subtract(index, 1)].y);
    let ahead_sideways = subtract(samples[index + 1].x, samples[index].x);
    let ahead_up = subtract(samples[index + 1].y, samples[index].y);
    let left = multiply(back_sideways, ahead_up);
    let right = multiply(back_up, ahead_sideways);
    let turn = subtract(left, right);
    let sign = 0;
    if (greater_than(turn, 0.02)) {
      sign = 1;
    }
    if (less_than(turn, -0.02)) {
      sign = -1;
    }
    list_add(signs, sign);
    index = index + 1;
  }
  list_add(signs, 0);
  return signs;
}
