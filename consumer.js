var kafka = require('kafka-node');
var Consumer = kafka.Consumer,
    client = new kafka.Client("192.168.122.102:2181/"),
    consumer = new Consumer(
        client, [{
            topic: 'tfg',
            partition: 0
        }], {
            autoCommit: false
        });

consumer.on('message', function(message) {

    console.log(message.value);
});
