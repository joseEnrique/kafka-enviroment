var kafka = require('kafka-node'),
    client = new kafka.Client('192.168.122.102:2181/', 'producer-client'),
    producer = new kafka.Producer(client),
    payload = [{
        topic: 'tfg',
        messages: ['it works!!']
    }];

producer.on('ready', () => {
    for (var i = 0; i < 10; i++) {
        producer.send(payload, (err, data) => {
            console.log(data);
        });
    }

});

producer.on('error', err => {
    console.log(err);
});
