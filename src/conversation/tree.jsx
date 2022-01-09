import React from 'react';

const project = [
  {
    id: 'work-prompt',
    message: 'Like for a project or something full time?',
    replies: [
      {
        message: 'A project/part time',
        to: 'project-terms',
      },
      {
        message: 'Full time',
        to: 'hire-ft',
      },
    ],
  },
  {
    id: 'project-terms',
    message: 'Right now I only take on paid work, charged by the hour.',
  },
  {
    message: 'Would that work for you?',
    replies: [
      {
        message: 'Sure!',
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
    message: 'Cool, thanks for understanding.',
  },
  {
    message: 'My current rate is $250 per hour.',
  },
  {
    message: 'How I spend the hours you pay for is basically up to you.',
  },
  {
    message:
      'I could build something for you, we could pair program, we could chat about a project, or whatever works best for you.',
  },
  {
    message: 'How does that sound?',
    replies: [
      {
        message: 'Sounds good to me!',
        to: 'hire',
      },
      {
        message: "That probably won't work for me",
        to: 'project-denial',
      },
    ],
  },
  {
    id: 'hire',
    message: 'Great!',
  },
  {
    message:
      "I'm happy to chat over email with you, but for calls I ask to be paid for half of the expected duration in advance.",
  },
  {
    message: () => (
      <>
        Send me an email at{' '}
        <a href="mailto:hire@alexbainter.com">hire@alexbainter.com</a> to get
        started.
      </>
    ),
    to: 'anything-else',
  },
  {
    id: 'hire-ft',
    message: () => (
      <>
        Send the details to{' '}
        <a href="mailto:jobs@alexbainter.com">jobs@alexbainter.com</a>.
      </>
    ),
    to: 'anything-else',
  },
  {
    id: 'project-denial',
    message: "I understand, but I don't think I can help you. Sorry!",
    to: 'anything-else',
  },
  {
    id: 'hire-ft',
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
    to: 'work-prompt',
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
    message: "Sorry, I don't have the energy to call everyone who asks me.",
  },
  {
    message:
      'If you want to discuss something, please include all the details in an email.',
    to: 'anything-else',
  },
]
  .concat(project)
  .concat(licensing)
  .concat(showAndTell);

export default tree;
