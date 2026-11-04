
const translations = {
    en: {
        pageTitle: "SmartERM | Yorina's Project Case Study",
        metaDescription: "A case study of SmartERM, a web-based clinical anamnesis recording prototype developed as an academic final project.",

        backPortfolio: "← Back to Portfolio",
        contact: "Contact",

        heroEyebrow: "ACADEMIC FINAL PROJECT · 2026",
        heroSubtitle: "AI-Assisted Anamnesis Documentation",
        heroDescription: "A web-based prototype that transforms doctor-patient conversations into structured anamnesis records using speech recognition and large language models.",
        watchDemo: "▶ Watch Web Demo",
        viewReport: "📄 View Project Report",
        systemPreview: "SYSTEM PREVIEW",
        healthcareTechnology: "Healthcare Technology",

        overviewLabel: "01 — PROJECT OVERVIEW",
        overviewHeading1: "Understanding the problem",
        overviewHeading2: "before building the solution.",
        overviewP1: "SmartERM is an academic prototype designed to support the recording of patient anamnesis information in a web-based environment.",
        overviewP2: "The prototype explores the use of speech recognition and large language models to transform spoken information into structured documentation fields.",
        overviewP3: "The project was developed with reference to the clinical documentation workflow at RSIA Al-Hasanah, Madiun, particularly in the Obgyn context.",

        backgroundLabel: "02 — PROJECT BACKGROUND",
        backgroundHeading1: "The challenge behind",
        backgroundHeading2: "the prototype.",
        backgroundP1: "Clinical anamnesis involves collecting and documenting information about a patient's condition and medical history.",
        backgroundP2: "This project explored how speech-to-text technology and language models could assist the process of organizing spoken information into structured anamnesis fields.",

        solutionLabel: "03 — PROPOSED SOLUTION",
        solutionHeading1: "From spoken information",
        solutionHeading2: "to structured data.",
        workflow1Title: "Audio Input",
        workflow1Desc: "Audio is recorded through the web interface using the browser's MediaRecorder API.",
        workflow2Title: "Speech Recognition",
        workflow2Desc: "Whisper processes recorded audio and generates a text transcription.",
        workflow3Title: "Information Extraction",
        workflow3Desc: "Llama 3 processes the transcription into structured JSON fields.",
        workflow4Title: "Web Application",
        workflow4Desc: "Extracted information is handled by the application for review and documentation.",

        roleLabel: "04 — MY ROLE & CONTRIBUTION",
        roleHeading1: "Connecting user needs",
        roleHeading2: "with technology.",
        roleIntro: "I worked on the project from requirements exploration through prototype development and evaluation.",
        role1Title: "Requirements Exploration",
        role1Desc: "Conducted user interviews and explored documentation needs in the project context.",
        role2Title: "Technology Research",
        role2Desc: "Reviewed technical references and researched suitable technologies for the prototype.",
        role3Title: "Prototype Development",
        role3Desc: "Worked on the web prototype and its integration with speech recognition and language model services.",
        role4Title: "Testing & Documentation",
        role4Desc: "Participated in prototype validation, revisions, technical documentation, and project presentation.",

        technologyLabel: "05 — TECHNOLOGY STACK",
        technologyHeading1: "Technology behind",
        technologyHeading2: "the prototype.",
        aiServices: "Whisper and Llama 3 through Groq",

        evaluationLabel: "06 — TESTING & EVALUATION",
        evaluationHeading1: "Evaluating the",
        evaluationHeading2: "prototype.",
        result1Desc: "Word Error Rate recorded in the speech recognition evaluation.",
        result2Title: "Sufficient Validation",
        result2Desc: "Portion of validation results categorized as sufficient.",
        result3Title: "Revision Required",
        result3Desc: "Portion of validation results requiring further revision.",
        resultNote: "These figures represent the evaluation results recorded during the academic project. They do not establish clinical effectiveness or production readiness.",

        scopeLabel: "07 — PROJECT SCOPE",
        scopeHeading1: "What this project",
        scopeHeading2: "does and does not cover.",
        scopeP1: "SmartERM was developed as an academic prototype. It was not deployed as a production hospital system.",
        scopeP2: "The prototype does not provide clinical decision support and does not integrate with SIMRS, BPJS, or SATUSEHAT.",

        documentationLabel: "08 — PROJECT DOCUMENTATION",
        documentationHeading1: "A closer look at",
        documentationHeading2: "the project.",
        demoSmartERM: "▶ SmartERM Web Demo",
        readReport: "📄 Read Project Report",

        thankYou: "THANK YOU FOR EXPLORING",
        contactHeading1: "Interested in my",
        contactHeading2: "work?",
        contactDescription: "Feel free to explore more of my projects or get in touch to discuss ideas and opportunities.",
        getInTouch: "Get in touch ↗",
        copyright: "© 2026 Yorina. All rights reserved."
    },

    id: {
        pageTitle: "SmartERM | Studi Kasus Proyek Yorina",
        metaDescription: "Studi kasus SmartERM, sebuah prototipe pencatatan anamnesis klinis berbasis web yang dikembangkan sebagai proyek tugas akhir akademik.",

        backPortfolio: "← Kembali ke Portofolio",
        contact: "Kontak",

        heroEyebrow: "PROYEK TUGAS AKHIR · 2026",
        heroSubtitle: "Dokumentasi Anamnesis Berbantuan AI",
        heroDescription: "Prototipe berbasis web yang mengubah percakapan dokter dan pasien menjadi catatan anamnesis terstruktur menggunakan teknologi pengenalan suara dan large language model.",
        watchDemo: "▶ Lihat Demo Web",
        viewReport: "📄 Lihat Laporan Proyek",
        systemPreview: "PRATINJAU SISTEM",
        healthcareTechnology: "Teknologi Kesehatan",

        overviewLabel: "01 — GAMBARAN UMUM PROYEK",
        overviewHeading1: "Memahami permasalahan",
        overviewHeading2: "sebelum membangun solusi.",
        overviewP1: "SmartERM merupakan prototipe akademik yang dirancang untuk mendukung pencatatan informasi anamnesis pasien dalam lingkungan berbasis web.",
        overviewP2: "Prototipe ini mengeksplorasi penggunaan teknologi pengenalan suara dan large language model untuk mengubah informasi lisan menjadi kolom dokumentasi yang terstruktur.",
        overviewP3: "Proyek ini dikembangkan dengan mengacu pada alur dokumentasi klinis di RSIA Al-Hasanah, Kota Madiun, khususnya pada konteks layanan Obgyn.",

        backgroundLabel: "02 — LATAR BELAKANG PROYEK",
        backgroundHeading1: "Tantangan di balik",
        backgroundHeading2: "pengembangan prototipe.",
        backgroundP1: "Anamnesis klinis melibatkan proses pengumpulan dan pendokumentasian informasi mengenai kondisi serta riwayat kesehatan pasien.",
        backgroundP2: "Proyek ini mengeksplorasi bagaimana teknologi speech-to-text dan model bahasa dapat membantu mengorganisasi informasi lisan ke dalam kolom anamnesis yang terstruktur.",

        solutionLabel: "03 — SOLUSI YANG DIUSULKAN",
        solutionHeading1: "Dari informasi lisan",
        solutionHeading2: "menjadi data terstruktur.",
        workflow1Title: "Input Audio",
        workflow1Desc: "Audio direkam melalui antarmuka web menggunakan MediaRecorder API pada browser.",
        workflow2Title: "Pengenalan Suara",
        workflow2Desc: "Whisper memproses audio yang direkam dan menghasilkan transkripsi teks.",
        workflow3Title: "Ekstraksi Informasi",
        workflow3Desc: "Llama 3 memproses hasil transkripsi menjadi kolom JSON yang terstruktur.",
        workflow4Title: "Aplikasi Web",
        workflow4Desc: "Informasi yang diekstraksi dikelola oleh aplikasi untuk ditinjau dan didokumentasikan.",

        roleLabel: "04 — PERAN & KONTRIBUSI SAYA",
        roleHeading1: "Menghubungkan kebutuhan pengguna",
        roleHeading2: "dengan teknologi.",
        roleIntro: "Saya terlibat dalam proyek mulai dari eksplorasi kebutuhan hingga pengembangan dan evaluasi prototipe.",
        role1Title: "Eksplorasi Kebutuhan",
        role1Desc: "Melakukan wawancara pengguna dan mengeksplorasi kebutuhan dokumentasi dalam konteks proyek.",
        role2Title: "Riset Teknologi",
        role2Desc: "Meninjau referensi teknis dan melakukan riset untuk menentukan teknologi yang sesuai dengan kebutuhan prototipe.",
        role3Title: "Pengembangan Prototipe",
        role3Desc: "Terlibat dalam pengembangan prototipe web dan integrasinya dengan layanan pengenalan suara serta model bahasa.",
        role4Title: "Pengujian & Dokumentasi",
        role4Desc: "Berpartisipasi dalam validasi prototipe, revisi, penyusunan dokumentasi teknis, dan presentasi proyek.",

        technologyLabel: "05 — TEKNOLOGI YANG DIGUNAKAN",
        technologyHeading1: "Teknologi di balik",
        technologyHeading2: "pengembangan prototipe.",
        aiServices: "Whisper dan Llama 3 melalui Groq",

        evaluationLabel: "06 — PENGUJIAN & EVALUASI",
        evaluationHeading1: "Evaluasi",
        evaluationHeading2: "prototipe.",
        result1Desc: "Word Error Rate yang tercatat dalam evaluasi pengenalan suara.",
        result2Title: "Validasi Memadai",
        result2Desc: "Persentase hasil validasi yang dikategorikan memadai.",
        result3Title: "Memerlukan Revisi",
        result3Desc: "Persentase hasil validasi yang masih memerlukan revisi lebih lanjut.",
        resultNote: "Angka-angka ini merupakan hasil evaluasi yang tercatat selama pelaksanaan proyek akademik. Hasil tersebut tidak membuktikan efektivitas klinis maupun kesiapan untuk diterapkan dalam lingkungan produksi.",

        scopeLabel: "07 — RUANG LINGKUP PROYEK",
        scopeHeading1: "Hal yang termasuk",
        scopeHeading2: "dan tidak termasuk dalam proyek.",
        scopeP1: "SmartERM dikembangkan sebagai prototipe akademik dan tidak diterapkan sebagai sistem rumah sakit yang digunakan dalam operasional produksi.",
        scopeP2: "Prototipe ini tidak menyediakan dukungan pengambilan keputusan klinis dan tidak terintegrasi dengan SIMRS, BPJS, maupun SATUSEHAT.",

        documentationLabel: "08 — DOKUMENTASI PROYEK",
        documentationHeading1: "Melihat lebih dekat",
        documentationHeading2: "proyek SmartERM.",
        demoSmartERM: "▶ Demo Web SmartERM",
        readReport: "📄 Baca Laporan Proyek",

        thankYou: "TERIMA KASIH TELAH MELIHAT PROYEK INI",
        contactHeading1: "Tertarik dengan",
        contactHeading2: "karya saya?",
        contactDescription: "Jelajahi proyek lainnya atau hubungi saya untuk berdiskusi mengenai ide dan peluang kolaborasi.",
        getInTouch: "Hubungi saya ↗",
        copyright: "© 2026 Yorina. Hak cipta dilindungi."
    }
};


const languageButtons = document.querySelectorAll(".language-option");

function applyLanguage(language) {
    const selectedLanguage = translations[language];

    if (!selectedLanguage) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (selectedLanguage[key] !== undefined) {
            element.textContent = selectedLanguage[key];
        }
    });

    document.title = selectedLanguage.pageTitle;

    const metaDescription = document.getElementById("metaDescription");

    if (metaDescription) {
        metaDescription.setAttribute("content", selectedLanguage.metaDescription);
    }

    document.documentElement.lang = language;

    languageButtons.forEach(button => {
        const isActive = button.dataset.lang === language;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    localStorage.setItem("yorinaLanguage", language);
}


languageButtons.forEach(button => {
    button.addEventListener("click", () => {
        applyLanguage(button.dataset.lang);
    });
});


// Gunakan bahasa yang sama dengan halaman utama jika tersedia.
const savedLanguage = localStorage.getItem("yorinaLanguage") || "en";

applyLanguage(savedLanguage);
