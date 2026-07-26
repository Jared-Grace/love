export function work_items_standing() {
  "Work that is always available, so a Claude asking what to do next is never told nothing. Every entry is safe to start without asking the human, because it either preserves behaviour or only adds a new named unit that nothing calls yet.";
  "Listed rather than ranked, so the caller picks. What each one removes is the thing to weigh: a transform takes the model out of a shape of editing for good, a gate takes the reading out and stops a regression being paid for twice, and collapsing duplication shrinks what has to be read before a later edit. Those hold in general, which is exactly why they cannot settle a particular case - a duplication in code being edited today beats a transform for a shape that has come up once.";
  "These never run out, which is the point. A measured item has a finish line and stops being work once cleared; a direction stays true after every pass, so the list below is what keeps the queue from ever emptying.";
  let dry = {
    title: "DRY refactor",
    why: "Authored duplication is the debt that grows fastest, and collapsing it preserves behaviour, so it never needs a decision from the human.",
    how: "Find a repeated shape, extract one named unit, then replace every site of it - not only the two sites that made you notice.",
  };
  let transform = {
    title: "New transform",
    why: "A transform automates a shape of editing for good, so the time it saves compounds over every later edit by every Claude.",
    how: "Build upward from atoms: one part picks a node, another part changes a node, and each new half multiplies with every existing opposite half. Keep each to a few parts.",
  };
  let gate = {
    title: "New gate",
    why: "A gate turns work the human must read into work a machine proves, which is what makes running many Claudes at once safe.",
    how: "Take a rule that today lives only in prose and make it fail the build, then add its function to the gate list.",
  };
  let items = [transform, gate, dry];
  return items;
}
