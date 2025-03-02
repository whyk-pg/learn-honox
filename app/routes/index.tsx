import { QrCode } from "@ark-ui/react/qr-code";
import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div className="py-8 text-center">
      <title>{name}</title>
      <h1 className="text-3xl font-bold">Hello, {name}!</h1>
      <Counter />

      <div className="w-md">
        <QrCode.Root defaultValue="http://ark-ui.com">
          <QrCode.Frame>
            <QrCode.Pattern />
          </QrCode.Frame>
        </QrCode.Root>
      </div>
    </div>,
  );
});
