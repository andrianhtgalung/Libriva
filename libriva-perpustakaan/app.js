/* Libriva - Sistem Informasi Perpustakaan Kelas IF1B */
(() => {
  const KEY = 'libriva:db:v2';
  const SESSION_KEY = 'libriva:session:v2';

  const DEFAULT_LIBRIVA_LOGO = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpYkdyYWQiIHgxPSIwIiB5MT0iMCIgeDI9IjY0IiB5Mj0iNjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmNjA5MCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjU1JSIgc3RvcC1jb2xvcj0iI2VjNDA3YSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4ODBlNGYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhZ2VHcmFkIiB4MT0iMTIiIHkxPSIxNiIgeDI9IjUyIiB5Mj0iNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmY2U0ZWMiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcng9IjE2IiBmaWxsPSJ1cmwoI2xpYkdyYWQpIi8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSIxNCIgcj0iMTgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xMikiLz4KICA8IS0tIE9wZW4gQm9vayBCYXNlIC0tPgogIDxwYXRoIGQ9Ik0xMyAyMUMxMyAxOC43OTA5IDE0Ljc5MDkgMTcgMTcgMTdIMjhDMzAuMjA5MSAxNyAzMiAxOC43OTA5IDMyIDIxVjQ2QzMyIDQ0LjM0MzEgMzAuNjU2OSA0MyAyOSA0M0gxNkMxNC4zNDMxIDQzIDEzIDQxLjY1NjkgMTMgNDBWMjFaIiBmaWxsPSJ1cmwoI3BhZ2VHcmFkKSIvPgogIDxwYXRoIGQ9Ik01MSAyMUM1MSAxOC43OTA5IDQ5LjIwOTEgMTcgNDcgMTdIMzZDMzMuNzkwOSAxNyAzMiAxOC43OTA5IDMyIDIxVjQ2QzMyIDQ0LjM0MzEgMzMuMzQzMSA0MyAzNSA0M0g0OEM0OS42NTY5IDQzIDUxIDQxLjY1NjkgNTEgNDBWMjFaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz4KICA8IS0tIEJvb2sgU3BpbmUgJiBMaW5lcyAtLT4KICA8cGF0aCBkPSJNMzIgMThWNDYiIHN0cm9rZT0iI2FkMTQ1NyIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xOCAyNUgyN00xOCAzMEgyN00xOCAzNUgyNSIgc3Ryb2tlPSIjZWM0MDdhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0zNyAyNUg0Nk0zNyAzMEg0Nk0zNyAzNUg0NCIgc3Ryb2tlPSIjYWQxNDU3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjAuNyIvPgogIDwhLS0gQm9va21hcmsgUmliYm9uIC0tPgogIDxwYXRoIGQ9Ik00MSAxNlYyOEw0NCAyNS41TDQ3IDI4VjE2SDQxWiIgZmlsbD0iI2ZmZWIzYiIvPgogIDwhLS0gQm90dG9tIFdhdmUgLS0+CiAgPHBhdGggZD0iTTE0IDQ3QzIwIDQ1IDI3IDQ1IDMyIDQ4QzM3IDQ1IDQ0IDQ1IDUwIDQ3IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+';
  const POLIBATAM_LOGO = 'data:image/png;base64,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';

  const iso = d => d.toLocaleDateString('sv');
  const today = () => iso(new Date());
  const plus = (n, from = new Date()) => {
    const d = new Date(from);
    d.setDate(d.getDate() + Number(n));
    return iso(d);
  };

  const seed = () => ({
    books: [
      { kode: 'BK-001', isbn: '978-623-101-1', judul: 'Dasar Pemrograman & Logika Algoritma', penulis: 'Ahmad Hamim Tohari, S.S.T., M.T.', kategori: 'Pemrograman', tahun: 2026, rak: 'Rak A-01', stok: 6 },
      { kode: 'BK-002', isbn: '978-623-102-8', judul: 'Pemrograman Web Modern (HTML, CSS, JS & Bootstrap)', penulis: 'Cyntia Lasmi Andesti, S.Kom., M.Kom.', kategori: 'Pemrograman', tahun: 2026, rak: 'Rak A-01', stok: 5 },
      { kode: 'BK-003', isbn: '978-623-103-5', judul: 'Matematika Diskrit & Logika Informatika', penulis: 'Siskha Handayani, S.Si., M.Si', kategori: 'Matematika', tahun: 2026, rak: 'Rak A-02', stok: 5 },
      { kode: 'BK-004', isbn: '978-623-104-2', judul: 'Pengantar Teknologi Informasi', penulis: 'Ummul Fitri Afifah, S.Kom., M.MSI', kategori: 'Teknologi Informasi', tahun: 2026, rak: 'Rak A-02', stok: 4 },
      { kode: 'BK-005', isbn: '978-623-105-9', judul: 'Arsitektur & Organisasi Sistem Komputer', penulis: 'Dwi Ely Kurniawan, S.Pd., M.Kom', kategori: 'Sistem Komputer', tahun: 2026, rak: 'Rak B-01', stok: 5 },
      { kode: 'BK-006', isbn: '978-623-106-6', judul: 'Pendidikan Pancasila untuk Perguruan Tinggi', penulis: 'Recy Harviani Zurwanty, S.Pd., M.Pd', kategori: 'Umum & Humaniora', tahun: 2026, rak: 'Rak B-02', stok: 6 },
      { kode: 'BK-007', isbn: '978-623-107-3', judul: 'Sistem Basis Data & Pemodelan SQL', penulis: 'Rizky Pratama, M.Kom.', kategori: 'Basis Data', tahun: 2025, rak: 'Rak A-03', stok: 4 }
    ],
    members: [
      { nim: '3312601037', nama: 'Rosenta Marito Rajagukguk', kelas: 'IF1B', hp: '081270001037', email: 'rosenta.3312601037@students.polibatam.ac.id', pass: '123456' },
      { nim: '3312601036', nama: 'Andrian Paskah Hutagalung', kelas: 'IF1B', hp: '081270001036', email: 'andrian.3312601036@students.polibatam.ac.id', pass: '123456' },
      { nim: '3312601038', nama: 'Syela Maharani Putri', kelas: 'IF1B', hp: '081270001038', email: 'syela.3312601038@students.polibatam.ac.id', pass: '123456' },
      { nim: '3312601039', nama: 'Fajar Nugroho Pratama', kelas: 'IF1B', hp: '081270001039', email: 'fajar.3312601039@students.polibatam.ac.id', pass: '123456' },
      { nim: '3312601040', nama: 'Nabila Azzahra', kelas: 'IF1B', hp: '081270001040', email: 'nabila.3312601040@students.polibatam.ac.id', pass: '123456' }
    ],
    loans: [
      { id: 101, nim: '3312601037', kode: 'BK-002', pinjam: plus(-3), tempo: plus(4), kembali: null, extended: false, kondisi: 'Baik', dendaBayar: 0, catatan: 'Referensi kuliah Pemrograman Web' },
      { id: 102, nim: '3312601038', kode: 'BK-001', pinjam: plus(-10), tempo: plus(-3), kembali: null, extended: false, kondisi: 'Baik', dendaBayar: 0, catatan: '' },
      { id: 103, nim: '3312601036', kode: 'BK-005', pinjam: plus(-2), tempo: plus(5), kembali: null, extended: false, kondisi: 'Baik', dendaBayar: 0, catatan: 'Praktikum Sistem Komputer' },
      { id: 104, nim: '3312601039', kode: 'BK-003', pinjam: plus(-12), tempo: plus(-5), kembali: plus(-4), extended: false, kondisi: 'Baik', dendaBayar: 1000, catatan: 'Dikembalikan terlambat 1 hari' },
      { id: 105, nim: '3312601040', kode: 'BK-004', pinjam: plus(-8), tempo: plus(-1), kembali: plus(-2), extended: false, kondisi: 'Baik', dendaBayar: 0, catatan: 'Kembali tepat waktu' }
    ],
    cfg: {
      nama: 'Admin Perpustakaan',
      username: 'admin',
      password: 'admin123',
      instansi: 'Perpustakaan Kelas IF1B - Politeknik Negeri Batam',
      logo: DEFAULT_LIBRIVA_LOGO,
      hari: 7,
      maksPinjam: 3,
      denda: 1000,
      dendaRusak: 25000
    }
  });

  const safeGet = k => {
    try { return localStorage.getItem(k); } catch { return null; }
  };
  const safeSet = (k, v) => {
    try { localStorage.setItem(k, v); } catch { }
  };

  let db = null;
  try {
    const raw = safeGet(KEY);
    if (raw) db = JSON.parse(raw);
  } catch { }

  if (!db || !Array.isArray(db.books)) {
    db = seed();
    safeSet(KEY, JSON.stringify(db));
  } else {
    const def = seed();
    db.cfg = Object.assign({}, def.cfg, db.cfg || {});
    db.books = (db.books || []).map((b, idx) => Object.assign({
      isbn: `978-623-10${idx + 1}-${idx}`,
      tahun: 2026,
      rak: `Rak A-0${(idx % 3) + 1}`
    }, b, { stok: Number(b.stok || 0) }));
    db.members = (db.members || []).map(m => Object.assign({
      email: `${m.nim}@students.polibatam.ac.id`,
      pass: '123456'
    }, m));
    db.loans = (db.loans || []).map(l => Object.assign({
      extended: false,
      kondisi: 'Baik',
      dendaBayar: 0,
      catatan: ''
    }, l));
  }

  let session = null;
  try {
    const rawSes = safeGet(SESSION_KEY);
    if (rawSes) session = JSON.parse(rawSes);
  } catch { }
  if (!session) {
    session = {
      loggedIn: false,
      roleType: 'admin', // 'admin' | 'member'
      username: 'admin',
      nim: null,
      nama: db.cfg.nama || 'Admin Perpustakaan',
      role: 'Petugas Perpustakaan'
    };
  }

  const isMember = () => session && session.roleType === 'member' && !!session.nim;
  const saveSession = () => safeSet(SESSION_KEY, JSON.stringify(session));
  const save = () => {
    safeSet(KEY, JSON.stringify(db));
    updateGlobalUI();
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const fmt = s => s ? s.split('-').reverse().join('/') : '-';
  const rp = n => 'Rp' + Number(n || 0).toLocaleString('id-ID');

  const status = l => l.kembali ? 'Dikembalikan' : l.tempo < today() ? 'Terlambat' : 'Dipinjam';
  const badge = s => {
    const cls = s === 'Dipinjam' ? 'dipinjam' : s === 'Terlambat' ? 'terlambat' : 'dikembalikan';
    const icon = s === 'Dipinjam' ? 'bi-book-half' : s === 'Terlambat' ? 'bi-exclamation-triangle-fill' : 'bi-check-circle-fill';
    return `<span class="badge-status ${cls}"><i class="bi ${icon}"></i> ${esc(s)}</span>`;
  };

  const activeOf = kode => db.loans.filter(l => l.kode === kode && !l.kembali).length;
  const totalPopOf = kode => db.loans.filter(l => l.kode === kode).length;
  const memberActiveLoans = nim => db.loans.filter(l => l.nim === nim && !l.kembali);
  const avail = b => Math.max(0, Number(b.stok) - activeOf(b.kode));
  const book = k => db.books.find(b => b.kode === k) || { kode: k, isbn: '-', judul: '(Buku Tidak Ditemukan)', kategori: '-', penulis: '-', rak: '-', tahun: '-' };
  const mem = n => db.members.find(m => m.nim === n) || { nim: n, nama: '(Anggota Tidak Ditemukan)', kelas: '-', hp: '-', email: '-' };

  const lateDays = l => {
    const end = l.kembali || today();
    return Math.max(0, Math.round((new Date(end) - new Date(l.tempo)) / 864e5));
  };

  const daysUntilDue = l => Math.round((new Date(l.tempo) - new Date(today())) / 864e5);

  const calcFine = l => {
    const late = lateDays(l) * Number(db.cfg.denda || 1000);
    const dmg = l.kondisi && l.kondisi !== 'Baik' ? Number(db.cfg.dendaRusak || 25000) : 0;
    return late + dmg;
  };

  const empty = (n, msg = 'Tidak ada data yang cocok dengan filter pencarian.') =>
    `<tr><td colspan="${n}" class="empty"><i class="bi bi-inbox fs-3 d-block mb-2"></i>${esc(msg)}</td></tr>`;

  function toast(msg, type = 'success') {
    const box = $('#toasts') || document.body.appendChild(Object.assign(document.createElement('div'), {
      id: 'toasts',
      className: 'toast-container position-fixed bottom-0 end-0 p-3',
      style: 'z-index: 1095'
    }));
    const el = document.createElement('div');
    el.className = `toast align-items-center text-bg-${type} border-0 shadow`;
    el.setAttribute('role', 'alert');
    el.innerHTML = `<div class="d-flex"><div class="toast-body fw-semibold">${esc(msg)}</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Tutup"></button></div>`;
    box.append(el);
    el.addEventListener('hidden.bs.toast', () => el.remove());
    new bootstrap.Toast(el, { delay: 3200 }).show();
  }

  function ensureConfirmModal() {
    let el = $('#librivaConfirmModal');
    if (!el) {
      el = document.createElement('div');
      el.id = 'librivaConfirmModal';
      el.className = 'modal fade';
      el.tabIndex = -1;
      el.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <h3 class="modal-title fs-6" id="confirmModalTitle">Konfirmasi</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
            </div>
            <div class="modal-body py-3">
              <p class="mb-0 small" id="confirmModalBody">Apakah Anda yakin?</p>
            </div>
            <div class="modal-footer border-0 pt-0">
              <button type="button" class="btn btn-soft btn-sm px-3" data-bs-dismiss="modal">Batal</button>
              <button type="button" class="btn btn-pink btn-sm px-3" id="confirmModalOkBtn">Ya, Lanjutkan</button>
            </div>
          </div>
        </div>`;
      document.body.appendChild(el);
    }
    return el;
  }

  function askConfirm(title, message, onConfirm) {
    const el = ensureConfirmModal();
    $('#confirmModalTitle', el).textContent = title;
    $('#confirmModalBody', el).textContent = message;
    const modal = bootstrap.Modal.getOrCreateInstance(el);
    const okBtn = $('#confirmModalOkBtn', el);
    const clone = okBtn.cloneNode(true);
    okBtn.replaceWith(clone);
    clone.addEventListener('click', () => {
      modal.hide();
      onConfirm();
    });
    modal.show();
  }

  function initThemeAndHeader() {
    const applyThemeLabel = () => {
      const isDark = document.documentElement.dataset.theme === 'dark';
      $$('#themeBtn, #loginThemeBtn').forEach(btn => {
        if (!btn) return;
        btn.innerHTML = isDark ? '<i class="bi bi-sun-fill me-1"></i>Terang' : '<i class="bi bi-moon-stars-fill me-1"></i>Gelap';
      });
    };
    const toggleTheme = () => {
      const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = t;
      safeSet('libriva:theme', t);
      applyThemeLabel();
    };
    $$('#themeBtn, #loginThemeBtn').forEach(btn => {
      if (btn) btn.onclick = toggleTheme;
    });
    applyThemeLabel();

    const clockEl = $('#liveDatePill');
    if (clockEl) {
      const now = new Date();
      clockEl.innerHTML = `<i class="bi bi-calendar3"></i> ${now.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}`;
    }

    const notifBtn = $('#btnNotifCenter');
    if (notifBtn) {
      notifBtn.onclick = () => {
        const modalEl = $('#modalNotifikasi');
        if (!modalEl) return;
        renderNotifModal(modalEl);
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
      };
    }

    $$('#btnLogoutTop, #btnLogoutSide').forEach(btn => {
      if (!btn) return;
      btn.onclick = () => {
        session.loggedIn = false;
        saveSession();
        if (window.librivaShowLogin) {
          window.librivaShowLogin();
          toast('Anda telah keluar dari sesi akun.', 'info');
        } else {
          window.location.href = 'login.html';
        }
      };
    });

    updateGlobalUI();
  }

  function renderNotifModal(modalEl) {
    const listEl = $('#notifModalList', modalEl);
    if (!listEl) return;
    const relevantLoans = isMember()
      ? db.loans.filter(l => l.nim === session.nim)
      : db.loans;
    const lateLoans = relevantLoans.filter(l => status(l) === 'Terlambat');
    const dueSoonLoans = relevantLoans.filter(l => !l.kembali && daysUntilDue(l) >= 0 && daysUntilDue(l) <= 2);
    const lowBooks = isMember() ? [] : db.books.filter(b => avail(b) <= 1);
    const items = [];

    lateLoans.forEach(l => {
      items.push(`
        <div class="p-3 rounded-3 mb-2 border border-danger-subtle" style="background:var(--danger-soft)">
          <div class="d-flex justify-content-between align-items-center">
            <strong class="text-danger"><i class="bi bi-exclamation-triangle-fill me-1"></i>Terlambat ${lateDays(l)} Hari</strong>
            <span class="badge bg-danger">${rp(calcFine(l))}</span>
          </div>
          <div class="small mt-1">Peminjam: <b>${esc(mem(l.nim).nama)}</b> (${esc(l.nim)}) — Buku <i>"${esc(book(l.kode).judul)}"</i> (Jatuh tempo: ${fmt(l.tempo)}).</div>
        </div>`);
    });

    dueSoonLoans.forEach(l => {
      items.push(`
        <div class="p-3 rounded-3 mb-2 border" style="background:var(--warning-soft)">
          <div class="d-flex justify-content-between align-items-center">
            <strong style="color:var(--warning-text)"><i class="bi bi-clock-fill me-1"></i>Segera Jatuh Tempo</strong>
            <span class="badge bg-warning text-dark">${daysUntilDue(l) === 0 ? 'Hari Ini' : `${daysUntilDue(l)} Hari Lagi`}</span>
          </div>
          <div class="small mt-1">Buku <b>"${esc(book(l.kode).judul)}"</b> oleh <b>${esc(mem(l.nim).nama)}</b> jatuh tempo pada ${fmt(l.tempo)}.</div>
        </div>`);
    });

    lowBooks.forEach(b => {
      items.push(`
        <div class="p-3 rounded-3 mb-2 border" style="background:var(--warning-soft)">
          <div class="d-flex justify-content-between align-items-center">
            <strong style="color:var(--warning-text)"><i class="bi bi-box-seam me-1"></i>Stok Buku Menipis</strong>
            <span class="badge bg-warning text-dark">Tersedia ${avail(b)} / ${b.stok}</span>
          </div>
          <div class="small mt-1">Koleksi <b>"${esc(b.judul)}"</b> (${esc(b.kode)}) di ${esc(b.rak)} tersisa ${avail(b)} eksemplar.</div>
        </div>`);
    });

    listEl.innerHTML = items.join('') || '<div class="text-center text-muted py-4"><i class="bi bi-check2-circle fs-2 d-block mb-2 text-success"></i>Tidak ada peringatan keterlambatan atau stok menipis saat ini.</div>';
  }

  function updateGlobalUI() {
    const memberMode = isMember();
    const currentMem = memberMode ? mem(session.nim) : null;
    const displayName = memberMode ? currentMem.nama : (db.cfg.nama || session?.nama || 'Admin Perpustakaan');
    const displayRole = memberMode ? `Anggota • ${currentMem.nim} (${currentMem.kelas})` : 'Petugas / Admin';
    const instansi = db.cfg.instansi || 'Perpustakaan Kelas IF1B - Politeknik Negeri Batam';

    $$('.avatar').forEach(a => {
      a.textContent = (displayName.trim()[0] || 'U').toUpperCase();
      a.title = `${displayName} (${displayRole})`;
    });
    $$('[data-officer-name]').forEach(el => { el.textContent = displayName; });
    $$('[data-officer-role]').forEach(el => { el.textContent = displayRole; });
    $$('[data-instansi-name]').forEach(el => { el.textContent = instansi; });

    const activeLogo = db.cfg.logo || DEFAULT_LIBRIVA_LOGO;
    $$('[data-app-logo]').forEach(img => { img.src = activeLogo; });
    $$('[data-polibatam-logo]').forEach(img => { img.src = POLIBATAM_LOGO; });

    // Sesuaikan visibilitas menu & tombol berdasarkan peran (Admin vs Anggota)
    $$('[data-admin-only]').forEach(el => {
      el.classList.toggle('d-none', memberMode);
    });
    $$('[data-member-only]').forEach(el => {
      el.classList.toggle('d-none', !memberMode);
    });

    // Sesuaikan label navigasi di sidebar agar intuitif bagi Anggota maupun Admin
    $$('[data-nav-label="dashboard"]').forEach(el => { el.textContent = memberMode ? 'Beranda Saya' : 'Dashboard'; });
    $$('[data-nav-label="buku"]').forEach(el => { el.textContent = memberMode ? 'Katalog Buku' : 'Data Buku'; });
    $$('[data-nav-label="peminjaman"]').forEach(el => { el.textContent = memberMode ? 'Pinjam Buku' : 'Peminjaman'; });
    $$('[data-nav-label="pengembalian"]').forEach(el => { el.textContent = memberMode ? 'Pinjaman Saya' : 'Pengembalian'; });
    $$('[data-nav-label="anggota"]').forEach(el => { el.textContent = memberMode ? 'Kartu Anggota' : 'Data Anggota'; });

    const relevantLoans = memberMode ? db.loans.filter(l => l.nim === session.nim) : db.loans;
    const activeCount = relevantLoans.filter(l => !l.kembali).length;
    const lateCount = relevantLoans.filter(l => status(l) === 'Terlambat').length;
    const lowStockCount = memberMode ? 0 : db.books.filter(b => avail(b) <= 1).length;

    $$('[data-badge-buku]').forEach(el => { el.textContent = db.books.length; });
    $$('[data-badge-anggota]').forEach(el => {
      el.textContent = memberMode ? 'ID' : db.members.length;
    });
    $$('[data-badge-kembali]').forEach(el => {
      el.textContent = lateCount > 0 ? `${lateCount} Terlambat` : activeCount;
      el.classList.toggle('danger', lateCount > 0);
    });

    const notifCountEl = $('#notifBadgeCount');
    if (notifCountEl) {
      const totalNotif = lateCount + lowStockCount;
      notifCountEl.textContent = totalNotif;
      notifCountEl.classList.toggle('d-none', totalNotif === 0);
    }

    const totalTersedia = db.books.reduce((s, b) => s + avail(b), 0);
    const setLoginStat = (id, v) => { const el = $('#' + id); if (el) el.textContent = v; };
    setLoginStat('loginStatBuku', db.books.length);
    setLoginStat('loginStatAnggota', db.members.length);
    setLoginStat('loginStatSirkulasi', totalTersedia);
  }

  function nextBookCode() {
    const nums = db.books.map(b => {
      const m = String(b.kode).match(/BK-(\d+)/i);
      return m ? parseInt(m[1], 10) : 0;
    });
    const next = (nums.length ? Math.max(...nums) : 0) + 1;
    return `BK-${String(next).padStart(3, '0')}`;
  }

  // ==================== 1. CONTROLLER LOGIN (ADMIN & ANGGOTA) ====================
  function initLogin(root = document) {
    const form = $('#formLogin', root);
    if (!form) return;
    const userInp = $('#loginUsername', root);
    const passInp = $('#loginPassword', root);
    const userLabel = $('#loginUsernameLabel', root);
    const passHint = $('#loginPassHint', root);
    const submitBtn = $('#btnSubmitLogin', root);
    const togglePassBtn = $('#btnToggleLoginPass', root);
    const errBox = $('#loginErrorBox', root);
    const errText = $('#loginErrorText', root);
    const roleTabs = $$('[data-login-role]', root);
    const adminDemoBox = $('#demoAdminBox', root);
    const memberDemoBox = $('#demoMemberBox', root);
    const registerWrap = $('#memberRegisterPrompt', root);

    let selectedRole = session?.roleType === 'member' ? 'member' : 'admin';

    updateGlobalUI();

    const hideError = () => {
      if (errBox) errBox.classList.add('d-none');
    };
    const showError = msg => {
      if (errBox && errText) {
        errText.textContent = msg;
        errBox.classList.remove('d-none');
      }
      toast(msg, 'danger');
    };

    const renderMemberChips = () => {
      const chipContainer = $('#memberDemoChips', root);
      if (!chipContainer) return;
      chipContainer.innerHTML = db.members.slice(0, 4).map(m => `
        <button type="button" class="demo-chip-btn" data-fill-member="${esc(m.nim)}">
          <i class="bi bi-person-badge text-primary"></i> ${esc(m.nama.split(' ')[0])} (${esc(m.nim)})
        </button>
      `).join('');
      $$('[data-fill-member]', chipContainer).forEach(btn => {
        btn.onclick = () => {
          hideError();
          setRoleUI('member');
          userInp.value = btn.dataset.fillMember;
          passInp.value = '123456';
          toast(`Akun anggota ${btn.dataset.fillMember} siap masuk.`, 'info');
        };
      });
    };

    const setRoleUI = role => {
      selectedRole = role;
      hideError();
      roleTabs.forEach(t => t.classList.toggle('active', t.dataset.loginRole === role));
      if (role === 'member') {
        if (userLabel) userLabel.textContent = 'NIM / Email Anggota';
        if (userInp) {
          userInp.placeholder = 'Masukkan NIM (contoh: 3312601037)';
          if (userInp.value === 'admin') userInp.value = db.members[0]?.nim || '3312601037';
        }
        if (passInp && passInp.value === 'admin123') passInp.value = '123456';
        if (passHint) passHint.innerHTML = 'Sandi bawaan anggota: <code>123456</code> atau NIM';
        if (submitBtn) submitBtn.innerHTML = '<i class="bi bi-box-arrow-in-right me-2"></i>Masuk sebagai Anggota';
        if (adminDemoBox) adminDemoBox.classList.add('d-none');
        if (memberDemoBox) memberDemoBox.classList.remove('d-none');
        if (registerWrap) registerWrap.classList.remove('d-none');
      } else {
        if (userLabel) userLabel.textContent = 'Username Petugas / Admin';
        if (userInp) {
          userInp.placeholder = 'Masukkan username (contoh: admin)';
          if (/^\d+$/.test(userInp.value)) userInp.value = 'admin';
        }
        if (passInp && passInp.value === '123456') passInp.value = 'admin123';
        if (passHint) passHint.innerHTML = 'Sandi bawaan: <code>admin123</code>';
        if (submitBtn) submitBtn.innerHTML = '<i class="bi bi-shield-lock-fill me-2"></i>Masuk sebagai Petugas';
        if (adminDemoBox) adminDemoBox.classList.remove('d-none');
        if (memberDemoBox) memberDemoBox.classList.add('d-none');
        if (registerWrap) registerWrap.classList.add('d-none');
      }
    };

    roleTabs.forEach(tab => {
      tab.onclick = () => setRoleUI(tab.dataset.loginRole);
    });

    if (userInp) userInp.addEventListener('input', hideError);
    if (passInp) passInp.addEventListener('input', hideError);

    if (togglePassBtn && passInp) {
      togglePassBtn.onclick = () => {
        const isPass = passInp.type === 'password';
        passInp.type = isPass ? 'text' : 'password';
        togglePassBtn.innerHTML = isPass ? '<i class="bi bi-eye-slash-fill"></i>' : '<i class="bi bi-eye-fill"></i>';
      };
    }

    $$('[data-demo-user]', root).forEach(chip => {
      chip.onclick = () => {
        hideError();
        setRoleUI('admin');
        userInp.value = chip.dataset.demoUser;
        passInp.value = db.cfg.password || 'admin123';
        toast('Kredensial Petugas telah diisi.', 'info');
      };
    });

    // Modal Pendaftaran Anggota Mandiri dari Halaman Login
    const btnOpenReg = $('#btnOpenRegisterMember', root);
    const regModalEl = $('#modalDaftarAnggota');
    const regForm = regModalEl ? $('form', regModalEl) : null;
    if (btnOpenReg && regModalEl) {
      btnOpenReg.onclick = () => {
        if (regForm) regForm.reset();
        bootstrap.Modal.getOrCreateInstance(regModalEl).show();
      };
    }
    if (regForm && regModalEl) {
      regForm.onsubmit = ev => {
        ev.preventDefault();
        if (!regForm.reportValidity()) {
          return toast('Mohon lengkapi data pendaftaran anggota dengan benar.', 'danger');
        }
        const fd = Object.fromEntries(new FormData(regForm));
        const nim = (fd.nim || '').trim();
        if (db.members.some(m => m.nim === nim)) {
          return toast(`NIM ${nim} sudah terdaftar. Silakan langsung login!`, 'warning');
        }
        const newMem = {
          nim,
          nama: (fd.nama || '').trim(),
          kelas: (fd.kelas || 'IF1B').trim().toUpperCase(),
          hp: (fd.hp || '').trim(),
          email: (fd.email || `${nim}@students.polibatam.ac.id`).trim(),
          pass: (fd.pass || '123456').trim()
        };
        db.members.push(newMem);
        save();
        renderMemberChips();
        bootstrap.Modal.getOrCreateInstance(regModalEl).hide();
        setRoleUI('member');
        userInp.value = newMem.nim;
        passInp.value = newMem.pass;
        toast(`Pendaftaran berhasil! Silakan masuk menggunakan NIM ${newMem.nim}.`);
      };
    }

    renderMemberChips();
    setRoleUI(selectedRole);

    form.onsubmit = e => {
      e.preventDefault();
      hideError();
      const u = (userInp?.value || '').trim();
      const p = (passInp?.value || '').trim();

      if (!u || !p) {
        return showError(' Kolom identitas dan kata sandi wajib diisi.');
      }

      if (selectedRole === 'member') {
        const found = db.members.find(m =>
          m.nim.toLowerCase() === u.toLowerCase() ||
          (m.email && m.email.toLowerCase() === u.toLowerCase()) ||
          m.nama.toLowerCase() === u.toLowerCase()
        );
        if (!found) {
          return showError('NIM atau nama anggota tidak ditemukan. Pastikan Anda sudah terdaftar atau klik "Daftar Anggota Baru".');
        }
        const expectedMemPass = found.pass || '123456';
        if (p !== expectedMemPass && p !== '123456' && p !== found.nim) {
          return showError('Kata sandi anggota salah! Gunakan sandi "123456" atau NIM Anda.');
        }
        session = {
          loggedIn: true,
          roleType: 'member',
          username: found.nim,
          nim: found.nim,
          nama: found.nama,
          role: `Anggota • ${found.kelas}`
        };
        saveSession();
        updateGlobalUI();
        toast(`Selamat datang, ${found.nama}!`);
      } else {
        const validAdmins = ['admin', 'petugas', (db.cfg.username || 'admin').toLowerCase(), (db.cfg.nama || '').toLowerCase()];
        const expectedPass = db.cfg.password || 'admin123';
        if (!validAdmins.includes(u.toLowerCase()) || (p !== expectedPass && p !== 'admin123')) {
          return showError('Username atau kata sandi Petugas tidak valid! Gunakan "admin" dan sandi "admin123".');
        }
        session = {
          loggedIn: true,
          roleType: 'admin',
          username: u,
          nim: null,
          nama: db.cfg.nama || 'Admin Perpustakaan',
          role: 'Petugas / Admin'
        };
        saveSession();
        updateGlobalUI();
        toast(`Selamat bertugas, ${session.nama}!`);
      }

      if (window.librivaEnterApp) {
        window.librivaEnterApp();
      } else {
        window.location.href = 'dashboard.html';
      }
    };
  }

  // ==================== 2. CONTROLLER DASHBOARD ====================
  function initDashboard(root = document) {
    const tbody = $('#rowsDashboard', root) || $('#rows', root);
    if (!tbody) return;

    const renderStatsAndCharts = () => {
      const memberMode = isMember();
      const relevantLoans = memberMode ? db.loans.filter(l => l.nim === session.nim) : db.loans;
      const activeLoans = relevantLoans.filter(l => !l.kembali);
      const lateLoans = relevantLoans.filter(l => status(l) === 'Terlambat');
      const dueTodayLoans = activeLoans.filter(l => l.tempo === today());
      const totalStok = db.books.reduce((s, b) => s + Number(b.stok || 0), 0);
      const totalTersedia = db.books.reduce((s, b) => s + avail(b), 0);
      const totalDenda = relevantLoans.reduce((s, l) => s + calcFine(l), 0);

      const setVal = (id, val) => {
        const el = $('#' + id, root);
        if (el) el.textContent = val;
      };

      // Sesuaikan label kartu ringkasan jika login sebagai Anggota
      setVal('labelStat1', memberMode ? 'Koleksi Buku' : 'Total Koleksi Buku');
      setVal('statBuku', db.books.length);
      setVal('statBukuSub', `${totalTersedia} tersedia dari ${totalStok} eks.`);

      setVal('labelStat2', memberMode ? 'Kuota Pinjam Saya' : 'Anggota Terdaftar');
      setVal('statAnggota', memberMode ? `${activeLoans.length} / ${db.cfg.maksPinjam || 3}` : db.members.length);
      setVal('statAnggotaSub', memberMode ? 'Batas maksimal pinjaman aktif' : `${new Set(db.loans.filter(l => !l.kembali).map(l => l.nim)).size} anggota sedang meminjam`);

      setVal('labelStat3', memberMode ? 'Sedang Saya Pinjam' : 'Buku Sedang Dipinjam');
      setVal('statDipinjam', activeLoans.length);
      setVal('statDipinjamSub', memberMode ? `${relevantLoans.filter(l => l.kembali).length} riwayat selesai` : 'Transaksi sirkulasi aktif');

      setVal('labelStat4', memberMode ? 'Keterlambatan Saya' : 'Pinjaman Terlambat');
      setVal('statTerlambat', lateLoans.length);
      setVal('statDenda', rp(totalDenda));

      setVal('welcomeDueTodayCount', dueTodayLoans.length);
      setVal('welcomeLateCount', lateLoans.length);

      const alertBox = $('#overdueAlertBox', root);
      if (alertBox) {
        if (lateLoans.length > 0) {
          alertBox.classList.remove('d-none');
          if (memberMode) {
            $('#overdueAlertText', alertBox).innerHTML = `<strong>Perhatian:</strong> Anda memiliki <b>${lateLoans.length} buku yang melewati batas pengembalian</b>. Segera kembalikan ke perpustakaan.`;
          } else {
            const names = lateLoans.map(l => `${mem(l.nim).nama} (${lateDays(l)} hari)`).join(', ');
            $('#overdueAlertText', alertBox).innerHTML = `<strong>Perhatian Keterlambatan:</strong> Terdapat <b>${lateLoans.length} pinjaman terlambat</b>: ${esc(names)}.`;
          }
        } else {
          alertBox.classList.add('d-none');
        }
      }

      const byCat = {};
      db.loans.filter(l => !l.kembali).forEach(l => {
        const c = book(l.kode).kategori || 'Lainnya';
        byCat[c] = (byCat[c] || 0) + 1;
      });
      const totalActiveAll = Math.max(1, db.loans.filter(l => !l.kembali).length);
      const chartEl = $('#kategoriChart', root);
      if (chartEl) {
        const entries = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
        chartEl.innerHTML = entries.map(([k, n]) => {
          const pct = Math.round((n / totalActiveAll) * 100);
          return `<div class="bar-row">
            <div class="meta"><span>${esc(k)}</span><b>${n} buku (${pct}%)</b></div>
            <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
          </div>`;
        }).join('') || '<p class="note mb-0">Belum ada buku yang sedang dipinjam saat ini.</p>';
      }

      const popEl = $('#popularBooksList', root);
      if (popEl) {
        const ranked = [...db.books]
          .map(b => ({ ...b, count: totalPopOf(b.kode) }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 4);
        popEl.innerHTML = ranked.map((b, i) => `
          <div class="d-flex align-items-center justify-content-between py-2 ${i < ranked.length - 1 ? 'border-bottom' : ''}">
            <div class="me-2">
              <div class="fw-bold small">${i + 1}. ${esc(b.judul)}</div>
              <div class="text-muted" style="font-size:0.75rem">${esc(b.penulis)} • ${esc(b.rak || 'Rak A-01')}</div>
            </div>
            <span class="badge cat">${b.count}x dipinjam</span>
          </div>
        `).join('');
      }
    };

    const qInput = $('[data-q-dashboard]', root) || $('[data-q]', root);
    const stFilter = $('#dashStatusFilter', root);

    const renderTable = () => {
      const memberMode = isMember();
      const q = (qInput?.value || '').trim().toLowerCase();
      const st = stFilter?.value || '';
      const sourceLoans = memberMode ? db.loans.filter(l => l.nim === session.nim) : db.loans;

      const rows = [...sourceLoans]
        .reverse()
        .filter(l => {
          const text = `${mem(l.nim).nama} ${l.nim} ${book(l.kode).judul} ${l.kode}`.toLowerCase();
          return (!q || text.includes(q)) && (!st || status(l) === st);
        })
        .slice(0, 8);

      tbody.innerHTML = rows.map(l => {
        const s = status(l);
        const f = calcFine(l);
        return `<tr>
          <td>
            <div class="fw-bold">${esc(mem(l.nim).nama)}</div>
            <div class="text-muted small">${esc(l.nim)} • ${esc(mem(l.nim).kelas)}</div>
          </td>
          <td>
            <div class="fw-semibold">${esc(book(l.kode).judul)}</div>
            <div class="text-muted small">${esc(l.kode)} • Pinjam: ${fmt(l.pinjam)}</div>
          </td>
          <td>
            <div>${fmt(l.tempo)}</div>
            ${f > 0 && !l.kembali ? `<small class="text-danger fw-bold">Denda: ${rp(f)}</small>` : ''}
          </td>
          <td>${badge(s)}</td>
          <td>
            ${l.kembali
              ? `<span class="text-muted small"><i class="bi bi-check2-all text-success"></i> Kembali ${fmt(l.kembali)}</span>`
              : memberMode
                ? `<span class="text-muted small"><i class="bi bi-hourglass-split"></i> Batas ${fmt(l.tempo)}</span>`
                : `<button type="button" class="btn btn-pink btn-sm" data-dash-return="${l.id}"><i class="bi bi-box-arrow-in-down-left"></i> Kembalikan</button>`}
          </td>
        </tr>`;
      }).join('') || empty(5, memberMode ? 'Anda belum memiliki riwayat peminjaman buku.' : 'Belum ada transaksi yang cocok.');
    };

    tbody.onclick = e => {
      const btn = e.target.closest('[data-dash-return]');
      if (!btn) return;
      const loan = db.loans.find(x => x.id == btn.dataset.dashReturn);
      if (!loan) return;
      loan.kembali = today();
      loan.dendaBayar = calcFine(loan);
      save();
      renderStatsAndCharts();
      renderTable();
      toast(loan.dendaBayar ? `Buku berhasil dikembalikan (Denda ${rp(loan.dendaBayar)})` : 'Buku berhasil dikembalikan dan stok diperbarui.');
    };

    if (qInput) qInput.oninput = renderTable;
    if (stFilter) stFilter.onchange = renderTable;

    renderStatsAndCharts();
    renderTable();
  }

  // ==================== 3. CONTROLLER DATA & KATALOG BUKU ====================
  function initBuku(root = document) {
    const tbody = $('#rowsBuku', root) || $('#rows', root);
    if (!tbody) return;
    const modalEl = $('#modalBuku', root) || $('#modalBuku');
    const modal = modalEl ? bootstrap.Modal.getOrCreateInstance(modalEl) : null;
    const form = modalEl ? $('form', modalEl) : null;

    const detailModalEl = $('#modalDetailBuku', root) || $('#modalDetailBuku');
    const detailModal = detailModalEl ? bootstrap.Modal.getOrCreateInstance(detailModalEl) : null;

    let editingKode = null;
    const qInput = $('[data-q-buku]', root) || $('[data-q]', root);
    const catSelect = $('[data-cat]', root);
    const stockFilter = $('#filterStokBuku', root);
    const sortSelect = $('#sortBuku', root);

    const render = () => {
      const memberMode = isMember();
      const q = (qInput?.value || '').trim().toLowerCase();
      const cat = catSelect?.value || '';
      const sf = stockFilter?.value || '';
      const sortBy = sortSelect?.value || 'kode';

      let list = db.books.filter(b => {
        const text = `${b.kode} ${b.isbn || ''} ${b.judul} ${b.penulis} ${b.kategori} ${b.rak || ''} ${b.tahun || ''}`.toLowerCase();
        const matchQ = !q || text.includes(q);
        const matchCat = !cat || b.kategori === cat;
        const av = avail(b);
        const matchStock = !sf || (sf === 'tersedia' ? av > 0 : av <= 0);
        return matchQ && matchCat && matchStock;
      });

      list.sort((a, b) => {
        if (sortBy === 'judul') return a.judul.localeCompare(b.judul);
        if (sortBy === 'stok') return avail(b) - avail(a);
        if (sortBy === 'populer') return totalPopOf(b.kode) - totalPopOf(a.kode);
        return a.kode.localeCompare(b.kode);
      });

      tbody.innerHTML = list.map(b => {
        const av = avail(b);
        const pct = b.stok > 0 ? Math.round((av / b.stok) * 100) : 0;
        const barColor = av === 0 ? '#d32f2f' : av <= 1 ? '#f57c00' : '#2e7d32';
        return `<tr>
          <td>
            <span class="fw-bold font-monospace text-nowrap">${esc(b.kode)}</span>
            <div class="text-muted" style="font-size:0.72rem">${esc(b.isbn || '-')}</div>
          </td>
          <td>
            <div class="d-flex align-items-center gap-3">
              <div class="book-mini-cover"><i class="bi bi-journal-bookmark-fill"></i></div>
              <div>
                <div class="fw-bold">${esc(b.judul)}</div>
                <div class="text-muted small"><i class="bi bi-geo-alt"></i> ${esc(b.rak || 'Rak A-01')} • ${esc(b.tahun || 2026)}</div>
              </div>
            </div>
          </td>
          <td>${esc(b.penulis)}</td>
          <td><span class="badge cat">${esc(b.kategori)}</span></td>
          <td>
            <div class="stock-bar-wrap">
              <div class="d-flex justify-content-between small fw-bold">
                <span class="${av === 0 ? 'text-danger' : ''}">${av} tersedia</span>
                <span class="text-muted">/ ${b.stok}</span>
              </div>
              <div class="stock-bar"><div class="stock-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
            </div>
          </td>
          <td>
            <div class="d-flex gap-1 flex-wrap">
              <button type="button" class="btn btn-soft btn-sm" data-act="detail" data-id="${esc(b.kode)}"><i class="bi bi-eye"></i> Detail</button>
              ${memberMode
                ? `<button type="button" class="btn btn-pink btn-sm" data-act="borrow" data-id="${esc(b.kode)}" ${av <= 0 ? 'disabled' : ''}><i class="bi bi-journal-plus"></i> Pinjam</button>`
                : `<button type="button" class="btn btn-soft btn-sm" data-act="edit" data-id="${esc(b.kode)}"><i class="bi bi-pencil-square"></i> Edit</button>
                   <button type="button" class="btn btn-soft-danger btn-sm" data-act="del" data-id="${esc(b.kode)}"><i class="bi bi-trash"></i> Hapus</button>`}
            </div>
          </td>
        </tr>`;
      }).join('') || empty(6);
    };

    const openDetailModal = kode => {
      if (!detailModalEl || !detailModal) return;
      const b = book(kode);
      const history = db.loans.filter(l => l.kode === kode).reverse();
      $('#detailBukuJudul', detailModalEl).textContent = b.judul;
      $('#detailBukuMeta', detailModalEl).textContent = `Kode: ${b.kode} • ISBN: ${b.isbn || '-'} • Penulis: ${b.penulis}`;
      $('#detailBukuLokasi', detailModalEl).textContent = `Kategori: ${b.kategori} • Lokasi: ${b.rak || 'Rak A-01'} • Tahun: ${b.tahun || 2026} • Tersedia: ${avail(b)} dari ${b.stok} eksemplar`;
      const histBody = $('#detailBukuHistory', detailModalEl);
      if (histBody) {
        histBody.innerHTML = history.map(l => `
          <tr>
            <td>${esc(mem(l.nim).nama)} (${esc(l.nim)})</td>
            <td>${fmt(l.pinjam)}</td>
            <td>${fmt(l.tempo)}</td>
            <td>${badge(status(l))}</td>
          </tr>
        `).join('') || empty(4, 'Buku ini belum pernah dipinjam.');
      }
      detailModal.show();
    };

    const openModal = kode => {
      if (!form || !modal) return;
      editingKode = kode;
      form.reset();
      const item = db.books.find(x => x.kode === kode);
      $$('[name]', form).forEach(inp => {
        if (item && item[inp.name] !== undefined) {
          inp.value = item[inp.name];
        } else if (!item && inp.name === 'kode') {
          inp.value = nextBookCode();
        } else if (!item && inp.name === 'isbn') {
          inp.value = `978-623-10${db.books.length + 1}-0`;
        } else if (!item && inp.name === 'tahun') {
          inp.value = new Date().getFullYear();
        } else if (!item && inp.name === 'rak') {
          inp.value = 'Rak A-01';
        }
      });
      const kodeInput = $('[name="kode"]', form);
      if (kodeInput) kodeInput.readOnly = !!item;
      const titleEl = $('.modal-title', modalEl);
      if (titleEl) titleEl.textContent = item ? `Ubah Data Buku (${item.kode})` : 'Tambah Buku Baru';
      modal.show();
    };

    const addBtn = $('[data-add-buku]', root) || $('[data-add]', root);
    if (addBtn) addBtn.onclick = () => openModal(null);

    tbody.onclick = e => {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      const id = btn.dataset.id;
      if (btn.dataset.act === 'detail') return openDetailModal(id);
      if (btn.dataset.act === 'borrow') {
        window.librivaPreselectBook = id;
        if (window.librivaSwitchPage) {
          window.librivaSwitchPage('peminjaman');
        } else {
          safeSet('libriva:preselect:book', id);
          window.location.href = 'peminjaman.html';
        }
        return;
      }
      if (btn.dataset.act === 'edit') return openModal(id);
      if (activeOf(id) > 0) {
        return toast('Buku sedang dipinjam oleh anggota, tidak dapat dihapus!', 'danger');
      }
      const targetBook = book(id);
      askConfirm('Hapus Koleksi Buku', `Apakah Anda yakin ingin menghapus buku "${targetBook.judul}" (${id})?`, () => {
        db.books = db.books.filter(x => x.kode !== id);
        save();
        render();
        toast('Data buku berhasil dihapus.');
      });
    };

    if (form) {
      form.onsubmit = e => {
        e.preventDefault();
        if (!form.reportValidity()) {
          return toast('Mohon lengkapi seluruh kolom wajib pada formulir buku!', 'danger');
        }
        const data = Object.fromEntries(new FormData(form));
        data.kode = data.kode.trim().toUpperCase();
        data.stok = Number(data.stok || 0);
        data.tahun = Number(data.tahun || new Date().getFullYear());
        data.rak = (data.rak || 'Rak A-01').trim();
        data.isbn = (data.isbn || '978-623-100-0').trim();

        if (!editingKode && db.books.some(x => x.kode === data.kode)) {
          return toast(`Kode buku ${data.kode} sudah terdaftar!`, 'danger');
        }
        if (editingKode && data.stok < activeOf(editingKode)) {
          return toast(`Stok tidak boleh kurang dari jumlah yang sedang dipinjam (${activeOf(editingKode)} eks).`, 'danger');
        }
        if (editingKode) {
          Object.assign(db.books.find(x => x.kode === editingKode), data);
        } else {
          db.books.push(data);
        }
        save();
        render();
        modal.hide();
        toast('Data buku berhasil disimpan.');
      };
    }

    [qInput, catSelect, stockFilter, sortSelect].forEach(el => {
      if (el) el.addEventListener('input', render);
    });
    render();
  }

  // ==================== 4. CONTROLLER DATA ANGGOTA & KARTU ANGGOTA ====================
  function initAnggota(root = document) {
    const tbody = $('#rowsAnggota', root) || $('#rows', root);
    if (!tbody) return;
    const modalEl = $('#modalAnggota', root) || $('#modalAnggota');
    const modal = modalEl ? bootstrap.Modal.getOrCreateInstance(modalEl) : null;
    const form = modalEl ? $('form', modalEl) : null;

    const cardModalEl = $('#modalKartuAnggota', root) || $('#modalKartuAnggota');
    const cardModal = cardModalEl ? bootstrap.Modal.getOrCreateInstance(cardModalEl) : null;

    let editingNim = null;
    const qInput = $('[data-q-anggota]', root) || $('[data-q]', root);
    const filterStatus = $('#filterStatusAnggota', root);

    const render = () => {
      const memberMode = isMember();
      const q = (qInput?.value || '').trim().toLowerCase();
      const fs = filterStatus?.value || '';

      const sourceMembers = memberMode
        ? db.members.filter(m => m.nim === session.nim)
        : db.members;

      const rows = sourceMembers.filter(m => {
        const text = `${m.nim} ${m.nama} ${m.kelas} ${m.hp} ${m.email || ''}`.toLowerCase();
        const active = memberActiveLoans(m.nim);
        const hasLate = active.some(l => status(l) === 'Terlambat');
        const matchQ = !q || text.includes(q);
        const matchSt = !fs
          || (fs === 'meminjam' && active.length > 0)
          || (fs === 'terlambat' && hasLate)
          || (fs === 'bebas' && active.length === 0);
        return matchQ && matchSt;
      });

      tbody.innerHTML = rows.map(m => {
        const active = memberActiveLoans(m.nim);
        const hasLate = active.some(l => status(l) === 'Terlambat');
        const initLetter = (m.nama || 'M')[0].toUpperCase();
        return `<tr>
          <td><span class="fw-bold font-monospace">${esc(m.nim)}</span></td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <div class="avatar" style="width:32px;height:32px;font-size:0.8rem">${esc(initLetter)}</div>
              <div>
                <div class="fw-bold">${esc(m.nama)}</div>
                <div class="text-muted small">${esc(m.email || `${m.nim}@students.polibatam.ac.id`)}</div>
              </div>
            </div>
          </td>
          <td><span class="badge cat">${esc(m.kelas)}</span></td>
          <td>${esc(m.hp)}</td>
          <td>
            <span class="fw-bold ${hasLate ? 'text-danger' : active.length ? 'text-primary' : 'text-muted'}">
              ${active.length} / ${db.cfg.maksPinjam || 3} buku
            </span>
            ${hasLate ? '<span class="badge bg-danger ms-1">Terlambat</span>' : ''}
          </td>
          <td>
            <div class="d-flex gap-1 flex-wrap">
              <button type="button" class="btn btn-pink btn-sm" data-act="card" data-id="${esc(m.nim)}"><i class="bi bi-person-vcard"></i> Lihat Kartu</button>
              <button type="button" class="btn btn-soft btn-sm" data-act="edit" data-id="${esc(m.nim)}"><i class="bi bi-pencil-square"></i> ${memberMode ? 'Ubah Profil' : 'Edit'}</button>
              ${memberMode ? '' : `<button type="button" class="btn btn-soft-danger btn-sm" data-act="del" data-id="${esc(m.nim)}"><i class="bi bi-trash"></i> Hapus</button>`}
            </div>
          </td>
        </tr>`;
      }).join('') || empty(6);
    };

    const openModal = nim => {
      if (!form || !modal) return;
      editingNim = nim;
      form.reset();
      const item = db.members.find(x => x.nim === nim);
      $$('[name]', form).forEach(inp => {
        if (item && item[inp.name] !== undefined) {
          inp.value = item[inp.name];
        } else if (!item && inp.name === 'kelas') {
          inp.value = 'IF1B';
        } else if (!item && inp.name === 'pass') {
          inp.value = '123456';
        }
      });
      const nimInput = $('[name="nim"]', form);
      if (nimInput) nimInput.readOnly = !!item;
      const titleEl = $('.modal-title', modalEl);
      if (titleEl) titleEl.textContent = item ? `Ubah Data Anggota (${item.nim})` : 'Tambah Anggota Baru';
      modal.show();
    };

    const openMemberCard = nim => {
      if (!cardModalEl || !cardModal) return;
      const m = mem(nim);
      const history = db.loans.filter(l => l.nim === nim).reverse();
      $('#cardMemberNama', cardModalEl).textContent = m.nama;
      $('#cardMemberNim', cardModalEl).textContent = `NIM: ${m.nim} • Kelas: ${m.kelas}`;
      $('#cardMemberHp', cardModalEl).textContent = `No. HP: ${m.hp} • Email: ${m.email || '-'}`;
      $('#cardMemberInstansi', cardModalEl).textContent = db.cfg.instansi || 'Perpustakaan Kelas IF1B - Politeknik Negeri Batam';
      $('#cardMemberBarcode', cardModalEl).textContent = `*${m.nim}*`;

      const histBody = $('#cardMemberHistory', cardModalEl);
      if (histBody) {
        histBody.innerHTML = history.map(l => `
          <tr>
            <td>${esc(book(l.kode).judul)}</td>
            <td>${fmt(l.pinjam)}</td>
            <td>${fmt(l.tempo)}</td>
            <td>${badge(status(l))}</td>
          </tr>
        `).join('') || empty(4, 'Anggota ini belum memiliki riwayat peminjaman.');
      }
      cardModal.show();
    };

    const addBtn = $('[data-add-anggota]', root) || $('[data-add]', root);
    if (addBtn) addBtn.onclick = () => openModal(null);

    tbody.onclick = e => {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      const id = btn.dataset.id;
      if (btn.dataset.act === 'card') return openMemberCard(id);
      if (btn.dataset.act === 'edit') return openModal(id);
      if (memberActiveLoans(id).length > 0) {
        return toast('Anggota masih memiliki pinjaman aktif, tidak dapat dihapus!', 'danger');
      }
      const targetMem = mem(id);
      askConfirm('Hapus Anggota', `Apakah Anda yakin ingin menghapus anggota "${targetMem.nama}" (NIM ${id})?`, () => {
        db.members = db.members.filter(x => x.nim !== id);
        save();
        render();
        toast('Data anggota berhasil dihapus.');
      });
    };

    if (form) {
      form.onsubmit = e => {
        e.preventDefault();
        if (!form.reportValidity()) {
          return toast('Mohon lengkapi seluruh kolom wajib pada formulir anggota!', 'danger');
        }
        const data = Object.fromEntries(new FormData(form));
        data.nim = data.nim.trim();
        data.nama = data.nama.trim();
        data.kelas = data.kelas.trim().toUpperCase();
        data.hp = data.hp.trim();
        data.email = (data.email || `${data.nim}@students.polibatam.ac.id`).trim();
        data.pass = (data.pass || '123456').trim();

        if (!editingNim && db.members.some(x => x.nim === data.nim)) {
          return toast(`NIM ${data.nim} sudah terdaftar!`, 'danger');
        }
        if (editingNim) {
          Object.assign(db.members.find(x => x.nim === editingNim), data);
          if (isMember() && session.nim === editingNim) {
            session.nama = data.nama;
            saveSession();
          }
        } else {
          db.members.push(data);
        }
        save();
        render();
        modal.hide();
        toast('Data anggota berhasil disimpan.');
      };
    }

    [qInput, filterStatus].forEach(el => {
      if (el) el.addEventListener('input', render);
    });
    render();
  }

  // ==================== 5. CONTROLLER PEMINJAMAN BUKU ====================
  function initPeminjaman(root = document) {
    const form = $('#formPinjam', root);
    if (!form) return;
    const m = $('#anggota', root);
    const b = $('#buku', root);
    const p = $('#pinjam', root);
    const t = $('#tempo', root);
    const catInp = $('#catatanPinjam', root);
    const s = $('#stokBuku', root);
    const memInfo = $('#previewAnggotaInfo', root);
    const bookInfo = $('#previewBukuInfo', root);
    const activeBody = $('#rowsPeminjamanAktif', root);
    const receiptModalEl = $('#modalBuktiPinjam', root) || $('#modalBuktiPinjam');
    const receiptModal = receiptModalEl ? bootstrap.Modal.getOrCreateInstance(receiptModalEl) : null;

    const setTempo = () => {
      if (!p.value) p.value = today();
      t.min = p.value;
      t.value = plus(db.cfg.hari || 7, new Date(p.value + 'T00:00'));
    };

    const updatePreviews = () => {
      const maks = Number(db.cfg.maksPinjam || 3);
      if (memInfo) {
        if (!m.value) {
          memInfo.innerHTML = '<i class="bi bi-info-circle me-1"></i>Pilih anggota untuk melihat kuota peminjaman aktif.';
        } else {
          const member = mem(m.value);
          const active = memberActiveLoans(m.value);
          const hasLate = active.some(l => status(l) === 'Terlambat');
          memInfo.innerHTML = `
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div><strong>${esc(member.nama)}</strong> • Kelas <span class="badge cat">${esc(member.kelas)}</span></div>
              <div class="fw-bold ${hasLate || active.length >= maks ? 'text-danger' : 'text-success'}">
                Pinjaman Aktif: ${active.length} / ${maks} buku
                ${hasLate ? ' (Ada Terlambat!)' : active.length >= maks ? ' (Kuota Penuh!)' : ' (Bisa Meminjam)'}
              </div>
            </div>`;
        }
      }
      if (bookInfo) {
        if (!b.value) {
          bookInfo.innerHTML = '<i class="bi bi-journal-bookmark me-1"></i>Pilih buku untuk melihat informasi penulis, rak, dan ketersediaan.';
        } else {
          const bk = book(b.value);
          const av = avail(bk);
          bookInfo.innerHTML = `
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div><strong>${esc(bk.judul)}</strong> — ${esc(bk.penulis)}</div>
              <div><span class="badge cat">${esc(bk.kategori)}</span> • <span class="fw-semibold">${esc(bk.rak || 'Rak A-01')}</span> (Tersedia: <b>${av}</b>)</div>
            </div>`;
        }
      }
    };

    const showReceipt = loan => {
      if (!receiptModalEl || !receiptModal) return;
      const member = mem(loan.nim);
      const bk = book(loan.kode);
      $('#receiptId', receiptModalEl).textContent = `TRX-${loan.id}`;
      $('#receiptAnggota', receiptModalEl).textContent = `${member.nama} (${member.nim} - ${member.kelas})`;
      $('#receiptBuku', receiptModalEl).textContent = `[${bk.kode}] ${bk.judul}`;
      $('#receiptRak', receiptModalEl).textContent = bk.rak || 'Rak A-01';
      $('#receiptPinjam', receiptModalEl).textContent = fmt(loan.pinjam);
      $('#receiptTempo', receiptModalEl).textContent = fmt(loan.tempo);
      $('#receiptPetugas', receiptModalEl).textContent = db.cfg.nama || 'Petugas Perpustakaan';
      receiptModal.show();
    };

    const renderActiveTable = () => {
      if (!activeBody) return;
      const memberMode = isMember();
      const source = memberMode
        ? db.loans.filter(l => l.nim === session.nim && !l.kembali)
        : db.loans.filter(l => !l.kembali);
      const active = [...source].reverse().slice(0, 8);
      activeBody.innerHTML = active.map(l => `
        <tr>
          <td>
            <div class="fw-bold">${esc(mem(l.nim).nama)}</div>
            <div class="text-muted small">${esc(l.nim)}</div>
          </td>
          <td>
            <div class="fw-semibold">${esc(book(l.kode).judul)}</div>
            <div class="text-muted small">${esc(l.kode)}${l.catatan ? ` • ${esc(l.catatan)}` : ''}</div>
          </td>
          <td>${fmt(l.pinjam)}</td>
          <td>${fmt(l.tempo)}</td>
          <td>
            <div class="d-flex align-items-center gap-1">
              ${badge(status(l))}
              <button type="button" class="btn btn-soft btn-sm py-0 px-2" data-receipt-id="${l.id}" title="Cetak Struk Pinjam"><i class="bi bi-receipt"></i></button>
            </div>
          </td>
        </tr>
      `).join('') || empty(5, 'Belum ada pinjaman aktif saat ini.');
    };

    if (activeBody) {
      activeBody.onclick = e => {
        const btn = e.target.closest('[data-receipt-id]');
        if (!btn) return;
        const loan = db.loans.find(x => x.id == btn.dataset.receiptId);
        if (loan) showReceipt(loan);
      };
    }

    const fill = () => {
      const memberMode = isMember();
      if (memberMode) {
        const me = mem(session.nim);
        m.innerHTML = `<option value="${esc(me.nim)}" selected>${esc(me.nama)} (${esc(me.nim)} - ${esc(me.kelas)})</option>`;
      } else {
        m.innerHTML = '<option value="" selected disabled>Pilih anggota peminjam</option>' +
          db.members.map(x => {
            const act = memberActiveLoans(x.nim).length;
            return `<option value="${esc(x.nim)}">${esc(x.nama)} (${esc(x.nim)} - ${esc(x.kelas)}) [Pinjam: ${act}]</option>`;
          }).join('');
      }

      b.innerHTML = '<option value="" selected disabled>Pilih buku yang akan dipinjam</option>' +
        db.books.map(x => {
          const av = avail(x);
          return `<option value="${esc(x.kode)}"${av <= 0 ? ' disabled' : ''}>[${esc(x.kode)}] ${esc(x.judul)} ${av <= 0 ? '(Stok Habis)' : `(Tersedia: ${av})`}</option>`;
        }).join('');

      // Jika pengguna mengklik "Pinjam" dari halaman Katalog Buku
      const preBook = window.librivaPreselectBook || safeGet('libriva:preselect:book');
      if (preBook && db.books.some(x => x.kode === preBook && avail(x) > 0)) {
        b.value = preBook;
        window.librivaPreselectBook = null;
        safeSet('libriva:preselect:book', '');
      }

      p.value = today();
      setTempo();
      const selectedBk = db.books.find(x => x.kode === b.value);
      s.textContent = selectedBk ? `Stok: ${avail(selectedBk)}` : 'Stok: -';
      if (catInp) catInp.value = '';
      updatePreviews();
      renderActiveTable();
    };

    p.onchange = setTempo;
    m.onchange = updatePreviews;
    b.onchange = () => {
      const bk = db.books.find(x => x.kode === b.value);
      s.textContent = bk ? `Stok: ${avail(bk)}` : 'Stok: -';
      updatePreviews();
    };

    form.onreset = () => setTimeout(fill, 10);
    form.onsubmit = e => {
      e.preventDefault();
      if (!form.reportValidity() || !m.value || !b.value || !p.value || !t.value) {
        return toast('Mohon pilih anggota, buku, serta tanggal peminjaman dengan lengkap!', 'danger');
      }
      const bk = db.books.find(x => x.kode === b.value);
      if (!bk) return toast('Pilih koleksi buku terlebih dahulu!', 'danger');
      if (t.value < p.value) return toast('Tanggal jatuh tempo tidak boleh sebelum tanggal pinjam!', 'danger');
      if (avail(bk) <= 0) return toast('Stok buku ini sedang habis!', 'danger');

      const active = memberActiveLoans(m.value);
      const maks = Number(db.cfg.maksPinjam || 3);
      if (active.some(l => status(l) === 'Terlambat')) {
        return toast('Peminjam masih memiliki buku yang terlambat dikembalikan!', 'danger');
      }
      if (active.length >= maks) {
        return toast(`Peminjam telah mencapai batas maksimal peminjaman (${maks} buku aktif)!`, 'danger');
      }
      if (active.some(l => l.kode === b.value)) {
        return toast('Peminjam sedang meminjam judul buku yang sama!', 'warning');
      }

      const newLoan = {
        id: Date.now(),
        nim: m.value,
        kode: b.value,
        pinjam: p.value,
        tempo: t.value,
        kembali: null,
        extended: false,
        kondisi: 'Baik',
        dendaBayar: 0,
        catatan: (catInp?.value || '').trim()
      };
      db.loans.push(newLoan);
      save();
      toast(`Peminjaman buku "${bk.judul}" berhasil dicatat.`);
      fill();
      showReceipt(newLoan);
    };

    fill();
  }

  // ==================== 6. CONTROLLER PENGEMBALIAN & PINJAMAN SAYA ====================
  function initPengembalian(root = document) {
    const tbody = $('#rowsPengembalian', root) || $('#rows', root);
    if (!tbody) return;

    const qInput = $('[data-q-kembali]', root) || $('[data-q]', root);
    const stSelect = $('[data-status]', root);
    const returnModalEl = $('#modalKonfirmasiKembali', root) || $('#modalKonfirmasiKembali');
    const returnModal = returnModalEl ? bootstrap.Modal.getOrCreateInstance(returnModalEl) : null;
    let selectedLoanId = null;

    const renderSummary = () => {
      const source = isMember() ? db.loans.filter(l => l.nim === session.nim) : db.loans;
      const dipinjam = source.filter(l => status(l) === 'Dipinjam').length;
      const terlambat = source.filter(l => status(l) === 'Terlambat').length;
      const kembali = source.filter(l => status(l) === 'Dikembalikan').length;
      const totalDenda = source.reduce((acc, l) => acc + calcFine(l), 0);

      const setEl = (id, v) => { const e = $('#' + id, root); if (e) e.textContent = v; };
      setEl('sumDipinjam', dipinjam);
      setEl('sumTerlambat', terlambat);
      setEl('sumDikembalikan', kembali);
      setEl('sumTotalDenda', rp(totalDenda));
    };

    const render = () => {
      renderSummary();
      const memberMode = isMember();
      const st = stSelect?.value || '';
      const q = (qInput?.value || '').trim().toLowerCase();
      const source = memberMode ? db.loans.filter(l => l.nim === session.nim) : db.loans;

      const rows = [...source].reverse().filter(l => {
        const text = `${mem(l.nim).nama} ${l.nim} ${book(l.kode).judul} ${l.kode}`.toLowerCase();
        return (!st || status(l) === st) && (!q || text.includes(q));
      });

      tbody.innerHTML = rows.map(l => {
        const stNow = status(l);
        const f = calcFine(l);
        const ld = lateDays(l);
        const rem = daysUntilDue(l);
        const dueNote = l.kembali
          ? ''
          : ld > 0
            ? `<div class="small text-danger fw-semibold">Terlambat ${ld} hari</div>`
            : rem === 0
              ? `<div class="small text-warning fw-semibold">Jatuh tempo hari ini</div>`
              : `<div class="small text-muted">Sisa ${rem} hari</div>`;

        return `<tr>
          <td>
            <div class="fw-bold">${esc(mem(l.nim).nama)}</div>
            <div class="text-muted small">${esc(l.nim)} • ${esc(mem(l.nim).kelas)}</div>
          </td>
          <td>
            <div class="fw-semibold">${esc(book(l.kode).judul)}</div>
            <div class="text-muted small">${esc(l.kode)} • Pinjam: ${fmt(l.pinjam)}</div>
          </td>
          <td>
            <div class="fw-semibold">${fmt(l.tempo)}</div>
            ${dueNote}
            ${l.extended ? '<span class="badge cat mt-1" style="font-size:0.68rem">Diperpanjang 1x</span>' : ''}
          </td>
          <td>${badge(stNow)}</td>
          <td>
            ${f > 0
              ? `<span class="fw-bold text-danger">${rp(f)}</span> <div class="text-muted small">${ld > 0 ? `Terlambat ${ld} hari` : ''}${l.kondisi && l.kondisi !== 'Baik' ? ` • ${esc(l.kondisi)}` : ''}</div>`
              : '<span class="text-muted">-</span>'}
          </td>
          <td>
            ${l.kembali
              ? `<div class="small text-muted"><i class="bi bi-check-circle-fill text-success"></i> Kembali ${fmt(l.kembali)}<br><span>Kondisi: ${esc(l.kondisi || 'Baik')}</span></div>`
              : `<div class="d-flex gap-1 flex-wrap">
                  <button type="button" class="btn btn-pink btn-sm" data-id="${l.id}" data-return-act="return"><i class="bi bi-check2-circle"></i> Kembalikan</button>
                  <button type="button" class="btn btn-soft btn-sm" data-id="${l.id}" data-return-act="extend" ${l.extended || stNow === 'Terlambat' ? 'disabled title="Tidak dapat diperpanjang"' : 'title="Perpanjang masa pinjam"'}><i class="bi bi-calendar-plus"></i> +${db.cfg.hari || 7} Hr</button>
                </div>`}
          </td>
        </tr>`;
      }).join('') || empty(6);
    };

    const processDirectReturn = (loan, kondisi = 'Baik', catatan = '') => {
      loan.kembali = today();
      loan.kondisi = kondisi;
      loan.catatan = catatan;
      loan.dendaBayar = calcFine(loan);
      save();
      render();
      toast(loan.dendaBayar ? `Buku dikembalikan dengan denda ${rp(loan.dendaBayar)}.` : 'Buku berhasil dikembalikan dan stok diperbarui!', loan.dendaBayar ? 'warning' : 'success');
    };

    tbody.onclick = e => {
      const btn = e.target.closest('[data-id]');
      if (!btn) return;
      const id = btn.dataset.id;
      const act = btn.dataset.returnAct || 'return';
      const loan = db.loans.find(x => x.id == id);
      if (!loan) return;

      if (act === 'extend') {
        if (loan.extended) return toast('Pinjaman ini sudah pernah diperpanjang 1 kali.', 'warning');
        if (status(loan) === 'Terlambat') return toast('Pinjaman yang sudah melewati jatuh tempo tidak dapat diperpanjang.', 'danger');
        loan.tempo = plus(db.cfg.hari || 7, new Date(loan.tempo + 'T00:00'));
        loan.extended = true;
        save();
        render();
        return toast(`Masa peminjaman berhasil diperpanjang hingga ${fmt(loan.tempo)}.`);
      }

      if (returnModalEl && returnModal) {
        selectedLoanId = loan.id;
        $('#retInfoAnggota', returnModalEl).textContent = `${mem(loan.nim).nama} (${loan.nim})`;
        $('#retInfoBuku', returnModalEl).textContent = `${book(loan.kode).judul} (${loan.kode})`;
        $('#retInfoTempo', returnModalEl).textContent = `${fmt(loan.tempo)} (${lateDays(loan)} hari terlambat)`;
        const kondSel = $('#retKondisiBuku', returnModalEl);
        const catInp = $('#retCatatan', returnModalEl);
        if (kondSel) kondSel.value = 'Baik';
        if (catInp) catInp.value = '';
        const updateEstFine = () => {
          const tempLoan = { ...loan, kembali: today(), kondisi: kondSel ? kondSel.value : 'Baik' };
          $('#retTotalDenda', returnModalEl).textContent = rp(calcFine(tempLoan));
        };
        if (kondSel) kondSel.onchange = updateEstFine;
        updateEstFine();
        returnModal.show();
      } else {
        processDirectReturn(loan);
      }
    };

    const formReturn = $('#formKonfirmasiKembali', returnModalEl || root);
    if (formReturn) {
      formReturn.onsubmit = e => {
        e.preventDefault();
        const loan = db.loans.find(x => x.id == selectedLoanId);
        if (!loan) return;
        const kondisi = $('#retKondisiBuku', returnModalEl)?.value || 'Baik';
        const catatan = $('#retCatatan', returnModalEl)?.value || '';
        returnModal.hide();
        processDirectReturn(loan, kondisi, catatan);
      };
    }

    [qInput, stSelect].forEach(el => {
      if (el) el.addEventListener('input', render);
    });
    render();
  }

  // ==================== 7. CONTROLLER LAPORAN ====================
  function initLaporan(root = document) {
    const tbody = $('#rowsLaporan', root) || $('#rows', root);
    if (!tbody) return;
    let exportRows = [];
    let currentMode = 'detail';

    const perSelect = $('#periode', root);
    const katSelect = $('#kat', root);
    const modeSelect = $('#modeLaporan', root);
    const qInput = $('[data-q-laporan]', root) || $('[data-q]', root);
    const thead = $('#theadLaporan', root);

    const render = () => {
      const per = perSelect?.value || '';
      const kat = katSelect?.value || '';
      currentMode = modeSelect?.value || 'detail';
      const q = (qInput?.value || '').trim().toLowerCase();
      const now = new Date();

      const start = per === 'hari'
        ? today()
        : per === 'bulan'
          ? iso(new Date(now.getFullYear(), now.getMonth(), 1))
          : per === '3bulan'
            ? iso(new Date(now.getFullYear(), now.getMonth() - 2, 1))
            : per === 'tahun'
              ? `${now.getFullYear()}-01-01`
              : '';

      const filteredLoans = db.loans.filter(l => {
        const matchPer = !start || l.pinjam >= start;
        const matchKat = !kat || book(l.kode).kategori === kat;
        return matchPer && matchKat;
      });

      const totalTransaksi = filteredLoans.length;
      const selesaiCount = filteredLoans.filter(l => l.kembali).length;
      const terlambatCount = filteredLoans.filter(l => status(l) === 'Terlambat' || lateDays(l) > 0).length;
      const totalDendaFilter = filteredLoans.reduce((s, l) => s + calcFine(l), 0);

      const setEl = (id, v) => { const e = $('#' + id, root); if (e) e.textContent = v; };
      setEl('lapStatTransaksi', totalTransaksi);
      setEl('lapStatSelesai', selesaiCount);
      setEl('lapStatTerlambat', terlambatCount);
      setEl('lapStatDenda', rp(totalDendaFilter));

      if (currentMode === 'rekap') {
        if (thead) {
          thead.innerHTML = '<tr><th>No</th><th>Judul Buku</th><th>Peminjam</th><th>Jumlah Pinjam</th></tr>';
        }
        const agg = {};
        filteredLoans.forEach(l => {
          const k = l.kode + '|' + l.nim;
          agg[k] = (agg[k] || 0) + 1;
        });
        const rows = Object.entries(agg)
          .map(([k, n]) => {
            const [kode, nim] = k.split('|');
            return [book(kode).judul, mem(nim).nama, n, book(kode).kategori];
          })
          .filter(r => !q || r.join(' ').toLowerCase().includes(q));

        exportRows = rows.map((r, i) => [i + 1, r[0], r[1], r[2]]);
        tbody.innerHTML = rows.map((r, i) => `
          <tr>
            <td>${i + 1}</td>
            <td><span class="fw-semibold">${esc(r[0])}</span> <span class="badge cat ms-1">${esc(r[3])}</span></td>
            <td>${esc(r[1])}</td>
            <td><span class="fw-bold">${r[2]} kali</span></td>
          </tr>
        `).join('') || empty(4, 'Tidak ada data pada filter laporan ini.');
        const sum = rows.reduce((a, r) => a + r[2], 0);
        $('#totalLaporan', root).textContent = `Total Peminjaman : ${sum} transaksi`;
      } else {
        if (thead) {
          thead.innerHTML = '<tr><th>No</th><th>Tgl Pinjam</th><th>Judul Buku</th><th>Peminjam</th><th>Jatuh Tempo</th><th>Status</th><th>Denda</th></tr>';
        }
        const detailRows = filteredLoans.filter(l => {
          const text = `${book(l.kode).judul} ${mem(l.nim).nama} ${l.nim} ${status(l)}`.toLowerCase();
          return !q || text.includes(q);
        });
        exportRows = detailRows.map((l, i) => [
          i + 1,
          l.pinjam,
          book(l.kode).judul,
          `${mem(l.nim).nama} (${l.nim})`,
          l.tempo,
          status(l),
          calcFine(l)
        ]);
        tbody.innerHTML = detailRows.map((l, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${fmt(l.pinjam)}</td>
            <td><span class="fw-semibold">${esc(book(l.kode).judul)}</span></td>
            <td>${esc(mem(l.nim).nama)} <small class="text-muted">(${esc(l.nim)})</small></td>
            <td>${fmt(l.tempo)}</td>
            <td>${badge(status(l))}</td>
            <td>${calcFine(l) ? rp(calcFine(l)) : '-'}</td>
          </tr>
        `).join('') || empty(7, 'Tidak ada transaksi pada filter ini.');
        $('#totalLaporan', root).textContent = `Total Transaksi : ${detailRows.length} transaksi • Total Denda : ${rp(totalDendaFilter)}`;
      }
    };

    [perSelect, katSelect, modeSelect, qInput].forEach(el => {
      if (el) el.addEventListener('input', render);
    });

    const btnCsv = $('#btnCsv', root);
    if (btnCsv) {
      btnCsv.onclick = () => {
        const header = currentMode === 'rekap'
          ? 'No,Judul Buku,Peminjam,Jumlah'
          : 'No,Tanggal Pinjam,Judul Buku,Peminjam,Jatuh Tempo,Status,Denda';
        const csv = [
          header,
          ...exportRows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
        ].join('\n');
        const a = Object.assign(document.createElement('a'), {
          href: URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' })),
          download: `laporan-perpustakaan-${today()}.csv`
        });
        a.click();
        toast('File CSV laporan berhasil diunduh.');
      };
    }

    const btnPrint = $('#btnPrintLaporan', root);
    if (btnPrint) btnPrint.onclick = () => window.print();

    render();
  }

  // ==================== 8. CONTROLLER PENGATURAN ====================
  function initPengaturan(root = document) {
    const f = $('#formCfg', root);
    if (!f) return;

    const load = () => {
      const setVal = (id, v) => { const el = $('#' + id, root); if (el) el.value = v; };
      setVal('nama', db.cfg.nama || 'Admin Perpustakaan');
      setVal('instansi', db.cfg.instansi || 'Perpustakaan Kelas IF1B - Politeknik Negeri Batam');
      setVal('hari', db.cfg.hari ?? 7);
      setVal('maksPinjam', db.cfg.maksPinjam ?? 3);
      setVal('denda', db.cfg.denda ?? 1000);
      setVal('dendaRusak', db.cfg.dendaRusak ?? 25000);
      setVal('pass', '');
      setVal('pass2', '');
      const p2 = $('#pass2', root);
      if (p2) p2.classList.remove('is-invalid');
    };

    f.onreset = () => setTimeout(load, 10);
    f.onsubmit = e => {
      e.preventDefault();
      if (!f.reportValidity()) {
        return toast('Mohon isi nama pengelola dan aturan peminjaman dengan benar!', 'danger');
      }
      const p1 = $('#pass', root)?.value || '';
      const p2 = $('#pass2', root)?.value || '';
      const bad = p1 !== p2;
      $('#pass2', root)?.classList.toggle('is-invalid', bad);
      if (bad) return toast('Konfirmasi kata sandi tidak cocok!', 'danger');

      Object.assign(db.cfg, {
        nama: ($('#nama', root)?.value || '').trim() || 'Admin Perpustakaan',
        instansi: ($('#instansi', root)?.value || '').trim() || 'Perpustakaan Kelas IF1B - Politeknik Negeri Batam',
        hari: Number($('#hari', root)?.value || 7),
        maksPinjam: Number($('#maksPinjam', root)?.value || 3),
        denda: Number($('#denda', root)?.value || 1000),
        dendaRusak: Number($('#dendaRusak', root)?.value || 25000)
      });
      if (p1) db.cfg.password = p1;
      if (!isMember()) {
        session.nama = db.cfg.nama;
        saveSession();
      }
      save();
      toast('Pengaturan perpustakaan berhasil disimpan.');
      load();
    };

    const btnExportJson = $('#btnExportJson', root);
    if (btnExportJson) {
      btnExportJson.onclick = () => {
        const blob = new Blob([JSON.stringify(db, null, 2)], { type: 'application/json' });
        const a = Object.assign(document.createElement('a'), {
          href: URL.createObjectURL(blob),
          download: `libriva-backup-${today()}.json`
        });
        a.click();
        toast('File cadangan data (JSON) berhasil diunduh.');
      };
    }

    const inputImportJson = $('#inputImportJson', root);
    if (inputImportJson) {
      inputImportJson.onchange = e => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          try {
            const parsed = JSON.parse(String(ev.target?.result || ''));
            if (!parsed || !Array.isArray(parsed.books) || !Array.isArray(parsed.members)) {
              return toast('Format file JSON tidak sesuai!', 'danger');
            }
            db = parsed;
            save();
            load();
            toast('Data perpustakaan berhasil dipulihkan dari cadangan!');
            if (window.librivaRefreshAll) window.librivaRefreshAll();
          } catch {
            toast('Gagal membaca file cadangan JSON.', 'danger');
          }
        };
        reader.readAsText(file);
      };
    }

    const btnResetSeed = $('#btnResetSeed', root);
    if (btnResetSeed) {
      btnResetSeed.onclick = () => {
        askConfirm('Reset Data Awal', 'Seluruh perubahan data lokal akan dikembalikan ke data awal perpustakaan. Lanjutkan?', () => {
          db = seed();
          save();
          load();
          if (window.librivaRefreshAll) window.librivaRefreshAll();
          toast('Data berhasil dikembalikan ke pengaturan awal.', 'info');
        });
      };
    }

    load();
  }

  // Inisialisasi Global
  initThemeAndHeader();

  const currentPage = document.body.dataset.page;
  const controllers = {
    login: initLogin,
    dashboard: initDashboard,
    buku: initBuku,
    anggota: initAnggota,
    peminjaman: initPeminjaman,
    pengembalian: initPengembalian,
    laporan: initLaporan,
    pengaturan: initPengaturan
  };

  if (currentPage === 'spa') {
    const loginView = $('#spaLoginView');
    const appView = $('#spaAppShell');

    const showLoginView = () => {
      if (loginView) loginView.classList.remove('d-none');
      if (appView) appView.classList.add('d-none');
      initLogin(loginView || document);
    };

    const enterApp = (targetPage = 'dashboard') => {
      if (loginView) loginView.classList.add('d-none');
      if (appView) appView.classList.remove('d-none');
      switchPage(targetPage);
    };

    const switchPage = pageName => {
      if (pageName === 'login') {
        showLoginView();
        return;
      }
      // Jika login sebagai anggota dan mencoba buka halaman khusus admin, arahkan ke dashboard
      if (isMember() && (pageName === 'laporan' || pageName === 'pengaturan')) {
        pageName = 'dashboard';
      }
      if (loginView && !loginView.classList.contains('d-none')) {
        loginView.classList.add('d-none');
        if (appView) appView.classList.remove('d-none');
      }
      $$('[data-spa-section]').forEach(sec => {
        sec.classList.toggle('d-none', sec.dataset.spaSection !== pageName);
      });
      $$('[data-spa-nav]').forEach(nav => {
        const active = nav.dataset.spaNav === pageName;
        nav.classList.toggle('active', active);
        if (active) nav.setAttribute('aria-current', 'page');
        else nav.removeAttribute('aria-current');
      });

      const memberMode = isMember();
      const titles = {
        dashboard: memberMode
          ? ['Beranda Saya', 'Ringkasan pinjaman aktif, batas waktu pengembalian, dan koleksi buku']
          : ['Dashboard', 'Ringkasan aktivitas sirkulasi dan koleksi perpustakaan'],
        buku: memberMode
          ? ['Katalog Buku', 'Telusuri koleksi buku perpustakaan dan ajukan peminjaman']
          : ['Data Buku', 'Kelola daftar koleksi buku, lokasi rak, dan ketersediaan stok'],
        peminjaman: memberMode
          ? ['Pinjam Buku', 'Formulir peminjaman mandiri anggota perpustakaan']
          : ['Peminjaman Buku', 'Catat transaksi peminjaman buku anggota perpustakaan'],
        pengembalian: memberMode
          ? ['Pinjaman & Riwayat Saya', 'Daftar buku yang sedang Anda pinjam dan riwayat pengembalian']
          : ['Pengembalian Buku', 'Kelola pengembalian buku, perpanjangan masa pinjam, dan denda'],
        anggota: memberMode
          ? ['Kartu & Profil Anggota', 'Kartu anggota digital beserta riwayat peminjaman Anda']
          : ['Data Anggota', 'Kelola data anggota perpustakaan dan kartu identitas anggota'],
        laporan: ['Laporan Perpustakaan', 'Rekapitulasi transaksi sirkulasi peminjaman dan pengembalian'],
        pengaturan: ['Pengaturan', 'Kelola identitas perpustakaan, aturan peminjaman, dan cadangan data']
      };
      const [t, sub] = titles[pageName] || ['Libriva', ''];
      const titleEl = $('#spaPageTitle');
      const subEl = $('#spaPageSubtitle');
      if (titleEl) titleEl.textContent = t;
      if (subEl) subEl.textContent = sub;

      const secEl = $(`[data-spa-section="${pageName}"]`);
      if (secEl && controllers[pageName]) {
        controllers[pageName](secEl);
      }
      updateGlobalUI();
    };

    window.librivaSwitchPage = switchPage;
    window.librivaShowLogin = showLoginView;
    window.librivaEnterApp = () => enterApp('dashboard');
    window.librivaRefreshAll = () => {
      const activeNav = $('[data-spa-nav].active');
      switchPage(activeNav ? activeNav.dataset.spaNav : 'dashboard');
    };

    $$('[data-spa-nav]').forEach(nav => {
      nav.addEventListener('click', e => {
        e.preventDefault();
        switchPage(nav.dataset.spaNav);
      });
    });

    $$('[data-goto-page]').forEach(btn => {
      btn.addEventListener('click', () => enterApp(btn.dataset.gotoPage));
    });

    initLogin(loginView || document);
    initDashboard($('#sec-dashboard') || document);
    showLoginView();
  } else {
    $$('[data-goto-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.href = `${btn.dataset.gotoPage}.html`;
      });
    });
    if (controllers[currentPage]) {
      controllers[currentPage](document);
    }
  }
})();
