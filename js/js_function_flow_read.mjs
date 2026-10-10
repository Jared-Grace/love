import { js_flow_globals_machine } from "./js_flow_globals_machine.mjs";
import { js_flow_globals_reflect } from "./js_flow_globals_reflect.mjs";
import { js_flow_globals_allowed } from "./js_flow_globals_allowed.mjs";
import { js_flow_packages_pure } from "./js_flow_packages_pure.mjs";
import { property_name_internal_names } from "./property_name_internal_names.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { js_flow_object_methods_plain } from "./js_flow_object_methods_plain.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_names_unbound_mentioned_referenced } from "./js_names_unbound_mentioned_referenced.mjs";
import { js_key_facts } from "./js_key_facts.mjs";
import { js_flow_methods_plain } from "./js_flow_methods_plain.mjs";
import { js_flow_key_power_name } from "./js_flow_key_power_name.mjs";
import { js_key_safe_is } from "./js_key_safe_is.mjs";
import { js_flow_control_tests } from "./js_flow_control_tests.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function js_function_flow_read(f_name, ast, known) {
  "Everything the flow check needs from one function's file, read once: which names each name is worked out from, which names each may be the same object as, which calls it makes and what goes into each argument, what it hands back, what it changes in place, which values it calls, and every way it reaches outside the repo. Known is the set of every function name, because a name the file reads without importing it is about to be imported by the canonicalizer.";
  "Names are followed by spelling, not by scope, so two different variables sharing a name are joined into one. That can only make the answer more cautious.";
  "A name passed to a call counts as worked out from everything else in that call, because the call may change the thing the name holds - unless the call is a method by a plain name, or a repo function, whose edge is followed only once that function is known to change what it is handed. Types are not known here, so nothing else is ruled out on the grounds that a value could not be changed.";
  "Mutations lists, for every line that may change a thing in place, the names that thing could be held under; the check works out from them which functions change what they are handed. Dynamic lists, for every call of a value rather than of a named function, the names that value could be held under.";
  let machine_names = js_flow_globals_machine();
  let reflect_names = js_flow_globals_reflect();
  let allowed_names = js_flow_globals_allowed();
  let pure = js_flow_packages_pure();
  let internal = [
    ...property_name_internal_names(),
    "prepareStackTrace",
    "captureStackTrace",
    "getThis",
    "getFunction",
  ];
  let imported = new Set();
  let top_mutable = false;
  let fn = null;
  let machine = [];
  let reflect = [];
  let strange = [];
  for (let s of ast.body) {
    if (equal(s.type, "ImportDeclaration")) {
      let source = s.source.value;
      let relative = source.startsWith(".");
      let b2 = pure.includes(source);
      if (relative) {
        for (let sp of s.specifiers) {
          imported.add(sp.local.name);
        }
      } else if (not(b2)) {
        machine.push("imports " + source);
      }
      continue;
    }
    let exported =
      equal(s.type, "ExportNamedDeclaration") &&
      s.declaration &&
      equal(s.declaration.type, "FunctionDeclaration") &&
      equal(s.declaration.id.name, f_name);
    if (exported) {
      fn = s.declaration;
      continue;
    }
    ("A line of prose beside the function, written as a bare text, keeps nothing.");
    let prose =
      equal(s.type, "ExpressionStatement") &&
      equal(s.expression.type, "Literal");
    if (not_equal(s.type, "FunctionDeclaration") && not(prose)) {
      top_mutable = true;
    }
  }
  if (equal(fn, null)) {
    return null;
  }
  let referenced2 = js_identifiers_referenced_nodes(ast);
  let referenced = new Set(referenced2);
  let outside_object = false;
  let object_plain = js_flow_object_methods_plain();
  ("The unbound reading counts imported names and the function's own name as unbound too, so anything the file binds itself is set aside here before a name is taken for a repo function or an outside one.");
  let bound = new Set([f_name]);
  ("Functions written in this file under a name that cannot be pointed elsewhere - a function declaration, or a const holding a function - so calling one runs code this reading has already seen.");
  let functions_local = new Set([f_name]);
  function binding_read(v) {
    let x = v.node;
    if (equal(x.type, "VariableDeclarator")) {
      function lambda(b) {
        let r = bound.add(b);
        return r;
      }
      js_identifiers_referenced_names(x.id).forEach(lambda);
      function lambda9(n) {
        let ni = js_node_is(n);
        return ni;
      }
      let declaration = v.stack.filter(lambda9).at(-2);
      let fixed =
        not_equal(declaration, undefined) &&
        equal(declaration.kind, "const") &&
        equal(x.id.type, "Identifier") &&
        not_equal(x.init, null) &&
        /Function/.test(x.init.type);
      if (fixed) {
        functions_local.add(x.id.name);
      }
    }
    if (equal(x.type, "FunctionDeclaration") && x.id) {
      functions_local.add(x.id.name);
    }
    if (/Function/.test(x.type) || equal(x.type, "CatchClause")) {
      for (let p of x.params ?? [x.param]) {
        if (p) {
          function lambda2(b) {
            let r2 = bound.add(b);
            return r2;
          }
          js_identifiers_referenced_names(p).forEach(lambda2);
        }
      }
    }
    if (/Function|Class/.test(x.type) && x.id) {
      bound.add(x.id.name);
    }
  }
  js_visit(ast, binding_read);
  for (let name of js_names_unbound_mentioned_referenced(ast, referenced)) {
    if (imported.has(name) || equal(name, f_name)) {
      continue;
    }
    ("A bound name is set aside only from being taken for a repo function. An outside name that is also bound somewhere is still counted, because the binding may sit in a scope that does not cover every use.");
    let b4 = allowed_names.includes(name);
    if (known.has(name)) {
      let b3 = bound.has(name);
      if (not(b3)) {
        imported.add(name);
      }
    } else if (machine_names.includes(name)) {
      machine.push("the outside name " + name);
    } else if (equal(name, "Object")) {
      ("Object is judged at each use instead, below, since most of its methods only read what they are handed.");
      outside_object = true;
    } else if (reflect_names.includes(name)) {
      reflect.push("the outside name " + name);
    } else if (not(b4)) {
      strange.push("the outside name " + name);
    }
  }
  let facts = js_key_facts(ast);
  ("A map, not an object, because a variable may be called anything - constructor included.");
  let index = new Map();
  let calls = [];
  let returns = [];
  let mutations = [];
  let dynamic = [];
  let methods_plain = js_flow_methods_plain();
  let methods_calling = [
    "map",
    "filter",
    "reduce",
    "reduceRight",
    "some",
    "every",
    "find",
    "findIndex",
    "findLast",
    "findLastIndex",
    "flatMap",
    "forEach",
    "then",
    "catch",
    "finally",
    "replace",
    "replaceAll",
    "from",
  ];
  let handed = new Set();
  ("A repo function named without being called is the function itself, not its answer, so it is read under a made-up name that no source can spell: what it would hand back plays no part. Handing it on is judged by itself, below.");
  let called = new Set();
  function called_read(v) {
    let x = v.node;
    if (
      (equal(x.type, "CallExpression") || equal(x.type, "NewExpression")) &&
      equal(x.callee.type, "Identifier")
    ) {
      called.add(x.callee);
    }
  }
  js_visit(ast, called_read);
  let names_known = new Map();
  function names(node) {
    if (equal(node, null) || equal(node, undefined)) {
      let r3 = [];
      return r3;
    }
    ("A try's test is its whole block, asked once for every line inside it, so each answer is kept.");
    let b5 = names_known.has(node);
    if (not(b5)) {
      let found = new Set();
      for (let n of js_identifiers_referenced_nodes(node)) {
        let itself = imported.has(n.name) && not(called.has(n));
        found.add(itself ? "(the function " + n.name + ")" : n.name);
      }
      names_known.set(node, [...found]);
    }
    let r4 = names_known.get(node);
    return r4;
  }
  ("Two questions are asked of every value, and they differ. Worked out from: which names a value was computed from, which is what decides what a path or a command can say. The same thing as: which names a value may be the very same object as, or hold - which is all that decides whether changing it changes something else, or whether it can be a power. A yes or no computed from an object is worked out from it but is never it.");
  ("A record read by a key the code cannot prove may hand back the language's machinery - constructor, or the prototype every object shares - so such a read may be the made-up name below, which nothing in source can spell. A write by such a key is not a read: it changes one record, and a change to a shared record is caught where the record itself came from a read like this.");
  let key_power = js_flow_key_power_name();
  let key_reads = new Set();
  function key_read(v) {
    let x = v.node;
    if (
      not_equal(x.type, "MemberExpression") ||
      not(x.computed) ||
      js_key_safe_is(x.property, facts)
    ) {
      return;
    }
    let v2 = v.stack.slice(0, -1);
    let parent = parent_node(v2);
    let written =
      not_equal(parent, null) &&
      ((equal(parent.type, "AssignmentExpression") && equal(parent.left, x)) ||
        (equal(parent.type, "UpdateExpression") && equal(parent.argument, x)) ||
        (equal(parent.type, "UnaryExpression") &&
          equal(parent.operator, "delete")));
    if (not(written)) {
      key_reads.add(x);
    }
  }
  js_visit(ast, key_read);
  let aliases = new Map();
  function alias_add(bound, data, via, gate) {
    "Via, as for worked-out-from, is a repo function the line changes things through, followed only if it does change what it is handed. Gate is a repo function whose answer this made-up name stands for: the function is always reported, and what it was handed is followed only if it can hand back what it was handed.";
    for (let b of bound) {
      let b6 = aliases.has(b);
      if (not(b6)) {
        aliases.set(b, []);
      }
      aliases.get(b).push({
        data,
        via,
        gate,
      });
    }
  }
  let alias_known = new Map();
  let call_count = 0;
  function alias_names(node) {
    if (equal(node, null) || equal(node, undefined)) {
      let r5 = [];
      return r5;
    }
    let b7 = alias_known.has(node);
    if (not(b7)) {
      let v3 = alias_names_uncached(node);
      alias_known.set(node, v3);
    }
    let r6 = alias_known.get(node);
    return r6;
  }
  function alias_names_uncached(node) {
    let t = node.type;
    let fresh = [
      "Literal",
      "TemplateLiteral",
      "BinaryExpression",
      "UnaryExpression",
      "UpdateExpression",
    ];
    if (equal(t, "Identifier")) {
      let itself = imported.has(node.name) && not(called.has(node));
      let r7 = [itself ? "(the function " + node.name + ")" : node.name];
      return r7;
    }
    if (fresh.includes(t)) {
      let r8 = [];
      return r8;
    }
    if (equal(t, "LogicalExpression")) {
      let r9 = [...alias_names(node.left), ...alias_names(node.right)];
      return r9;
    }
    if (equal(t, "ConditionalExpression")) {
      let r10 = [
        ...alias_names(node.consequent),
        ...alias_names(node.alternate),
      ];
      return r10;
    }
    if (equal(t, "SequenceExpression")) {
      let v4 = node.expressions.at(-1);
      let r11 = alias_names(v4);
      return r11;
    }
    if (equal(t, "AssignmentExpression")) {
      let r12 = equal(node.operator, "=")
        ? alias_names(node.right)
        : [...alias_names(node.left), ...alias_names(node.right)];
      return r12;
    }
    if (
      [
        "AwaitExpression",
        "SpreadElement",
        "ChainExpression",
        "ParenthesizedExpression",
      ].includes(t)
    ) {
      let r13 = alias_names(node.argument ?? node.expression);
      return r13;
    }
    if (equal(t, "MemberExpression")) {
      let held = alias_names(node.object);
      let r14 = key_reads.has(node) ? [...held, key_power] : held;
      return r14;
    }
    if (equal(t, "ArrayExpression")) {
      function lambda3(e) {
        let r15 = alias_names(e);
        return r15;
      }
      let r16 = node.elements.flatMap(lambda3);
      return r16;
    }
    if (equal(t, "ObjectExpression")) {
      function lambda4(p) {
        let r17 = alias_names(equal(p.type, "Property") ? p.value : p);
        return r17;
      }
      let r18 = node.properties.flatMap(lambda4);
      return r18;
    }
    let callee =
      equal(t, "CallExpression") && equal(node.callee.type, "Identifier")
        ? node.callee.name
        : null;
    if (not_equal(callee, null) && imported.has(callee)) {
      call_count = call_count + 1;
      let answer = "(answer " + call_count + " of " + callee + ")";
      function lambda5(a) {
        let r19 = alias_names(a);
        return r19;
      }
      let v5 = node.arguments.flatMap(lambda5);
      alias_add([answer], v5, null, callee);
      let r20 = [answer];
      return r20;
    }
    if (equal(t, "CallExpression") || equal(t, "NewExpression")) {
      function lambda6(a) {
        let r21 = alias_names(a);
        return r21;
      }
      let handed_in = node.arguments.flatMap(lambda6);
      let from = equal(node.callee.type, "MemberExpression")
        ? node.callee.object
        : node.callee;
      let r22 = [...alias_names(from), ...handed_in];
      return r22;
    }
    ("Anything else - a function written in place, a class - may hold every name inside it.");
    let r23 = names(node);
    return r23;
  }
  function control_names(stack) {
    let out = [];
    for (let a of stack) {
      let b8 = js_node_is(a);
      if (not(b8)) {
        continue;
      }
      for (let t of js_flow_control_tests(a)) {
        out.push(...names(t));
      }
    }
    return out;
  }
  function source_add(bound, data, stack, via) {
    "What a name is worked out from is kept in two parts: the values that can flow into it, and the conditions deciding whether the line setting it runs. A condition can choose between values but cannot make a new one, so a question about which values are possible follows only the first part.";
    "Via is the repo function a name was handed to, when the only way that line changes the name is through that function changing what it is handed; null otherwise. It is followed only to a function that can change what it is handed, which is not known until every function is read.";
    let control = control_names(stack);
    for (let b of bound) {
      if (equal(b, key_power)) {
        continue;
      }
      let b9 = index.has(b);
      if (not(b9)) {
        index.set(b, []);
      }
      index.get(b).push({
        data,
        control,
        via,
      });
    }
  }
  function parent_node(stack) {
    for (let i = subtract(stack.length, 1); greater_than_equal(i, 0); i--) {
      if (js_node_is(stack[i])) {
        let r24 = stack[i];
        return r24;
      }
    }
    return null;
  }
  function statement_host(stack) {
    for (let i = subtract(stack.length, 1); greater_than_equal(i, 0); i--) {
      let a = stack[i];
      if (js_node_is(a) && /Statement|Declaration/.test(a.type)) {
        return a;
      }
    }
    return null;
  }
  ("Every line each name is read on, so a nested function's parameters can be followed to the lines that call it or hand it on. A line is the innermost statement around the name; the name naming its own function is not a use.");
  let used_in = new Map();
  function use_read(v) {
    let x = v.node;
    if (not_equal(x.type, "Identifier") || not(referenced.has(x))) {
      return;
    }
    let stack = v.stack.slice(0, -1);
    let parent = parent_node(stack);
    if (not_equal(parent, null) && equal(parent.id, x)) {
      return;
    }
    let host = statement_host(stack);
    if (equal(host, null)) {
      return;
    }
    let b10 = used_in.has(x.name);
    if (not(b10)) {
      used_in.set(x.name, []);
    }
    used_in.get(x.name).push(host);
  }
  js_visit(ast, use_read);
  function node_read(v) {
    let x = v.node;
    let stack = v.stack.slice(0, -1);
    let type = x.type;
    if (equal(type, "ImportExpression")) {
      let literal =
        equal(x.source.type, "Literal") &&
        pure.includes(String(x.source.value));
      if (not(literal)) {
        machine.push("an import worked out at run time");
      }
    } else if (["ThisExpression", "Super", "WithStatement"].includes(type)) {
      reflect.push("a " + type);
    } else if (equal(type, "MetaProperty") && equal(x.meta.name, "new")) {
      reflect.push("new.target");
    }
    let named = null;
    if (equal(type, "MemberExpression") && not(x.computed)) {
      named = x.property;
    }
    if (
      ["Property", "MethodDefinition", "PropertyDefinition"].includes(type) &&
      not(x.computed)
    ) {
      named = x.key;
    }
    if (not_equal(named, null)) {
      let key = equal(named.type, "Identifier")
        ? named.name
        : String(named.value);
      if (internal.includes(key)) {
        reflect.push("the key " + key);
      }
    }
    if (
      equal(type, "Literal") &&
      equal(typeof x.value, "string") &&
      internal.includes(x.value)
    ) {
      reflect.push("the text " + x.value);
    }
    if (equal(type, "VariableDeclarator")) {
      let v6 = names(x.id);
      source_add(v6, [...names(x.init), ...names(x.id)], stack, null);
      let v7 = names(x.id);
      let v8 = alias_names(x.init);
      alias_add(v7, v8, null, null);
    }
    if (equal(type, "AssignmentExpression")) {
      let v9 = names(x.left);
      source_add(v9, [...names(x.right), ...names(x.left)], stack, null);
      if (equal(x.left.type, "MemberExpression")) {
        ("Storing into a record makes the record hold the value, so whatever the record is may now hand it out.");
        let held = alias_names(x.left.object);
        let v10 = alias_names(x.right);
        alias_add(held, v10, null, null);
        mutations.push(held);
      } else {
        let v11 = names(x.left);
        let v12 = alias_names(x.right);
        alias_add(v11, v12, null, null);
      }
    }
    if (equal(type, "UpdateExpression")) {
      let v13 = names(x.argument);
      source_add(v13, [], stack, null);
      if (equal(x.argument.type, "MemberExpression")) {
        let v14 = alias_names(x.argument.object);
        mutations.push(v14);
      }
    }
    if (equal(type, "UnaryExpression") && equal(x.operator, "delete")) {
      let v15 = alias_names(
        equal(x.argument.type, "MemberExpression")
          ? x.argument.object
          : x.argument,
      );
      mutations.push(v15);
    }
    if (equal(type, "ForOfStatement") || equal(type, "ForInStatement")) {
      let v16 = names(x.left);
      let v17 = names(x.right);
      source_add(v16, v17, stack, null);
      if (equal(type, "ForOfStatement")) {
        let v18 = names(x.left);
        let v19 = alias_names(x.right);
        alias_add(v18, v19, null, null);
      }
    }
    if (equal(type, "CatchClause") && x.param) {
      let tried = parent_node(stack);
      let v20 = names(x.param);
      let v21 = names(tried.block);
      source_add(v20, v21, stack, null);
      let v22 = names(x.param);
      let v23 = names(tried.block);
      alias_add(v22, v23, null, null);
    }
    let nested = /Function/.test(type) && not_equal(x, fn);
    if (nested) {
      ("A nested function's parameters come from wherever it is called or handed on. A function with a name is followed to every line that names it; one without a name - a callback written in place - can only be called by the line it is written in.");
      let parent = parent_node(stack);
      let own = null;
      if (equal(type, "FunctionDeclaration")) {
        own = x.id.name;
      } else if (
        not_equal(parent, null) &&
        equal(parent.type, "VariableDeclarator") &&
        equal(parent.init, x) &&
        equal(parent.id.type, "Identifier")
      ) {
        own = parent.id.name;
      } else if (
        not_equal(parent, null) &&
        equal(parent.type, "AssignmentExpression") &&
        equal(parent.right, x) &&
        equal(parent.left.type, "Identifier")
      ) {
        own = parent.left.name;
      }
      let from = [];
      if (equal(own, null)) {
        from = names(statement_host(stack) ?? x);
      } else {
        for (let s of used_in.get(own) ?? []) {
          from.push(...names(s));
        }
      }
      let bound = [];
      for (let p of x.params) {
        bound.push(...names(p));
      }
      source_add(bound, from, stack, null);
      alias_add(bound, from, null, null);
      if (equal(type, "FunctionDeclaration")) {
        let v24 = names(x.body);
        source_add([x.id.name], v24, stack, null);
        let v25 = names(x.body);
        alias_add([x.id.name], v25, null, null);
      }
    }
    if (equal(type, "CallExpression") || equal(type, "NewExpression")) {
      let whole = names(x);
      let passed = [];
      for (let a of x.arguments) {
        passed.push(...names(a));
      }
      let callee = equal(x.callee.type, "Identifier") ? x.callee.name : null;
      ("Three kinds of call, by what may change what it is handed. A repo function: only if it is one that changes what it is handed, so the edge carries its name and is followed only then. A method by a plain name: nothing changes. Anything else - another method, a name handed in, a helper beside the function, a built-in - may change the thing it is called on and everything it is handed.");
      function lambda7(a) {
        let r25 = alias_names(a);
        return r25;
      }
      let passed_alias = x.arguments.flatMap(lambda7);
      if (not_equal(callee, null) && imported.has(callee)) {
        function lambda8(n) {
          let neq = not_equal(n, callee);
          return neq;
        }
        let v26 = whole.filter(lambda8);
        source_add(passed, v26, stack, callee);
        ("A repo function that changes what it is handed may store one argument inside another.");
        alias_add(passed_alias, passed_alias, callee, null);
      } else if (
        equal(x.callee.type, "MemberExpression") &&
        not(x.callee.computed) &&
        methods_plain.includes(x.callee.property.name)
      ) {
        ("Nothing changes, but some of these call a function they are handed - a list's map, a promise's then - so what they are handed is used as a callee would be.");
        if (methods_calling.includes(x.callee.property.name)) {
          dynamic.push(passed_alias);
        }
      } else if (
        not_equal(callee, null) &&
        allowed_names.includes(callee) &&
        not(bound.has(callee))
      ) {
        ("A built-in called by name - String, Error, Set - builds a new value out of what it is handed and changes none of it. A promise calls the function it is handed.");
        if (equal(callee, "Promise")) {
          dynamic.push(passed_alias);
        }
      } else {
        let changed = [...passed];
        let changed_alias = [...passed_alias];
        if (equal(x.callee.type, "MemberExpression")) {
          changed.push(...names(x.callee.object));
          changed_alias.push(...alias_names(x.callee.object));
        }
        source_add(changed, whole, stack, null);
        alias_add(
          changed_alias,
          [...changed_alias, ...alias_names(x.callee)],
          null,
          null,
        );
        mutations.push(changed_alias);
      }
      ("A call whose callee is a value rather than a function this file or the repo names - a name handed in, a variable, a key read - runs whatever that value is, so the value is followed like a changed thing: a power arriving there is used.");
      let named_callee =
        not_equal(callee, null) &&
        (imported.has(callee) ||
          functions_local.has(callee) ||
          allowed_names.includes(callee));
      let method_callee =
        equal(x.callee.type, "MemberExpression") && not(x.callee.computed);
      if (not(named_callee) && not(method_callee)) {
        let v27 = alias_names(x.callee);
        dynamic.push(v27);
      }
      if (not_equal(callee, null) && imported.has(callee)) {
        let args = [];
        for (let a of x.arguments) {
          args.push({
            data: names(a),
            alias: alias_names(a),
            spread: equal(a.type, "SpreadElement"),
          });
        }
        calls.push({
          callee,
          args,
          control: control_names(stack),
        });
      }
    }
    if (
      equal(type, "Identifier") &&
      outside_object &&
      equal(x.name, "Object") &&
      referenced.has(x)
    ) {
      let parent = parent_node(stack);
      let plain =
        not_equal(parent, null) &&
        equal(parent.type, "MemberExpression") &&
        equal(parent.object, x) &&
        not(parent.computed) &&
        object_plain.includes(parent.property.name);
      if (not(plain)) {
        reflect.push(
          "the outside name Object, used other than for a plain method",
        );
      }
    }
    if (
      equal(type, "Identifier") &&
      imported.has(x.name) &&
      referenced.has(x)
    ) {
      let parent = parent_node(stack);
      let called_here =
        not_equal(parent, null) &&
        (equal(parent.type, "CallExpression") ||
          equal(parent.type, "NewExpression")) &&
        equal(parent.callee, x);
      let binding =
        not_equal(parent, null) &&
        (parent.type.startsWith("Import") || equal(parent.id, x));
      if (not(called_here) && not(binding)) {
        handed.add(x.name);
      }
    }
    if (equal(type, "ReturnStatement") && x.argument) {
      let owner = null;
      for (let i = subtract(stack.length, 1); greater_than_equal(i, 0); i--) {
        if (js_node_is(stack[i]) && /Function/.test(stack[i].type)) {
          owner = stack[i];
          break;
        }
      }
      if (equal(owner, fn)) {
        returns.push({
          data: names(x.argument),
          alias: alias_names(x.argument),
          control: control_names(stack),
        });
      }
    }
  }
  ("The whole file is walked, not just the exported function, because a helper declared beside it runs with the same powers.");
  js_visit(ast, node_read);
  let params = [];
  for (let p of fn.params) {
    let v28 = names(p);
    params.push(v28);
  }
  let read = {
    f_name,
    params,
    imported: [...imported],
    top_mutable,
    index,
    aliases,
    calls,
    returns,
    mutations,
    dynamic,
    handed: [...handed],
    machine: [...new Set(machine)],
    reflect: [...new Set(reflect)],
    strange: [...new Set(strange)],
  };
  return read;
}
