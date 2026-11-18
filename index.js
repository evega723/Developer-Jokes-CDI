const axios = require('axios');

axios.get('https://ozarktechwebdev.com/api/jokes.json')
  .then(response => {

    const jokes = response.data.jokes;
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];

    console.log(`Here's a developer joke for today:Q: ${joke.question} A: ${joke.answer}`);
  })

  .catch(error => {
    console.error('Unable to fetch a developer joke:', error.message);
    process.exitCode = 1;
  });

