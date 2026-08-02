export function object_property_names(object) {
  "The names of the properties this object carries, as a list.";
  "Named for properties rather than for keys because that is the word the rest of this repo uses for the same thing - a property is got, set and deleted by name everywhere around here, so a list of them reads as the same subject rather than as a second one.";
  let names = Object.keys(object);
  return names;
}
