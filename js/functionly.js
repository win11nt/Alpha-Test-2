
const organData = [
  {
    label: "Digestive",
    number: "01",
    title: "Digestive Support",
    desc: "Prebiotics, Probiotics, Postbiotics, Enzymes",
    icon: `
      <svg class="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none">
        <path d="M18 8C18 8 14 8 14 12V14C14 18 18 20 18 24C18 28 14 30 14 34V36C14 40 18 40 18 40"
          stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M30 8C30 8 34 8 34 12V14C34 18 30 20 30 24C30 28 34 30 34 34V36C34 40 30 40 30 40"
          stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M18 16H30" stroke="currentColor" stroke-width="2"/>
        <path d="M18 24H30" stroke="currentColor" stroke-width="2"/>
        <path d="M18 32H30" stroke="currentColor" stroke-width="2"/>
      </svg>`,
    text: "A complete 4-tier digestive support system featuring 10 Billion CFU of probiotics and clinically proven enzymes to optimize nutrient absorption and gut health.",
  },

  {
    label: "Immune",
    number: "02",
    title: "Immune Support",
    desc: "Vit C, D, Zinc, Mushrooms",
    icon: `
        <svg class="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 6L38 12V24C38 34 31 40 24 42C17 40 10 34 10 24V12L24 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      </path>
      <path d="M24 18V30" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M18 24H30" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>`,
    text: "Fortifies your body's natural defenses with high-potency Vitamin C (1000% DV), Zinc, and a specialized mushroom complex including Reishi and Chaga.",
  },

  {
    label: "Cardiovascular",
    number: "03",
    title: "Cardiovascular Support",
    desc: "COQ10, NITRATES, POTASSIUM",
    icon: `
        <svg class="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 38C24 38 10 28 10 18C10 12 14 8 20 8C23 8 24 10 24 10C24 10 25 8 28 8C34 8 38 12 38 18C38 28 24 38 24 38Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M16 22H20L22 18L24 26L26 20L28 22H32" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>`,
    text: "Supports heart health and circulation with natural nitrates from beetroot, CoQ10 for cellular energy, and potassium for healthy blood pressure levels.",
  },

  {
    label: "Muscular",
    number: "04",
    title: "Muscular Support",
    desc: "Aminos, MSM, Electrolytes",
    icon: `
        <svg class="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 16C12 16 14 20 18 20C22 20 24 16 24 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M24 16C24 16 26 20 30 20C34 20 36 16 36 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M12 24C12 24 14 28 18 28C22 28 24 24 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M24 24C24 24 26 28 30 28C34 28 36 24 36 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M12 32C12 32 14 36 18 36C22 36 24 32 24 32" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M24 32C24 32 26 36 30 36C34 36 36 32 36 32" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M18 12V36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M24 12V36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M30 12V36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>`,
    text: "Accelerates recovery and maintains muscle function with a full spectrum of amino acids, MSM for joint comfort, and essential electrolytes.",
  },

  {
    label: "Skeletal",
    number: "05",
    title: "Skeletal Support",
    desc: "Calcium, Vit D, K2, Boron",
    icon: `
       <svg class="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 12C16 12 18 16 20 18C22 20 24 20 24 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M24 20C24 20 26 20 28 18C30 16 32 12 32 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M16 36C16 36 18 32 20 30C22 28 24 28 24 28" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M24 28C24 28 26 28 28 30C30 32 32 36 32 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M20 18L20 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path>
      <path d="M28 18L28 30" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path>
      <circle cx="18" cy="12" r="2.5" stroke="currentColor" stroke-width="1.5"></circle>
      <circle cx="30" cy="12" r="2.5" stroke="currentColor" stroke-width="1.5"></circle>
      <circle cx="18" cy="36" r="2.5" stroke="currentColor" stroke-width="1.5"></circle>
      <circle cx="30" cy="36" r="2.5" stroke="currentColor" stroke-width="1.5"></circle>
    </svg>`,
    text: "Builds and maintains strong bones with bioavailable Calcium, Vitamin D3 from vegan lichen, and Vitamin K2 to direct calcium to where it's needed.",
  },

  {
    label: "Integumentary",
    number: "06",
    title: "Skin, Hair & Nail Support",
    desc: "MSM, Vit C, E, Biotin, Silica",
    icon: `
        <svg class="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 16C12 14 16 14 24 14C32 14 36 14 40 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M8 24C12 22 16 22 24 22C32 22 36 22 40 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M8 32C12 30 16 30 24 30C32 30 36 30 40 32" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <circle cx="16" cy="18" r="2" stroke="currentColor" stroke-width="1.5"></circle>
      <circle cx="32" cy="18" r="2" stroke="currentColor" stroke-width="1.5"></circle>
      <circle cx="24" cy="26" r="2" stroke="currentColor" stroke-width="1.5"></circle>
    </svg>`,
    text: "Promotes radiant skin, hair, and nails through collagen-supporting Vitamin C, Biotin, and MSM to combat oxidative stress.",
  },

  {
    label: "Nervous",
    number: "07",
    title: "Nervous System Support",
    desc: "B-Vitamins, Magnesium, Adaptogens",
    icon: `
        <svg class="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="20" r="8" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="20" r="3" fill="currentColor"></circle>
      <path d="M16 20L8 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M16 20L8 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M16 20L8 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M32 20L40 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M32 20L40 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M32 20L40 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M20 12L24 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M24 12L28 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M24 28L20 36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M24 28L28 36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <circle cx="8" cy="16" r="1.5" fill="currentColor"></circle>
      <circle cx="8" cy="24" r="1.5" fill="currentColor"></circle>
      <circle cx="8" cy="28" r="1.5" fill="currentColor"></circle>
      <circle cx="40" cy="16" r="1.5" fill="currentColor"></circle>
      <circle cx="40" cy="24" r="1.5" fill="currentColor"></circle>
      <circle cx="40" cy="28" r="1.5" fill="currentColor"></circle>
      <circle cx="24" cy="8" r="1.5" fill="currentColor"></circle>
      <circle cx="20" cy="36" r="1.5" fill="currentColor"></circle>
      <circle cx="28" cy="36" r="1.5" fill="currentColor"></circle>
    </svg>`,
    text: "Calms the mind and supports cognitive function with a complete B-Complex (including Methylcobalamin) and stress-adapting herbs like Reishi & Ashwagandha.",
  },

  {
    label: "Endocrine",
    number: "08",
    title: "Endocrine Support",
    desc: "Adaptogens, Vit D, Chromium",
    icon: `
        <svg class="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="6" stroke="currentColor" stroke-width="2"></circle>
      <circle cx="24" cy="24" r="2" fill="currentColor"></circle>
      <path d="M24 8V18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M24 30V40" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M8 24H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M30 24H40" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <circle cx="24" cy="10" r="3" stroke="currentColor" stroke-width="1.5"></circle>
      <circle cx="24" cy="38" r="3" stroke="currentColor" stroke-width="1.5"></circle>
      <circle cx="10" cy="24" r="3" stroke="currentColor" stroke-width="1.5"></circle>
      <circle cx="38" cy="24" r="3" stroke="currentColor" stroke-width="1.5"></circle>
    </svg>`,
    text: "Balances hormones and metabolism with targeted adaptogens and Chromium to support healthy blood sugar levels already within normal range.",
  },

  {
    label: "Urinary",
    number: "09",
    title: "Urinary Support",
    desc: "Hydra Electrolytes Complex",
    icon: `
        <svg class="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 12C10 12 8 16 8 22C8 28 10 32 14 32C16 32 18 30 18 26C18 22 16 20 16 18C16 16 18 14 18 14C18 14 16 12 14 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M34 12C38 12 40 16 40 22C40 28 38 32 34 32C32 32 30 30 30 26C30 22 32 20 32 18C32 16 30 14 30 14C30 14 32 12 34 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M18 26V34C18 36 20 38 24 38C28 38 30 36 30 34V26" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <path d="M24 38V42" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
    </svg>`,
    text: "Optimizes fluid balance and kidney function with a precision hydration complex featuring Potassium Citrate and Magnesium Glycinate.",
  },
];

const grid = document.getElementById("cardGrid");
const title = document.getElementById("detailTitle");
const desc = document.getElementById("detailDesc");

function createCard(item, index) {
  return `
    <button class="cursor-pointer w-[150px] h-[150px] text-[#6b0d12] rounded-[28px] organ-card border border-transparent
      bg-[linear-gradient(145deg,_rgba(255,255,255,0.95)_0%,_rgba(245,234,234,0.9)_50%,_rgba(255,240,240,0.85)_100%)]
      shadow-md hover:shadow-lg 
      transition duration-300 
      flex flex-col items-center justify-center 
      relative group"
      data-index="${index}">
      <span class="absolute top-3 left-4 text-xs text-gray-400">
        ${item.number}
      </span>
      ${item.icon}
      <span class="aeonik text-[13px]">
        ${item.label}
      </span>

      <span class="arrow-icon absolute bottom-3 right-4 opacity-0 transition">
        →
        </span>
    </button>
  `;
}

function renderCards(data) {
  grid.innerHTML = data.map(createCard).join("");

  bindCardEvents(data);

  // AUTO ACTIVE CARD 0
  const firstCard = document.querySelector(".organ-card");
  if (firstCard) firstCard.click();
}

function bindCardEvents(data) {
  const cards = document.querySelectorAll(".organ-card");
  const icon = document.getElementById("detailIcon");
  const number = document.getElementById("detailNumber");
  const text = document.getElementById("detailText");

  cards.forEach(card => {
    card.addEventListener("click", () => {

      cards.forEach(c => c.classList.remove("organ-card-active"));
      card.classList.add("organ-card-active");

      const i = card.dataset.index;

      title.innerText = data[i].title || data[i].label;
      desc.innerText = data[i].desc || "";
      text.innerText = data[i].text || "";
      icon.innerHTML = data[i].icon || "";
      number.innerHTML = data[i].number || "";
    });
  });
}

renderCards(organData);

