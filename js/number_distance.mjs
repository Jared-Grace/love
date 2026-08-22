import { abs } from "./abs.mjs";
import { subtract } from "./subtract.mjs";
export function number_distance(a, b) {
  "How far apart two numbers are, never negative, whichever of them is the larger.";
  "IT IS A GAP AND NOT A DIFFERENCE, which is why it does not say which way. A caller adding up how far a spread has strayed from what it should be wants every stray to count against it; a signed difference lets one axis being over cancel another being under, and the total then reads as balanced while both halves are wrong.";
  let n = subtract(a, b);
  let gap = abs(n);
  return gap;
}
