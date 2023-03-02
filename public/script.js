// Konversi Nilai

function konversi() {
  var nilai_a = Number(document.getElementById("a").value);
  var nilai_huruf;
  if (nilai_a > 90 && nilai_a <= 100) nilai_huruf = "Predikat anda Amat Baik";
  else if (nilai_a > 80 && nilai_a <= 90) nilai_huruf = "Predikat anda Baik";
  else if (nilai_a > 70 && nilai_a <= 80)
    nilai_huruf = "Predikat anda Cukup Baik";
  else if (nilai_a > 60 && nilai_a <= 70) nilai_huruf = "Predikat anda Cukup";
  else if (nilai_a > -1 && nilai_a <= 60)
    nilai_huruf = "Predikat anda Kurang :V";
  else nilai_huruf = "Data yang anda input Invalid!";

  document.getElementById("c").value = nilai_huruf;
}

// Menampilkan Tahun pada Copyright

const copyrightFooter = `
        <p>
        Copyright © ${new Date().getFullYear()} CalvinSims
        </p>
        `;
document.getElementById("copyrightYear").innerHTML = copyrightFooter;
