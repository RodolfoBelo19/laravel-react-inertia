import React, {useEffect, useState} from "react";

interface example {
  title: string
}

const Home = (props: example) => {
  let foo: string = "React";
  const bar: string = "TypeScript";

  const [counter, setCounter] = useState(0)

  if(counter < 0 ) {
    setCounter(0)
  }

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  useEffect(() => {
    console.log('this is props:', ({props}))
  }, [counter])

  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        {foo} + {bar} + it's beautiful
        <br/>
        this is props of the controller in laravel: { props.title }
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '300%',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '-15%',
      }}>
        Counter App
        <div style={{
          fontSize: '120%',
          position: 'relative',
          top: '10vh',
        }}>
          {counter}
        </div>
        <div className="buttons">
          <button style={{
            fontSize: '60%',
            position: 'relative',
            top: '20vh',
            marginRight: '5px',
            backgroundColor: 'green',
            borderRadius: '8%',
            color: 'white',
          }}
                  onClick={increment}>Increment</button>
          <button style={{
            fontSize: '60%',
            position: 'relative',
            top: '20vh',
            marginLeft: '5px',
            backgroundColor: 'red',
            borderRadius: '8%',
            color: 'white',
          }}
                  onClick={decrement}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default Home;
