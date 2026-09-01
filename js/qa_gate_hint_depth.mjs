export function qa_gate_hint_depth() {
  "How many functions deep to follow an argument before deciding it never reaches a hint.";
  "Four, because that is the longest chain the repo actually has: a commit-message gate hands its complaint to the runner shared by the commit-message rules, that one to the ratchet runner that keeps the walked count attached, that one to the ratchet itself, and the fourth writes the hint. Following further costs a parse per step and has never changed an answer; following less calls every properly delegating gate a leak.";
  "IT SAID THREE, AND THREE WAS TRUE WHEN IT WAS WRITTEN. The chain it described was the real longest one - a gate to a shared ratchet runner, that one to the runner working the wording out, and that one writing the hint. A fourth link was inserted above it later, when the two commit-message gates grew a runner of their own to share, and nothing brought the number along: the two gates were then reported as naming innocents for delegating correctly, which is the one thing this was built not to say. A number justified by a fact about the repo goes wrong on the day the fact does, and says nothing when it happens.";
  "Raising it can only ever call a name safe that was being called a leak, never the other way round, so it cannot hide an offence this could otherwise see. What it does not see either way is a gate that throws a record on one path and a sentence on another - that blindness is its own and was here before this number.";
  let depth = 5;
  return depth;
}
