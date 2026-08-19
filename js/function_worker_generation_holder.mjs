let holder = null;
export function function_worker_generation_holder() {
  "The one place the count of how many times the warm workers have been retired is kept, handed back as something its readers can write into.";
  "A number counting up, rather than a flag saying stale. Several pools can be alive at once while an old one drains, and each of them remembers the count it booted at; comparing two numbers says which of them is the current one, where a flag could only say that somebody, sometime, saved a file.";
  "Handed back as a thing with the number inside it rather than as the number, because a number handed over is a copy. The watcher raises it and the pool reads it, and they are in different files - so what passes between them has to be the box rather than what is in it.";
  "Made once and kept, so every caller is looking at the same box. Made afresh per call, the watcher would raise a count nobody reads and the pool would never notice a save.";
  holder = {
    count: 0,
  };
  return holder;
}
