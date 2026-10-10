import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_name_internal_names } from "./property_name_internal_names.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_keys_unproven } from "./js_keys_unproven.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { js_names_unbound_mentioned_referenced } from "./js_names_unbound_mentioned_referenced.mjs";
export function js_code_confined_refusals(code) {
  "every reason this code, run as a function body handed only a stand-in console, could reach something outside itself - an empty list is the clean answer";
  "The proof is a whitelist, not a list of bad words. Every name the code reads must be one it binds itself or one of a few harmless language names. Without an outside name, the only road out of a plain value is a property that leads to the language's machinery - constructor, __proto__ and the getter and setter lookups - so those keys are refused when spelled with a dot, and a key in brackets must be proven safe by the same reading the key gate uses.";
  "this, new.target, import() and with are refused because each hands over an outside value without naming it: in a function body made from text, this is the global object.";
  "The short list of banned names is a second fence, not the first. It only matters if the scope reading ever calls a name bound when the runtime would find it outside, and it costs nothing, because no lesson needs any of them.";
  "Measured 2026-10-10 over every program the course runs, thirty rounds of every lesson: 3998 programs, none refused.";
  let ast = null;
  try {
    ast = js_parse(code);
  } catch (e) {
    let r = ["the code does not parse"];
    return r;
  }
  let refusals = [];
  function refuse(reason) {
    let b = refusals.includes(reason);
    if (not(b)) {
      refusals.push(reason);
    }
  }
  let banned_types = [
    "ThisExpression",
    "Super",
    "MetaProperty",
    "ImportExpression",
    "WithStatement",
    "ImportDeclaration",
    "ExportNamedDeclaration",
    "ExportDefaultDeclaration",
    "ExportAllDeclaration",
  ];
  let banned_names = [
    "eval",
    "Function",
    "globalThis",
    "global",
    "window",
    "self",
    "process",
    "require",
    "arguments",
    "Reflect",
    "Object",
    "constructor",
  ];
  let internal = property_name_internal_names();
  function key_name(key) {
    if (equal(key.type, "Identifier")) {
      let r2 = key.name;
      return r2;
    }
    if (equal(key.type, "Literal")) {
      let r3 = String(key.value);
      return r3;
    }
    return null;
  }
  function node_read(v) {
    let n = v.node;
    if (banned_types.includes(n.type)) {
      refuse("a " + n.type);
    }
    if (equal(n.type, "Identifier") && banned_names.includes(n.name)) {
      refuse("the name " + n.name);
    }
    let named = null;
    if (equal(n.type, "MemberExpression") && not(n.computed)) {
      named = n.property;
    }
    let keyed = ["Property", "MethodDefinition", "PropertyDefinition"];
    if (keyed.includes(n.type) && not(n.computed)) {
      named = n.key;
    }
    if (not_equal(named, null)) {
      let name = key_name(named);
      if (equal(name, null) || internal.includes(name)) {
        refuse("the key " + name);
      }
    }
  }
  js_visit(ast, node_read);
  let keys = js_keys_unproven(ast);
  for (let key of keys) {
    refuse("the bracketed key " + key);
  }
  let allowed = [
    "console",
    "Math",
    "undefined",
    "NaN",
    "Infinity",
    "parseInt",
    "parseFloat",
    "isNaN",
    "isFinite",
    "String",
    "Number",
    "Boolean",
  ];
  let referenced2 = js_identifiers_referenced_nodes(ast);
  let referenced = new Set(referenced2);
  let unbound = js_names_unbound_mentioned_referenced(ast, referenced);
  for (let name of unbound) {
    let b2 = allowed.includes(name);
    if (not(b2)) {
      refuse("the outside name " + name);
    }
  }
  return refusals;
}
