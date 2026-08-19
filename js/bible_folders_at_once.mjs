export function bible_folders_at_once() {
  "How many bibles a sweep over all of them asks about at the same time.";
  "One number rather than one per sweep, because every sweep here asks the same server the same way and the far end has no idea which of them is asking. Two ceilings would be two guesses at one thing, and the lower of them would be the real one anyway.";
  "IT IS A CEILING ON WHAT ONE SWEEP MAY ASK OF SOMEBODY ELSE'S SERVER, not a speed setting, and the number is small because the sweep is nested. Each bible on it starts an ask for every chapter of the book at once, so the count in flight is this number multiplied by the chapters in the book - two dozen of them - and the number that matters is the product rather than either half.";
  "THE UNBOUNDED VERSION WAS MEASURED FAILING. Asking every bible at once meant two hundred and fifty six of them times twenty four chapters, which is six thousand asks arriving together, and roughly four in five of them never came back. Every one that did not came back was written into the record as a bible missing a chapter it in fact holds. Eight bibles is under two hundred asks in flight, which is thirty times smaller than the number that broke.";
  "GUESSED LOW ON PURPOSE, because nobody has measured where the far end actually stops coping and the cost of guessing the two ways is not the same. Too low spends a few more minutes on a command somebody runs by hand and keeps the answer. Too high writes a wrong record, and a wrong record is believed until somebody happens to check one entry of it by hand - which is how the last one was found, months after it was written.";
  let count = 8;
  return count;
}
