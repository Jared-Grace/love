export function reply_countries_shown_spellings() {
  "Spellings on the country lists that should not be said back as typed, under the name a reply says instead.";
  "A joke or a misspelling is prayed for under the proper name. The rejected reading was the plain blessing with no name in it, which left real people out of the prayer for the way they spelled their own country.";
  let spellings = {
    America: ["merica", "murica"],
    Bermuda: ["bermudas"],
    Ceylon: ["ceylan"],
    Nigeria: ["naija"],
    Romania: ["roumania", "rumania"],
    "Saudi Arabia": ["saudi"],
    "the Netherlands": ["nederland"],
  };
  return spellings;
}
