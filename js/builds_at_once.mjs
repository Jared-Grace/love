export function builds_at_once() {
  "How many app bundles to build at the same time";
  ("★ WITHOUT A CEILING ONE EDIT CAN START THIRTY BUILDS IN THE SAME INSTANT. The watcher keeps one flag per app, so an app already building waits - but nothing holds the apps together, and a piece every app uses reaches every app. Counted rather than guessed: of five thousand six hundred and fifty one pieces the thirty apps hold between them, eighty four are in every single app and four hundred and sixty seven are in more than half.");
  ("Those eighty four are not obscure. They are the pieces that draw and colour and lay out - so the edit that starts thirty builds at once is a tidy-up of shared styling, which is the most ordinary shared-code work there is rather than a rare accident.");
  ("The number is half the machine and is meant to be argued with. There are fourteen processors, one build was measured taking between two thirds and one and a half of one, and the fifteen minute load was twenty one on those fourteen while several people worked - so this is already a machine with more asked of it than it has. Six builds is about seven processors. Lower it if the watcher is starving somebody; raise it on a machine nobody shares.");
  ("It is a separate number from the one for asking questions, though both are ceilings on doing several things at once, because what sets them is different: a question mostly waits for a program that answers quickly, and a build mostly works. Sharing one number would tie a change made for one of them to the other.");
  let limit = 6;
  return limit;
}
