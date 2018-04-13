function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  if(arrPenumpang === '') {
    return [];
  }
  
  var passenger = [];
  
  for(let i = 0; i < arrPenumpang.length; i++) {
    // console.log(arrPenumpang[i])
    if(passenger[i] === undefined) {
      let angkot = {};
      angkot.penumpang = arrPenumpang[i][0];
      angkot.naikDari = arrPenumpang[i][1];
      angkot.tujuan = arrPenumpang[i][2];
      
      let awal = 0;
      let akhir = 0;
      for(let j = 0; j < rute.length; j++) {
        if(arrPenumpang[i][1] == rute[j]) {
          awal = j;
        }
        if(arrPenumpang[i][2] == rute[j]) {
          akhir = j;
        }
      }
      angkot.bayar = (akhir - awal) * 2000;
      passenger.push(angkot);
    } else {
      let angkot = {};
      angkot.penumpang = arrPenumpang[i][0];
      angkot.naikDari = arrPenumpang[i][1];
      angkot.tujuan = arrPenumpang[i][2];
      let awal = 0;
      let akhir = 0;
      for(let j = 0; j < rute.length; j++) {
        if(arrPenumpang[i][1] == rute[j]) {
          awal = j;
        }
        if(arrPenumpang[i][2] == rute[j]) {
          akhir = j;
        }
      }
      angkot.bayar = (akhir - awal) * 2000; 
      passenger.push(angkot);
    }
  }
  return passenger;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]