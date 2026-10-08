export function app_search_query_link_cases() {
  "Searches that have to survive being sent as a link, which is what the card handed to a stranger promises: whoever opens it sees the same verses you did.";
  "THE FIRST THREE ARE THE ONES THAT WERE REALLY LOST, and each was lost silently. A set of named values goes into an address as name equals value with a comma between pairs, so faith, hope and love was cut at the comma and opened as a search for faith - real verses for a real word, with nothing saying three words had gone. An older spelling of that same separator is an ampersand, which the reading side still accepts, so bread and cup written with one was cut the same way. And a plus between words means a gap, so C++ opened as C followed by two spaces.";
  "THE REST ARE THE ONES THAT WERE ALREADY RIGHT, and they are here so that spelling the words out cannot quietly break them on the way to fixing the three above. A plain word, several words, a lone percent sign that the reading back refuses to make sense of, a word written in a different script, and an equals sign - which survived only because the left of a pair is cut off at the first equals and not the last.";
  "THE LAST ONE HOLDS ALL FIVE AWKWARD CHARACTERS AT ONCE, because each of the fixes is a replacement and a replacement can undo the one before it. Whatever order they are done in has to leave this one whole.";
  let cases = [
    {
      query: "faith, hope and love",
      why: "a comma is what one pair is divided from the next by, so this used to open as a search for faith with three words silently gone",
    },
    {
      query: "bread & cup",
      why: "an ampersand is an older spelling of that same divide which the reading side still accepts, so this used to open as a search for bread and a space",
    },
    {
      query: "C++",
      why: "a plus between words means a gap, so this used to open as C followed by two spaces",
    },
    {
      query: "faith",
      why: "one plain word, which has always worked and must go on working",
    },
    {
      query: "faith hope love",
      why: "several words divided by the gap this app has always written as a plus",
    },
    {
      query: "100%",
      why: "a lone percent sign is not a spelling of anything, and reading it back refuses rather than throws, so the word is kept as it was typed",
    },
    {
      query: "خدا",
      why: "a word outside the plain alphabet, which a browser spells out for itself whether or not anything here does",
    },
    {
      query: "love = God",
      why: "an equals sign, which survives because a pair is cut at its first equals and not its last",
    },
    {
      query: "a=b,c&d+e f",
      why: "every awkward character at once, because each fix is a replacement and a replacement can undo the one before it",
    },
  ];
  return cases;
}
