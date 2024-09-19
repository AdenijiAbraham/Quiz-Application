// import useSound from 'use-sound';
 // import correct from '../assets/correct.mp3';
 // import play from '../assets/play.mp3';
 // import wwrong from '../assets/wwrong.mp3';

















 import './quiz.css';
 import React, { useState, useEffect } from 'react';
 
 export default function Quiz({
   data,
   setStopTime,
   questionNumber,
   setQuestionNumber,
   paused,
   setPaused,
   earned,
   setEarned,
   moneyPyramid,
   setWrongAnswer, // Receive the setWrongAnswer prop
    winner,
   setWinner,
 }) {
   const [question, setQuestion] = useState(null);
   const [selectedAnswer, setSelectedAnswer] = useState(null);
   const [clickedAnswer, setClickedAnswer] = useState('answer');
 
   useEffect(() => {
     setQuestion(data[questionNumber - 1]);
   }, [data, questionNumber]);
 
   const handleClick = (a) => {
     if (paused || selectedAnswer) return;
 
     setSelectedAnswer(a);
     setClickedAnswer("answer active");
 
     setTimeout(() => {
       setClickedAnswer(a.correct ? "answer correct" : "answer wrong");
       setPaused(true);
     }, 2000);
 
     setTimeout(() => {
       if (a.correct) {
         if (questionNumber === moneyPyramid[0].id) {
           setEarned(moneyPyramid.find(m => m.id === questionNumber).amount);
           setStopTime(true);
           setWinner(true);
         } else {
           setQuestionNumber(prev => prev + 1);
           setSelectedAnswer(null);
           setPaused(false);
         }
       } else {
         setWrongAnswer(true); // Update wrongAnswer state when the answer is wrong
         setStopTime(true);
         

       }
     }, 6000);
   };
 
   return (
     <div className="quiz">
       <div className="questions">{question?.question}</div>
       <div className="answers">
         {question?.answers.map(a => (
           <div
             key={a.text}
             className={selectedAnswer === a ? clickedAnswer : "answer"}
             onClick={() => handleClick(a)}
           >
             {a.text}
           </div>
         ))}
       </div>
     </div>
   );
 }
 








