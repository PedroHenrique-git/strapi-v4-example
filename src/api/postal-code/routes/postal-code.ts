export default {
  routes: [
    {
      method: "GET",
      path: "/postal-code/:postalCode",
      handler: "postal-code.getAddressByPostalCode",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
