export function property_name_internal_names() {
  "The property names every object answers to without anyone putting them there, and that lead from an ordinary object up to the language's own machinery.";
  "constructor is the one that matters most: an object's constructor's constructor is Function, and Function turns text into code that runs. __proto__ climbs to the prototype directly, and the four lookup and define names hand out its getter and setter, which climb there by a call instead.";
  "prototype is deliberately not here. Only a function has one, and by itself it reaches nothing these names do not already guard, while it is an ordinary English word that a tally of real text will meet.";
  let names = [
    "constructor",
    "__proto__",
    "__defineGetter__",
    "__defineSetter__",
    "__lookupGetter__",
    "__lookupSetter__",
  ];
  return names;
}
