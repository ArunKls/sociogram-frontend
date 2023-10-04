import { Web3Storage } from 'web3.storage'

const addPost = async(data) => {
    
    const response = await fetch('http://192.168.1.135:8000/post', {
      method: 'POST',
      body: JSON.stringify({
          description: data['description']
      }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data1 = await response.json();
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