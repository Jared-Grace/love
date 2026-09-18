import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { color_parse } from "./color_parse.mjs";
import { property_get } from "./property_get.mjs";
import { round } from "./round.mjs";
import { color_rgb } from "./color_rgb.mjs";
export function color_darkened(written, factor) {
  arguments_assert(arguments, 2);
  ("$plain written");
  ("$plain factor");
  ("the same colour with less light in it: each of its three parts scaled by the same amount, so the colour keeps its hue and only gets darker. A factor of one gives the colour back unchanged and a factor of zero gives black.");
  ("DERIVED FROM THE COLOUR RATHER THAN AUTHORED BESIDE IT, WHICH IS THE WHOLE POINT. A darker companion written out by hand is a second colour, and two colours that are meant to be one drift the moment either is touched - which has already happened once on these screens, where a name wore a green on a dark chip and a differently-made green on a pale card, and a reader looking at both said so. Computed, there is one authored colour and the companion cannot disagree with it.");
  ("Scaled rather than stepped toward black through the eye's own brightness curve. Scaling the three parts by one number is the operation that provably leaves the ratios between them alone, and the ratios between them are what the hue is. A step taken in straightened light would hold the brightness better and would not hold the hue, and here the hue is the thing being kept.");
  ("Anything it cannot read comes back as null, which the parser decides and this passes on. A caller handing in a colour written in a form the parser does not know has a fault worth hearing about rather than a black square worth puzzling over.");
  let parsed = color_parse(written);
  let unreadable = equal(parsed, null);
  if (unreadable) {
    return null;
  }
  let value = property_get(parsed, "red");
  let value2 = multiply(value, factor);
  let red = round(value2);
  let value3 = property_get(parsed, "green");
  let value4 = multiply(value3, factor);
  let green = round(value4);
  let value5 = property_get(parsed, "blue");
  let value6 = multiply(value5, factor);
  let blue = round(value6);
  let parts = [red, green, blue];
  let darker = color_rgb(parts);
  return darker;
}
