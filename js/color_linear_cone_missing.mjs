import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
export function color_linear_cone_missing(light, cone) {
  arguments_assert(arguments, 2);
  ("three amounts of light, as they reach a reader who has no cone of the named kind - pass red, green or blue for the missing one, or none to get the light back unchanged");
  ("ABOUT ONE MAN IN TWELVE IS MISSING ONE OF THE THREE, WHICH IS ENOUGH READERS THAT A PALETTE NOBODY CHECKED THIS WAY IS A PALETTE NOBODY CHECKED. Missing the red or the green cone is the common case by a long way; missing the blue is rare. A palette revised by eye cannot find this by being revised harder, because the eye doing the revising is not the eye that loses the distinction - which makes it exactly the kind of question worth handing to arithmetic.");
  ("WHAT IS LOST IS A WHOLE DIRECTION AND NOT A SHADE. Two cones between them can report one line of colour, so every hue collapses onto a single blue-and-yellow run; red, orange, brown and green arrive as one another at matching lightnesses. That is why a palette can be four plainly different colours to most readers and two to some, and why the repair is never to nudge a hue - it is to move one member off the crowded end of the line.");
  ("The flattening is the 1999 way of Vienot, Brettel and Mollon: read the light as what each of the three cones receives, work out what the missing one WOULD have received from what the other two report, and read the result back as light. The result routinely lands outside what a screen can show, which is honest - it is a colour the reader experiences and not one anybody has to print - so whatever measures it afterwards is what has to bring it back inside.");
  let red = list_get(light, 0);
  let green = list_get(light, 1);
  let blue = list_get(light, 2);
  let long =
    multiply(0.31399022, red) +
    multiply(0.63951294, green) +
    multiply(0.04649755, blue);
  let middle =
    multiply(0.15537241, red) +
    multiply(0.75789446, green) +
    multiply(0.08670142, blue);
  let short =
    multiply(0.01775239, red) +
    multiply(0.10944209, green) +
    multiply(0.87256922, blue);
  let long_seen = long;
  let middle_seen = middle;
  let short_seen = short;
  if (equal(cone, "none")) {
    return light;
  }
  let named_red = equal(cone, "red");
  if (named_red) {
    let left = multiply(2.02344, middle);
    let right = multiply(2.52581, short);
    long_seen = subtract(left, right);
  }
  let named_green = equal(cone, "green");
  if (named_green) {
    middle_seen = multiply(0.494207, long) + multiply(1.24827, short);
  }
  let named_blue = equal(cone, "blue");
  if (named_blue) {
    short_seen = multiply(-0.395913, long) + multiply(0.801109, middle);
  }
  ("A WORD THIS DOES NOT KNOW IS REFUSED RATHER THAN PASSED OVER. Left to fall through, an unknown cone would hand the light straight back unchanged, which is to say it would answer as a reader with ordinary sight - so a caller who misspelled one would be told that every colour is perfectly distinguishable, by a check that had quietly stopped asking anything.");
  let known = named_red || named_green || named_blue;
  if (not(known)) {
    throw new Error(
      "color linear cone missing: no cone is called " +
        cone +
        " - the missing one is red, green or blue, or none for ordinary sight",
    );
  }
  let left2 = multiply(5.47221206, long_seen);
  let right2 = multiply(4.6419601, middle_seen);
  let red_seen = subtract(left2, right2) + multiply(0.16963708, short_seen);
  let right3 = multiply(0.1678952, short_seen);
  let green_seen = subtract(
    multiply(-1.1252419, long_seen) + multiply(2.29317094, middle_seen),
    right3,
  );
  let left3 = multiply(0.02980165, long_seen);
  let right4 = multiply(0.19318073, middle_seen);
  let blue_seen = subtract(left3, right4) + multiply(1.16364789, short_seen);
  let seen = [red_seen, green_seen, blue_seen];
  return seen;
}
