function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('open');
    document.getElementById('navLinks').classList.toggle('show');
}

function changeTab(id) {
    // Hide menu
    toggleMenu();

    // Update Active Section
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    // Update Header Text for visual appeal
    const titles = {
        home: "Bersatu & Maju.",
        ketua: "Profil Pemimpin.",
        anggota: "Pemain Inti.",
        kegiatan: "kegiatan Kita.",
        prestasi: "Kebanggaan.",
        pengumuman: "Info Penting!!",
        publikasi: "Kabar Warga."
    };
    document.getElementById('mainTitle').innerText = titles[id];

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function tambahKegiatan(judul, gambarList) {

    // Kalau cuma 1 gambar (string), ubah jadi array
    if (typeof gambarList === "string") {
        gambarList = [gambarList];
    }

    const container = document.getElementById('kegiatan');

    const div = document.createElement('div');
    div.className = 'card';

    let semuaGambar = '';

    gambarList.forEach(gambar => {
        semuaGambar += `
            <img 
                class="foto-kegiatan" 
                src="${gambar}" 
                loading="lazy"
                onclick="bukaFoto('${gambar}')"
            >
        `;
    });

    div.innerHTML = `
        <h2>${judul}</h2>

        <div class="galeri-kegiatan">
            ${semuaGambar}
        </div>
    `;

    container.appendChild(div);
}// contoh
tambahKegiatan("Kerja Bakti", "gambar/test.png");
tambahKegiatan("Touring", [
    "gambar/kegiatan2.jpeg",
    "gambar/kegiatan2_1.jpeg",
    "gambar/kegiatan2_2.jpeg",
    "gambar/kegiatan2_3.jpeg",

]);

function bukaFoto(src) {
    document.getElementById('modalFoto').style.display = 'flex';
    document.getElementById('fotoBesar').src = src;
}

function tutupFoto() {
    document.getElementById('modalFoto').style.display = 'none';
}





function addPost() {
    const text = document.getElementById('postText').value;
    if (text.trim() === '') return;

    const div = document.createElement('div');
    div.className = 'grid-item';
    div.style.marginBottom = '10px';
    div.style.textAlign = 'left';
    div.innerText = text;

    document.getElementById('posts').prepend(div);
    document.getElementById('postText').value = '';
}
