export function ebible_reference_line_aliased(line) {
  "One hand-written passage line with the two book names people spell more than one way put into the spelling most of these bibles use.";
  "PSALM BECOMES PSALMS AND SONG OF SOLOMON BECOMES SONG. Most bibles here list them the second way, so a line written the first way reaches none of them - and the line as a person actually wrote it is still tried afterwards, for the bible that lists them the other way round.";
  "ONLY WHERE THE NAME OPENS THE LINE, and only with the space after it, so a line that merely mentions one of these words further along is left as it was and a longer name beginning with the same word is not cut in half.";
  "TWO NAMES AND NOT A GENERAL TABLE OF SPELLINGS. These are the two the sixty-six books actually disagree about across the translations here; everything else is spelled one way or reached through the code underneath the name, which is a general answer and does not need a list.";
  arguments_assert(arguments, 1);
  let replacements = {
    Psalms: ["Psalm"],
    Song: ["Song of Solomon"],
  };
  let renamed = line;
  function lambda2(froms, to) {
    function lambda3(from) {
      let prefix = text_combine(from, " ");
      let replacement = text_combine(to, " ");
      renamed = text_replace_if_starts_with(renamed, prefix, replacement);
    }
    each(froms, lambda3);
  }
  each_object(replacements, lambda2);
  return renamed;
}
