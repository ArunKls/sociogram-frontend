const signUpManager = async(data) => {

    console.log("enetered into sungup",data)
    debugger
    const response = await fetch('http://192.168.1.135:8000/signup', {
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

export default signUpManager;