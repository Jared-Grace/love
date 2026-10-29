export function functions_outside_direct_harmless() {
  "The functions that go outside directly but change nothing anywhere that a revert cannot reach, each decided once by reading it, so the gate over the outside list stops asking about them.";
  "Being listed here lets nothing through that was refused before: the walk never refused these, and this list is read only by the gate, never by the check. It answers one question - has anyone looked at this sender - and a new sender nobody has looked at is what turns the gate red.";
  "The names are spelled rather than imported, so this list reaches nothing it names.";
  let names = [];
  return names;
}
