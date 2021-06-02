document.addEventListener('DOMContentLoaded', () => {
 let seconds = 0;
 counter = document.getElementById('counter');
 

 function countUp() {
    if(!suspend) {
        seconds += 1;
        counter.innerText = seconds;
    }
   
 }

 
 const timer = function() {
    setInterval(countUp, 1000);
 }

 suspend = false;

 if(!suspend) {
    timer();
}    
 console.log(suspend);

 const minusButton = document.getElementById('minus');
 const plusButton = document.getElementById('plus');
 
 minusButton.addEventListener('click', function() {
     seconds -= 1;
     counter.innerText = seconds;
 });

 plusButton.addEventListener('click', function() {
     seconds += 1;
     counter.innerText = seconds;
 });



 const likeButton = document.getElementById('heart');
 likeButton.addEventListener('click', function(e) {
    const likes = document.querySelector('.likes');
    const li = document.createElement('li');
    console.log(e);
    
    let listArray = [{number: 0, likeCount: 0}];
   
        function addObject() {
            
            let foundNumber = listArray.find(element => element.number === seconds);
            
            if(!!foundNumber) {
                foundNumber.likeCount.push(1);

             

                console.log(foundNumber);
            } else{
                {listArray.push({number2: seconds, likeCount2: 1})};
                
            }
            return listArray;

          
        }
        addObject();
       
       
        console.log(listArray);
        
    li.innerText = `${seconds} has been liked 1 times`;
    likes.appendChild(li);

 });

 
    

            
         

        // // listArray[0] = listContainer.likeCount;
        // // listArray[1] = listContainer.number;

       
     
         
        //  if(seconds === listContainer.number) {
        //     listContainer.likeCount += 1;
        //     listArray.push(listContainer);
        //     // listArray[0]++;
        //     console.log(listContainer);
          

        //     }else if(seconds !== listContainer.number) {
        //         listContainer.likeCount = 1;
        //         listArray.push(listContainer);
        //         // listArray[0] = 1;

        //     }
            
    
 
   
    

        const pauseButton =  document.getElementById('pause');
        pauseButton.addEventListener('click', stopTimer);
        function stopTimer() {
                clearInterval(timer);
        
                likeButton.disabled = true; 
                plusButton.disabled = true;
                minusButton.disabled = true;

                toggle(); 
            
        }
       
        function toggle () {
            if(pauseButton.innerText == 'pause') {
                pauseButton.innerText = 'resume'; 
                suspend = true;

                } else {
                    pauseButton.innerText = 'pause';
                suspend = false;
                if(!timer) {
                    timer();
                }
                likeButton.disabled = false; 
                plusButton.disabled = false;
                minusButton.disabled = false;
                timer;
                }
        }
//comments
        const commentList = document.getElementById('list');
        const inputField = document.getElementById('comment-input');
        const submitButton = document.getElementById('submit');
        
        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            li = document.createElement('li');
            li.innerText = inputField.value;
            commentList.appendChild(li);
    
        })


       
    });


     
      

        //  const numberClicked = (li.innerText).split(' ');
        
        
        // listContainer.push(numberClicked);
        //console.log(listContainer);

       
        // const parsedNumber = parseInt(numberClicked[0], 10);
        // console.log(parsedNumber);
        // console.log(seconds);
       
        // if(parsedNumber === seconds){
        //     likeCount += 1;
        //     console.log(likeCount);

        // }else {
        //     likeCount += 1;
        //     console.log(likeCount);
            
        // }
        
        

     
     
     


    // const listArray = {...container, appendListItem};
    // container.number = seconds;
    // console.log(listArray);


   // let likeCount = 0;
    // if(li.innerText === seconds) {
    //     likeCount = 1 + likeCount;
    //     console.log(likeCount);
    // } else {
    //     likeCount = 1; 
    // }
    //li.innerText = ` has been liked`;
