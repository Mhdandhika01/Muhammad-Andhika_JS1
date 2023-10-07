/*if, else, nested if*/

var nilai = 85;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

var umur = 18;
var memilikiSIM = true;

if (umur >= 18) {
  console.log("Anda cukup umur.");
  if (memilikiSIM) {
    console.log("Anda dapat mengemudi.");
  } else {
    console.log("Anda tidak dapat mengemudi karena tidak memiliki SIM.");
  }
} else {
  console.log("Anda belum cukup umur untuk mengemudi.");
}


/*switch case*/
var hari = "Sabtu";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Sabtu");
    break;
  case "Selasa":
    console.log("Hari ini adalah Ahad");
    break;
  case "Rabu":
    console.log("Hari ini adalah Senin");
    break;
  default:
    console.log("Hari ini adalah hari lain");
}


/*for statement*/
for (var i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
  }

  
/*while, do while*/
  var count = 1;

while (count <= 10) {
  console.log("Iterasi ke-" + count);
  count++;
}



var count = 1;

do {
  console.log("Iterasi ke-" + count);
  count++;
} while (count <= 10);



/*function*/
function tambah(a, b) {
    return a + b;
  }
  
  var hasilPenambahan = tambah(7, 5);
  console.log("Hasil penambahan: " + hasilPenambahan);
  

