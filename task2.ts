const fetch = require('node-fetch');

export const task2 = () => {
  return fetch('https://api2.inquisitive.com/latest/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName: 'ContentBrowser',
      query:
        'query ContentBrowser($input: ContentBrowserInput!) { contentBrowser(input: $input) {  topics { name  units { name  lessons { id name   subjects { id name } years { id name } }  } } }}',
      variables: {
        input: {
          years: ['1', '2', '3', '4'],
          subjects: ['history', 'science-and-technology', 'english', 'maths'],
          curriculums: [],
          includingDraft: false,
          includingComingSoon: false,
          includingFuture: false,
          includingEmptyTopic: false,
          initialTopics: 10,
          topicIds: [],
        },
      },
    }),
  })
    .then((res: Response) => res.json())
    .catch((err: Error) => console.log(err));
};
