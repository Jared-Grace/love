import { fn_name } from "./fn_name.mjs";
export function bible_glyph_characters_orthodox() {
  "The glyphs an Eastern Orthodox reader is drawn differently, given as the name and the character that replaces the default one.";
  ("Only what changes is named here. Everything this list is silent about keeps the character ",
    fn_name("bible_glyph_characters"),
    " gives it, so a tradition is a short list of differences rather than a second whole alphabet to keep in step with the first.");
  ("The cross is the case this exists for. A Latin cross and an Orthodox cross, with its slanted footrest, are the same word - a reader of either one is reading the cross, not a different thing - so they are one glyph name wearing two pieces of artwork. Spending two names on them would say in the data that they are two words, which is false, and would then force every verse to choose a tradition before it could be written down at all.");
  ("This is the same shape a translation choice already has. The stored text does not move; what draws it does.");
  let characters = [
    {
      name: "cross",
      character: "☦️",
    },
  ];
  return characters;
}
