export function text_digits_leading(text) {
  "$plain text";
  "The run of digits a text begins with, as text, or nothing when it does not begin with a digit.";
  arguments_assert(arguments, 1);
  ("A verse mark prints a plain number, a part-verse such as 3b, or a merged range such as 14-15, sometimes with an invisible direction mark inside it. What every one of those names is the verse it begins at, so reading the digits at the front answers for all of them without a case for each shape.");
  ("Nothing, rather than an empty text, when the text does not begin with a digit. The caller's next move is to compare the answer against a number, and an empty text would compare as a real value and quietly disagree with every one.");
  let characters = text_split_empty(text);
  let digits = [];
  for (let character of characters) {
    let digit = text_digits_is(character);
    if (not(digit)) {
      break;
    }
    list_add(digits, character);
  }
  let none = list_empty_is(digits);
  if (none) {
    return null;
  }
  let leading = list_join_empty(digits);
  return leading;
}
