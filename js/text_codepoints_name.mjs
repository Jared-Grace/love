export function text_codepoints_name(message) {
  "A run of characters written as its Unicode codepoints, one U+ number per character.";
  "For naming characters that cannot be told apart by looking at them. The guillemet has";
  "three near-identical twins and the chevron two, so a report that printed the character";
  "itself would let a reader copy the wrong one and match nothing - and matching nothing";
  "reads as an absence rather than as a mistake.";
  let characters = Array.from(message);
  function code_of(character) {
    let point = character.codePointAt(0).toString(16);
    let named = "U+" + point.toUpperCase();
    return named;
  }
  let named = characters.map(code_of);
  let joined = named.join(" ");
  return joined;
}
