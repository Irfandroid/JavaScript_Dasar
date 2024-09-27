// var, let, const

let global = 'Hello, my name is Irfan';
console.log(global);

let nama = 'Muhamad Irfan Afriyansyah';
nama = 'M Irfan A';
console.log('Nama Saya adalah', nama);

const umur = 23;
// umur = 24; // Tidak bisa mengubah nilai konstanta

function printDataNama(nama = 'John', umur = 17) {
    let dataSaya = `Nama saya adalah ${nama} dan umur saya adalah ${umur}`;
    console.log(dataSaya);
}
printDataNama();    
printDataNama('Irfan', 23); 

// Menggunakan backtick untuk string template
let dataSaya = `Nama saya adalah ${nama} dan umur saya adalah ${umur}`; 
console.log(`Nama Saya Adalah`, nama, `Umur saya`, umur);

// Object -> Property -> Nested Variable
const data_Saya = {
    nama: 'Muhamad Irfan',
    umur: 23,
    printDataNama: function(nama = 'John Doe', umur = 23) {
        console.log(`Nama saya adalah ${nama} dan umur saya ${umur}`);
    }
};

// Memanggil method dalam object
data_Saya.printDataNama(data_Saya.nama, data_Saya.umur);

// Menambahkan Object Lain seperti pada kodingan pertama
const data_Saya2 = {
    nama: 'Testing nama 3',
    umur: 28,
    printDataNama: function(nama = 'Nama harus diisi', umur = 'Umur harus diisi') {
        let data = `Nama saya adalah ${nama} dan umur saya ${umur}`;
        console.log(data);
    }
};

// Mengubah property object dan memanggil method
data_Saya2.nama = 'Malik';
data_Saya2.umur = 30;
data_Saya2.printDataNama(data_Saya2.nama, data_Saya2.umur);

// Menambahkan function printData2 seperti pada kodingan pertama
function printData2() {
    let nama = 'Nuzul';
    let umur = 20;
    console.log(nama);
    console.log(umur);
}
printData2();


class printDataClass {
    constructor() {
        this.nama = 'Andrew Ng';
        this.umur = 20;
    }

    printDataNama3() {
        console.log(this.nama);
        console.log(this.umur);
    }
}

const dataClass = new printDataClass();
dataClass.printDataNama3();
