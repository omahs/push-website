/* eslint-disable no-irregular-whitespace */

// Knowledge Base Header Configuration:
// This edits the Header, description oon /chain/knowledge
// FOr the header image, if you want to use an image, use the image field.
// If you want to use a youtube link or video, attach the embed link url in the video field

export const ChainKnowledgeBaseHeaderConfig = {
  title: 'Introducing Push Chain',
  description: `Push Chain is a shared state blockchain for shared app experience. Push Chain is capable of doing tx from any chain and connecting L1s, L2s, & L3s with <1 second finality with linear scalability`,
  // video: {
  //   src: 'https://www.youtube.com/embed/lhiwW3SfoZE',
  //   title: 'title',
  // },
  image: `knowledge-frame`,
  learnMore: 'Hey! Want to learn more about Push Chain?',
};

// Knowledge Base Content Configuration:
// - Add a new object with the following fields:
//   - `slug`: URL identifier for the knowledge base item.
//   - `image`, `title`, `subtitle`: Metadata for the item.
//   - `content`: Use HTML or Markdown to create the article (similar to the blog section).
//   - `url`: For external links, provide the full URL instead of using `content`.
//NOTE: , cause we use a plugin to get this to work, you have to restart your local server to see the code changes after editing a blog article(TODO: add hot-reload functionality)

export const knowledgeBaseArticleContent = [
  {
    slug: 'why-push-chain',
    image: 'why-push-chain',
    title: 'Why Push Chain?',
    subtitle:
      'Push Protocol recently announced its governance proposal of launching Push Chain. Push Protocol envisions the creation of Push Chain which enables a shared state L1 chain designed to support truly scalable consumer applications and universal applications.',
    url: '/blog/why-push-chain',
  },
  // {
  //   slug: 'evolution-of-push-chain',
  //   image: 'evolution-of-push-chain',
  //   title: 'Evolution of Push',
  //   subtitle:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget aliquet lectus. In at porttitor lacus. Morbi fermentum egestas porta.',
  //   url: '/blog/evolution-of-push-chain',
  // },
  {
    slug: 'parallel-validators-and-dynamic-sharding',
    image: 'benchmarking-push-chain-nodes',
    title: 'Benchmark of Push Chain',
    subtitle:
      'The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain...',
    url: '/blog/parallel-validators-and-dynamic-sharding',
  },
  {
    slug: 'randomized-node-selection-push-chain',
    image: 'randomized-parallel',
    title: 'Node Randomization',
    subtitle:
      'One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network.',
    url: '/blog/randomized-node-selection-push-chain',
  },
  // {
  //   slug: 'is-push-chain-another-layer-1',
  //   title: 'Is Push Another L1?',
  //   subtitle:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget aliquet lectus. In at porttitor lacus. Morbi fermentum egestas porta.',
  //   url: '/blog/is-push-chain-another-layer-1',
  // },
  {
    slug: 'consumer-apps-that-can-be-built-on-push-chain',
    image: 'consumer-apps',
    title: 'Consumer Apps 🫶🏽 Push Chain?',
    subtitle:
      'Blockchain technology has transformed the way we interact digitally, but its current ecosystem faces significant challenges in scalability, usability, and accessibility, particularly for consumer-focused applications. Push Chain emerges as a cutting-edge Proof-of-Stake blockchain...',
    url: '/blog/consumer-apps-that-can-be-built-on-push-chain/',
  },
  {
    slug: 'faq-push-chain',
    image: 'frequently-asked-questions',
    title: 'Push Chain’s Frequently Asked Questions',
    subtitle:
      'The place to find answers to all the popular questions the community has asked about Push Chain. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.',
    url: '/blog/faq-push-chain/',
  },
  {
    slug: 'understand-proof-of-stake-and-push-chain',
    image: 'understand-proof-of-stake',
    title: 'Understand Proof of Stake (POS) and Push Chain PoS',
    subtitle:
      'In a globally distributed computing environment, achieving collective agreement on the true state of the system has always been a complex challenge. Fortunately, there are algorithms (specialized instructions) that assist in preserving this ‘single-truth-state’ while...',
    url: '/blog/understand-proof-of-stake-and-push-chain/',
  },
];
