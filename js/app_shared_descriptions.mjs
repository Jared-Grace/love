export function app_shared_descriptions() {
  "What each app that has been given one says about itself, kept in one place and read by name.";
  "Written for a person who has only been handed a link and has not opened the page yet, so each says what the thing is and what it is for rather than what it is called.";
  "An app absent from here is not guessed at. Nothing is said rather than something vague, so a card is never built out of an assumption about an app nobody described.";
  "A page a person would never be sent is left out on purpose rather than overlooked - a dev sandbox, an error page, the developer's own inbox, a board of personal replies written in the first person. A card is for a link worth handing to somebody, so a page with nobody to hand it to wants none.";
  "EVERY SENTENCE HERE IS A CLAIM THAT GOES STALE WITHOUT SAYING SO, AND IT GOES STALE IN BOTH DIRECTIONS. These are read by strangers who have opened nothing, so each one promises on behalf of code that keeps being built underneath it. The search card has now been wrong twice: first it claimed a reader's own language when only English was indexed, and then, once two dozen languages had been indexed and shipped, it still said English - promising less than the app gave, which is the direction nobody ever reports. So before changing a sentence here, read the layer that would have to support it and read what actually shipped, because neither half settles it alone: a capability can sit finished in the source and be missing from the built page, and a thing the source no longer does can still be live in the page a reader has.";
  "THE SCOPE OF A READING APP IS WHAT ITS PICKER OFFERS, WHICH IS NOT THE SAME AS WHAT ITS STORE WAS AUTHORED FROM. Three of these cards said \"the Bible\" when the app offered only chapters that had been uploaded - the New Testament, in two cases - and one looked as though it did and does not: the picture Bible's hand-written table holds a few hundred chapters, but its chapters are now built from the interlinear, so every chapter of the Bible opens and the card was right all along. So the figure to ask for is the one the picker reads, and nothing else. A seed table, a list of what has been authored by hand, a count of what some sweep last touched: each of those is a real number that answers a question nobody opening the app is asking, and each of them is wrong in whichever direction happens to flatter or shame the app.";
  let r = {
    index:
      "A set of free apps for reading the Bible in your own language, sharing verses with someone, and learning to program. There is nothing to sign up for.",
    bible:
      "Read the Bible in any of hundreds of languages, and read two of them together, verse by verse. It can keep a copy on your own device so it opens without a connection.",
    search:
      "Search the whole Bible for any words you like, in any of dozens of languages, and read every verse that holds them. A search can be sent as a link, so whoever opens it sees the same verses you did.",
    next: "Shows the Bible passage somebody sent you a link to, with a way to keep reading on from there. Open it with no link and it still gives you somewhere to start.",
    verses:
      "Choose a language and how many encouraging Bible verses you would like, and it gathers them ready to copy and send to someone.",
    code: "Learn to program in JavaScript one small step at a time, by working on real code rather than reading about it.",
    replace:
      "A puzzle where you rewrite a row of symbols one rule at a time, from a single letter up to a working function. The same moves a compiler makes.",
    en_learn_bible:
      "Read a verse of the New Testament in Urdu and then in English, with every English word explained in Urdu. The Bible teaches you English as you read it.",
    ceb_bible:
      "Read the New Testament in Cebuano with every word explained: what it means, and the root word it comes from. For reading Cebuano Scripture closely, whether it is your own language or one you are learning.",
    original_bible:
      "Read the New Testament in the Greek it was written in, and the Old Testament's first seven books in Hebrew, with every word explained in English: what it means, how it is being used in that sentence, and the number you can look it up by.",
    emoji_bible:
      "The Bible written with pictures in place of its words, so a verse can be met without first knowing the language it was written in. A key under each verse shows the original words and the English beside them, and leaves the pictures for you to work out.",
    g: "A game where you walk a street and talk with the people you meet about Jesus. They ask hard questions and say what they do not believe, and you answer them from the Bible, matching each verse to the words that belong with it.",
    g_bless:
      "A game where you walk a street, turn to look at the people around you, and pray a blessing over everyone you can see.",
    g_hero:
      "A game where you walk a busy street as a young woman while one person at a time turns evil and hunts the others. Find them and tap them to burn them up with fire.",
    autopray:
      "Leave this page open and it prays over every verse of the Bible in turn, asking that all creation would hear, believe, obey, enjoy and proclaim the word of God.",
    supper:
      "The nine passages of the Bible about the Lord's Supper, in the languages you choose, one passage at a time. For reading together before you take the bread and the cup.",
    supper_tl:
      "The nine passages of the Bible about the Lord's Supper in Tagalog with English beside it, one passage at a time. For reading together before you take the bread and the cup.",
    music:
      "The words of the sung songs, line by line, with what each line means and the passages of Scripture it rests on written out underneath.",
    receipts:
      "Keep a record of what was bought, with a photo of the receipt and the price in both pesos and dollars. Every phone that types the same folder code shares one list, and a phone with no internet keeps what you add until there is some.",
    privacy_policy:
      "What these apps do with anything you give them. There is nothing to sign up for and nothing is tracked, and what an app remembers is kept on your own device.",
  };
  return r;
}
