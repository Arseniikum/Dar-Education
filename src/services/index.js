import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '8928me26',
  dataset: 'production',
  token: 'skbHL3qn6PJIXsiztGyCk41icYrF2HgU9ok4KLZtOF0OKVknhgQVGew08IkRt2dZvvXuY3yNT7kn9GfkkF4LxRwloF91ySUIkTTqwIapc1o5qPt5GOy5neZ48OSgguEefRw9kOnXn8op6wmcmICZ4YcgnkOKtuKXEpZF6aK5kA9Ai9KWXzs8',
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
