// create 2 html files
    // game.html
         //qList = [{
                                //        question:"",
                                //        options:[op1,op2,op3,op4],
                                //        correctAns: op1
                                //    },
                                // {
                                    //        question:"",
                                    //        options:[op1,op2,op3,op4],
                                    //        correctAns: op1
                                    //    },
                            // ]
        //timer = 75s;
        //click event on a start btn
            //start the timer
                //if timer === 0 game over
            //start displaying questions one by one
                //create var index = 0
                //if (index < qList.length)
                    //qList[index].question
                    // for loop over qList[index].options > create html element for qList[index].options[i]
                //index++
        //click on options element
            //Find which element user clicked (eg: event.target, matches("element"))
            //capture the value on the element (eg : "data-something", "<button value=''>", event.target)
            //compare the value to the correct answer. > //qList[index].correctAns
            //if (it's correct){
                //whatever time left that is user's  score 
                //display message to the user
            // else time left - penalty 
                    //display message to the user
            //save scores with initials in local storage
            //start displaying questions one by one
              //create index var = 0
            //   if (index < qList.length)
                    //qList[index].question
                    // for loop over qList[index].options > create html element for qList[index].options[i]
    //score.html
      //capture the score form the local storage and display it to user
      //reset the local storage with 0.