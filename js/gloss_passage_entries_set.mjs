export function gloss_passage_entries_set(passage, entries) {
  "Write one passage's explanations back into it, in the shape the store keeps them.";
  "The store holds them as text rather than as a list, so putting them back is a formatting and not an assignment, and every sweep that changed a passage had written that formatting out for itself. It is one line and it was in four places, which is three places where a change to how the store spells its explanations would have been missed.";
  let value = json_format_to(entries);
  property_set(passage, "generated", value);
}
