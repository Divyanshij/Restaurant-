import app from "./app.js";
const PORT = 3000; // Change the port number here
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


