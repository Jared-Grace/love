export function word_role_groups() {
  "The small words that do a job rather than name a thing, gathered by the job they do.";
  "Two texts can say the same joint with different words. A verse reading 'for Adam was formed first' and a line reading 'because God formed the man before the woman' are making the same move, and a reader who has just met the verse recognises it - but no measure of shared words sees it, because for and because share not one letter.";
  "If B then A is the same joint as A because B, only turned around, so the conditional words sit in the same group as the reason words. That is a claim about what the reader recognises, not about what a logician would allow: if is a supposal and because is a fact, and this group does not care, because what it measures is whether the joint is recognisable, not whether it is identical.";
  "The words left out are as deliberate as the ones in. Then belongs to no group here: it marks a consequence in one sentence and a plain passing of time in the next - and then Eve is time, not reason - so joining it would invent a match about half the times it fired. So and for are in, but they are the reason this is reported apart from a real shared word rather than counted as one: both do ordinary work too, so and so their presence is a hint and not a proof.";
  let groups = {
    reason: "because for since therefore thus hence wherefore so if seeing forasmuch whereby consequently accordingly",
    contrast: "but yet however nevertheless though although whereas rather instead",
    addition: "and also moreover furthermore besides too",
    denial: "not no never none nothing nor neither without",
    everyone: "all every each any whoever whosoever anyone everyone",
    obligation: "must ought should shall commanded required",
    permission: "may can allowed permitted",
  };
  return groups;
}
