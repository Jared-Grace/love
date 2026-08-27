export function text_spaces_beside_settled_punctuation_removed(text) {
  "A run of text with the spaces taken out from beside the punctuation whose side is settled in every language.";
  "This one shuts up spaces the author typed, which is a thing worth doing only where no language disagrees about which side of a word the mark goes. A comma, a full stop, a question mark and a round bracket lean the same way everywhere, and a space next to one of them is a slip of the publisher's - the printed bible has ( which means and Likewise , every in it. A curly quotation mark is the opposite: which of the pair opens and which closes is a choice each language makes, and amharic makes it the other way round, so the space beside one is a real word boundary there. Those are left alone here and shut only when the mark removal itself made the hole.";
  "The one exception is a space that runs into a curly closing quote from the left, and what stands on the left settles it. A comma or a full stop begins nothing, and neither does a closing quote, so the mark on the right can only be closing the speech that ended there - which is the thin space a typesetter puts between two quotes that close together. A letter on the left proves nothing either way, so a space after a letter stays.";
  let before_closing = new RegExp("[ ]+(?=[,.;:!?)\\]}])", "g");
  let leftwards = text.replace(before_closing, "");
  let after_opening = new RegExp("(?<=[(\\[{])[ ]+", "g");
  let rightwards = leftwards.replace(after_opening, "");
  let before_quote = new RegExp("(?<=[,.;:!?’])[ ]+(?=[”’»])", "g");
  let quoted = rightwards.replace(before_quote, "");
  return quoted;
}
