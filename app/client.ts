// app/client.ts
import { createClient } from "honox/client";
import type { ReactNode } from "react";

createClient({
  hydrate: async (elem, root) => {
    const { hydrateRoot } = await import("react-dom/client");
    hydrateRoot(root, elem as unknown as ReactNode);
  },
  // @ts-expect-error
  // biome-ignore lint/suspicious/noExplicitAny: 不足のため
  createElement: async (type: any, props: any) => {
    const { createElement } = await import("react");
    return createElement(type, props);
  },
});
