import { NotFoundHandler } from "hono";

const handler: NotFoundHandler = (c) => {
  return c.render(<h1>Page not found</h1>);
};

export default handler;
