import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: (location) => location.pathname == '/',
});

registerApplication({
  name: '@ace/vue',
  app: () => System.import('@ace/vue'),
  activeWhen: ['/vue'],
  customProps: {
    a: 1,
  },
});

registerApplication({
  name: '@ace/react',
  app: () => System.import('@ace/react'),
  activeWhen: ['/react'],
  customProps: {
    a: 1,
  },
});

// registerApplication({
//   name: "@ace/navbar",
//   app: () => System.import("@ace/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
