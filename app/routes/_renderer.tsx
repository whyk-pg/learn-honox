import { reactRenderer } from "@hono/react-renderer";

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        {import.meta.env.PROD ? (
          <>
            <script type="module" src="/static/client.js" />
            <link href="/static/assets/style.css" rel="stylesheet" />
          </>
        ) : (
          <>
            <script type="module" src="/app/client.ts" />
            <link href="/app/style.css" rel="stylesheet" />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
});
