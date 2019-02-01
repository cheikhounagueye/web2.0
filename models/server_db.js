var db = require('../db.js');


save_user_information = (data) => new Promise((resolve, reject)=>{
  db.query('INSERT INTO lottery_information SET ?',data, function(err,results, fields){
    if(err){
      reject('could not insert into lottery information');
    }
    resolve('Successful');
  });
})

get_total_amount = (data) => new Promise((resolve, reject)=>{
  db.query('SELECT sum(amount) as total_amount FROM lottery_information',null, function(err,results, fields){
    if(err){
      reject('could not get total amount');
    }
    resolve(results);
  });
})

module.exports = {
  save_user_information
}
