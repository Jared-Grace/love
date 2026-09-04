export function folder_web() {
  "The folder every stage of the site is kept under, said once here so that nothing else spells it.";
  "It is the parent of the stages, not a stage itself. Nothing is served straight out of it. What sits inside it are the folders a build writes into and the folder people are served from, so that the three are neighbours under one roof rather than the two working ones being nested inside the third.";
  "That nesting was the whole reason for this. A working build written inside the folder people are served from is a working build sitting at a public address, and the only thing keeping it off the live site was a line in the sending settings naming it. A stage that never was inside the served folder needs no such line, so the thing that would go wrong cannot be arranged.";
  let w = "web";
  return w;
}
