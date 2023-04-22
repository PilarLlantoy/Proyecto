export default function Root() {
  return (
    <>
      <div id="sidebar" style={{textAlign: 'center', width: '100%'}}>
        <h1>Welcome to Fractal Orders</h1> 
        <nav> 
          <a href={`/my-orders`}>Start</a>  
        </nav>
      </div>
    </>
  );
}