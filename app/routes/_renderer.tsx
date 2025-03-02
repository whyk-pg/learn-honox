// app/routes/_renderer.tsx
import { reactRenderer } from "@hono/react-renderer";

export default reactRenderer(({ children, title }) => {
  const script = import.meta.env.PROD ? "/static/client.js" : "/app/client.ts";
  const style = import.meta.env.PROD
    ? "/static/assets/style.css"
    : "/app/style.css";
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={style} />
        <script type="module" src={script} />
        {title ? <title>{title}</title> : ""}
      </head>
      <body>{children}</body>
    </html>
  );
});
