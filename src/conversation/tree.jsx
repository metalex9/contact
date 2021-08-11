import React from 'react';

const NFT_EXPLANATION_URL =
  'https://alexbainter.notion.site/NFTs-b24610b8189b4be8865aa834293086d4';
const DONATE_URL = 'https://play.generative.fm/donate';

const nft = [
  {
    id: 'nft-check',
    message: 'Real quick... does this have something to do with NFTs?',
    replies: [
      {
        message: "Yeah how'd you know?!",
        to: 'nft-handler',
      },
      {
        message: 'Uhh... no?',
        to: 'no-nft',
      },
    ],
  },
  {
    id: 'nft-handler',
    message: 'Lucky guess...',
  },
  {
    message: "So here's the deal: I'm not interested in making or selling NFTs",
  },
  {
    id: 'nft-terms',
    message:
      "I'm happy to build software that generates tokenizable output, but I don't want to be involved with selling it.",
  },
  {
    message: 'Is that an arrangement that could work for you?',
    replies: [
      {
        message: 'Sure!',
        to: 'nft-agree',
      },
      {
        message: 'Not really...',
        to: 'project-denial',
      },
      {
        message: "Wait, why don't you like NFTs?",
        to: 'nft-explanation',
      },
    ],
  },
  {
    id: 'no-nft',
    message: 'Oh thank god. Anyways...',
    to: 'project-terms',
  },
  {
    id: 'nft-agree',
    message: 'Cool',
    to: 'project-terms',
  },
  {
    id: 'nft-explanation',
    message: () => (
      <>
        You can find my thoughts on NFTs{' '}
        <a href={NFT_EXPLANATION_URL} target="_blank" rel="noreferrer noopener">
          here.
        </a>
      </>
    ),
    to: 'nft-terms',
  },
  {
    id: 'nft-request',
    message: 'What makes you say that?',
    replies: [
      {
        message: "I'd be interested in buying some",
        to: 'nft-buy-request',
      },
      {
        message: 'Other people might buy them (but not me)',
        to: 'nft-no-buy',
      },
    ],
  },
  {
    id: 'nft-buy-request',
    message: 'What is it about NFTs that makes you want to buy some from me?',
    replies: [
      {
        message: 'I mostly want to support you and your work',
        to: 'nft-support',
      },
      {
        message:
          'I mostly want to collect your work, possibly as an investment',
        to: 'nft-speculate',
      },
    ],
  },
  {
    id: 'nft-support',
    message: 'I really appreciate that!',
  },
  {
    message: () => (
      <>
        I don't sell NFTs, but you can find better ways to support me and my
        work at{' '}
        <a href={DONATE_URL} target="_blank" rel="noreferrer noopener">
          play.generative.fm/donate
        </a>
      </>
    ),
    replies: [
      {
        message: 'Okay, thanks!',
        to: 'anything-else',
      },
      {
        message: 'But I want to collect some of your work',
        to: 'nft-speculate',
      },
    ],
  },
  {
    id: 'nft-speculate',
    message: "I understand, but I can't really relate",
  },
  {
    message:
      "I've never seen a NFT I wanted to buy, so the idea of trying to sell them makes me a little uncomfortable",
  },
  {
    message:
      "You'll just have to accept that I choose not to tokenize my work. Sorry!",
    replies: [
      {
        message: 'Okay, I understand',
        to: 'anything-else',
      },
      {
        message: 'But I want to support you.',
        to: 'nft-support',
      },
    ],
  },
  {
    id: 'nft-no-buy',
    message: "Sorry, that's just not a great pitch...",
    to: 'anything-else',
  },
];

const project = [
  {
    id: 'project-terms',
    message:
      "When working with others, I don't really have the energy for collaborations, but I can do commissions.",
  },
  {
    message:
      "In other words, I only take on projects where I'm guaranteed payment.",
  },
  {
    message: 'Were you planning to pay me for my work?',
    replies: [
      {
        message: 'Of course!',
        to: 'project-acceptance',
      },
      {
        message: 'Not exactly...',
        to: 'project-denial',
      },
    ],
  },
  {
    id: 'project-acceptance',
    message: 'Great!',
  },
  {
    message:
      'Just to set expectations upfront, what I do is really a niche form of software engineering, and I charge accordingly.',
  },
  {
    message: 'My current rate is $125 per hour.',
  },
  {
    message:
      'Obviously, different projects can take very different amounts of time to do.',
  },
  {
    message:
      'For example, a custom music generator can take ~10 hours, not including a website.',
  },
  {
    message:
      "I'd be happy to discuss what you had in mind and give you a rough estimate.",
  },
  {
    message: () => (
      <>
        Send the details to{' '}
        <a href="mailto:hire@alexbainter.com">hire@alexbainter.com</a> to get
        started.
      </>
    ),
    to: 'anything-else',
  },
  {
    id: 'project-denial',
    message: "I understand, but I don't think I can help you. Sorry!",
    to: 'anything-else',
  },
];

const licensing = [
  {
    id: 'licensing',
    message: () => (
      <>
        Yep, check out{' '}
        <a href="https://record.generative.fm/licensing">
          record.generative.fm/licensing
        </a>
        .
      </>
    ),
    to: 'anything-else',
  },
];

const showAndTell = [
  {
    id: 'show-and-tell',
    message: () => (
      <>
        Send a link to{' '}
        <a href="mailto:showandtell@alexbainter.com">
          showandtell@alexbainter.com
        </a>
        .
      </>
    ),
  },
  {
    message: "I might not respond but I'll check it out.",
    to: 'anything-else',
  },
];

const mainReplies = [
  {
    message: 'I was thinking we could work together',
    to: 'nft-check',
  },
  {
    message: 'Can I use your music for something?',
    to: 'licensing',
  },
  {
    message: 'I want to show you something cool',
    to: 'show-and-tell',
  },
  {
    message: 'You should sell NFTs!',
    to: 'nft-request',
  },
  {
    message: 'Something else...',
    to: 'else',
  },
];

const tree = [
  {
    message: "Hey what's up?",
    replies: mainReplies,
  },
  {
    id: 'else',
    message: () => (
      <>
        Send an email to{' '}
        <a href="mailto:hello@alexbainter.com">hello@alexbainter.com</a>.
      </>
    ),
    replies: [
      {
        message: 'Thanks!',
        to: 'anything-else',
      },
      {
        message: 'I think a call might be better',
        to: 'no-calls',
      },
    ],
  },
  {
    id: 'anything-else',
    message: 'Anything else?',
    replies: mainReplies,
  },
  {
    id: 'no-calls',
    message: "Sorry, I don't have the energy to call everyone who asks me to.",
  },
  {
    message:
      'If you want to discuss something, please include all the details in an email.',
    to: 'anything-else',
  },
]
  .concat(nft)
  .concat(project)
  .concat(licensing)
  .concat(showAndTell);

export default tree;
