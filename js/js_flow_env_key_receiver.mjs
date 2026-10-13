import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_flow_env_key_receiver(node) {
  "The thing whose environment a read like process.env.HOME looks in - the object before .env - or null when the node is not such a read.";
  "THE KEY MUST BE WRITTEN OUT IN CAPITALS, because that is what makes the answer text. A key of the environment is a variable's value, always text or nothing - but a key the environment does not hold falls through to what every object shares, and constructor or __proto__ hand back the language's machinery. Every name every object shares holds a small letter, so a key of capitals, digits and underscores can never be one of them. A key worked out at run time could be any of them, so it is never such a read.";
  let not_member =
    not_equal(node.type, "MemberExpression") ||
    node.computed ||
    not_equal(node.property.type, "Identifier");
  if (not_member) {
    return null;
  }
  let capitals = /^[A-Z_][A-Z0-9_]*$/.test(node.property.name);
  let env = node.object;
  let env_named =
    equal(env.type, "MemberExpression") &&
    not(env.computed) &&
    equal(env.property.type, "Identifier") &&
    equal(env.property.name, "env");
  if (not(capitals && env_named)) {
    return null;
  }
  let receiver = env.object;
  return receiver;
}
