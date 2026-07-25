export async function memory_link_gate_run() {
  "Gate: a double-bracket link naming a note must name one that exists, or say plainly that it is one to write. Held here because a link is written once and followed by every session afterwards, and a wrong one costs a Claude a read that finds nothing and then a wrong belief about what it knows.";
  "Clearing a failure is one edit either way: write the note, put the marker on the link, or - for a marker whose note has since been written - take the marker off.";
  "Green from the day it was added, which is the precondition for holding anyone to it.";
  let defects = await memory_link_defects();
  for (let defect of defects) {
    let link = property_get(defect, "link");
    let kind = property_get(defect, "kind");
    let suggestion = property_get(defect, "suggestion");
    console.log(kind + "  " + link + "  ->  " + suggestion);
  }
  console.log("link defects: " + defects.length);
  if (greater_than(defects.length, 0)) {
    throw new Error("memory link gate: " + defects.length + " to reconcile");
  }
  let r = {
    defects: 0,
  };
  return r;
}
