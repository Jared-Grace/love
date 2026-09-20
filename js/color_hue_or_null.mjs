import { arguments_assert } from "./arguments_assert.mjs";
import { color_linear_read } from "./color_linear_read.mjs";
import { null_is } from "./null_is.mjs";
import { color_linear_oklab } from "./color_linear_oklab.mjs";
import { list_get } from "./list_get.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
export function color_hue_or_null(written) {
  arguments_assert(arguments, 1);
  ("which way round the wheel a colour points, in degrees from nought up to three hundred and sixty - red near twenty-five, amber near sixty, green near a hundred and fifty, blue near two hundred and fifty-five - or nothing at all when the colour cannot be read");
  ("THIS IS THE ONE THING ABOUT A COLOUR THAT SURVIVES CHANGING ITS TONE, AND THAT IS THE WHOLE USE OF IT. Make a colour lighter and its lightness moves by design and its luminance moves with it; the way it points round the wheel stays where it was. So two colours that are one hue at two tones are told from two colours that are simply different by this number and by nothing else available - lightness says they differ, distance says they differ, and only the hue says they are the same colour said twice.");
  ("IT IS READ IN THE PERCEPTUAL PLACE AND NOT OFF THE DIGITS, which matters because the digits are not laid out round a wheel at all. Asked of the amounts of light directly, a green and a slightly lighter green come out pointing in measurably different directions, because the way from a digit to a direction bends with how bright the colour is. Placed first, they point the same way, which is the answer a person would give.");
  ("A COLOUR THAT IS ALMOST GREY HAS A DIRECTION AND THE DIRECTION MEANS ALMOST NOTHING, and this deliberately does not guard against that. Black, white and every grey between them sit at the middle of the wheel, where the two numbers this is worked out from are both near nought and the answer swings wildly on a rounding. Nothing here can tell that case from a real hue; a caller that might be handed a grey has to ask how far from the middle the colour sits as its own question.");
  ("A colour it cannot read comes back as nothing rather than as a guess, which is what its two siblings over the same reader do, and for the same reason: every caller is asking in order to check something, so an invented direction would be a check reporting a result it never obtained.");
  let light = color_linear_read(written);
  let unreadable = null_is(light);
  if (unreadable) {
    return null;
  }
  let placed = color_linear_oklab(light);
  let green_red = list_get(placed, 1);
  let blue_yellow = list_get(placed, 2);
  let radians = Math.atan2(blue_yellow, green_red);
  let half_turns = divide(radians, Math.PI);
  let degrees = multiply(half_turns, 180);
  let behind = less_than(degrees, 0);
  if (behind) {
    let turned = add(degrees, 360);
    return turned;
  }
  return degrees;
}
