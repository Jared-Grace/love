import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
export function bible_dream_hand_side_point(at, along, half) {
  "Give the place that sits a stated distance sideways from a point, square to the direction the line is travelling there - which is one edge of a line of that width.";
  "★ A LINE WHOSE WIDTH CHANGES ALONG IT HAS TO BE DRAWN AS A SHAPE, AND THIS IS HOW ITS EDGE IS FOUND. A drawing surface will stroke a path at one width, and it will fade a colour along a path, but there is no way to ask it to fade a width; whatever number is given holds for the whole of what is drawn. So a line that thickens and thins is not a stroked path at all - it is a filled shape whose two sides are the same curve moved apart by however wide the line is at each place. This says where one of those sides is.";
  "The sideways direction is square to the travelling direction, which is the travelling direction with its two parts swapped and one of them negated. Which of the two gets negated decides which side is answered, and it does not matter which side is called which so long as the same distance with its sign changed gives the other one.";
  "It is measured in the same units as the drawing, so the direction is reduced to a length of one first. A direction of no length has no sideways at all, and the point itself is handed back - that happens where a hand was reported twice in the same place, and a shape of no width there is exactly right.";
  let length = Math.sqrt(
    multiply(along.x, along.x) + multiply(along.y, along.y),
  );
  if (equal(length, 0)) {
    let r = {
      x: at.x,
      y: at.y,
    };
    return r;
  }
  let reach = divide(half, length);
  let right = multiply(along.y, reach);
  let side = {
    x: subtract(at.x, right),
    y: at.y + multiply(along.x, reach),
  };
  return side;
}
