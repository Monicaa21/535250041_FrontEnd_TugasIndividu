"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const textHeader = document.querySelector(".text-header") as HTMLElement | null;
    if (!textHeader) return;

    let current = 0;
    let task: ReturnType<typeof setInterval> | undefined;

    const start = setTimeout(() => {
      task = setInterval(() => {
        current += 0.01;
        textHeader.style.opacity = String(current);
        textHeader.style.width = current * 100 + "%";
        if (current >= 1) clearInterval(task);
      }, 10);
    }, 500);

    return () => {
      clearTimeout(start);
      if (task) clearInterval(task);
    };
  }, []);

  return (
    <main>
      {/* Navbar */}
      <nav className="navbar">
        <button className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <Image className="hamburger-icon" src="/hamburger.png" alt="menu" width={30} height={30} />
        </button>
        <div className={`navlinks ${menuOpen ? "active" : ""}`} id="navLinks">
          <a href="#home" id="homee">Home</a>
          <a href="#bean" id="beanss">Beans</a>
          <a href="#bestSeller" id="best-sellerr">Best Seller</a>
          <a href="#order" id="orderr">Order</a>
          <a href="#faq" id="faqq">FAQ</a>
          <a href="#about" id="aboutt">About</a>
        </div>
      </nav>

    <section className="header" id="home">
      <Image className="logo" src="/8.png" alt="logo" width={100} height={100} />
      <div className="text-header">
        <Image className="bgrumah" src="/bg_kopi.png" alt="background" width={700} height={700} />
        <h1>Kopi Nusantara</h1>
        <p>Artisan coffee, rooted in the heart of the Nusantara.</p>
        <p>It&apos;s more than just a coffee.</p>
      </div>
    </section>
    <section className="getToKnow" id="bean">
      <h1>Get to know our beans</h1>
      <p className="desc-judul">We&apos;re using a high quality beans that makes our coffee smooth.</p>
      <div className="info-beans">
        <article>
          <Image className="beans" src="/11.png" alt="gambar-bean" width={50} height={50} />
          <div className="text-beans">
            <h2>Type of Coffee</h2>
            <p>Biji kopi yang digunakan adalah tipe biji kopi Arabica dan Robusta lokal yang ditanam di Indonesia, Arabica cenderung memiliki rasa asam buah (lemon, jeruk, gula tebu) serta manis yang smooth, sedangkan kopi Robusta cenderung punya rasa yang lebih kuat dan pahit dari Arabica, rasanya cenderung coklat pahit (kakao) dan aroma seperti tembakau.</p>
          </div>
        </article>
        <article>
          <Image className="beans" src="/12.png" alt="gambar kopi dengan aroma" width={50} height={50} />
          <div className="text-beans">
            <h2>Coffee Processing</h2>
            <p>Kopi dengan aroma yang wangi & rasa yang enak tentu melalui proses yang tidak instan, mulai dari pengeringan setelah panen (pasca panen) yang beragam seperti proses natural, washed, honey, fermentation, dsb., setiap proses panen ini akan menghasilkan biji kopi berkuaitas dengan rasa dan aroma yang unik ketika diseduh.</p>
          </div>
        </article>
        <article>
          <Image className="beans" src="/13.png" alt="image good beans" width={50} height={50} />
          <div className="text-beans">
            <h2>We only using Good Beans</h2>
            <p>Produk Kopi Nusantara hanya gunakan biji kopi berkualitas, sourcing langsung dari lahan panen petani. Sehingga, biji kopi ketika disangrai & diseduh akan ngeluarin aroma wangi, harum, dan warna biji kopi berubah jadi coklat muda yang rata.</p>
          </div>
        </article>
        <article>
          <Image className="beans" src="/14.png" alt="image fresh roasted" width={50} height={50} />
          <div className="text-beans">
            <h2>Fresh Roasted Guarantee</h2>
            <p>Biji kopi segar kami sangrai (roasting) dengan tingkat kematangan yang pas, misal Arabica akan kami sangrai di tingkat kematangan sedang (medium), jadi ketika diseduh akan mengeluarkan aroma wangi buah, rempah-rempah, dan ketika diminum tidak terlalu asam dan applicable untuk seduhan manual, kopi susu maupun dibuat espresso.</p>
          </div>
        </article>
      </div>
    </section>
    <section className="bestSeller" id="bestSeller">
      <h1>Best Seller</h1>
      <p className="desc-judul">Sold up to 1000+</p>
      <div className="menuBest">
        <article>
          <Image className="menu" src="/2.png" alt="americano" width={50} height={50} />
          <div className="info-best">
            <h2>Americano</h2>
            <p>Espresso dengan tambahan air panas, menghasilkan rasa kopi yang ringan, clean, dan tetap memiliki karakter khas espresso.</p>
          </div>
        </article>
        <article>
          <Image className="menu" src="/3.png" alt="flat white" width={50} height={50} />
          <div className="info-best">
            <h2>Flat White</h2>
            <p>Espresso yang dipadukan dengan steamed milk bertekstur lembut, menghasilkan rasa kopi yang creamy dengan cita rasa espresso yang tetap terasa kuat.</p>
          </div>
        </article>
        <article>
          <Image className="menu" src="/4.png" alt="caramel macchiato" width={50} height={50} />
          <div className="info-best">
            <h2>Caramel Macchiato</h2>
            <p>Perpaduan espresso, susu lembut, dan manisnya saus karamel yang memberikan rasa creamy dan sedikit manis.</p>
          </div>
        </article>
        <article>
          <Image className="menu" src="/5.png" alt="sea salt latte" width={50} height={50} />
          <div className="info-best">
            <h2>Sea Salt Latte</h2>
            <p>Latte creamy dengan sentuhan foam sea salt yang gurih dan lembut, menciptakan perpaduan rasa manis, creamy, dan sedikit asin yang unik.</p>
          </div>
        </article>
      </div>
    </section>
    <section className="order" id="order">
      <h1>Order Now</h1>
      <p className="desc-judul">Order our coffee to get that authentic taste</p>
      <div className="konten-order">
        <div className="gif"><Image src="/2.png" alt="kopi" width={50} height={50} /></div>
        <div className="text-order">
          <h2>Interested With Our Coffee?</h2>
          <p className="desc-order">Discover the rich aroma and delightful flavors in every cup we serve. From bold espresso to creamy and sweet favorites, there’s always a coffee waiting to match your taste. Come by, take a sip, and find your new favorite coffee with us!</p>
          <a href="https://wa.me/6281211778207?text=Hi%2C%20I%27d%20like%20to%20order%20your%20coffee" target="_blank"><button id="noWa">ORDER NOW</button></a>
        </div>
      </div>
    </section>
    <section className="freqAsk" id="faq">
      <h1>Frequently Asked Question</h1>
      <div className="faqs">
        <div className="question" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
          <p>1. Jenis biji kopi apa saja yang digunakan oleh Kopi Nusantara dan bagaimana karakteristik rasanya?</p>
        </div>
        <div className={`answer ${openFaq === 0 ? "open" : ""}`}>
          <p>Kopi Nusantara menggunakan dua jenis biji kopi lokal yang ditanam di Indonesia, yaitu:</p>
          <ol>
            <li>
              <strong>Arabica</strong>
              — cenderung memiliki rasa asam buah (lemon, jeruk, gula tebu) serta rasa manis yang smooth.
            </li>
            <li>
              <strong>Robusta</strong>
              — memiliki rasa yang lebih kuat dan lebih pahit dibanding Arabica, dengan kecenderungan rasa coklat pahit (kakao) serta aroma tembakau.
            </li>
          </ol>
        </div>
        <div className="question"onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
          <p>2. Bagaimana tahapan proses pengolahan kopi dari kebun hingga siap diminum (From Farm to Cup)?</p>
          </div>
        <div className={`answer ${openFaq === 1 ? "open" : ""}`}>
          <p>Kopi melewati 6 tahapan utama:</p>
          <ol>
            <li>Panen buah kopi (petik) dari petani.</li>
            <li>Pengeringan/penjemuran pasca panen (proses natural, washed, honey, fermentation, dsb.).</li>
            <li>Sorting — menyortir biji yang bagus dan membuang biji yang jelek.</li>
            <li>Roasting (penyangraian).</li>
            <li>Grinding (penggilingan kopi).</li>
            <li>Brewing (penyeduhan menggunakan alat manual atau tradisional).</li>
          </ol>
        </div>
        <div className="question" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
          <p>3. Apa perbedaan ciri-ciri biji kopi berkualitas baik yang digunakan dengan biji kopi cacat yang dihindari?</p>
        </div>
        <div className={`answer ${openFaq === 2 ? "open" : ""}`}>
          <p>
            <strong>Biji berkualitas baik:</strong>
            berwarna kehijauan bersih, bentuk utuh, ukuran sama rata, dan tidak berbau. Saat disangrai dan diseduh menghasilkan aroma wangi, harum, serta warna coklat muda yang merata.
          </p>
          <p>
            <strong>Biji cacat/buruk:</strong>
            biji pecah atau tidak utuh, berlubang bekas hama serangga, biji hitam (black beans), serta kopong atau berbercak jamur. Jika diseduh, biji cacat beraroma apek, bau tanah, dan rasanya seperti rumput mentah.
          </p>
        </div>
        <div className="question" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
          <p>4. Bagaimana tingkat kematangan sangrai (roasting) untuk kopi Arabica di Kopi Nusantara dan apa hasil rasanya?</p>
        </div>
        <div className={`answer ${openFaq === 3 ? "open" : ""}`}>
          <p>Kopi Arabica disangrai pada tingkat kematangan sedang (medium). Hasilnya, saat diseduh kopi akan mengeluarkan aroma wangi buah dan rempah-rempah, rasanya tidak terlalu asam, serta cocok diaplikasikan untuk seduhan manual, kopi susu, maupun espresso.</p>
        </div>
        <div className="question" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
          <p>5. Berapa lama masa simpan biji kopi setelah selesai di-roasting dan apa yang terjadi jika melewati batas waktu tersebut?</p>
        </div>
        <div className={`answer ${openFaq === 4 ? "open" : ""}`}>
          <p>Biji kopi segar hasil sangrai memiliki masa penyimpanan bertahan hingga sekitar 4 bulan. Jika disimpan lebih dari 4 bulan, aroma dan rasa kopi akan mulai menurun, aroma wanginya berkurang, serta rasanya perlahan menjadi hambar saat diseduh.</p>
        </div>
      </div>
    </section>
    <section className="penutup" id="about">
      <h1>About Us</h1>
      <div className="nama-anggota">
        <p className="descAbUs">
          Originally, from the Nusantara,
          <br />
          Kopi Nusantara -- Kelompok 5
        </p>
        <p className="anggota">Gabriella Geraldine (535250023)</p>
        <p className="anggota">Reyhan Janstephen (535250034)</p>
        <p className="anggota">Monica Irene (535250041)</p>
        <p className="anggota">Natanael Gunawan (535250046)</p>
        <p className="anggota">Moses Marvian Arsata (535250050)</p>
      </div>
      <footer>
        <p>&copy; 2026 Kopi Nusantara. Seluruh hak cipta dilindungi.</p>
        <p>Dibuat sebagai contoh proyek Tugas Studi Kasus -- Responsive UI (Front-End Programming).</p>
        <p />
      </footer>
    </section>

    </main>
  );
}
