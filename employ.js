const fs = require('fs');
var filesystem = require('fs');
//create
filesystem.appendFileSync("employees.json", 'utf8', (err) => {
    if (err) console.log(err);
});
//append
fs.appendFile('employees.json', '\n Elif Nur KÜÇÜK', 'utf8', (err) => {
    if (err) console.log(err);
});
//read
fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});
//delete
//fs.unlink('employees.json', (err) => {
 //   if (err) console.log(err);
//});
