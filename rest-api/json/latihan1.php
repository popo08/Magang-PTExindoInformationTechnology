<?php

// $mahasiswa = [
//     [
//     "nama" => "Arif Wicaksono",
//     "nim" => 2000018229,
//     "j_k" => "L"
//     ],
//     [
//         "nama" => "Wicaksono",
//         "nim" => "2000017378",
//         "j_k" => "L"
//     ]
// ];


//mengubah array/object menjadi json
$dbh = new PDO ('mysql:host=localhost;dbname=db_webservice', 'root',
'');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db -> execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);


$data = json_encode($mahasiswa);
echo $data;

?>