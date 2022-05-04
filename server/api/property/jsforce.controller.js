const jsforce = require('jsforce');


const {SF_LOGIN_URL, SF_LOGIN_USERNAME, SF_PASSWORD, SF_TOKEN} = process.env

export async function makeJSForceCalloutAndSaveInDB(req, res, next) {

const conn = new jsforce.Connection({
  loginUrl: SF_LOGIN_URL,
})
console.log(SF_LOGIN_URL,SF_LOGIN_USERNAME,SF_PASSWORD+SF_TOKEN);
conn.login(SF_LOGIN_USERNAME,SF_PASSWORD+SF_TOKEN, async (err, userInfo)=>{
  if(err){
    console.log(err);
    
  }else{

  let records = await conn.sobject("inspection__c")
  .select('*')
  // .limit(1)
  .execute(async function(err, records) {
    if(err){
      console.log(err);
    }else{
      return records
    }
  });
  res.send(records);
  }
})
}