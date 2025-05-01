<!DOCTYPE html>
<html>
<head>
    <title>Formulir Pengunjung - Perpustakaan Siva Cahaya Suhailah</title>
</head>
<body>
    <h2>Formulir Data Pengunjung</h2>
    <form method="POST" action="">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br><br>

        <label>NIP:</label><br>
        <input type="text" name="nip" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Nomor Telepon:</label><br>
        <input type="text" name="telepon" required><br><br>

        <label>Jenis Kelamin:</label><br>
        <input type="radio" name="jenis_kelamin" value="Perempuan" required> Perempuan
        <input type="radio" name="jenis_kelamin" value="Laki-laki"> Laki-laki<br><br>

        <label>Alamat:</label><br>
        <textarea name="alamat" rows="4" cols="40" required></textarea><br><br>

        <label>Jenis Pengunjung:</label><br>
        <select name="jenis_pengunjung" required>
            <option value="">--Pilih--</option>
            <option value="Mahasiswa">Mahasiswa</option>
            <option value="Dosen">Dosen</option>
            <option value="Tenaga Pendidik">Tenaga Pendidik</option>
            <option value="Pustakawan">Pustakawan</option>
            <option value="Staff">Staff</option>
        </select><br><br>

        <input type="submit" value="Kirim">
    </form>
</body>
</html>
