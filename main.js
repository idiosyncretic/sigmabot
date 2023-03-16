const {PythonShell} = require('python-shell');

let options = {
  mode: 'text',
  pythonPath: '/usr/bin/python', // path to the Python interpreter
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: '.', // path to your Python script
  args: ['value1', 'value2', 'value3'] // arguments passed to the Python script
};

PythonShell.run('bot.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});
