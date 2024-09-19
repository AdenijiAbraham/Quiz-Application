import React, { useEffect, useState } from 'react';
import './App.css';
import Quiz from './components/quiz';
import data from './components/data';
import Timer from './components/Timer';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1); 
  const [stopTime, setStopTime] = useState(false); 
  const [earned, setEarned] = useState("$ 0");
  const [paused, setPaused] = useState(false); 
  const [wrongAnswer, setWrongAnswer] = useState(false); // New state for wrong answer
  const [winner, setWinner] = useState(false);
  const [timeout, setTimeout] = useState(false)

    const moneyPyramid = [
    { id: 1, amount: "$100" }, 
    { id: 2, amount: "$200" },
    { id: 3, amount: "$500" },
    { id: 4, amount: "$1,000" },
    { id: 5, amount: "$5,000" },
    { id: 6, amount: "$10,000" },
    { id: 7, amount: "$20,000" },
    { id: 8, amount: "$50,000" },
    { id: 9, amount: "$100,000" },
    { id: 10, amount: "$200,000" },
    { id: 11, amount: "$500,000" },
    { id: 12, amount: "$1,000,000" },
  ].reverse();  

  const balloonImages = [
    require('./Balloons/balloon1.png'),
    require('./Balloons/balloon2.png'),
    require('./Balloons/balloon3.png'),
    require('./Balloons/balloon4.png'),
    require('./Balloons/balloon5.png'),
  ];
  useEffect(() => {
    if (questionNumber > 1) {
      setEarned(moneyPyramid.find(m => m.id === questionNumber ).amount);
    }
  }, [moneyPyramid, questionNumber]);

  const togglePause = () => {
    setPaused(prev => !prev);
  };

  return (
    <div className='app'>
      <div className='main'>
        {stopTime ? (

<>
          {timeout ? ( 
            <>
              {earned === "$ 0" ? ( // Check if player has earned nothing
                <h1 className='endTextrightAnswer'>Time Out, Game Over</h1>
              ) : ( <>
              <div>
                <h1 className='endTextrightAnswer'>Time out, Game Over</h1>
                <h1 className='endTextrightAnswer earned' > You Won : {earned}. </h1>
                </div>
                </>

              )}
            </>
) : (
  
          
          <>
                        {wrongAnswer ? (
                          <>
                <h1 className='endTextrightAnswer'>Sorry, wrong answer </h1>
              <h1 className='endText'>You Won {earned}</h1> {/* "You Won" for wrong answer */}          
              </>
            ) : (

              <>
                {winner && questionNumber === moneyPyramid[0].id ? ( // Display only after last question
                  <>
                    <h1 className='endText'>Congratulations!!!</h1>
                    <h1 className='endText'>You Won {earned}</h1>
                    {/* Balloon Container to render 5 balloons */}
                     {/* Balloon Container to render 5 balloons */}
                     <div className="balloonContainer">
                      {balloonImages.map((balloon, index) => (
                        <img
                          key={index}
                          src={balloon} // Dynamically set the balloon image
                          alt={`Balloon ${index + 1}`}
                          className={`balloon balloon-${index}`} // Assign unique class to each balloon
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className='endText'>You Won: {earned}</h1>
                  </>
                )}
              </>
            )}
          </>
             )}
          </>
                
        ) : (
          <>
            <div className='top'>
              <div className="timer">
                <Timer setStopTime={setStopTime} questionNumber={questionNumber} paused={paused} setTimeout = {setTimeout}/>
              </div>
              <button onClick={togglePause} className="pauseButton">
                {paused ? "Resume" : "Pause"}
              </button>
            </div>
            <div className='Bottom'>
              <Quiz
                data={data}
                setStopTime={setStopTime}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                paused={paused}
                setPaused={setPaused} 
                earned={earned}
                setEarned={setEarned}
                moneyPyramid={moneyPyramid}
                winner = {winner} 
                setWinner = {setWinner}
                setWrongAnswer={setWrongAnswer} // Pass the state setter to Quiz
                timeout = {timeout}
                setTimeout = {setTimeout}
              />
            </div>
          </>
        )}
      </div>
      <div className='pyramid'>
        <ul className='moneyList'>
          {moneyPyramid.map(m => 
            <li key={m.id} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className='moneyListItemNumber'>{m.id}</span>
              <span className='moneyListItemAmount'>{m.amount}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;






