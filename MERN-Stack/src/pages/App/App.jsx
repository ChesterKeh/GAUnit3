async function log() {
  // const response = await fetch("http://localhost:3000/api/");
  const response = await fetch("/api");
  const data = await response.json();
  console.log(data);
}
log();

function App() {
  return (
    <>
      <h1>MERN</h1>
    </>
  );
}

export default App;
