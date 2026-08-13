export function qa_gate_timing_prefix() {
  "What a gate run writes in front of how long one gate took, and what reading one back looks for";
  "The same shape as the marker in front of a complaining gate's name, and for the same reason: a share of the gates is asked in a process of its own, and the only thing it can hand back other than what it printed is a result it never reaches when it goes red. A marked line survives both ways.";
  let v = "GATE TOOK  ";
  return v;
}
