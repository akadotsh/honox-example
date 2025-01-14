import { css } from "hono/css";
import { createRoute } from "honox/factory";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div class={className}>
      <h1>About Page!</h1>
    </div>,
    { title: name }
  );
});
