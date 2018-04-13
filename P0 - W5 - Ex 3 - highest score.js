function highestScore (students) {
    // Code disini
    
    var tempOutput = {};
    
    // for(let i  = 0; i < students.length; i++) {
    //   for(let j = i; j < students.length; j++) {
    //     if(students[i].class[0] < students[j].class[0]) {
    //       var temp = students[i];
    //       students[i] = students[j];
    //       students[j] = temp;
    //     }
    //   }
    // }
    // console.log(students);
    
    // for(let i = 0; i < students.length; i++) {
    //   if(tempOutput.class === undefined) {
    //       tempOutput = students[i];
    //   } else if(tempOutput.class == students[i].class && tempOutput.score < students[i].score) {
    //     tempOutput = students[i];
    //   } else if(tempOutput.class != students[i].class){
    //     output.push(tempOutput);
    //     tempOutput = [];
    //     tempOutput = students[i];
    //   } 
      
    // }
    // output.push(tempOutput);
    
    for(let i = 0; i < students.length; i++) {
     
      if(tempOutput[students[i].class] === undefined) {
        let filter = {};
        filter.name = students[i].name;
        filter.score = students[i].score;
        tempOutput[students[i].class] = filter;
  
      } else {
  
        if (tempOutput[students[i].class].score < students[i].score) {
          let filter = {};
          filter.name = students[i].name;
          filter.score = students[i].score;
          tempOutput[students[i].class] = filter;
        }
      }
    }
    
    return tempOutput;
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}