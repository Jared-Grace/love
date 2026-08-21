import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
export function bible_dream_point_gap_squared(one, other) {
  "How far apart two points are, squared - the number you get by adding the square of the sideways gap to the square of the up-and-down gap, without taking the root of it.";
  "The root is left off on purpose rather than to save arithmetic. Every question asked of this is IS THIS NEARER THAN THAT, and squaring keeps the order of two distances exactly as it was, so the answer never changes. It also keeps the whole tracing check inside plain arithmetic, with no square root anywhere.";
  "What it costs is that a caller must square its tolerance too, and a caller that forgets gets a corridor far narrower than it asked for rather than an error. So the name says squared where a shorter one would have read better.";
  let sideways = subtract(one.x, other.x);
  let up = subtract(one.y, other.y);
  let gap = multiply(sideways, sideways) + multiply(up, up);
  return gap;
}
