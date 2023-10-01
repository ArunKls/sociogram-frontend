const addPost = async(title, body) => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
          title: title,
          body: body,
          userId: Math.random().toString(36).slice(2),
      }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data1 = await response.json();
}