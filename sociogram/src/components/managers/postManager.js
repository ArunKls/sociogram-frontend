import { Web3Storage } from 'web3.storage'
import { BASE_URL, COOKIES } from '../../constants/constants';
const addPost = async(data) => {

    
    
    const response = await fetch(BASE_URL+'/post', {
      method: 'POST',
      body: JSON.stringify({
          description: data['description']
      }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer '+COOKIES.get("access_token")
      },
    });
    const data1 = await response.json();
    console.log(data1);
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

  export default addPost