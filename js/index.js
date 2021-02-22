var net = require('net');

const client = new net.Socket();
client.connect({ port: 59898 }, process.argv[2], () => {
  client.write(`${process.argv[3]}\r\n`);
});
client.on('data', (data) => {
  console.log(`Server says: ${data.toString('utf-8')}`);
  document.write(`Server says: ${data.toString('utf-8')}`);
  client.destroy();
});