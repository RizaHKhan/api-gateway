# Hello World

We create a simple endpoint and create a Lambda function that handles the request

Its very simple,

1. Create the function
   - The runtime, code(location), and handler({file}.{name of function})
2. Create the api gateway
   - reference the hanlder (the function we created in #1)
   - proxy false
3. Add a resource (so `/endpoint`)
4. Add method to that resource (so, `GET`, `POST`, etc)
