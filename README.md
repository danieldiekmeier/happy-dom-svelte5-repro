# Reproduction

1. Install dependencies with `pnpm install`
2. Run the specs with `pnpm test`
3. You should see this error:

```
TypeError: Cannot read properties of null (reading 'Symbol(nodeArray)')
 ❯ get firstChild node_modules/.pnpm/happy-dom@15.8.3/node_modules/happy-dom/src/nodes/node/Node.ts:272:25
 ❯ get_first_child node_modules/.pnpm/svelte@5.1.9/node_modules/svelte/src/internal/client/dom/operations.js:85:28
     83|  * @returns {Node | null}
     84|  */
     85| /*@__NO_SIDE_EFFECTS__*/
       |                            ^
     86| export function get_next_sibling(node) {
     87|  return next_sibling_getter.call(node);
 ❯ Module.child node_modules/.pnpm/svelte@5.1.9/node_modules/svelte/src/internal/client/dom/operations.js:109:10
 ❯ Repro src/Repro.svelte:37:33
 ❯ node_modules/.pnpm/svelte@5.1.9/node_modules/svelte/src/internal/client/render.js:230:16
 ❯ update_reaction node_modules/.pnpm/svelte@5.1.9/node_modules/svelte/src/internal/client/runtime.js:327:56
 ❯ Module.update_effect node_modules/.pnpm/svelte@5.1.9/node_modules/svelte/src/internal/client/runtime.js:455:18
 ❯ create_effect node_modules/.pnpm/svelte@5.1.9/node_modules/svelte/src/internal/client/reactivity/effects.js:98:26
 ❯ Module.branch node_modules/.pnpm/svelte@5.1.9/node_modules/svelte/src/internal/client/reactivity/effects.js:331:9
 ❯ node_modules/.pnpm/svelte@5.1.9/node_modules/svelte/src/internal/client/render.js:212:25
 ```
