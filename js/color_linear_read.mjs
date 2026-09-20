import { arguments_assert } from "./arguments_assert.mjs";
import { color_named_or_null } from "./color_named_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { color_parse } from "./color_parse.mjs";
import { property_get } from "./property_get.mjs";
import { color_channel_light } from "./color_channel_light.mjs";
export function color_linear_read(written) {
  arguments_assert(arguments, 1);
  ("a colour written any of the ways this repo writes one, read as the three amounts of light it actually sends back - or nothing at all when the colour cannot be read");
  ("THE ONE DOOR FROM WRITTEN COLOUR TO LIGHT. Reading a colour as light is the first step of every measurement that asks what a person will see: how readable writing is on it, how far it sits from a neighbour, and what is left of it to an eye missing a cone. Each of those had to straighten the digits before it could start, so each of them was writing the straightening out again, and a reader that straightened slightly differently would disagree with the others about the same colour while every one of them looked right on its own.");
  ("Nothing is said about how see-through the colour is. A colour standing at less than full strength shows some of what is behind it, and what that comes to cannot be known from the colour alone - a reader wanting that has to work out the mixed colour first and ask about the result.");
  ("A colour it cannot read comes back as nothing rather than as a guess. Every caller is asking in order to check something, so nothing is a fault at the asking end and never a colour quietly passed over.");
  let named = color_named_or_null(written);
  let spelled = written;
  let unnamed = null_is(named);
  if (not(unnamed)) {
    spelled = named;
  }
  let parsed = color_parse(spelled);
  let unreadable = null_is(parsed);
  if (unreadable) {
    return null;
  }
  let value = property_get(parsed, "red");
  let red = color_channel_light(value);
  let value2 = property_get(parsed, "green");
  let green = color_channel_light(value2);
  let value3 = property_get(parsed, "blue");
  let blue = color_channel_light(value3);
  let light = [red, green, blue];
  return light;
}
