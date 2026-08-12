export function qa_gate_hint_depth() {
  "How many functions deep to follow an argument before deciding it never reaches a hint.";
  "Three, because that is the longest chain the repo actually has: a gate hands its complaint to a shared ratchet runner, that one delegates to the runner that works the wording out, and that one writes the hint. Following further costs a parse per step and has never changed an answer; following less calls every properly delegating gate a leak.";
  let depth = 3;
  return depth;
}
