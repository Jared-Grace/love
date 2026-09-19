import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_tag_darkness } from "./app_code_note_name_tag_darkness.mjs";
import { color_darkened } from "./color_darkened.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_code_note_name_halo_width } from "./app_code_note_name_halo_width.mjs";
import { html_text_halo_set } from "./html_text_halo_set.mjs";
export function app_code_note_name_tag(component, color) {
  arguments_assert(arguments, 2);
  ("writes a name as its own colour, ringed by a darker amount of that same colour, which is how a name wears its colour on a pale card");
  ("THE NAME ITSELF IS THE COLOURED THING HERE, WHICH IS THE WHOLE DIFFERENCE FROM THE PATCH. On a black code chip a name is written in its colour and read against the black, and the same name on a pale card could not be: a colour bright enough to read as ink on black is invisible on a card this light - the green measured about 1.2 to 1 against it, where 4.5 is the floor. So the card was given the colour behind the name instead, and the name went dark. That worked and cost something, because the two grounds then said the name different ways round, and a reader comparing the cup with the program was comparing a green block against a green letter.");
  ("The darker colour is made from the name's colour rather than chosen, and made dark enough for the colour to read against it. The letter is then the same colour in both places and is the letter in both places, so the cup and the program are two drawings of one thing rather than two arrangements of one colour.");
  ("ONE AUTHORED COLOUR STILL, WHICH IS THE CONDITION THIS HAD TO MEET. A second palette for pale grounds is exactly what was tried before and what a reader caught - they said the green on the cup was not the green in the code, and they were right, because somebody had picked it separately. Here nobody picks it: the darker colour is the colour scaled down, so it cannot be a different colour, only a darker amount of the same one.");
  ("★ THE DARKER COLOUR IS A RING ROUND THE LETTER AND NOT A BOX BEHIND IT, WHICH IS THE ONE THING THAT CHANGED LAST. Both put the same colour immediately around the letter and both measure the same, because what a reader is helped by is the colour touching the letter and not the shape the rest of it is cut to. What the box cost was the picture: a filled rectangle standing inside a drawn cup reads as something that was put in the cup, and it was narrowed twice trying to stop it reading that way before it was clear that no width would - the shape was wrong and not the size.");
  ("The reading rejected here: a box outline round the letter with the card showing through, and the letter left bright. That is the drawing that has no colour next to the letter at all, and the measurement is the same one that started all of this - bright green on this card is 1.2 to 1 against a floor of 4.5. An outline a little way off the letter cannot help the letter; only what touches it can.");
  ("The reading rejected next to that: the same box outline with the letter written dark enough to read on the card. That one is legible and it breaks the single colour, because the cup would then show a dark green letter where the program shows a bright green one - which is precisely the drift a reader already caught once.");
  ("The reading rejected before all of them: putting the colour behind the letter as a bright patch and writing the letter dark, which is what the code chip still does. Legible, one colour, and it costs the correspondence - the cup shows a green block where the program shows a green letter.");
  let dark = app_code_note_name_tag_darkness();
  let ground = color_darkened(color, dark);
  html_font_color_set(component, color);
  let width = app_code_note_name_halo_width();
  html_text_halo_set(component, width, ground);
  return component;
}
