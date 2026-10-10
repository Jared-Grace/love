export function js_flow_object_methods_plain() {
  "The methods on Object that only read or copy the values of what they are handed, so calling one says nothing about reaching the language's machinery: each answers with keys, values or a copy, never a prototype, a descriptor or a setter.";
  "Left out on purpose: getPrototypeOf and setPrototypeOf reach the chain every object inherits from; defineProperty and getOwnPropertyDescriptor reach getters and setters, and the setter behind __proto__ is one of them; create takes a prototype.";
  let names = [
    "keys",
    "values",
    "entries",
    "fromEntries",
    "getOwnPropertyNames",
    "getOwnPropertySymbols",
    "assign",
    "hasOwn",
    "is",
    "freeze",
    "isFrozen",
    "seal",
    "isSealed",
    "preventExtensions",
    "isExtensible",
  ];
  return names;
}
