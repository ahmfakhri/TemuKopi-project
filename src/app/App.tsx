import { useState } from "react";
import {
  Coffee, Search, Heart, Star, MapPin, Clock, Wifi, Zap, Car,
  ChevronRight, ChevronLeft, ChevronDown, Send, Brain, Sparkles,
  Home, Navigation, ArrowRight, Share2, Bookmark, Filter, X, Check,
  MessageSquare, TrendingUp, Camera, Tag, Bot,
  User, ShoppingBag, Map, Leaf, Utensils, Globe,
} from "lucide-react";

type Page = "home" | "mood" | "rekomendasi" | "pencarian" | "detail" | "menu" | "promo" | "umkm" | "ulasan" | "favorit" | "profil";

// ── Helpers ────────────────────────────────────────────────────────────────────
const unsplash = (id: string, w = 800, h = 500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

const PROFILE_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='bg' cx='50%25' cy='48%25' r='70%25'%3E%3Cstop offset='0%25' stop-color='%235b5252'/%3E%3Cstop offset='100%25' stop-color='%23151112'/%3E%3C/radialGradient%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='3.2'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23bg)'/%3E%3Cg filter='url(%23blur)'%3E%3Cellipse cx='100' cy='138' rx='53' ry='62' fill='%23ddd8d8'/%3E%3Cellipse cx='73' cy='77' rx='31' ry='28' fill='%23d8d4d4'/%3E%3Cellipse cx='128' cy='77' rx='31' ry='28' fill='%23d8d4d4'/%3E%3Cellipse cx='68' cy='76' rx='14' ry='10' fill='%23201a1b' transform='rotate(-7 68 76)'/%3E%3Cellipse cx='123' cy='76' rx='14' ry='10' fill='%23201a1b' transform='rotate(8 123 76)'/%3E%3Cellipse cx='73' cy='70' rx='6' ry='4' fill='%23fff' opacity='.42'/%3E%3Cellipse cx='129' cy='70' rx='6' ry='4' fill='%23fff' opacity='.42'/%3E%3Cpath d='M60 111 C82 119 119 119 142 111' fill='none' stroke='%238b8585' stroke-width='5' stroke-linecap='round' opacity='.72'/%3E%3C/g%3E%3C/svg%3E";

// ── Data ───────────────────────────────────────────────────────────────────────
const SHOPS = [
  {
    id: "kopiruanghati",
    name: "Kopi Ruang Hati",
    rating: 4.6,
    reviews: 230,
    distance: "1.2 km",
    tags: ["Tenang", "Cozy", "WiFi"],
    price: "Rp 20.000 – 45.000",
    img: unsplash("1600093463592-8e36ae95ef56"),
    reason: "Cocok untuk me time dan suasana santai.",
    facilities: ["WiFi", "Stopkontak", "Parkir"],
  },
  {
    id: "tanamera",
    name: "Tanamera Coffee",
    rating: 4.7,
    reviews: 186,
    distance: "2.1 km",
    tags: ["Cozy", "Premium", "Tenang"],
    price: "Rp 25.000 – 60.000",
    img: unsplash("1521017432531-fbd92d768814"),
    reason: "Cocok untuk menikmati kopi creamy dengan suasana nyaman.",
    facilities: ["WiFi", "Stopkontak", "Parkir", "Outdoor", "Musholla"],
  },
  {
    id: "kolektif",
    name: "Kolektif Space",
    rating: 4.5,
    reviews: 152,
    distance: "1.8 km",
    tags: ["Work Friendly", "Stopkontak", "Tenang"],
    price: "Rp 20.000 – 50.000",
    img: unsplash("1538333581680-29dd4752ddf2"),
    reason: "Cocok untuk produktivitas tapi tetap santai.",
    facilities: ["WiFi", "Stopkontak", "Parkir", "Meeting Room"],
  },
  {
    id: "seeyou",
    name: "See You Coffee",
    rating: 4.4,
    reviews: 118,
    distance: "3.2 km",
    tags: ["Estetik", "Cozy", "Outdoor"],
    price: "Rp 18.000 – 40.000",
    img: unsplash("1542181961-9590d0c79dab"),
    reason: "Suasana estetik, cocok untuk foto dan healing.",
    facilities: ["WiFi", "Outdoor", "Parkir"],
  },
];

const COFFEES = [
  {
    id: "vanilla-latte",
    name: "Vanilla Latte",
    rasa: "Creamy, manis ringan",
    kafein: 2,
    reason: "Cocok untuk mood santai dan tidak terlalu pahit",
    img: unsplash("1503240778100-fd245e17a273", 300, 300),
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    rasa: "Manis, creamy",
    kafein: 2,
    reason: "Cocok untuk melepas capek dengan rasa yang lembut",
    img: unsplash("1563311977-d285756282dc", 300, 300),
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    rasa: "Ringan, creamy, segar",
    kafein: 2,
    reason: "Cocok untuk suasana santai dan me time",
    img: unsplash("1578314675249-a6910f80cc4e", 300, 300),
  },
];

const CATEGORIES = [
  { id: "nugas", label: "Nugas", emoji: "📚" },
  { id: "meeting", label: "Meeting", emoji: "💼" },
  { id: "date", label: "Date", emoji: "🌹" },
  { id: "nongkrong", label: "Nongkrong", emoji: "👥" },
  { id: "healing", label: "Healing", emoji: "🌿" },
  { id: "malam", label: "Malam Hari", emoji: "🌙" },
];

// ── Atoms ──────────────────────────────────────────────────────────────────────
function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3.5 h-3.5 ${
            s <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F0E8DC] text-[#8B6B4A] font-medium">
      {label}
    </span>
  );
}

function ShopCard({
  shop,
  fav,
  onFav,
  onDetail,
}: {
  shop: (typeof SHOPS)[0];
  fav: boolean;
  onFav: () => void;
  onDetail: () => void;
}) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative">
        <img src={shop.img} alt={shop.name} className="w-full h-44 object-cover bg-[#F0E8DC]" />
        <button
          onClick={(e) => { e.stopPropagation(); onFav(); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-transform active:scale-90"
        >
          <Heart className={`w-4 h-4 transition-colors ${fav ? "text-red-500 fill-red-500" : "text-[#8B6B4A]"}`} />
        </button>
        <div className="absolute top-3 left-3">
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-semibold text-[#2C1810]">{shop.rating}</span>
            <span className="text-[10px] text-[#8B6B4A]">({shop.reviews})</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#2C1810] mb-1">{shop.name}</h3>
        <div className="flex items-center gap-3 text-xs text-[#8B6B4A] mb-2">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {shop.distance}
          </span>
          <span>{shop.price}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {shop.tags.map((t) => <Pill key={t} label={t} />)}
        </div>
        {shop.reason && (
          <p className="text-xs text-[#8B6B4A] mb-3 leading-relaxed">{shop.reason}</p>
        )}
        <button
          onClick={onDetail}
          className="w-full py-2 rounded-xl bg-[#2C1810] text-[#FAF6F0] text-xs font-semibold hover:bg-[#3D2518] transition-colors"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────
function Navbar({ page, nav }: { page: Page; nav: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const links: { label: string; p: Page }[] = [
    { label: "Beranda", p: "home" },
    { label: "Cari", p: "pencarian" },
    { label: "Mood Finder AI", p: "mood" },
    { label: "Rekomendasi", p: "rekomendasi" },
    { label: "Promo", p: "promo" },
    { label: "Untuk UMKM", p: "umkm" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => nav("home")} className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-[#2C1810] flex items-center justify-center">
              <Coffee className="w-4 h-4 text-[#FAF6F0]" />
            </div>
            <span className="font-bold text-[#2C1810]">TemuKopi</span>
          </button>
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <button
                key={l.p}
                onClick={() => nav(l.p)}
                className={`px-3 py-2 text-sm font-medium transition-all relative ${
                  page === l.p ? "text-[#C8813A]" : "text-[#8B6B4A] hover:text-[#2C1810]"
                }`}
              >
                {l.label}
                {page === l.p && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C8813A] rounded-full" />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => nav("favorit")}
              className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
            >
              <Heart className="w-5 h-5 text-[#8B6B4A]" />
            </button>
            <button
              onClick={() => nav("profil")}
              className="w-9 h-9 rounded-full bg-[#2C1810] flex items-center justify-center transition-transform active:scale-95"
            >
              <User className="w-4 h-4 text-[#FAF6F0]" />
            </button>
            <button
              className="md:hidden w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-5 h-5 text-[#8B6B4A]" /> : <ChevronDown className="w-5 h-5 text-[#8B6B4A]" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-border py-2">
            {links.map((l) => (
              <button
                key={l.p}
                onClick={() => { nav(l.p); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  page === l.p ? "text-[#C8813A] bg-orange-50" : "text-[#8B6B4A] hover:bg-muted"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// ── Bottom Nav ─────────────────────────────────────────────────────────────────
function BottomNav({ page, nav }: { page: Page; nav: (p: Page) => void }) {
  const items = [
    { Icon: Home, label: "Beranda", p: "home" as Page },
    { Icon: Search, label: "Cari", p: "pencarian" as Page },
    { Icon: Bot, label: "AI", p: "mood" as Page },
    { Icon: Heart, label: "Favorit", p: "favorit" as Page },
    { Icon: User, label: "Profil", p: "profil" as Page },
  ];
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-card border-t border-border">
      <div className="flex">
        {items.map(({ Icon, label, p }) => (
          <button
            key={p}
            onClick={() => nav(p)}
            className="flex-1 flex flex-col items-center gap-0.5 py-3"
          >
            <Icon className={`w-5 h-5 ${page === p ? "text-[#C8813A]" : "text-[#8B6B4A]"}`} />
            <span className={`text-[10px] font-medium ${page === p ? "text-[#C8813A]" : "text-[#8B6B4A]"}`}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer({ nav }: { nav: (p: Page) => void }) {
  const features = [
    { icon: <Search className="w-5 h-5" />, label: "Temukan Coffee Shop" },
    { icon: <Brain className="w-5 h-5" />, label: "Sesuai Mood Kamu" },
    { icon: <Utensils className="w-5 h-5" />, label: "Menu Sesuai Selera" },
  ];
  return (
    <footer className="bg-[#2C1810] text-[#FAF6F0] py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <button onClick={() => nav("home")} className="flex items-center gap-3 justify-center mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#C8813A] flex items-center justify-center">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">TemuKopi</span>
          </button>
          <p className="text-[#A89278] text-sm">
            Temukan coffee terbaik, sesuai mood & selera kamu.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-10">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3D2518] flex items-center justify-center text-[#C8813A]">
                {f.icon}
              </div>
              <span className="text-sm font-medium text-[#D0C0A8]">{f.label}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-[#3D2518] pt-6 text-center">
          <p className="text-xs text-[#6B5040]">© 2026 TemuKopi. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

// ── Home Page ──────────────────────────────────────────────────────────────────
function HomePage({
  nav,
  favs,
  toggleFav,
}: {
  nav: (p: Page) => void;
  favs: Set<string>;
  toggleFav: (id: string) => void;
}) {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[520px] md:h-[600px] flex items-center"
        style={{
          backgroundImage: `url(${unsplash("1551887196-72e32bfc7bf3", 1600, 900)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/85 via-[#2C1810]/65 to-[#8B4513]/45" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
          <p className="text-[#F0C896] font-medium text-sm mb-4 tracking-widest uppercase">
            Selamat datang di TemuKopi ☕
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Temukan Coffee Shop
            <span className="text-[#F0C896] block mt-1">Sesuai Mood & Selera</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Eksplorasi ratusan coffee shop dengan rekomendasi berdasarkan suasana hati dan preferensi rasa.
          </p>
          <div className="flex gap-3 max-w-xl mx-auto">
            <div className="flex-1 flex items-center gap-3 bg-white/95 rounded-2xl px-4 py-3.5 shadow-lg">
              <Search className="w-5 h-5 text-[#8B6B4A] shrink-0" />
              <input
                placeholder="Cari coffee shop atau lokasi..."
                className="flex-1 bg-transparent text-[#2C1810] placeholder-[#A89278] text-sm outline-none"
              />
            </div>
            <button
              onClick={() => nav("pencarian")}
              className="px-6 py-3.5 bg-[#C8813A] text-white rounded-2xl font-semibold text-sm hover:bg-[#B8712A] transition-colors shadow-lg"
            >
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-bold text-[#2C1810] mb-6">Cari Berdasarkan Suasana</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => nav("pencarian")}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl border border-border hover:border-[#C8813A] hover:shadow-md transition-all group"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-xs font-semibold text-[#2C1810] group-hover:text-[#C8813A] transition-colors">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-[#2C1810]">Rekomendasi Untuk Kamu</h2>
            <p className="text-sm text-[#8B6B4A] mt-0.5">Berdasarkan lokasi dan preferensimu</p>
          </div>
          <button
            onClick={() => nav("pencarian")}
            className="text-sm font-medium text-[#C8813A] flex items-center gap-1 hover:gap-2 transition-all"
          >
            Lihat Semua <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SHOPS.map((shop) => (
            <ShopCard
              key={shop.id}
              shop={shop}
              fav={favs.has(shop.id)}
              onFav={() => toggleFav(shop.id)}
              onDetail={() => nav("detail")}
            />
          ))}
        </div>
      </section>

      {/* AI CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #2C1810 0%, #5C3317 60%, #C8813A 100%)" }}
        >
          <div>
            <p className="text-[#F0C896] text-sm font-medium mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Fitur AI Unggulan
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Bingung Mau Ngopi di Mana?
            </h2>
            <p className="text-white/70 max-w-md leading-relaxed">
              Ceritakan mood kamu ke AI TemuKopi dan dapatkan rekomendasi coffee shop yang paling cocok untukmu.
            </p>
          </div>
          <button
            onClick={() => nav("mood")}
            className="shrink-0 px-8 py-4 bg-[#FAF6F0] text-[#2C1810] rounded-2xl font-bold hover:bg-white transition-colors shadow-lg"
          >
            Coba Mood Finder AI →
          </button>
        </div>
      </section>

      <Footer nav={nav} />
    </div>
  );
}

// ── Mood Finder Page ───────────────────────────────────────────────────────────
function MoodFinderPage({
  nav,
  favs,
  toggleFav,
}: {
  nav: (p: Page) => void;
  favs: Set<string>;
  toggleFav: (id: string) => void;
}) {
  const [chatState, setChatState] = useState<"initial" | "result">("initial");
  const [input, setInput] = useState("");
  const [selectedCoffee, setSelectedCoffee] = useState("caramel-macchiato");
  const [filterMode, setFilterMode] = useState<"normal" | "dekat" | "murah" | "tenang">("normal");

  const suggestions = [
    "Aku butuh fokus buat nugas",
    "Aku lagi capek dan pengen santai",
    "Aku pengen healing di tempat estetik",
    "Aku mau nongkrong bareng teman",
    "Aku cari tempat date yang cozy",
    "Aku pengen kopi yang strong tapi tenang",
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setChatState("result");
    setInput("");
  };

  const filteredShops =
    filterMode === "dekat"
      ? [...SHOPS].sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance)).slice(0, 3)
      : filterMode === "murah"
      ? [SHOPS[0], SHOPS[2], SHOPS[3]]
      : filterMode === "tenang"
      ? SHOPS.filter((s) => s.tags.includes("Tenang")).slice(0, 3)
      : SHOPS.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Chat */}
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2C1810] flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6 text-[#F0C896]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#2C1810]">Mood Finder AI</h1>
                <p className="text-sm text-[#8B6B4A]">Powered by TemuKopi Intelligence</p>
              </div>
            </div>
            <p className="text-[#8B6B4A] text-sm leading-relaxed">
              Ceritakan mood kamu hari ini, biarkan AI TemuKopi menemukan kopi dan coffee shop yang paling cocok untukmu.
            </p>
          </div>

          {/* Chat bubbles */}
          <div className="bg-card border border-border rounded-2xl p-5 mb-4 min-h-[280px] space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#2C1810] flex items-center justify-center shrink-0">
                <Coffee className="w-4 h-4 text-[#F0C896]" />
              </div>
              <div className="bg-[#F0E8DC] rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                <p className="text-sm text-[#2C1810] leading-relaxed">
                  Hai, Fakhrizz! Aku TemuKopi AI ☕ Ceritakan mood kamu hari ini, biar aku bisa kasih rekomendasi kopi dan tempat ngopi yang paling cocok untukmu.
                </p>
              </div>
            </div>

            {chatState === "result" && (
              <>
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#2C1810] rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-[#FAF6F0] leading-relaxed">
                      Aku lagi capek, pengen tempat yang tenang buat sendiri, dan kopinya jangan terlalu pahit.
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#C8813A] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2C1810] flex items-center justify-center shrink-0">
                    <Coffee className="w-4 h-4 text-[#F0C896]" />
                  </div>
                  <div className="bg-[#F0E8DC] rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-[#2C1810] leading-relaxed">
                      Baik! Aku sudah memahami mood dan preferensimu. Berikut rekomendasi kopi dan coffee shop yang cocok untukmu. ✨
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Suggestion chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-4 [&::-webkit-scrollbar]:hidden">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="shrink-0 text-xs px-3 py-2 rounded-full bg-card border border-border text-[#8B6B4A] hover:border-[#C8813A] hover:text-[#C8813A] transition-all whitespace-nowrap"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ceritakan mood, kebutuhan, atau preferensi kopimu..."
              className="flex-1 px-4 py-3 rounded-2xl bg-card border border-border text-sm text-[#2C1810] placeholder-[#A89278] outline-none focus:border-[#C8813A] transition-colors"
            />
            <button
              onClick={handleSend}
              className="w-12 h-12 rounded-2xl bg-[#2C1810] flex items-center justify-center hover:bg-[#3D2518] transition-colors shrink-0"
            >
              <Send className="w-5 h-5 text-[#FAF6F0]" />
            </button>
          </div>
        </div>

        {/* Right: Results */}
        <div>
          {chatState === "initial" ? (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center py-16 text-center bg-card rounded-3xl border border-border">
              <div className="w-20 h-20 rounded-full bg-[#F0E8DC] flex items-center justify-center mb-4">
                <Coffee className="w-10 h-10 text-[#C8813A]" />
              </div>
              <Sparkles className="w-6 h-6 text-[#C8813A] mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-[#2C1810] mb-2">Rekomendasi AI Menunggumu</h3>
              <p className="text-sm text-[#8B6B4A] max-w-sm leading-relaxed px-6">
                Ceritakan mood kamu terlebih dahulu untuk mendapatkan rekomendasi kopi dan coffee shop.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Mood Analysis */}
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0E8DC] flex items-center justify-center">
                    <Brain className="w-5 h-5 text-[#C8813A]" />
                  </div>
                  <h3 className="font-bold text-[#2C1810]">Analisis Mood Kamu</h3>
                </div>
                <p className="text-sm text-[#8B6B4A] leading-relaxed">
                  Kamu sedang membutuhkan suasana yang tenang, nyaman, dan cocok untuk me time. Preferensimu mengarah ke minuman creamy atau mild coffee yang tidak terlalu pahit.
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {["Tenang", "Me Time", "Creamy", "Mild"].map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-[#F0E8DC] text-[#8B6B4A] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Coffee Picks */}
              <div>
                <h3 className="font-bold text-[#2C1810] mb-3">Kopi yang Cocok Untukmu</h3>
                <div className="grid grid-cols-3 gap-3">
                  {COFFEES.map((coffee) => (
                    <button
                      key={coffee.id}
                      onClick={() => setSelectedCoffee(coffee.id)}
                      className={`p-3 rounded-2xl border-2 text-left transition-all ${
                        selectedCoffee === coffee.id
                          ? "border-[#2C1810] bg-[#F0E8DC]"
                          : "border-border bg-card hover:border-[#C8813A]"
                      }`}
                    >
                      <div className="relative mb-2">
                        <img
                          src={coffee.img}
                          alt={coffee.name}
                          className="w-full h-20 object-cover rounded-xl bg-[#F0E8DC]"
                        />
                        {selectedCoffee === coffee.id && (
                          <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#2C1810] flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-[#2C1810] leading-tight mb-1">
                        {coffee.name}
                      </p>
                      <p className="text-[10px] text-[#8B6B4A]">{coffee.rasa}</p>
                      <div className="flex gap-0.5 mt-1.5">
                        {[1, 2, 3].map((d) => (
                          <div
                            key={d}
                            className={`w-2 h-2 rounded-full ${d <= coffee.kafein ? "bg-[#C8813A]" : "bg-[#F0E8DC]"}`}
                          />
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Shop Recommendations */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#2C1810]">Coffee Shop Direkomendasikan</h3>
                  <button className="text-xs font-medium text-[#C8813A] flex items-center gap-1">
                    <Map className="w-3 h-3" /> Lihat Peta
                  </button>
                </div>
                <div className="space-y-3">
                  {filteredShops.map((shop) => (
                    <div key={shop.id} className="bg-card border border-border rounded-2xl p-3 flex gap-3">
                      <img
                        src={shop.img}
                        alt={shop.name}
                        className="w-20 h-20 object-cover rounded-xl bg-[#F0E8DC] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-sm text-[#2C1810]">{shop.name}</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                              <span className="text-xs text-[#8B6B4A]">
                                {shop.rating} · {shop.distance}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleFav(shop.id)}
                            className="w-7 h-7 rounded-full hover:bg-[#F0E8DC] flex items-center justify-center transition-colors shrink-0"
                          >
                            <Heart
                              className={`w-4 h-4 ${favs.has(shop.id) ? "text-red-500 fill-red-500" : "text-[#8B6B4A]"}`}
                            />
                          </button>
                        </div>
                        <p className="text-xs text-[#8B6B4A] mt-1 line-clamp-2">{shop.reason}</p>
                        <div className="flex gap-1 mt-1.5 flex-wrap">
                          {shop.tags.slice(0, 2).map((t) => (
                            <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#F0E8DC] text-[#8B6B4A]">
                              {t}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => nav("detail")}
                          className="mt-2 text-xs font-semibold text-[#C8813A] hover:underline"
                        >
                          Lihat Detail →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "📍 Lebih Dekat", mode: "dekat" as const },
                  { label: "💰 Lebih Murah", mode: "murah" as const },
                  { label: "🌿 Lebih Tenang", mode: "tenang" as const },
                  { label: "🔄 Ganti Preferensi", mode: "normal" as const },
                ].map((b) => (
                  <button
                    key={b.mode}
                    onClick={() => setFilterMode(b.mode)}
                    className={`text-xs px-3 py-2 rounded-xl border font-medium transition-all ${
                      filterMode === b.mode
                        ? "bg-[#2C1810] text-[#FAF6F0] border-[#2C1810]"
                        : "bg-card border-border text-[#8B6B4A] hover:border-[#C8813A]"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
                <button
                  onClick={() => { setChatState("initial"); setFilterMode("normal"); }}
                  className="text-xs px-4 py-2 rounded-xl bg-[#2C1810] text-[#FAF6F0] font-semibold hover:bg-[#3D2518] transition-colors"
                >
                  ✨ Mulai Chat Baru
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Rekomendasi Page ───────────────────────────────────────────────────────────
function RekomendasiPage({ nav }: { nav: (p: Page) => void }) {
  const [prefs, setPrefs] = useState({ manis: 80, creamy: 70, strong: 40, pahit: 30, segar: 60 });

  const menus = [
    {
      name: "Kopi Susu Aren",
      shop: "Tanamera Coffee",
      match: 90,
      img: unsplash("1503240778100-fd245e17a273", 120, 120),
    },
    {
      name: "Caramel Macchiato",
      shop: "See You Coffee",
      match: 80,
      img: unsplash("1563311977-d285756282dc", 120, 120),
    },
    {
      name: "Vanilla Latte",
      shop: "Kolektif Space",
      match: 85,
      img: unsplash("1742549626436-bf3c11dab212", 120, 120),
    },
  ];

  const sliderLabels: Record<string, string> = {
    manis: "🍯 Manis",
    creamy: "🥛 Creamy",
    strong: "💪 Strong / Kuat",
    pahit: "☕ Kopi / Pahit",
    segar: "🌿 Segar",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#2C1810] mb-2">
          Temukan Menu Sesuai Selera Rasa Kamu
        </h1>
        <p className="text-[#8B6B4A]">
          Atur preferensi rasa yang kamu suka, lalu TemuKopi akan memberikan rekomendasi menu terbaik.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sliders */}
        <div className="bg-card border border-border rounded-3xl p-6">
          <h2 className="text-lg font-bold text-[#2C1810] mb-6">Preferensi Rasa Kamu</h2>
          <div className="space-y-6">
            {(Object.entries(prefs) as [keyof typeof prefs, number][]).map(([key, val]) => (
              <div key={key}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[#2C1810]">{sliderLabels[key]}</span>
                  <span className="text-sm font-bold text-[#C8813A]">{val}%</span>
                </div>
                <div className="relative h-2.5 bg-[#F0E8DC] rounded-full">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C8813A] to-[#2C1810] rounded-full pointer-events-none"
                    style={{ width: `${val}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={val}
                    onChange={(e) => setPrefs((p) => ({ ...p, [key]: Number(e.target.value) }))}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Recommendations */}
        <div className="bg-card border border-border rounded-3xl p-6">
          <h2 className="text-lg font-bold text-[#2C1810] mb-6">Rekomendasi Menu Untukmu</h2>
          <div className="space-y-4">
            {menus.map((menu) => (
              <button
                key={menu.name}
                onClick={() => nav("menu")}
                className="w-full flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-[#C8813A] hover:bg-[#FAF6F0] transition-all text-left"
              >
                <img
                  src={menu.img}
                  alt={menu.name}
                  className="w-16 h-16 object-cover rounded-xl bg-[#F0E8DC] shrink-0"
                />
                <div className="flex-1">
                  <p className="font-semibold text-[#2C1810]">{menu.name}</p>
                  <p className="text-sm text-[#8B6B4A]">{menu.shop}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#2C1810] text-[#FAF6F0]">
                    <span className="text-sm font-bold">{menu.match}%</span>
                  </div>
                  <p className="text-xs text-[#8B6B4A] mt-1">Match</p>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => nav("menu")}
            className="mt-5 w-full py-3 rounded-xl border-2 border-[#2C1810] text-[#2C1810] font-semibold text-sm hover:bg-[#2C1810] hover:text-[#FAF6F0] transition-all"
          >
            Lihat Semua Menu
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Pencarian Page ─────────────────────────────────────────────────────────────
function PencarianPage({
  nav,
  favs,
  toggleFav,
}: {
  nav: (p: Page) => void;
  favs: Set<string>;
  toggleFav: (id: string) => void;
}) {
  const [distance, setDistance] = useState(5);
  const [facilities, setFacilities] = useState<Set<string>>(new Set());
  const [activePage, setActivePage] = useState(1);

  const toggleFacility = (f: string) => {
    setFacilities((prev) => {
      const n = new Set(prev);
      n.has(f) ? n.delete(f) : n.add(f);
      return n;
    });
  };

  const facilityOptions = ["WiFi", "Stopkontak", "Parkir", "Outdoor", "Musholla", "Meeting Room"];

  const facilityIcons: Record<string, typeof Wifi> = {
    WiFi: Wifi,
    Stopkontak: Zap,
    Parkir: Car,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filter Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-5 sticky top-24">
            <h3 className="font-bold text-[#2C1810] mb-5 flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#C8813A]" /> Filter
            </h3>

            <div className="mb-5">
              <label className="text-xs font-semibold text-[#8B6B4A] uppercase tracking-wide mb-2 block">
                Lokasi
              </label>
              <div className="flex items-center gap-2 px-3 py-2.5 bg-muted rounded-xl border border-border">
                <MapPin className="w-4 h-4 text-[#C8813A] shrink-0" />
                <select className="flex-1 bg-transparent text-sm text-[#2C1810] outline-none">
                  <option>Jakarta Selatan</option>
                  <option>Jakarta Pusat</option>
                  <option>Bandung</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex justify-between mb-2">
                <label className="text-xs font-semibold text-[#8B6B4A] uppercase tracking-wide">Jarak</label>
                <span className="text-xs font-bold text-[#C8813A]">{distance} km</span>
              </div>
              <div className="relative h-2.5 bg-[#F0E8DC] rounded-full">
                <div
                  className="absolute inset-y-0 left-0 bg-[#C8813A] rounded-full pointer-events-none"
                  style={{ width: `${(distance / 20) * 100}%` }}
                />
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="text-xs font-semibold text-[#8B6B4A] uppercase tracking-wide mb-2 block">
                Fasilitas
              </label>
              <div className="space-y-2.5">
                {facilityOptions.map((f) => (
                  <label key={f} className="flex items-center gap-2.5 cursor-pointer">
                    <div
                      onClick={() => toggleFacility(f)}
                      className={`w-4 h-4 rounded flex items-center justify-center border transition-all shrink-0 ${
                        facilities.has(f) ? "bg-[#2C1810] border-[#2C1810]" : "border-border"
                      }`}
                    >
                      {facilities.has(f) && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                    <span className="text-sm text-[#2C1810]">{f}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full py-3 rounded-xl bg-[#2C1810] text-[#FAF6F0] text-sm font-semibold hover:bg-[#3D2518] transition-colors">
              Terapkan Filter
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="md:col-span-3">
          <div className="flex gap-3 mb-5">
            <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-xl">
              <Search className="w-4 h-4 text-[#8B6B4A] shrink-0" />
              <input
                placeholder="Cari coffee shop, menu, atau suasana..."
                className="flex-1 bg-transparent text-sm text-[#2C1810] placeholder-[#A89278] outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-3 bg-card border border-border rounded-xl text-sm text-[#8B6B4A]">
              <span className="hidden sm:block">Rating Tertinggi</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-[#8B6B4A] mb-4">{SHOPS.length} coffee shop ditemukan</p>

          <div className="space-y-4">
            {SHOPS.slice(0, 3).map((shop) => (
              <div
                key={shop.id}
                className="bg-card border border-border rounded-2xl overflow-hidden flex hover:shadow-md transition-all cursor-pointer"
                onClick={() => nav("detail")}
              >
                <img
                  src={shop.img}
                  alt={shop.name}
                  className="w-32 sm:w-48 object-cover bg-[#F0E8DC] shrink-0"
                />
                <div className="flex-1 p-4 sm:p-5">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold text-[#2C1810]">{shop.name}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#8B6B4A] mt-0.5">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold text-[#2C1810]">{shop.rating}</span>
                        <span>({shop.reviews})</span>
                        <span>·</span>
                        <MapPin className="w-3 h-3" />
                        <span>{shop.distance}</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleFav(shop.id); }}
                      className="w-8 h-8 rounded-full hover:bg-[#F0E8DC] flex items-center justify-center transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${favs.has(shop.id) ? "text-red-500 fill-red-500" : "text-[#8B6B4A]"}`}
                      />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {shop.tags.map((t) => <Pill key={t} label={t} />)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#8B6B4A]">{shop.price}</span>
                    <div className="flex gap-2 text-[#8B6B4A]">
                      {shop.facilities?.slice(0, 3).map((f) => {
                        const IconComp = facilityIcons[f];
                        return IconComp ? <IconComp key={f} className="w-3.5 h-3.5" /> : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-[#8B6B4A] hover:bg-muted">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[1, 2, 3, 4].map((p) => (
              <button
                key={p}
                onClick={() => setActivePage(p)}
                className={`w-9 h-9 rounded-xl text-sm font-medium transition-all ${
                  activePage === p
                    ? "bg-[#2C1810] text-[#FAF6F0]"
                    : "border border-border text-[#8B6B4A] hover:bg-muted"
                }`}
              >
                {p}
              </button>
            ))}
            <button className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-[#8B6B4A] hover:bg-muted">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Detail Page ────────────────────────────────────────────────────────────────
function DetailPage({
  nav,
  favs,
  toggleFav,
}: {
  nav: (p: Page) => void;
  favs: Set<string>;
  toggleFav: (id: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<"tentang" | "menu" | "ulasan" | "foto" | "promo">("tentang");
  const [saved, setSaved] = useState(false);
  const shop = SHOPS[1];

  const starBreakdown = [
    { stars: 5, count: 120 },
    { stars: 4, count: 45 },
    { stars: 3, count: 14 },
    { stars: 2, count: 4 },
    { stars: 1, count: 2 },
  ];
  const totalReviews = starBreakdown.reduce((a, b) => a + b.count, 0);

  const facilityIcons: Record<string, typeof Wifi> = {
    WiFi: Wifi,
    Stopkontak: Zap,
    Parkir: Car,
    Outdoor: Leaf,
    Musholla: Globe,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <button
        onClick={() => nav("pencarian")}
        className="flex items-center gap-2 text-sm text-[#8B6B4A] mb-5 hover:text-[#2C1810] transition-colors"
      >
        <ChevronLeft className="w-4 h-4" /> Kembali ke Pencarian
      </button>

      {/* Gallery */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="col-span-2 rounded-2xl overflow-hidden h-64 sm:h-80">
          <img src={shop.img} alt={shop.name} className="w-full h-full object-cover bg-[#F0E8DC]" />
        </div>
        <div className="flex flex-col gap-3">
          {[SHOPS[0].img, SHOPS[2].img, SHOPS[3].img].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden flex-1">
              <img src={src} alt="" className="w-full h-full object-cover bg-[#F0E8DC]" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Header */}
          <h1 className="text-2xl font-bold text-[#2C1810] mb-1">{shop.name}</h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-[#2C1810]">{shop.rating}</span>
              <span className="text-sm text-[#8B6B4A]">(185 ulasan)</span>
            </div>
            <span className="text-[#D0C0A8]">·</span>
            <span className="text-sm text-[#8B6B4A] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 07.00 – 22.00
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
              Buka
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2C1810] text-[#FAF6F0] text-sm font-medium hover:bg-[#3D2518] transition-colors">
              <Navigation className="w-4 h-4" /> Rute
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                saved
                  ? "bg-[#C8813A] text-white"
                  : "border border-border text-[#8B6B4A] hover:bg-muted"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${saved ? "fill-white" : ""}`} />
              {saved ? "Tersimpan" : "Simpan"}
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-[#8B6B4A] text-sm font-medium hover:bg-muted transition-colors">
              <Share2 className="w-4 h-4" /> Bagikan
            </button>
          </div>

          {/* Facilities */}
          <div className="flex flex-wrap gap-2 mb-6">
            {shop.facilities?.map((f) => {
              const IconComp = facilityIcons[f] || Check;
              return (
                <div key={f} className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-xl text-sm text-[#2C1810]">
                  <IconComp className="w-4 h-4 text-[#C8813A]" />
                  {f}
                </div>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border mb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {(["tentang", "menu", "ulasan", "foto", "promo"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === "menu") nav("menu");
                  if (tab === "ulasan") nav("ulasan");
                }}
                className={`px-4 py-3 text-sm font-medium capitalize transition-all relative shrink-0 ${
                  activeTab === tab ? "text-[#C8813A]" : "text-[#8B6B4A] hover:text-[#2C1810]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8813A]" />
                )}
              </button>
            ))}
          </div>

          {activeTab === "tentang" && (
            <div className="space-y-4">
              <p className="text-[#8B6B4A] leading-relaxed">
                Tanamera Coffee adalah coffee shop dengan konsep industrial minimalis yang cocok untuk kerja, meeting, maupun nongkrong santai. Menggunakan biji kopi single origin terbaik dari seluruh Indonesia dengan proses roasting premium.
              </p>
              <div className="space-y-3">
                {[
                  { icon: <MapPin className="w-4 h-4" />, label: "Alamat", value: "Jl. Kemang Raya No. 45, Jakarta Selatan" },
                  { icon: <Clock className="w-4 h-4" />, label: "Jam Buka", value: "07.00 – 22.00 (Setiap hari)" },
                  { icon: <Tag className="w-4 h-4" />, label: "Estimasi Harga", value: "Rp 25.000 – 60.000 per orang" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 bg-card border border-border rounded-xl">
                    <span className="text-[#C8813A] mt-0.5 shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs text-[#8B6B4A]">{item.label}</p>
                      <p className="text-sm font-medium text-[#2C1810]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rating Card */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-5 sticky top-24">
            <h3 className="font-bold text-[#2C1810] mb-4">Rating Pengunjung</h3>
            <div className="text-center mb-5">
              <div className="text-6xl font-bold text-[#2C1810]">4.7</div>
              <div className="flex justify-center my-2">
                <StarRow rating={4.7} />
              </div>
              <p className="text-sm text-[#8B6B4A]">185 ulasan</p>
            </div>
            <div className="space-y-2">
              {starBreakdown.map(({ stars, count }) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-xs text-[#8B6B4A] w-3">{stars}</span>
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 shrink-0" />
                  <div className="flex-1 h-1.5 bg-[#F0E8DC] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${(count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#8B6B4A] w-6 text-right">{count}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => nav("ulasan")}
              className="mt-5 w-full py-3 rounded-xl bg-[#2C1810] text-[#FAF6F0] text-sm font-semibold hover:bg-[#3D2518] transition-colors"
            >
              Lihat Semua Ulasan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Menu Page ──────────────────────────────────────────────────────────────────
function MenuPage({ nav }: { nav: (p: Page) => void }) {
  const [activeCat, setActiveCat] = useState("Semua Menu");
  const [activeTab, setActiveTab] = useState<"menu" | "pairing">("menu");

  const categories = ["Semua Menu", "Signature", "Coffee", "Non Coffee", "Snack", "Makanan Berat"];

  const menuItems = [
    { name: "Kopi Susu Aren", price: "Rp 28.000", cat: "Signature", img: unsplash("1503240778100-fd245e17a273", 200, 200) },
    { name: "Caramel Macchiato", price: "Rp 35.000", cat: "Coffee", img: unsplash("1563311977-d285756282dc", 200, 200) },
    { name: "Vanilla Latte", price: "Rp 32.000", cat: "Coffee", img: unsplash("1742549626436-bf3c11dab212", 200, 200) },
    { name: "Matcha Latte", price: "Rp 32.000", cat: "Non Coffee", img: unsplash("1578314675249-a6910f80cc4e", 200, 200) },
    { name: "Croissant", price: "Rp 18.000", cat: "Snack", img: unsplash("1629610207316-1f58e0ea19e4", 200, 200) },
    { name: "Brownies", price: "Rp 22.000", cat: "Snack", img: unsplash("1762922425478-7049c54bfbec", 200, 200) },
  ];

  const pairings = [
    {
      drink: { name: "Kopi Susu Aren", price: "Rp 28.000", img: unsplash("1503240778100-fd245e17a273", 160, 160) },
      food: { name: "Brownies", price: "Rp 22.000", img: unsplash("1762922425478-7049c54bfbec", 160, 160) },
      match: 80,
    },
    {
      drink: { name: "Caramel Macchiato", price: "Rp 35.000", img: unsplash("1563311977-d285756282dc", 160, 160) },
      food: { name: "Croissant", price: "Rp 18.000", img: unsplash("1629610207316-1f58e0ea19e4", 160, 160) },
      match: 75,
    },
    {
      drink: { name: "Matcha Latte", price: "Rp 32.000", img: unsplash("1742549626436-bf3c11dab212", 160, 160) },
      food: { name: "Cheese Cake", price: "Rp 25.000", img: unsplash("1533134242443-d4fd215305ad", 160, 160) },
      match: 70,
    },
  ];

  const filtered = activeCat === "Semua Menu" ? menuItems : menuItems.filter((m) => m.cat === activeCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <button
        onClick={() => nav("detail")}
        className="flex items-center gap-2 text-sm text-[#8B6B4A] mb-5 hover:text-[#2C1810] transition-colors"
      >
        <ChevronLeft className="w-4 h-4" /> Kembali ke Detail
      </button>
      <h1 className="text-2xl font-bold text-[#2C1810] mb-1">Menu Tanamera Coffee</h1>

      <div className="flex gap-1 mb-6 border-b border-border">
        {(["menu", "pairing"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 text-sm font-medium relative transition-colors ${
              activeTab === tab ? "text-[#C8813A]" : "text-[#8B6B4A]"
            }`}
          >
            {tab === "pairing" ? "Rekomendasi Pairing" : "Menu"}
            {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8813A]" />}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-4 space-y-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCat === cat ? "bg-[#2C1810] text-[#FAF6F0]" : "text-[#8B6B4A] hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          {activeTab === "menu" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {filtered.map((item) => (
                <div key={item.name} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-all">
                  <img src={item.img} alt={item.name} className="w-full h-36 object-cover bg-[#F0E8DC]" />
                  <div className="p-3">
                    <p className="font-semibold text-sm text-[#2C1810]">{item.name}</p>
                    <p className="text-xs text-[#C8813A] font-bold mt-0.5">{item.price}</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F0E8DC] text-[#8B6B4A] mt-2 inline-block">
                      {item.cat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-bold text-[#2C1810] mb-5">
                Menu yang sering dipadukan pelanggan
              </h2>
              <div className="space-y-4">
                {pairings.map((pair, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-5 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3">
                      <img src={pair.drink.img} alt={pair.drink.name} className="w-16 h-16 object-cover rounded-xl bg-[#F0E8DC]" />
                      <div>
                        <p className="font-semibold text-sm text-[#2C1810]">{pair.drink.name}</p>
                        <p className="text-xs text-[#C8813A] font-bold">{pair.drink.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <ArrowRight className="w-5 h-5 text-[#C8813A]" />
                      <span className="text-xs font-bold text-[#2C1810] bg-[#F0E8DC] px-2 py-0.5 rounded-full">
                        {pair.match}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={pair.food.img} alt={pair.food.name} className="w-16 h-16 object-cover rounded-xl bg-[#F0E8DC]" />
                      <div>
                        <p className="font-semibold text-sm text-[#2C1810]">{pair.food.name}</p>
                        <p className="text-xs text-[#C8813A] font-bold">{pair.food.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Promo Page ─────────────────────────────────────────────────────────────────
function PromoPage({ nav: _nav }: { nav: (p: Page) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [claimed, setClaimed] = useState<Set<number>>(new Set());

  const promos = [
    {
      title: "Happy Hour Diskon 20%",
      subtitle: "Setiap hari 14.00 – 17.00 · Semua menu minuman",
      desc: "Nikmati diskon 20% untuk semua menu minuman setiap hari antara jam 14.00 hingga 17.00. Berlaku untuk dine-in maupun take-away.",
      bg: "from-[#C8813A] to-[#8B4513]",
      emoji: "⏰",
      valid: "Berlaku hingga 31 Desember 2026",
    },
    {
      title: "Paket Hemat Ngopi & Nongkrong",
      subtitle: "Mulai dari Rp 35.000 · Kopi + snack",
      desc: "Dapatkan paket kopi pilihan ditambah satu snack favorit mulai dari Rp 35.000. Pilihan snack: croissant, brownies, atau cheese cake.",
      bg: "from-[#5C3317] to-[#2C1810]",
      emoji: "☕",
      valid: "Berlaku setiap hari",
    },
    {
      title: "Buy 1 Get 1 Free",
      subtitle: "Setiap pembelian menu tertentu",
      desc: "Beli satu minuman signature, gratis satu minuman pilihan! Berlaku untuk menu Kopi Susu Aren, Caramel Macchiato, dan Vanilla Latte.",
      bg: "from-[#6B8C5E] to-[#3D5A36]",
      emoji: "🎁",
      valid: "Berlaku setiap Senin – Rabu",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#2C1810] mb-2">Promo & Paket Hemat</h1>
        <p className="text-[#8B6B4A]">Hemat lebih banyak dengan promo eksklusif dari coffee shop terbaik.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {promos.map((promo, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`rounded-3xl bg-gradient-to-br ${promo.bg} p-6 text-white text-left hover:scale-[1.02] transition-transform shadow-lg relative overflow-hidden`}
          >
            {claimed.has(i) && (
              <div className="absolute top-3 right-3 bg-white/20 rounded-full px-2 py-0.5 text-xs font-semibold">
                ✓ Diklaim
              </div>
            )}
            <div className="text-4xl mb-3">{promo.emoji}</div>
            <h3 className="text-xl font-bold mb-1">{promo.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{promo.subtitle}</p>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-xs text-white/60">{promo.valid}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-3 rounded-xl border-2 border-[#2C1810] text-[#2C1810] font-semibold hover:bg-[#2C1810] hover:text-[#FAF6F0] transition-all">
          Lihat Semua Promo
        </button>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative bg-card rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center"
            >
              <X className="w-4 h-4 text-[#8B6B4A]" />
            </button>
            <div className="text-4xl mb-4">{promos[selected].emoji}</div>
            <h2 className="text-2xl font-bold text-[#2C1810] mb-2">{promos[selected].title}</h2>
            <p className="text-[#8B6B4A] mb-4 leading-relaxed">{promos[selected].desc}</p>
            <p className="text-xs text-[#8B6B4A] mb-6 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {promos[selected].valid}
            </p>
            <button
              onClick={() => {
                setClaimed((prev) => { const n = new Set(prev); n.add(selected); return n; });
                setSelected(null);
              }}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all ${
                claimed.has(selected)
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-[#2C1810] text-[#FAF6F0] hover:bg-[#3D2518]"
              }`}
            >
              {claimed.has(selected) ? "✓ Promo Tersimpan" : "Klaim Promo"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── UMKM Page ──────────────────────────────────────────────────────────────────
function UMKMPage({ nav: _nav }: { nav: (p: Page) => void }) {
  const [form, setForm] = useState({
    nama: "",
    alamat: "",
    telepon: "",
    jam: "",
    kategori: "Coffee Shop",
    deskripsi: "",
  });

  const stats = [
    { label: "Total Order", value: "1.245", icon: ShoppingBag, color: "bg-blue-50 text-blue-600" },
    { label: "Total Favorit", value: "328", icon: Heart, color: "bg-red-50 text-red-600" },
    { label: "Total Ulasan", value: "86", icon: MessageSquare, color: "bg-green-50 text-green-600" },
    { label: "Rating", value: "4.6", icon: Star, color: "bg-yellow-50 text-yellow-600" },
  ];

  const chartData = [45, 62, 38, 71, 55, 83, 49, 67, 72, 88, 61, 75, 90, 54, 68, 43, 79, 65, 58, 82, 74, 91, 67, 53, 78, 84, 69, 57, 73, 88];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#2C1810] mb-2">Untuk UMKM Coffee Shop</h1>
        <p className="text-[#8B6B4A]">Daftarkan dan kelola coffee shop kamu di platform TemuKopi.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-card border border-border rounded-3xl p-6">
          <h2 className="text-lg font-bold text-[#2C1810] mb-5">Daftar Coffee Shop</h2>
          <div className="space-y-4">
            {[
              { key: "nama", label: "Nama Coffee Shop", placeholder: "Masukkan nama coffee shop", type: "text" },
              { key: "alamat", label: "Alamat Lengkap", placeholder: "Jl. ...", type: "text" },
              { key: "telepon", label: "Nomor Telepon", placeholder: "+62 ...", type: "tel" },
              { key: "jam", label: "Jam Operasional", placeholder: "07.00 – 22.00", type: "text" },
            ].map(({ key, label, placeholder, type }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-[#2C1810] mb-1.5">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-[#F0E8DC] border border-border text-sm text-[#2C1810] placeholder-[#A89278] outline-none focus:border-[#C8813A] transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-[#2C1810] mb-1.5">Kategori</label>
              <select
                value={form.kategori}
                onChange={(e) => setForm((f) => ({ ...f, kategori: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-[#F0E8DC] border border-border text-sm text-[#2C1810] outline-none focus:border-[#C8813A]"
              >
                {["Coffee Shop", "Cafe & Resto", "Kafe Estetik", "Work Space"].map((k) => (
                  <option key={k}>{k}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2C1810] mb-1.5">Deskripsi</label>
              <textarea
                placeholder="Ceritakan konsep dan keunikan coffee shop kamu..."
                value={form.deskripsi}
                onChange={(e) => setForm((f) => ({ ...f, deskripsi: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-[#F0E8DC] border border-border text-sm text-[#2C1810] placeholder-[#A89278] outline-none focus:border-[#C8813A] resize-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2C1810] mb-1.5">Upload Foto</label>
              <div className="flex items-center justify-center gap-3 px-4 py-8 border-2 border-dashed border-[#C8813A]/40 rounded-xl bg-[#FAF6F0] cursor-pointer hover:bg-[#F0E8DC] transition-colors">
                <Camera className="w-6 h-6 text-[#C8813A]" />
                <span className="text-sm text-[#8B6B4A]">Klik untuk upload foto coffee shop</span>
              </div>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-[#2C1810] text-[#FAF6F0] font-bold hover:bg-[#3D2518] transition-colors">
              Selanjutnya →
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="space-y-5">
          <div className="bg-card border border-border rounded-3xl p-6">
            <h2 className="text-lg font-bold text-[#2C1810] mb-5">Dashboard UMKM</h2>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {stats.map(({ label, value, icon: IconComp, color }) => (
                <div key={label} className={`${color} rounded-2xl p-4`}>
                  <IconComp className="w-5 h-5" />
                  <p className="text-2xl font-bold mt-2">{value}</p>
                  <p className="text-xs font-medium opacity-80 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-medium text-[#2C1810] mb-3">Pengunjung 30 Hari Terakhir</p>
              <div className="flex items-end gap-0.5 h-24">
                {chartData.map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-[#C8813A] opacity-60 hover:opacity-100 transition-opacity"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-xs text-[#8B6B4A]">1 Mei</span>
                <span className="text-xs text-[#8B6B4A]">30 Mei</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6">
            <h3 className="font-bold text-[#2C1810] mb-4">Menu Terpopuler</h3>
            <div className="space-y-3">
              {[
                { name: "Kopi Susu Aren", sold: 234, img: unsplash("1503240778100-fd245e17a273", 80, 80) },
                { name: "Caramel Macchiato", sold: 187, img: unsplash("1563311977-d285756282dc", 80, 80) },
                { name: "Vanilla Latte", sold: 156, img: unsplash("1742549626436-bf3c11dab212", 80, 80) },
              ].map((menu, i) => (
                <div key={menu.name} className="flex items-center gap-3">
                  <span className="text-sm font-bold text-[#C8813A] w-5 shrink-0">{i + 1}</span>
                  <img src={menu.img} alt={menu.name} className="w-10 h-10 rounded-xl object-cover bg-[#F0E8DC] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#2C1810] truncate">{menu.name}</p>
                    <p className="text-xs text-[#8B6B4A]">{menu.sold} terjual</p>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Ulasan Page ────────────────────────────────────────────────────────────────
function UlasanPage({ nav }: { nav: (p: Page) => void }) {
  const [showModal, setShowModal] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([
    {
      name: "Aulia Rahma",
      rating: 5,
      text: "Tempatnya nyaman, WiFi kencang, enak banget buat tugas berjam-jam.",
      time: "2 hari lalu",
      avatar: "AR",
    },
    {
      name: "Dimas Pratama",
      rating: 5,
      text: "Suasananya tenang dan pelayanan ramah. Cocok buat kerja.",
      time: "5 hari lalu",
      avatar: "DP",
    },
    {
      name: "Sarah Amelia",
      rating: 4,
      text: "Kopi susu arennya enak banget! Suasana cozy dan instagramable.",
      time: "1 minggu lalu",
      avatar: "SA",
    },
  ]);

  const handleSubmit = () => {
    if (!reviewText.trim() || reviewRating === 0) return;
    setReviews((prev) => [
      { name: "Kamu", rating: reviewRating, text: reviewText, time: "Baru saja", avatar: "KM" },
      ...prev,
    ]);
    setShowModal(false);
    setReviewText("");
    setReviewRating(0);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <button
        onClick={() => nav("detail")}
        className="flex items-center gap-2 text-sm text-[#8B6B4A] mb-5 hover:text-[#2C1810] transition-colors"
      >
        <ChevronLeft className="w-4 h-4" /> Kembali
      </button>

      <div className="flex items-start justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#2C1810] mb-0.5">Ulasan Pengunjung</h1>
          <p className="text-[#8B6B4A] text-sm">Tanamera Coffee</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="shrink-0 px-5 py-2.5 rounded-xl bg-[#2C1810] text-[#FAF6F0] text-sm font-semibold hover:bg-[#3D2518] transition-colors"
        >
          + Tulis Ulasan
        </button>
      </div>

      {/* Rating Summary */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6 flex items-center gap-8 flex-wrap">
        <div className="text-center">
          <div className="text-7xl font-bold text-[#2C1810] leading-none">4.7</div>
          <div className="flex justify-center my-2">
            <StarRow rating={4.7} />
          </div>
          <p className="text-sm text-[#8B6B4A]">185 ulasan</p>
        </div>
        <div className="flex-1 space-y-2 min-w-[160px]">
          {[5, 4, 3, 2, 1].map((s, idx) => {
            const counts = [120, 45, 14, 4, 2];
            const total = 185;
            return (
              <div key={s} className="flex items-center gap-2">
                <span className="text-xs text-[#8B6B4A] w-3">{s}</span>
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 shrink-0" />
                <div className="flex-1 h-2 bg-[#F0E8DC] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${(counts[idx] / total) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-[#8B6B4A] w-6 text-right">{counts[idx]}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#2C1810] flex items-center justify-center text-[#FAF6F0] text-sm font-bold shrink-0">
                {r.avatar}
              </div>
              <div>
                <p className="font-semibold text-[#2C1810] text-sm">{r.name}</p>
                <div className="flex items-center gap-2">
                  <StarRow rating={r.rating} />
                  <span className="text-xs text-[#8B6B4A]">{r.time}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#8B6B4A] leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-card rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center"
            >
              <X className="w-4 h-4 text-[#8B6B4A]" />
            </button>
            <h2 className="text-xl font-bold text-[#2C1810] mb-5">Tulis Ulasan</h2>
            <div className="mb-5">
              <p className="text-sm font-medium text-[#2C1810] mb-3">Rating Kamu</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button key={s} onClick={() => setReviewRating(s)}>
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        s <= reviewRating ? "text-yellow-400 fill-yellow-400" : "text-[#D0C0A8]"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <textarea
              placeholder="Bagikan pengalamanmu di coffee shop ini..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-[#F0E8DC] border border-border text-sm text-[#2C1810] placeholder-[#A89278] outline-none focus:border-[#C8813A] resize-none transition-colors mb-4"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-xl bg-[#2C1810] text-[#FAF6F0] font-bold hover:bg-[#3D2518] transition-colors"
            >
              Kirim Ulasan
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Favorit Page ───────────────────────────────────────────────────────────────
function FavoritPage({
  nav,
  favs,
  toggleFav,
}: {
  nav: (p: Page) => void;
  favs: Set<string>;
  toggleFav: (id: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<"favorit" | "riwayat">("favorit");

  const favShops = SHOPS.filter((s) => favs.has(s.id));
  const history = [SHOPS[3], SHOPS[0], SHOPS[1]];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-[#2C1810] mb-6">Favorit & Riwayat</h1>

      <div className="flex gap-1 mb-6 border-b border-border">
        {(["favorit", "riwayat"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 text-sm font-medium capitalize relative transition-colors ${
              activeTab === tab ? "text-[#C8813A]" : "text-[#8B6B4A]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8813A]" />
            )}
          </button>
        ))}
      </div>

      {activeTab === "favorit" ? (
        <>
          {favShops.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-12 h-12 text-[#D0C0A8] mx-auto mb-3" />
              <p className="text-[#8B6B4A]">Belum ada coffee shop yang disimpan.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {favShops.map((shop) => (
                <div key={shop.id} className="bg-card border border-border rounded-2xl overflow-hidden flex">
                  <img
                    src={shop.img}
                    alt={shop.name}
                    className="w-28 h-24 object-cover bg-[#F0E8DC] shrink-0"
                  />
                  <div className="flex-1 flex items-center p-4 gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#2C1810] truncate">{shop.name}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-[#8B6B4A]">
                          {shop.rating} · {shop.distance}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button onClick={() => toggleFav(shop.id)}>
                        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                      </button>
                      <button
                        onClick={() => nav("detail")}
                        className="text-xs px-3 py-1.5 rounded-xl bg-[#2C1810] text-[#FAF6F0] font-medium"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button className="mt-6 w-full py-3 rounded-xl border border-[#2C1810] text-[#2C1810] text-sm font-semibold hover:bg-[#2C1810] hover:text-[#FAF6F0] transition-all">
            Lihat Semua Favorit
          </button>
        </>
      ) : (
        <div className="space-y-4">
          {history.map((shop) => (
            <div key={shop.id} className="bg-card border border-border rounded-2xl overflow-hidden flex">
              <img
                src={shop.img}
                alt={shop.name}
                className="w-28 h-24 object-cover bg-[#F0E8DC] shrink-0"
              />
              <div className="flex-1 flex items-center p-4 gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#2C1810] truncate">{shop.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-[#8B6B4A]">
                      {shop.rating} · {shop.distance}
                    </span>
                  </div>
                  <span className="text-xs text-[#A89278] mt-0.5 block">Dilihat kemarin</span>
                </div>
                <button
                  onClick={() => nav("detail")}
                  className="shrink-0 text-xs px-3 py-1.5 rounded-xl bg-[#2C1810] text-[#FAF6F0] font-medium"
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main App ───────────────────────────────────────────────────────────────────
function ProfilPage({ nav }: { nav: (p: Page) => void }) {
  const menuItems = [
    { icon: <Home className="w-4 h-4" />, label: "Beranda Profil", active: true },
    { icon: <Coffee className="w-4 h-4" />, label: "Preferensi Kopi" },
    { icon: <Heart className="w-4 h-4" />, label: "Favorit" },
    { icon: <Clock className="w-4 h-4" />, label: "Riwayat AI" },
    { icon: <Tag className="w-4 h-4" />, label: "Promo Tersimpan" },
  ];
  const preferenceStats = [
    { icon: <Coffee className="w-5 h-5" />, label: "Kopi Favorit", value: "Latte, Kopi Susu Aren, Caramel Macchiato" },
    { icon: <Coffee className="w-5 h-5" />, label: "Tingkat Manis", value: "Sedang" },
    { icon: <Coffee className="w-5 h-5" />, label: "Tingkat Creamy", value: "Tinggi" },
    { icon: <Coffee className="w-5 h-5" />, label: "Tingkat Pahit", value: "Rendah" },
    { icon: <ShoppingBag className="w-5 h-5" />, label: "Tingkat Rata-rata", value: "Rp 20.000 - Rp 50.000" },
    { icon: <MapPin className="w-5 h-5" />, label: "Suasana Favorit", value: "Tenang, Cozy, Work Friendly" },
  ];
  const aiHistory = [
    { prompt: "Aku lagi capek dan pengen santai", result: "Caramel Macchiato", date: "12 Mei 2024" },
    { prompt: "Aku butuh fokus buat nugas", result: "Americano", date: "8 Mei 2024" },
    { prompt: "Aku pengen healing di tempat estetik", result: "Matcha Latte", date: "3 Mei 2024" },
  ];
  const promos = [
    { title: "Happy Hour Diskon 20%", subtitle: "Setiap hari 14.00 - 17.00", img: unsplash("1517701604599-bb29b565090c", 360, 160) },
    { title: "Buy 1 Get 1 Free", subtitle: "Setiap pembelian menu tertentu", img: unsplash("1461023058943-07fcbe16d735", 360, 160) },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="md:hidden flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold text-[#2C1810]">Profil</h1>
        <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-[#8B6B4A]" />
        </button>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-5">
        <aside className="space-y-5">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img
                src={PROFILE_IMAGE}
                alt="Foto profil Fakhrizz"
                className="w-24 h-24 rounded-full object-cover bg-[#F0E8DC]"
              />
              <button className="absolute right-0 bottom-1 w-8 h-8 rounded-full bg-white border border-border shadow-sm flex items-center justify-center">
                <Camera className="w-4 h-4 text-[#C8813A]" />
              </button>
            </div>
            <h1 className="text-xl font-bold text-[#2C1810]">Fakhrizz</h1>
            <p className="text-xs text-[#8B6B4A] mt-1 mb-4">fakhrizz@gmail.com</p>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#C8813A]/40 text-[#8B6B4A] text-xs font-semibold hover:bg-[#FAF6F0] transition-colors">
              <Camera className="w-3.5 h-3.5" />
              Edit Profil
            </button>

            <div className="grid grid-cols-4 gap-2 mt-5 pt-5 border-t border-border lg:hidden">
              {[
                { icon: <Heart className="w-4 h-4 text-red-500 fill-red-500" />, value: 12, label: "Favorit" },
                { icon: <Clock className="w-4 h-4 text-[#8B6B4A]" />, value: 8, label: "Riwayat" },
                { icon: <Star className="w-4 h-4 text-[#8B6B4A]" />, value: 5, label: "Ulasan" },
                { icon: <Tag className="w-4 h-4 text-[#8B6B4A]" />, value: 3, label: "Promo" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="flex justify-center mb-1">{item.icon}</div>
                  <p className="text-sm font-bold text-[#2C1810]">{item.value}</p>
                  <p className="text-[10px] text-[#8B6B4A]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block bg-card border border-border rounded-2xl p-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                    item.active ? "bg-[#F0E8DC] text-[#2C1810]" : "text-[#8B6B4A] hover:bg-[#FAF6F0]"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
            <div className="border-t border-border mt-4 pt-4 space-y-1">
              <button className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#8B6B4A] hover:bg-[#FAF6F0]">
                <Sparkles className="w-4 h-4" />
                Notifikasi
              </button>
              <button className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#8B6B4A] hover:bg-[#FAF6F0]">
                <MessageSquare className="w-4 h-4" />
                Bantuan
              </button>
              <button className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-500 hover:bg-red-50">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Keluar
              </button>
            </div>
          </div>

          <div className="hidden lg:block rounded-2xl bg-[#FAF0E3] p-6 text-center">
            <p className="text-lg font-semibold text-[#2C1810] leading-snug">
              "Ngopi bukan cuma soal rasa, tapi juga soal suasana hati."
            </p>
            <p className="text-xs text-[#8B6B4A] mt-4">- TemuKopi</p>
          </div>
        </aside>

        <section className="space-y-5">
          <div className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-[#C8813A]" />
                <div>
                  <h2 className="font-bold text-[#2C1810]">Preferensi Kopi</h2>
                  <p className="text-xs text-[#8B6B4A]">Atur preferensi untuk rekomendasi yang lebih sesuai buat kamu.</p>
                </div>
              </div>
              <button className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-[#C8813A]/40 text-xs font-semibold text-[#8B6B4A] hover:bg-[#FAF6F0]">
                Ubah Preferensi
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 border-t border-border pt-4">
              {preferenceStats.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F0E8DC] text-[#8B6B4A] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2C1810]">{item.label}</p>
                    <p className="text-xs text-[#8B6B4A] leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid xl:grid-cols-[1.45fr_1fr] gap-5">
            <div className="space-y-5">
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-[#2C1810] flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Favorit Tersimpan
                  </h2>
                  <button onClick={() => nav("favorit")} className="text-xs font-semibold text-[#C8813A]">
                    Lihat Semua Favorit
                  </button>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {SHOPS.slice(0, 3).map((shop) => (
                    <button
                      key={shop.id}
                      onClick={() => nav("detail")}
                      className="text-left rounded-2xl border border-border overflow-hidden bg-white hover:shadow-md transition-shadow"
                    >
                      <div className="relative">
                        <img src={shop.img} alt={shop.name} className="h-32 w-full object-cover bg-[#F0E8DC]" />
                        <span className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        </span>
                      </div>
                      <div className="p-3">
                        <p className="font-semibold text-sm text-[#2C1810] truncate">{shop.name}</p>
                        <div className="flex items-center justify-between gap-2 mt-1 text-[11px] text-[#8B6B4A]">
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            {shop.rating} ({shop.reviews})
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {shop.distance}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-[#2C1810] flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Riwayat Rekomendasi AI
                  </h2>
                  <button onClick={() => nav("mood")} className="text-xs font-semibold text-[#C8813A]">
                    Lihat Semua Riwayat
                  </button>
                </div>
                <div className="space-y-3">
                  {aiHistory.map((item) => (
                    <div key={item.prompt} className="flex items-center gap-3 rounded-2xl bg-[#FAF6F0] p-3">
                      <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#2C1810] truncate">"{item.prompt}"</p>
                        <p className="text-[11px] text-[#8B6B4A]">{item.date}</p>
                      </div>
                      <div className="hidden sm:block text-right">
                        <p className="text-xs font-semibold text-[#2C1810]">{item.result}</p>
                        <p className="text-[11px] text-[#8B6B4A]">hasil rekomendasi</p>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg border border-[#C8813A]/40 text-[11px] font-semibold text-[#8B6B4A]">
                        Lihat Ulang
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-[#2C1810]">Preferensi Kopi</h2>
                  <button className="text-xs font-semibold text-[#C8813A]">Ubah</button>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#2C1810] mb-1">Kopi Favorit</p>
                    <p className="text-xs text-[#8B6B4A] leading-relaxed">Latte, Kopi Susu Aren, Caramel Macchiato</p>
                  </div>
                  <img src={unsplash("1509042239860-f550ce710b93", 96, 96)} alt="Kopi favorit" className="w-16 h-16 rounded-2xl object-cover bg-[#F0E8DC]" />
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    { label: "Manis", value: "Sedang", dots: 2 },
                    { label: "Pahit", value: "Rendah", dots: 1 },
                    { label: "Creamy", value: "Tinggi", dots: 3 },
                  ].map((taste) => (
                    <div key={taste.label} className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-[#2C1810]">{taste.label}</span>
                      <span className="text-xs text-[#8B6B4A]">{taste.value}</span>
                      <span className="flex gap-1">
                        {[1, 2, 3].map((dot) => (
                          <span
                            key={dot}
                            className={`w-2 h-2 rounded-full ${dot <= taste.dots ? "bg-[#C8813A]" : "bg-[#E4D7C7]"}`}
                          />
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-[#2C1810]">Promo Tersimpan</h2>
                  <button onClick={() => nav("promo")} className="text-xs font-semibold text-[#C8813A]">Lihat Semua</button>
                </div>
                <div className="space-y-3">
                  {promos.map((promo) => (
                    <button
                      key={promo.title}
                      onClick={() => nav("promo")}
                      className="relative w-full h-28 rounded-2xl overflow-hidden text-left"
                    >
                      <img src={promo.img} alt={promo.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/90 via-[#2C1810]/55 to-transparent" />
                      <div className="relative p-4">
                        <p className="text-white font-bold text-sm">{promo.title}</p>
                        <p className="text-[#F0E8DC] text-xs mt-1">{promo.subtitle}</p>
                        <span className="inline-flex mt-3 px-2 py-1 rounded-md bg-black/30 text-white text-[10px]">
                          Tersimpan
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [favs, setFavs] = useState<Set<string>>(new Set(["tanamera"]));

  const nav = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFav = (id: string) => {
    setFavs((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar page={page} nav={nav} />
      <main className="pb-16 md:pb-0">
        {page === "home" && <HomePage nav={nav} favs={favs} toggleFav={toggleFav} />}
        {page === "mood" && <MoodFinderPage nav={nav} favs={favs} toggleFav={toggleFav} />}
        {page === "rekomendasi" && <RekomendasiPage nav={nav} />}
        {page === "pencarian" && <PencarianPage nav={nav} favs={favs} toggleFav={toggleFav} />}
        {page === "detail" && <DetailPage nav={nav} favs={favs} toggleFav={toggleFav} />}
        {page === "menu" && <MenuPage nav={nav} />}
        {page === "promo" && <PromoPage nav={nav} />}
        {page === "umkm" && <UMKMPage nav={nav} />}
        {page === "ulasan" && <UlasanPage nav={nav} />}
        {page === "favorit" && <FavoritPage nav={nav} favs={favs} toggleFav={toggleFav} />}
        {page === "profil" && <ProfilPage nav={nav} />}
        {page !== "home" && <Footer nav={nav} />}
      </main>
      <BottomNav page={page} nav={nav} />
    </div>
  );
}
