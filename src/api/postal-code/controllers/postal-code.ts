/**
 * A set of functions called "actions" for `postal-code`
 */

import { Context } from "koa";
import service from "../services/postal-code";

interface Params {
  postalCode: string;
}

export default {
  getAddressByPostalCode: async (ctx: Context, next) => {
    try {
      const { postalCode }: Params = ctx.params;

      ctx.headers["content-type"] = "Application/json";

      const address = await service().get(postalCode);

      ctx.body = address;
    } catch (err) {
      ctx.body = err;
    }
  },
};
