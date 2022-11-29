

var ep = new AWS.Endpoint('awsproxy.example.com');
var s3 = new AWS.S3({ endpoint: ep });
s3.service.endpoint.hostname == 'awsproxy.example.com'
