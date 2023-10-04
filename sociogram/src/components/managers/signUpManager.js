import { Web3Storage } from 'web3.storage'
import { BASE_URL } from '../../constants/constants';

const signUpManager = async(data) => {

    const response = await fetch(BASE_URL+'/signup', {
      method: 'POST',
      body: JSON.stringify({
            "name":data['name'],
            "age":data['age'],
            "password":data['password'],
            "email":data['email'] 
      }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data1 = await response.json();
    return data1
}

function getAccessToken () {
  return process.env.WEB3
}


function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

async function storeFiles (files) {
  const client = makeStorageClient()
  const cid = await client.put(files)
  console.log('stored files with cid:', cid)
  return cid
}



export default signUpManager;