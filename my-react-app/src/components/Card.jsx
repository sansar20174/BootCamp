function Card() {
    return (
    <div className="App">
      <img src="https://i.pinimg.com/736x/19/77/53/197753b0e69b736e9a9209ed3207655d.jpg" className="App-logo" alt="logo" height="300" />
      <h1>Meow Meow</h1>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
}
export default Card;
