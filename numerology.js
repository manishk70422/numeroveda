// ── Utility: reduce a number to single digit (1–9) ──────────────────────────
function reduceToSingle(n) {
  while (n > 9) {
    n = String(n).split('').reduce((sum, d) => sum + Number(d), 0);
  }
  return n;
}

// ── Mulank = sum of digits of birth DAY, reduced to single digit ─────────────
function calcMulank(day) {
  return reduceToSingle(
    String(day).split('').reduce((s, d) => s + Number(d), 0)
  );
}

// ── Bhagyank = sum of ALL digits of full date (DD + MM + YYYY), reduced ──────
function calcBhagyank(day, month, year) {
  const total = [...String(day), ...String(month), ...String(year)]
    .reduce((s, d) => s + Number(d), 0);
  return reduceToSingle(total);
}

// ── Number Data ───────────────────────────────────────────────────────────────
const numberData = {
  1: {
    ruler: 'Sun (Surya)',
    traits: 'Leadership, ambition, independence, originality, courage',
    strengths: 'Natural born leader, highly motivated, creative thinker',
    challenges: 'Can be domineering, stubborn, or overly self-focused',
    luckyDays: 'Sunday, Monday',
    luckyColors: 'Gold, Orange, Yellow',
    luckyGems: 'Ruby, Topaz',
    compatibleNumbers: '1, 2, 4',
    career: {
      summary: 'You are built to lead and innovate. You thrive in roles where you have authority and creative freedom.',
      fields: ['Entrepreneurship', 'Politics & Government', 'Management & CEO roles', 'Military & Defense', 'Performing Arts', 'Sports Leadership'],
      avoid: 'Routine desk jobs with no autonomy',
      tip: 'Channel your drive into building something of your own — you are at your best when you are the boss.'
    }
  },
  2: {
    ruler: 'Moon (Chandra)',
    traits: 'Diplomacy, sensitivity, cooperation, intuition, patience',
    strengths: 'Excellent mediator, empathetic, great listener, team player',
    challenges: 'Over-sensitive, indecisive, prone to self-doubt',
    luckyDays: 'Monday, Friday',
    luckyColors: 'White, Silver, Cream',
    luckyGems: 'Pearl, Moonstone',
    compatibleNumbers: '1, 3, 6',
    career: {
      summary: 'You excel in collaborative, people-oriented environments. Your empathy and diplomacy make you invaluable in support and advisory roles.',
      fields: ['Counseling & Psychology', 'Nursing & Healthcare', 'Diplomacy & HR', 'Teaching', 'Social Work', 'Music & Fine Arts'],
      avoid: 'High-pressure solo competitive roles',
      tip: 'Trust your intuition — it is your greatest professional asset.'
    }
  },
  3: {
    ruler: 'Jupiter (Guru)',
    traits: 'Creativity, expression, optimism, enthusiasm, social charm',
    strengths: 'Excellent communicator, artistic, joyful, inspiring to others',
    challenges: 'Scattered energy, superficiality, tendency to procrastinate',
    luckyDays: 'Thursday, Tuesday',
    luckyColors: 'Yellow, Purple, Pink',
    luckyGems: 'Yellow Sapphire, Amethyst',
    compatibleNumbers: '1, 2, 9',
    career: {
      summary: 'Your creativity and communication skills open doors in expressive and intellectual fields. You shine wherever words, ideas, or art are valued.',
      fields: ['Writing & Journalism', 'Acting & Entertainment', 'Teaching & Lecturing', 'Marketing & Advertising', 'Design & Fashion', 'Law'],
      avoid: 'Monotonous technical work with no creative outlet',
      tip: 'Focus your abundant energy — pick one creative project and see it through to completion.'
    }
  },
  4: {
    ruler: 'Rahu (North Node)',
    traits: 'Discipline, hard work, practicality, reliability, organization',
    strengths: 'Methodical, trustworthy, excellent planner, strong work ethic',
    challenges: 'Rigid thinking, resistance to change, tendency to overwork',
    luckyDays: 'Saturday, Sunday',
    luckyColors: 'Blue, Grey, Green',
    luckyGems: 'Hessonite (Gomed), Blue Sapphire',
    compatibleNumbers: '1, 5, 8',
    career: {
      summary: 'You are the backbone of any organization. Your discipline and attention to detail make you exceptional in structured, results-driven environments.',
      fields: ['Engineering & Architecture', 'Accounting & Finance', 'Construction & Real Estate', 'IT & Systems', 'Project Management', 'Research & Science'],
      avoid: 'Unstructured freelance work with no clear goals',
      tip: 'Embrace flexibility — the best plans adapt. Your hard work will always pay off.'
    }
  },
  5: {
    ruler: 'Mercury (Budha)',
    traits: 'Freedom, adventure, versatility, wit, curiosity',
    strengths: 'Quick thinker, adaptable, persuasive, multi-talented',
    challenges: 'Restlessness, inconsistency, impulsiveness',
    luckyDays: 'Wednesday, Friday',
    luckyColors: 'Green, Light Blue, Silver',
    luckyGems: 'Emerald, Aquamarine',
    compatibleNumbers: '1, 3, 7',
    career: {
      summary: 'You need variety and stimulation. Careers that offer travel, change, and intellectual challenge are your sweet spot.',
      fields: ['Sales & Business Development', 'Travel & Tourism', 'Journalism & Media', 'Stock Market & Trading', 'Technology & Startups', 'Public Relations'],
      avoid: 'Repetitive 9-to-5 desk jobs',
      tip: 'Your adaptability is your superpower — use it to pivot quickly when opportunities arise.'
    }
  },
  6: {
    ruler: 'Venus (Shukra)',
    traits: 'Responsibility, nurturing, harmony, beauty, compassion',
    strengths: 'Caring, artistic, reliable, great sense of aesthetics',
    challenges: 'Over-protective, self-sacrificing, prone to worry',
    luckyDays: 'Friday, Wednesday',
    luckyColors: 'Pink, Rose, Light Blue',
    luckyGems: 'Diamond, White Sapphire',
    compatibleNumbers: '2, 3, 9',
    career: {
      summary: 'You are a natural caregiver and creator. You flourish in roles that let you nurture others or express beauty and harmony.',
      fields: ['Medicine & Healing', 'Interior Design & Architecture', 'Teaching & Childcare', 'Hospitality & Catering', 'Fashion & Beauty', 'Social Services'],
      avoid: 'Cutthroat competitive environments that lack human connection',
      tip: 'Set healthy boundaries — your giving nature is a gift, but protect your own energy too.'
    }
  },
  7: {
    ruler: 'Ketu (South Node)',
    traits: 'Wisdom, introspection, spirituality, analysis, mystery',
    strengths: 'Deep thinker, highly intuitive, excellent researcher, philosophical',
    challenges: 'Isolation, skepticism, difficulty trusting others',
    luckyDays: 'Monday, Sunday',
    luckyColors: 'Violet, Grey, White',
    luckyGems: 'Cat\'s Eye, Amethyst',
    compatibleNumbers: '2, 5, 9',
    career: {
      summary: 'You are a seeker of truth and depth. You excel in fields that require deep analysis, research, or spiritual understanding.',
      fields: ['Research & Academia', 'Philosophy & Spirituality', 'Psychology & Psychiatry', 'Data Science & Analytics', 'Astrology & Metaphysics', 'Writing & Literature'],
      avoid: 'Loud, fast-paced sales or customer-facing roles',
      tip: 'Solitude is your recharge — schedule quiet time to think and your best ideas will emerge.'
    }
  },
  8: {
    ruler: 'Saturn (Shani)',
    traits: 'Power, ambition, material success, authority, karma',
    strengths: 'Strategic, resilient, business-minded, excellent executive',
    challenges: 'Workaholic tendencies, materialism, power struggles',
    luckyDays: 'Saturday, Sunday',
    luckyColors: 'Black, Dark Blue, Brown',
    luckyGems: 'Blue Sapphire, Black Tourmaline',
    compatibleNumbers: '2, 4, 6',
    career: {
      summary: 'You are destined for positions of power and financial success. You have the stamina and strategic mind to build empires.',
      fields: ['Business & Entrepreneurship', 'Banking & Finance', 'Law & Judiciary', 'Real Estate & Investment', 'Politics & Administration', 'Corporate Leadership'],
      avoid: 'Low-paying jobs with no growth path',
      tip: 'Patience is your key — Saturn rewards those who persist. Avoid shortcuts; build for the long term.'
    }
  },
  9: {
    ruler: 'Mars (Mangal)',
    traits: 'Humanitarianism, compassion, idealism, courage, completion',
    strengths: 'Generous, inspiring, broad-minded, natural healer and leader',
    challenges: 'Impracticality, emotional volatility, difficulty letting go',
    luckyDays: 'Tuesday, Thursday',
    luckyColors: 'Red, Crimson, Gold',
    luckyGems: 'Red Coral, Garnet',
    compatibleNumbers: '3, 6, 7',
    career: {
      summary: 'You are driven by a higher purpose. You thrive when your work contributes to the greater good and makes a meaningful difference.',
      fields: ['NGO & Humanitarian Work', 'Medicine & Surgery', 'Military & Police', 'Spiritual Leadership', 'Arts & Entertainment', 'International Relations'],
      avoid: 'Purely profit-driven roles with no social impact',
      tip: 'Your greatest fulfillment comes from service — align your career with a cause you believe in.'
    }
  }
};

// ── Render helpers ────────────────────────────────────────────────────────────
function infoRow(icon, label, value) {
  return `
    <div class="info-row">
      <span class="info-icon">${icon}</span>
      <div class="info-text">
        <strong>${label}</strong>
        <span>${value}</span>
      </div>
    </div>`;
}

function tagList(items) {
  return `<div class="tag-list">${items.map(i => `<span class="tag">${i}</span>`).join('')}</div>`;
}

function renderNumberDetails(num, containerId) {
  const d = numberData[num];
  const el = document.getElementById(containerId);
  el.innerHTML = `
    ${infoRow('🪐', 'Ruling Planet', d.ruler)}
    ${infoRow('✨', 'Core Traits', d.traits)}
    ${infoRow('💪', 'Strengths', d.strengths)}
    ${infoRow('⚠️', 'Challenges', d.challenges)}
    ${infoRow('📅', 'Lucky Days', d.luckyDays)}
    ${infoRow('🎨', 'Lucky Colors', d.luckyColors)}
    ${infoRow('💎', 'Lucky Gems', d.luckyGems)}
    ${infoRow('🤝', 'Compatible Numbers', d.compatibleNumbers)}
  `;
}

function renderCareer(mulank, bhagyank) {
  const m = numberData[mulank].career;
  const b = numberData[bhagyank].career;
  const el = document.getElementById('careerBody');

  // Merge fields from both numbers (unique)
  const allFields = [...new Set([...m.fields, ...b.fields])];

  el.innerHTML = `
    ${infoRow('🌐', 'Based on Mulank ' + mulank, m.summary)}
    ${infoRow('🌐', 'Based on Bhagyank ' + bhagyank, b.summary)}
    <div class="info-row">
      <span class="info-icon">🏆</span>
      <div class="info-text">
        <strong>Best Career Fields for You</strong>
        ${tagList(allFields)}
      </div>
    </div>
    ${infoRow('🚫', 'What to Avoid', m.avoid)}
    ${infoRow('💡', 'Pro Tip (Mulank)', m.tip)}
    ${infoRow('💡', 'Pro Tip (Bhagyank)', b.tip)}
  `;
}

// ── Form Submit ───────────────────────────────────────────────────────────────
document.getElementById('numerologyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const raw = document.getElementById('birthdate').value;
  if (!raw) return;

  const [year, month, day] = raw.split('-').map(Number);

  const mulank   = calcMulank(day);
  const bhagyank = calcBhagyank(day, month, year);

  // Show values
  document.getElementById('mulankValue').textContent   = mulank;
  document.getElementById('bhagyankValue').textContent = bhagyank;

  // Render details
  renderNumberDetails(mulank,   'mulankBody');
  renderNumberDetails(bhagyank, 'bhagyankBody');
  renderCareer(mulank, bhagyank);

  // Show results, hide form
  document.getElementById('results').classList.remove('hidden');
  document.querySelector('.form-card').classList.add('hidden');

  // Smooth scroll
  document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ── Reset ─────────────────────────────────────────────────────────────────────
function resetForm() {
  document.getElementById('birthdate').value = '';
  document.getElementById('results').classList.add('hidden');
  document.querySelector('.form-card').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
