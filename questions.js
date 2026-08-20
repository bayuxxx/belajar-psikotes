const questions = [
    {
        q: "1. PENALARAN VERBAL (Sinonim): Kata yang memiliki makna paling dekat dengan 'Tekun' adalah...",
        options: { A: "Malas", B: "Rajin", C: "Pesimis", D: "Ragu" },
        answer: "B",
        explanation: "'Tekun' berarti giat, bersungguh-sungguh, dan konsisten dalam melakukan sesuatu. Sinonim yang paling tepat adalah Rajin."
    },
    {
        q: "2. PENALARAN VERBAL (Antonim): Lawan kata dari 'Dependen' adalah...",
        options: { A: "Bergantung", B: "Mandiri", C: "Subjektif", D: "Relevan" },
        answer: "B",
        explanation: "'Dependen' berarti bergantung pada orang/hal lain. Maka lawan katanya adalah independen atau Mandiri."
    },
    {
        q: "3. PENALARAN VERBAL (Analogi): Zoologi pada hewan seperti antropologi pada...",
        options: { A: "Serangga", B: "Tumbuhan", C: "Bintang", D: "Manusia" },
        answer: "D",
        explanation: "Zoologi adalah ilmu yang mempelajari tentang hewan, maka antropologi adalah cabang ilmu yang mempelajari tentang manusia."
    },
    {
        q: "4. PENALARAN VERBAL (Analogi): Suara : Telinga = Bau : ...",
        options: { A: "Parfum", B: "Hidung", C: "Mata", D: "Penciuman" },
        answer: "B",
        explanation: "Suara ditangkap oleh indera pendengaran yaitu telinga. Maka Bau ditangkap oleh indera penciuman yaitu hidung."
    },
    {
        q: "5. PENALARAN NUMERIK (Deret Angka): 2, 5, 10, 17, 26, ...",
        options: { A: "35", B: "36", C: "37", D: "38" },
        answer: "C",
        explanation: "Polanya adalah penambahan bilangan ganjil yang terus meningkat: +3, +5, +7, +9. Maka selanjutnya adalah +11 (26 + 11 = 37)."
    },
    {
        q: "6. PENALARAN NUMERIK (Deret Angka): 3, 6, 12, 24, 48, ...",
        options: { A: "72", B: "84", C: "96", D: "108" },
        answer: "C",
        explanation: "Polanya adalah setiap angka dikalikan 2 dari angka sebelumnya. Maka 48 × 2 = 96."
    },
    {
        q: "7. PENALARAN NUMERIK (Perbandingan): Jika perbandingan usia Dika dan Rio adalah 4:5, dan usia Dika adalah 24 tahun, maka usia Rio adalah...",
        options: { A: "28 tahun", B: "30 tahun", C: "32 tahun", D: "35 tahun" },
        answer: "B",
        explanation: "Jika 4 bagian milik Dika = 24 tahun, maka 1 bagian = 24 ÷ 4 = 6. Usia Rio memiliki 5 bagian, sehingga 5 × 6 = 30 tahun."
    },
    {
        q: "8. PENALARAN NUMERIK (Aritmatika): Sebuah barang seharga Rp200.000 didiskon 15%. Harga barang tersebut sekarang adalah...",
        options: { A: "Rp170.000", B: "Rp175.000", C: "Rp180.000", D: "Rp185.000" },
        answer: "A",
        explanation: "Diskon 15% dari Rp200.000 = (15/100) × 200.000 = Rp30.000. Harga setelah diskon = 200.000 - 30.000 = Rp170.000."
    },
    {
        q: "9. PENALARAN NUMERIK (Logika Matematika): Suatu pekerjaan dapat diselesaikan oleh 10 orang dalam waktu 15 hari. Jika pekerjaan tersebut hanya dikerjakan oleh 5 orang, berapa hari waktu yang dibutuhkan?",
        options: { A: "7,5 hari", B: "20 hari", C: "25 hari", D: "30 hari" },
        answer: "D",
        explanation: "Ini adalah perbandingan berbalik nilai. (10 orang × 15 hari) = (5 orang × X hari). 150 = 5X. X = 30 hari."
    },
    {
        q: "10. PENALARAN LOGIKA (Silogisme): Semua karyawan BCA memakai seragam biru di hari Senin. Budi adalah karyawan BCA. Kesimpulan di hari Senin adalah...",
        options: { 
            A: "Budi mungkin memakai seragam biru", 
            B: "Budi tidak memakai seragam biru", 
            C: "Budi memakai seragam biru", 
            D: "Tidak dapat disimpulkan" 
        },
        answer: "C",
        explanation: "Sesuai premis universal 'Semua', jika Budi adalah bagian dari kelompok tersebut (karyawan BCA), maka aturan tersebut pasti berlaku untuknya (memakai seragam biru)."
    },
    {
        q: "11. PENALARAN LOGIKA (Silogisme): Jika hari hujan, maka jalanan basah. Saat ini jalanan tidak basah. Kesimpulan yang tepat adalah...",
        options: { 
            A: "Hari ini hujan", 
            B: "Hari ini tidak hujan", 
            C: "Jalanan sudah kering", 
            D: "Hujan akan segera turun" 
        },
        answer: "B",
        explanation: "Ini menggunakan prinsip Modus Tollens. Premis 1: Jika P maka Q. Premis 2: Tidak Q. Kesimpulan: Tidak P (Hari ini tidak hujan)."
    },
    {
        q: "12. PENALARAN LOGIKA (Silogisme): Sebagian mahasiswa menyukai olahraga basket. Andi adalah mahasiswa. Kesimpulannya...",
        options: { 
            A: "Andi menyukai olahraga basket", 
            B: "Andi tidak menyukai olahraga basket", 
            C: "Andi mungkin menyukai olahraga basket", 
            D: "Tidak dapat ditarik kesimpulan pasti" 
        },
        answer: "D",
        explanation: "Karena premisnya 'sebagian' (partikular), kita tidak bisa memastikan apakah Andi termasuk dalam sebagian yang menyukai basket atau sebagian yang tidak. Kesimpulan pasti tidak dapat ditarik dari informasi tersebut."
    },
    {
        q: "13. PENALARAN VERBAL (Sinonim): Kata yang memiliki makna paling dekat dengan 'Konsisten' adalah...",
        options: { A: "Berubah-ubah", B: "Taat asas", C: "Ragu-ragu", D: "Fleksibel" },
        answer: "B",
        explanation: "'Konsisten' berarti selaras, sesuai, atau tidak berubah-ubah (taat asas)."
    },
    {
        q: "14. PENALARAN VERBAL (Antonim): Lawan kata dari 'Kolektif' adalah...",
        options: { A: "Bersama", B: "Kelompok", C: "Individual", D: "Gabungan" },
        answer: "C",
        explanation: "'Kolektif' berarti secara bersama-sama atau kelompok. Lawan katanya adalah secara perorangan atau Individual."
    },
    {
        q: "15. PENALARAN VERBAL (Analogi): Mobil : Bensin = Manusia : ...",
        options: { A: "Makanan", B: "Minuman", C: "Oksigen", D: "Pakaian" },
        answer: "A",
        explanation: "Mobil membutuhkan bensin sebagai sumber energi untuk bergerak. Manusia membutuhkan makanan sebagai sumber energi utama."
    },
    {
        q: "16. PENALARAN VERBAL (Analogi): Kertas : Pena = Kain : ...",
        options: { A: "Baju", B: "Jarum", C: "Benang", D: "Gunting" },
        answer: "B",
        explanation: "Pena digunakan untuk menulis/menggores di atas kertas, sebagaimana jarum digunakan untuk menjahit/menembus pada kain."
    },
    {
        q: "17. PENALARAN NUMERIK (Deret Angka): 5, 10, 15, 20, 25, ...",
        options: { A: "28", B: "30", C: "35", D: "40" },
        answer: "B",
        explanation: "Polanya adalah penambahan angka 5 secara konstan (+5). Maka 25 + 5 = 30."
    },
    {
        q: "18. PENALARAN NUMERIK (Deret Angka): 1, 4, 9, 16, 25, ...",
        options: { A: "30", B: "32", C: "35", D: "36" },
        answer: "D",
        explanation: "Polanya adalah deret kuadrat bilangan bulat: 1², 2², 3², 4², 5². Selanjutnya adalah 6² = 36."
    },
    {
        q: "19. PENALARAN NUMERIK (Deret Angka): 100, 95, 85, 70, 50, ...",
        options: { A: "25", B: "30", C: "35", D: "40" },
        answer: "A",
        explanation: "Polanya adalah pengurangan yang meningkat secara bertahap: -5, -10, -15, -20. Maka selanjutnya adalah -25 (50 - 25 = 25)."
    },
    {
        q: "20. PENALARAN NUMERIK (Aritmatika): Budi membeli 3 buku seharga Rp15.000 per buku dan 2 pensil seharga Rp5.000 per pensil. Total belanja Budi adalah...",
        options: { A: "Rp45.000", B: "Rp50.000", C: "Rp55.000", D: "Rp60.000" },
        answer: "C",
        explanation: "Total = (3 × 15.000) + (2 × 5.000) = 45.000 + 10.000 = Rp55.000."
    },
    {
        q: "21. PENALARAN NUMERIK (Aritmatika): Sebuah mobil menempuh jarak 120 km dalam waktu 2 jam. Kecepatan rata-rata mobil tersebut adalah...",
        options: { A: "50 km/jam", B: "60 km/jam", C: "70 km/jam", D: "80 km/jam" },
        answer: "B",
        explanation: "Kecepatan = Jarak ÷ Waktu = 120 km ÷ 2 jam = 60 km/jam."
    },
    {
        q: "22. PENALARAN NUMERIK (Aritmatika): Rata-rata nilai matematika 4 siswa adalah 80. Jika ditambah nilai siswa ke-5, rata-ratanya menjadi 82. Nilai siswa ke-5 adalah...",
        options: { A: "88", B: "90", C: "92", D: "95" },
        answer: "B",
        explanation: "Total nilai 4 siswa = 4 × 80 = 320. Total nilai 5 siswa = 5 × 82 = 410. Nilai siswa ke-5 = 410 - 320 = 90."
    },
    {
        q: "23. PENALARAN LOGIKA (Silogisme): Semua peserta tes harus membawa KTP. Rian tidak membawa KTP. Kesimpulannya adalah...",
        options: { 
            A: "Rian adalah peserta tes", 
            B: "Rian bukan peserta tes", 
            C: "Rian boleh mengikuti tes", 
            D: "Rian peserta tes yang lupa membawa KTP" 
        },
        answer: "B",
        explanation: "Syarat mutlak untuk menjadi peserta tes adalah membawa KTP. Karena Rian tidak membawa KTP, maka Rian bukan peserta tes (Modus Tollens)."
    },
    {
        q: "24. PENALARAN LOGIKA (Silogisme): Semua bunga di taman berwarna cerah. Sebagian bunga di taman berbau harum. Kesimpulannya...",
        options: { 
            A: "Semua bunga yang berbau harum berwarna cerah", 
            B: "Sebagian bunga yang berwarna cerah berbau harum", 
            C: "Semua bunga berwarna cerah tidak berbau harum", 
            D: "Sebagian bunga tidak berwarna cerah" 
        },
        answer: "B",
        explanation: "Karena semua bunga di taman berwarna cerah dan sebagian di antaranya berbau harum, maka sebagian bunga yang berwarna cerah berbau harum."
    },
    {
        q: "25. PENALARAN LOGIKA (Silogisme): Semua mobil yang lewat di jalan tol harus memiliki kartu e-toll. Kendaraan A lewat di jalan tol. Kesimpulannya...",
        options: { 
            A: "Kendaraan A adalah mobil dan memiliki kartu e-toll", 
            B: "Kendaraan A bukan mobil", 
            C: "Kendaraan A tidak memiliki kartu e-toll", 
            D: "Kendaraan A mungkin memiliki kartu e-toll" 
        },
        answer: "A",
        explanation: "Karena semua mobil di jalan tol wajib memiliki kartu e-toll, dan Kendaraan A lewat di jalan tol, maka Kendaraan A adalah mobil dan memiliki kartu e-toll."
    },
    {
        q: "26. PENALARAN VERBAL (Sinonim): Kata yang memiliki makna paling dekat dengan 'Autodidaktik' adalah...",
        options: { A: "Belajar Sendiri", B: "Belajar Kelompok", C: "Formal", D: "Terstruktur" },
        answer: "A",
        explanation: "'Autodidaktik' adalah cara belajar mandiri atau mendapat pengetahuan tanpa bantuan guru/pengajar secara langsung."
    },
    {
        q: "27. PENALARAN VERBAL (Antonim): Lawan kata dari 'Fakta' adalah...",
        options: { A: "Realita", B: "Opini", C: "Kenyataan", D: "Bukti" },
        answer: "B",
        explanation: "'Fakta' adalah hal yang benar-benar terjadi/nyata, sedangkan 'Opini' adalah pendapat atau pendirian yang belum tentu kebenarannya."
    },
    {
        q: "28. PENALARAN VERBAL (Analogi): Dokter : Rumah Sakit = Guru : ...",
        options: { A: "Murid", B: "Buku", C: "Sekolah", D: "Kelas" },
        answer: "C",
        explanation: "Tempat utama dokter bekerja adalah rumah sakit, sebagaimana tempat utama guru bekerja adalah sekolah."
    },
    {
        q: "29. PENALARAN VERBAL (Analogi): Pisau : Memotong = Cangkul : ...",
        options: { A: "Menggali", B: "Menebas", C: "Mengukir", D: "Menusuk" },
        answer: "A",
        explanation: "Pisau adalah alat yang fungsi utamanya untuk memotong, sedangkan cangkul digunakan terutama untuk menggali tanah."
    },
    {
        q: "30. PENALARAN NUMERIK (Deret Angka): 4, 9, 16, 25, 36, ...",
        options: { A: "42", B: "45", C: "49", D: "64" },
        answer: "C",
        explanation: "Polanya adalah kuadrat bilangan bulat berturut-turut: 2², 3², 4², 5², 6². Selanjutnya 7² = 49."
    },
    {
        q: "31. PENALARAN NUMERIK (Deret Angka): 2, 4, 8, 16, 32, ...",
        options: { A: "48", B: "50", C: "60", D: "64" },
        answer: "D",
        explanation: "Polanya adalah perkalian 2 (kelipatan 2). Selanjutnya 32 × 2 = 64."
    },
    {
        q: "32. PENALARAN NUMERIK (Deret Angka): 80, 40, 20, 10, ...",
        options: { A: "5", B: "4", C: "2", D: "0" },
        answer: "A",
        explanation: "Polanya adalah pembagian 2 secara berurutan. Maka 10 ÷ 2 = 5."
    },
    {
        q: "33. PENALARAN NUMERIK (Deret Angka): 1, 1, 2, 3, 5, 8, ...",
        options: { A: "11", B: "12", C: "13", D: "14" },
        answer: "C",
        explanation: "Ini deret Fibonacci, setiap suku adalah penjumlahan dua suku sebelumnya: 5 + 8 = 13."
    },
    {
        q: "34. PENALARAN NUMERIK (Aritmatika): Berapakah 25% dari 400?",
        options: { A: "80", B: "100", C: "120", D: "150" },
        answer: "B",
        explanation: "25% = 1/4. Jadi 400 ÷ 4 = 100."
    },
    {
        q: "35. PENALARAN NUMERIK (Aritmatika): Jika x = 5 dan y = 3, berapa nilai dari 2x + 3y?",
        options: { A: "16", B: "18", C: "19", D: "21" },
        answer: "C",
        explanation: "Substitusi nilai: (2 × 5) + (3 × 3) = 10 + 9 = 19."
    },
    {
        q: "36. PENALARAN NUMERIK (Aritmatika): Ibu membeli 5 kg beras seharga Rp60.000. Harga 1 kg beras adalah...",
        options: { A: "Rp10.000", B: "Rp12.000", C: "Rp14.000", D: "Rp15.000" },
        answer: "B",
        explanation: "Harga per kg = Rp60.000 ÷ 5 = Rp12.000."
    },
    {
        q: "37. PENALARAN NUMERIK (Perbandingan): Perbandingan uang Ani dan Budi adalah 2 : 3. Jika uang Ani Rp20.000, berapa uang Budi?",
        options: { A: "Rp25.000", B: "Rp30.000", C: "Rp35.000", D: "Rp40.000" },
        answer: "B",
        explanation: "1 bagian = 20.000 ÷ 2 = 10.000. Uang Budi (3 bagian) = 3 × 10.000 = Rp30.000."
    },
    {
        q: "38. PENALARAN LOGIKA (Silogisme): Semua mamalia menyusui anaknya. Kucing adalah mamalia. Kesimpulannya...",
        options: { 
            A: "Kucing tidak menyusui anaknya", 
            B: "Kucing menyusui anaknya", 
            C: "Sebagian kucing menyusui anaknya", 
            D: "Kucing bukan hewan menyusui" 
        },
        answer: "B",
        explanation: "Karena semua mamalia menyusui dan kucing termasuk mamalia, maka kucing menyusui anaknya."
    },
    {
        q: "39. PENALARAN LOGIKA (Silogisme): Semua siswa kelas 12 wajib mengikuti ujian. Budi tidak mengikuti ujian. Kesimpulannya...",
        options: { 
            A: "Budi adalah siswa kelas 12", 
            B: "Budi siswa kelas 12 yang sakit", 
            C: "Budi bukan siswa kelas 12", 
            D: "Budi pasti lulus" 
        },
        answer: "C",
        explanation: "Menggunakan Modus Tollens: Jika P maka Q. Tidak Q, maka Tidak P (Budi bukan siswa kelas 12)."
    },
    {
        q: "40. PENALARAN LOGIKA (Silogisme): Jika hujan deras, maka terjadi banjir. Saat ini tidak terjadi banjir. Kesimpulannya...",
        options: { 
            A: "Hari ini hujan deras", 
            B: "Hari ini tidak hujan deras", 
            C: "Banjir akan datang", 
            D: "Hujan gerimis" 
        },
        answer: "B",
        explanation: "Prinsip Modus Tollens: Tidak Q (tidak banjir) menyimpulkan Tidak P (tidak hujan deras)."
    },
    {
        q: "41. PENALARAN VERBAL (Sinonim): Kata yang paling dekat artinya dengan 'Efektif' adalah...",
        options: { A: "Hemat", B: "Tepat guna", C: "Cepat", D: "Ringkas" },
        answer: "B",
        explanation: "'Efektif' berarti dapat membawa hasil atau tepat guna."
    },
    {
        q: "42. PENALARAN VERBAL (Antonim): Lawan kata dari 'Promosi' adalah...",
        options: { A: "Mutasi", B: "Demosi", C: "Degradasi", D: "Rotasi" },
        answer: "B",
        explanation: "'Promosi' adalah kenaikan jabatan, sedangkan lawan katanya adalah penurun jabatan yaitu 'Demosi'."
    },
    {
        q: "43. PENALARAN VERBAL (Analogi): Lapar : Makan = Haus : ...",
        options: { A: "Minum", B: "Air", C: "Beli", D: "Tidur" },
        answer: "A",
        explanation: "Rasa lapar diatasi dengan makan, rasa haus diatasi dengan minum."
    },
    {
        q: "44. PENALARAN NUMERIK (Deret Angka): 3, 7, 11, 15, 19, ...",
        options: { A: "21", B: "22", C: "23", D: "24" },
        answer: "C",
        explanation: "Polanya bertambah 4 terus menerus (+4). Maka 19 + 4 = 23."
    },
    {
        q: "45. PENALARAN NUMERIK (Deret Angka): 100, 90, 81, 73, ...",
        options: { A: "66", B: "65", C: "64", D: "63" },
        answer: "A",
        explanation: "Polanya: -10, -9, -8. Selanjutnya adalah -7. Maka 73 - 7 = 66."
    },
    {
        q: "46. PENALARAN NUMERIK (Aritmatika): Berapakah 15% dari 300?",
        options: { A: "35", B: "40", C: "45", D: "50" },
        answer: "C",
        explanation: "(15 / 100) × 300 = 15 × 3 = 45."
    },
    {
        q: "47. PENALARAN NUMERIK (Aritmatika): Sebuah mobil melaju dengan kecepatan 80 km/jam selama 3 jam. Jarak yang ditempuh adalah...",
        options: { A: "210 km", B: "240 km", C: "260 km", D: "280 km" },
        answer: "B",
        explanation: "Jarak = Kecepatan × Waktu = 80 km/jam × 3 jam = 240 km."
    },
    {
        q: "48. PENALARAN LOGIKA (Silogisme): Semua burung memiliki sayap. Ayam adalah burung. Kesimpulannya...",
        options: { 
            A: "Ayam tidak bisa terbang", 
            B: "Ayam memiliki sayap", 
            C: "Ayam bukan burung", 
            D: "Sebagian ayam tidak punya sayap" 
        },
        answer: "B",
        explanation: "Karena semua burung memiliki sayap dan ayam termasuk burung, maka ayam pasti memiliki sayap."
    },
    {
        q: "49. PENALARAN LOGIKA (Silogisme): Sebagian buah rasanya manis. Mangga adalah buah. Kesimpulannya...",
        options: { 
            A: "Mangga pasti manis", 
            B: "Mangga mungkin rasanya manis", 
            C: "Mangga tidak manis", 
            D: "Semua mangga manis" 
        },
        answer: "B",
        explanation: "Karena premis menyatakan 'sebagian buah', maka mangga sebagai salah satu buah mungkin rasanya manis."
    },
    {
        q: "50. PENALARAN LOGIKA (Silogisme): Semua komputer membutuhkan listrik untuk bekerja. Laptop X adalah komputer. Kesimpulannya...",
        options: { 
            A: "Laptop X tidak butuh listrik", 
            B: "Laptop X membutuhkan listrik untuk bekerja", 
            C: "Laptop X bisa hidup tanpa listrik", 
            D: "Tidak dapat disimpulkan" 
        },
        answer: "B",
        explanation: "Karena Laptop X adalah komputer dan semua komputer butuh listrik, maka Laptop X membutuhkan listrik untuk bekerja."
    }
];
