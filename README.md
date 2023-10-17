# Hackathon

[Info](https://gist.github.com/batyshkaLenin/47df0766b564789634af1859a24b1d3e#%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%8B-%D0%B8-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8)

# Stack

- [Svelte](https://svelte.dev/docs/introduction)
- [SvelteKit](https://kit.svelte.dev/docs/introduction)
- [trpc](https://trpc.io/docs)
- [@tanstack/svelte-query - V5](https://tanstack.com/query/v5/docs/svelte/overview)
  - доки по [Реакту](https://tanstack.com/query/v5/docs/react/overview) куда более полные, но многие идеи между фреймворкам аналогичные
- [trpc-svelte-query](https://github.com/ottomated/trpc-svelte-query)

# Scripts

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open

# To create a production version of your app:
pnpm run build

# Start a server to preview build
pnpm run preview
```

To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
