import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function bible_dream_samples_turn_signs(samples) {
  "Say which way a line bends at each of its points - one for one way, minus one for the other, nothing at all where it runs straight - giving one answer for every sample handed in.";
  "The bend is read from the two steps meeting at the point, by the sign of their cross product. That is a bend and not a direction: it says nothing about which way along the line the hand went, and reversing the whole list leaves every sign as it was in magnitude. So a shape's bumps are a property of the shape, which is what they have to be for anything built on them to be the same shape's ornament whichever way it was drawn.";
  "★ THE CROSS PRODUCT IS DIVIDED BY THE LENGTHS OF THE TWO STEPS, WHICH TURNS IT FROM AN AREA INTO AN ANGLE. Left as an area it grows with the square of how far apart the samples are, so one fixed dead band means something quite different on a shape drawn small than on one drawn large. Measured on the page: a cow three hundred units round, sampled a hundred and sixty times, had its bend flip sign almost every step, and the whole outline came back as ONE run six samples long - the noise in the sampling was larger than the band. The river, sampled the same number of times but three times the size, was read perfectly. Nothing went red; the small shapes simply had no features. Divided through, the number is the sine of the angle between the steps, which does not care how big the drawing is.";
  "The small dead band around nothing is what makes a straight run read as straight. Samples are taken at even distances along a curve and so carry rounding, and without a band a dead straight line would come back as a rapid alternation of the two signs and every ornament built on it would be nonsense.";
  "★ THE BAND IS SET WHERE IT IS BY MEASUREMENT AND THE NUMBER IS SMALLER THAN IT LOOKS SAFE TO MAKE IT. Set at five hundredths, the river of GEN41 came back with no bends at all - a long gentle sweep turns very little between one sample and the next, and it was being read as a straight line four hundred units long. At one hundredth every shape in the dream returns features except a reed, which really is a straight blade. It can be set this low BECAUSE it is an angle: the error in a sampled point is a small fraction of a unit against steps half a unit long at worst, which is an angle two orders of magnitude below the band. An area could not have been trusted this near to nothing.";
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
    let crossed = subtract(left, right);
    let back_long = Math.sqrt(
      multiply(back_sideways, back_sideways) + multiply(back_up, back_up),
    );
    let ahead_long = Math.sqrt(
      multiply(ahead_sideways, ahead_sideways) + multiply(ahead_up, ahead_up),
    );
    let both_long = multiply(back_long, ahead_long);
    let turn = 0;
    if (greater_than(both_long, 0)) {
      turn = divide(crossed, both_long);
    }
    let sign = 0;
    if (greater_than(turn, 0.01)) {
      sign = 1;
    }
    if (less_than(turn, -0.01)) {
      sign = -1;
    }
    list_add(signs, sign);
    index = index + 1;
  }
  list_add(signs, 0);
  return signs;
}
