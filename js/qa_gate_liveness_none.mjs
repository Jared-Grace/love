export function qa_gate_liveness_none() {
  "The answer meaning nobody is working on any of this - no name being edited, and no name committed lately.";
  "It has a name of its own because it is given from more than one place and must be the same shape as a real answer everywhere. A reader further up cannot tell a nothing from a something, and that is what lets the collecting be written once.";
  let live = {
    flying: [],
    lately: [],
  };
  return live;
}
