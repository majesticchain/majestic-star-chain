module.exports = {
  theme: "cosmos",
  title: "Majestic StarChain Documentation",
  locales: {
    "/": {
      lang: "en-US",
    },
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
  ],
  base: process.env.VUEPRESS_BASE || "/",
  plugins: ["vuepress-plugin-element-tabs"],
  head: [
    // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "msapplication-TileColor", content: "#2e3148" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    // ['link', { rel: "apple-touch-icon-precomposed", href: "/apple-touch-icon-precomposed.png" }],
  ],
  themeConfig: {
    repo: "majesticchain/majestic-star-chain",
    docsRepo: "majesticchain/majestic-star-chain",
    docsBranch: "main",
    docsDir: "docs",
    editLinks: true,
    custom: true,
    project: {
      name: "Majestic StarChain",
      denom: "MJT",
      ticker: "MJT",
      binary: "mjtd",
      testnet_denom: "MJT",
      testnet_ticker: "MJT",
      rpc_url: "http://localhost:8545/",
      rpc_url_testnet: "http://test.validator-1.majesticchain.io",
      rpc_url_local: "http://localhost:8545/",
      chain_id: "2137",
      testnet_chain_id: "2138",
      latest_version: "v0.4.0",
      version_number: "1",
      testnet_version_number: "1",
      block_explorer_url: "http://scan.majesticchain.io/",
    },
    logo: {
      src: "/majestic-star-chain.svg",
    },
    topbar: {
      banner: false,
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: "Reference",
          children: [
            {
              title: "Introduction",
              directory: true,
              path: "/intro",
            },
            {
              title: "Basics",
              directory: true,
              path: "/basics",
            },
            {
              title: "Core Concepts",
              directory: true,
              path: "/core",
            },
          ],
        },
        {
          title: "Guides",
          children: [
            {
              title: "Wallet",
              directory: true,
              path: "/guides/wallet",
            },
            {
              title: "Ethereum Tooling",
              directory: true,
              path: "/guides/tools",
            },
            {
              title: "Validators",
              directory: true,
              path: "/guides/validators",
            },
            {
              title: "Key Management System",
              directory: true,
              path: "/guides/kms",
            },
          ],
        },
        {
          title: "APIs",
          children: [
            {
              title: "JSON-RPC",
              directory: true,
              path: "/api/json-rpc",
            },
          ],
        },
        {
          title: "Block Explorers",
          children: [
            {
              title: "Block Explorers",
              path: "/tools/explorers",
            },
          ],
        },
        {
          title: "Resources",
          children: [
            {
              title: "Ethermint Library API Reference",
              path: "https://pkg.go.dev/github.com/tharsis/ethermint",
            },
            {
              title: "JSON-RPC API Reference",
              path: "/api/json-rpc/endpoints",
            },
          ],
        },
      ],
    },
    footer: {
      logo: "/majestic-star-chain.svg",
      textLink: {
        text: "majesticswap.io",
        url: "https://www.majesticswap.io/",
      },
      smallprint: "This website is maintained by Majestic Coin Ltd.",
      links: [
        {
          title: "Documentation",
          children: [
            {
              title: "Cosmos SDK Docs",
              url: "https://docs.cosmos.network/master/",
            },
            {
              title: "Ethereum Docs",
              url: "https://ethereum.org/developers",
            },
            {
              title: "Tendermint Core Docs",
              url: "https://docs.tendermint.com",
            },
          ],
        },
      ],
    },
    versions: [
      {
        label: "main",
        key: "main",
      },
    ],
  },
};
