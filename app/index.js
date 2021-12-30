const express = require('express');
const { createLogger, format, transports, } = require('winston')
const { combine, timestamp, label, prettyPrint, json } = format;
const app = express();

const logger = createLogger({
  format: combine(
    timestamp(),
    json()
  ),
  transports: [new transports.Console()]
})

app.get('/health', async (request, response) => {
  logger.log({
    level: 'info',
    message: 'What time is the testing at?'
  })
  response.send({
    ok: true
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on ' + port);
});