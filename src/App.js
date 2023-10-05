import './App.css';

function App() {
  return (
    <>
    <div className='smiles'>
      <div className='smile'><img src="./images/1.png" alt="1smile" /><div className='result'>0</div></div>
      <div className='smile'><img src="./images/2.png" alt="2smile" /><div className='result'>0</div></div>
      <div className='smile'><img src="./images/3.png" alt="3smile" /><div className='result'>0</div></div>
      <div className='smile'><img src="./images/4.png" alt="4smile" /><div className='result'>0</div></div>
      <div className='smile'><img src="./images/5.png" alt="5smile" /><div className='result'>0</div></div>
      <div className='smile'><img src="./images/6.png" alt="6smile" /><div className='result'>0</div></div>
      <div className='smile'><img src="./images/7.png" alt="7smile" /><div className='result'>0</div></div>
    </div>
    <div>
      <button>Result</button>
      <div className="victory"></div>
    </div>


    </>
  );
}

export default App;