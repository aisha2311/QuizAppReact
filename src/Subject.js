import React, {useState} from 'react'
import Question from "./Question"

export function Java() {

  const javaQuestion = [
    {
      qnum :"1",
      ques :"what is  java ?  ",
      opA :"database",
      opB : "variable ",
      opC :"programming language",
      opD :"game" ,
      ans :"c"
    },
    {
      qnum :"2",
      ques :"what is  variable ?  ",
      opA :"database",
      opB : "entity to store data ",
      opC :"programming language",
      opD :"game" ,
      ans :"b"
    },
    {
      qnum :"3",
      ques :"how many type of data type are there in java ?  ",
      opA :"one",
      opB : "tw0 ",
      opC :"three",
      opD :"four" ,
      ans :"b"
    }
  ]

  //this will contain all the answers selected by user
  const [answer, setAnswers] = useState({})

  //declaration of handleSubmit , it will be dealing with form handling
   const handleSubmit =(event) =>{

   }
   //going to take care of the the option selected by users
   const handleOnChange= (questionNum, selectedOption) =>{

   }

  return (
    <div>
    <h1>java component</h1>
    
    <form onSubmit={handleSubmit}>
     {
      javaQuestion.map(
        (question) => (
          <Question 
          qnum = {question.qnum}
          ques ={question.ques}
          opA ={question.opA}
          opB ={question.opB}
          opC ={question.opC}
          opD ={question.opD}
          ans ={question.ans}
          onChange = {handleOnChange}
          />
        )
      )
     }
   
      <br></br>
        <br></br>
    <button type="submit">submit</button>
      
    </form>
 </div>
  )
}

export function Sql() {
  
    const sqlQuestion = [
    {
      qnum :"1",
      ques :"what is  sql ?  ",
      opA :"database",
      opB : "variable ",
      opC :"programming language",
      opD :"game" ,
      ans :"A"
    },
    {
      qnum :"2",
      ques :"Which sql keyword is used to retrieve specific data from table? ",
      opA :"select",
      opB : "insert ",
      opC :"retrieve",
      opD :"fetch" ,
      ans :"A"
    },
  
    {
      qnum :"3",
      ques :"Which of the following is not a valid SQL type? ",
      opA :"float",
      opB : "numeric ",
      opC :"decimal",
      opD :"character" ,
      ans :"C"
    },
    {
      qnum :"4",
      ques :" Which of the following are TCL commands? ",
      opA :"commit and rollback",
      opB : "update and truncate ",
      opC :"select and insert",
      opD :"grant and revoke" ,
      ans :"A"
    },
    {
      qnum :"5",
      ques :"Which statement is used to delete all rows in a table without having the action logged? ",
      opA : "delete",
      opB : "remove ",
      opC :"drop",
      opD :"truncate" ,
      ans :"d"
    }

    ]
     //this will contain all the answers selected by user
  const [answer, setAnswers] = useState({})

  //declaration of handleSubmit , it will be dealing with form handling
   const handleSubmit =(event) =>{

   }
   //going to take care of the the option selected by users
   const handleOnChange= (questionNum, selectedOption) =>{

   }
    
    return (
      <div>
      <h1>sql component</h1>
      
      <form onSubmit={handleSubmit}>
       {
        sqlQuestion.map(
          (question) => (
            <Question 
            qnum = {question.qnum}
            ques ={question.ques}
            opA ={question.opA}
            opB ={question.opB}
            opC ={question.opC}
            opD ={question.opD}
            ans ={question.ans}
            onChange = {handleOnChange}
            />
          )
        )
       }
     
        <br></br>
          <br></br>
      <button type="submit">submit</button>
        
      </form>
   </div>
    )
}


export  function Html() {

  const htmlQuestions = [
    {
      qnum : '1',
      ques :  "What does the abbreviation HTML stand for?",
      opA : " HyperText Markup Language",
      opB : " HighText Markup Language",
      opC : " HyperText Markdown Language",
      opD : " none of the ab0ve",
      ans : "A",

    },
    {
      qnum : "2",
      ques :  "How many size of headers are available in HTML by default?",
      opA : "5",
      opB : "1",
      opC : " 3",
      opD : " 6",
      ans : "D"

    },
    {
      qnum : "3",
      ques :  " what are the type of lists availabel in HTML?",
      opA : "Ordered , Unordered Lists",
      opB : "Bulleted , Numbered Lists",
      opC : " Named , UnNamed List",
      opD : " None of the above",
      ans : "A"
      
    }
  ]
   //this will contain all the answers selected by user
   const [answer, setAnswers] = useState({})

   //declaration of handleSubmit , it will be dealing with form handling
    const handleSubmit =(event) =>{
 
    }
    //going to take care of the the option selected by users
    const handleOnChange= (questionNum, selectedOption) =>{
 
    }
    return (
      <div>
      <h1>sql component</h1>
      
      <form onSubmit={handleSubmit}>
       {
        htmlQuestions.map(
          (question) => (
            <Question 
            qnum = {question.qnum}
            ques ={question.ques}
            opA ={question.opA}
            opB ={question.opB}
            opC ={question.opC}
            opD ={question.opD}
            ans ={question.ans}
            onChange = {handleOnChange}
            />
          )
        )
       }
     
        <br></br>
          <br></br>
      <button type="submit">submit</button>
        
      </form>
   </div>
    )
        

             }
