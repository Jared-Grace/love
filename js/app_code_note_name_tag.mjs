import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_tag_darkness } from "./app_code_note_name_tag_darkness.mjs";
import { color_darkened } from "./color_darkened.mjs";
import { html_style_code_unfonted } from "./html_style_code_unfonted.mjs";
import { html_box_shadow_inset_value } from "./html_box_shadow_inset_value.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
export function app_code_note_name_tag(component, color) {
  arguments_assert(arguments, 2);
  ("writes a name as its own colour on a darker ground of that same colour, which is how a name wears its colour on a pale card");
  ("THE NAME ITSELF IS THE COLOURED THING HERE, WHICH IS THE WHOLE DIFFERENCE FROM THE PATCH. On a black code chip a name is written in its colour and read against the black, and the same name on a pale card could not be: a colour bright enough to read as ink on black is invisible on a card this light - the green measured about 1.2 to 1 against it, where 4.5 is the floor. So the card was given the colour behind the name instead, and the name went dark. That worked and cost something, because the two grounds then said the name different ways round, and a reader comparing the cup with the program was comparing a green block against a green letter.");
  ("The ground is made from the name's colour rather than chosen, and made dark enough for the colour to read as ink on it. The letter is then the same colour in both places and is the letter in both places, so the cup and the program are two drawings of one thing rather than two arrangements of one colour.");
  ("ONE AUTHORED COLOUR STILL, WHICH IS THE CONDITION THIS HAD TO MEET. A second palette for pale grounds is exactly what was tried before and what a reader caught - they said the green on the cup was not the green in the code, and they were right, because somebody had picked it separately. Here nobody picks it: the ground is the colour scaled down, so it cannot be a different colour, only a darker amount of the same one.");
  ("The ground carries the colour as well as the letter does, which is why it is a tinted ground and not a black one. How easily two things across a screen are seen to be the same colour goes with how much colour there is to look at, and a name here is often one lower-case letter - a few thin strokes. Left on black, the mark would be those strokes alone; tinted, the whole mark is the hue and the letter is the bright part of it.");
  ("Edged in the same ground colour, drawn inside the box for the reason the patch gives: a border is drawn outside and grows the box, and a name inside a line of code must leave the line's height alone.");
  let dark = app_code_note_name_tag_darkness();
  let ground = color_darkened(color, dark);
  html_style_code_unfonted(component, ground, color);
  let style_value = html_box_shadow_inset_value(ground, "0.06em");
  html_box_shadow_set(component, style_value);
  return component;
}
