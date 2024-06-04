/**
 * postal-code service
 */

import axios from "axios";

export default () => ({
  get: async (postalCode: string) => {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${postalCode}/json`
    );

    return data;
  },
});
