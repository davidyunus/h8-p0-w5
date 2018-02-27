function meleeRangedGrouping (str) {
  //your code here
  str = str.split(',');
  var temp = [];
  var arr1 = [];
  var arr2 = [];
  
  for(var i = 0; i < str.length; i++) {
    temp.push(str[i].split('-'));
    
    if(temp[i][1] == 'Ranged') {
      arr1.push(temp[i][0]);
    } else {
      arr2.push(temp[i][0]);
    }
    
  }
  
  if(str === '') {
    return [];
  }
  
  return [arr1, arr2];
  // console.log(temp);
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []