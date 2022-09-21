function submit_form(){
    var nama_pasien=document.getElementById("nama_pasien").value;
    var tanggal_lahir=document.getElementById("tanggal_lahir").value;
    var tempat_lahir=document.getElementById("tempat_lahir").value;
    var jenis_kelamin=document.getElementById("jenis_kelamin").value;
    var alamat=document.getElementById("alamat").value;
    var provinsi=document.getElementById("provinsi").value;
    var kecamatan=document.getElementById("kecamatan").value;
    var kelurahan=document.getElementById("kelurahan").value;
    var hp=document.getElementById("hp").value;
    var kode_pos=document.getElementById("kode_pos").value;
    var agama=document.getElementById("agama").value;
    var pendidikan_pasien=document.getElementById("pendidikan_pasien").value;
    var pekerjaan_pasien=document.getElementById("pekerjaan_pasien").value;

    var hubungan=document.getElementById("hubungan").value;
    var nama_pj=document.getElementById("nama_pj").value;
    var pendidikan_pj=document.getElementById("pendidikan_pj").value;
    var pekerjaan_pj=document.getElementById("pekerjaan_pj").value;

    // Code for password validation
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    
    // other validations required code
    if (nama_pasien == '') {
        alert('Nama pasien tidak boleh kosong!');
    }
    else if(!letters.test(nama_pasien)){
        alert('Nama pasien harus mengandung huruf saja!');
    }
    else if(tempat_lahir == ''){
        alert('Tempat Lahir tidak boleh kosong!');
    }
    else if(tanggal_lahir == ''){
        alert('Tanggal lahir tidak boleh kosong!');
    }
    else if(jenis_kelamin == ''){
        alert('Jenis kelamin tidak boleh kosong!');
    }
    else if(alamat == ''){
        alert('Alamat tidak boleh kosong!');
    }
    else if(provinsi == ''){
        alert('Provinsi tidak boleh kosong!');
    }
    else if(!letters.test(provinsi)){
        alert('Provinsi hanya harus terdiri dari huruf!');
    }
    else if(kecamatan == ''){
        alert('Kecamatan tidak boleh kosong!');
    }
    else if(!letters.test(kecamatan)){
        alert('Kecamatan hanya harus terdiri dari huruf!');
    }
    else if(kelurahan == ''){
        alert('Kelurahan tidak boleh kosong!');
    }
    else if(!letters.test(kelurahan)){
        alert('Kelurahan/Desa hanya harus terdiri dari huruf!');
    }
    else if(hp == ''){
        alert('Nomor hp tidak boleh kosong!');
    }
    else if(!hp.match(numbers)){
        alert('Nomor hp hanya harus terdiri dari angka!');
    }
    else if(kode_pos == ''){
        alert('Kode pos tidak boleh kosong!');
    }
    else if(!kode_pos.match(numbers)){
        alert('Kode pos hanya harus terdiri dari angka!');
    }
    else if(pekerjaan_pasien == ''){
        alert('Pekerjaan pasien tidak boleh kosong!');
    }
    else if(!letters.test(pekerjaan_pasien)){
        alert('Pekerjaan pasien hanya harus terdiri dari huruf!');
    }
    else if(hubungan == ''){
        alert('Hubungan dengan pasien tidak boleh kosong!');
    }
    else if(nama_pj == ''){
        alert('Nama penannggung jawab tidak boleh kosong!');
    }
    else if(pendidikan_pj == ''){
        alert('Pendidikan penanggung jawab tidak boleh kosong!');
    }
    else if(pekerjaan_pj == ''){
        alert('Pekerjaan penanggung jawab tidak boleh kosong!');
    }
    else{
        alert("Data pasien telah disubmit!");
    }
}