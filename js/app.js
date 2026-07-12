// app.js
// NextMerch Global Ltd. — site interaction and logic file.
// Sections: (1) Auth widget  (2) Navigation & tabbed content
//           (3) Product catalog / carousel  (4) Live shipment board

/* =========================================================
   1. AUTH WIDGET (sign in / sign up toggle in the header)
   ========================================================= */

function setAuthMode(mode){
  const toggle = document.getElementById('authToggle');
  const panel = document.getElementById('authPanel');
  const title = document.getElementById('panelTitle');
  const sub = document.getElementById('panelSub');
  const submit = document.getElementById('submitBtn');
  const switchLine = document.getElementById('switchLine');

  if(mode === 'signup'){
    toggle.classList.remove('mode-signin');
    toggle.classList.add('mode-signup');
    panel.classList.add('signup-mode');
    title.textContent = 'Create your account';
    sub.textContent = 'Set up a sourcing account in minutes.';
    submit.textContent = 'Create account';
    switchLine.innerHTML = 'Already have an account? <span onclick="setAuthMode(\'signin\')">Sign in</span>';
  } else {
    toggle.classList.remove('mode-signup');
    toggle.classList.add('mode-signin');
    panel.classList.remove('signup-mode');
    title.textContent = 'Welcome back';
    sub.textContent = 'Sign in to manage your account.';
    submit.textContent = 'Sign in';
    switchLine.innerHTML = 'New here? <span onclick="setAuthMode(\'signup\')">Create an account</span>';
  }
  panel.classList.add('open');
}

document.getElementById('authToggle').addEventListener('click', function(e){
  if(e.target.tagName === 'BUTTON') return;
  document.getElementById('authPanel').classList.toggle('open');
});

document.querySelectorAll('.auth-toggle button').forEach(btn => {
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('authPanel').classList.add('open');
  });
});

document.addEventListener('click', function(e){
  if(!e.target.closest('.auth-widget')){
    document.getElementById('authPanel').classList.remove('open');
  }
});

/* =========================================================
   2. NAVIGATION — mega-menus + About Us / Business Activities
      tabbed content
   ========================================================= */

function toggleMenu(id){
  document.querySelectorAll('.nav-item').forEach(el => {
    if(el.id !== id) el.classList.remove('open');
  });
  document.getElementById(id).classList.toggle('open');
}

document.addEventListener('click', function(e){
  if(!e.target.closest('.nav-item')){
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('open'));
  }
});

// ---- About Us content (from the NextMerch Global Ltd. company profile) ----
const aboutContent = {
  story:{ title:'Our Story', body:'<p>NextMerch was co-founded by a dynamic duo team, each bringing unique yet complementary strengths to the business. With over 12 years of experience, Dr. Kwasi Boakye-Gyasi has built businesses across sectors, developing deep expertise in global sourcing, procurement, trade logistics, and supply chain management. Through years of navigating complex markets and supplier ecosystems, he has developed a keen eye for product quality, pricing strategy, and customer-focused service delivery.</p><p>Mrs. Ivy Boakye-Gyasi is a seasoned textile and product development specialist with more than a decade of hands-on experience in garment production, craftsmanship, and small business operations. Her intuitive understanding of materials, design, and consumer preferences brings creativity, precision, and a relentless commitment to excellence into the heart of the company.</p><p>What started as countless conversations around product ideas, supplier frustrations, and missed opportunities has since grown into a full-service company grounded in real-world experience and driven by a shared vision. Together, they founded NextMerch Global Ltd. to make sourcing smarter, delivery faster, and service more human.</p><p>Today, NextMerch stands on a strong foundation of over 20 years of combined industry experience, committed to delivering value-driven, scalable, and dependable solutions across the global trade landscape.</p>' },
  philosophy:{ title:'Our Philosophy', body:'<p>At NextMerch Global Ltd., our philosophy is simple: people, products, and purpose matter. Our business is built on meaningful relationships, uncompromising quality, and solutions that support growth at every level.</p><p>We believe that:</p><ul><li>Relationships matter. Business is personal, and trust is everything.</li><li>Quality should not be complicated. Great products should be easy to find and even easier to deliver.</li><li>Small businesses deserve big solutions. Whether you are launching or scaling, we are here with tailored services and honest support.</li></ul>' },
  mission:{ title:'Mission Statement', body:'<p>To deliver quality merchandise and reliable supply chain solutions that help businesses grow.</p>' },
  vision:{ title:'Vision Statement', body:'<p>To lead in global trade by connecting people and markets through innovative, efficient, and ethical distribution.</p>' },
  values:{ title:'Core Values', body:'<p>Our values spell out who we are:</p><div class="values-grid"><div class="value-tile"><div class="letter">N</div><h5>Nobility (Integrity)</h5><p>Honesty, transparency, and strong ethical standards in every transaction.</p></div><div class="value-tile"><div class="letter">E</div><h5>Excellence</h5><p>The highest standards in sourcing, procurement, and delivery.</p></div><div class="value-tile"><div class="letter">X</div><h5>Xceleration</h5><p>Processes designed for fast execution, accuracy, and dependable service.</p></div><div class="value-tile"><div class="letter">T</div><h5>Trust (Customer-Centricity)</h5><p>We listen actively, respond promptly, and deliver lasting value.</p></div><div class="value-tile"><div class="letter">M</div><h5>Modernization</h5><p>Innovation, smart tools, and fresh thinking across the supply chain.</p></div><div class="value-tile"><div class="letter">E</div><h5>Engagement</h5><p>Teamwork, internally and externally, achieves shared success.</p></div><div class="value-tile"><div class="letter">R</div><h5>Responsibility</h5><p>Responsible sourcing and environmentally conscious operations.</p></div><div class="value-tile"><div class="letter">C</div><h5>Consistency</h5><p>Dependable outcomes through disciplined systems and clear communication.</p></div><div class="value-tile"><div class="letter">H</div><h5>Human-Centered</h5><p>Respect, fairness, and long-term relationships with people first.</p></div></div>' },
  way:{ title:'The NextMerch Way', body:'<p>"Source Smart. Deliver Faster." is not just a slogan, it is our promise and process:</p><ul><li><strong>Think Global, Act Local</strong> — international reach paired with local insight.</li><li><strong>Quality Over Quantity</strong> — every product is selected with care.</li><li><strong>Efficiency at Every Turn</strong> — from warehouse to delivery van, we cut delays and reduce costs.</li><li><strong>Transparent Partnerships</strong> — clear communication, tracking, and reporting at every stage.</li><li><strong>Proactive Problem Solving</strong> — an agile approach that stays ahead of challenges.</li><li><strong>Empowering Clients</strong> — flexible options, market insights, and personalized service.</li></ul>' },
  why:{ title:'Why Choose NextMerch Global Ltd.?', body:'<ul><li>Comprehensive procurement and trade expertise</li><li>Agile and scalable distribution models</li><li>Transparent, customer-focused service delivery</li><li>Strategic sourcing with global reach</li><li>Timely fulfilment backed by strong logistics</li></ul>' }
};

function setAboutTab(tab){
  document.querySelectorAll('#aboutTabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.getElementById('aboutPanelTitle').textContent = aboutContent[tab].title;
  document.getElementById('aboutPanelBody').innerHTML = aboutContent[tab].body;
}

function goAbout(tab){
  setAboutTab(tab);
  document.getElementById('about').scrollIntoView({behavior:'smooth'});
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('open'));
}

// ---- Business Activities content (from the company profile) ----
const bizContent = {
  wholesale:{ title:'Wholesale &amp; Retail Trade of General Merchandise', body:'<p>Our general merchandise trade arm is designed to meet the needs of both bulk buyers and individual customers, delivering quality, variety, and value through a seamless supply chain and customer-first approach.</p><h4 class="sub">Wholesale trade</h4><ul><li>Bulk supply for retailers, resellers, institutions, and corporate clients</li><li>Competitive pricing structures and tiered discounts</li><li>Custom sourcing solutions for large-scale clients</li><li>Direct import/export capabilities to optimize cost and delivery time</li><li>Private labelling and white-label options for select product lines</li></ul><h4 class="sub">Retail trade</h4><ul><li>Online and physical retail channels to serve individual consumers</li><li>Curated product selection based on market trends and preferences</li><li>Promotions, loyalty programs, and seasonal sales campaigns</li><li>Focus on fast-moving consumer goods with high turnover rates</li></ul><h4 class="sub">Key value propositions</h4><ul><li>Affordability without compromise on quality</li><li>Reliable stock availability and timely replenishment</li><li>Flexible purchasing options for both B2B and B2C customers</li></ul>' },
  procurement:{ title:'Procurement &amp; Sourcing Services', body:'<p>We simplify the complex process of finding, evaluating, and acquiring goods and materials, tailored to help businesses access quality products at the best possible value, locally and globally.</p><h4 class="sub">Strategic sourcing</h4><ul><li>Identification and vetting of reliable suppliers across domestic and international markets</li><li>Analysis of market trends, cost structures, and supplier capabilities</li><li>Negotiation and contract management to secure favorable terms</li></ul><h4 class="sub">Supplier management</h4><ul><li>Building and maintaining a trusted supplier network</li><li>Monitoring supplier performance, compliance, and reliability</li><li>Regular supplier audits and evaluations</li></ul><h4 class="sub">Custom procurement &amp; import/export</h4><ul><li>Tailored sourcing for one-time projects or ongoing contracts</li><li>Private-label sourcing and packaging customization</li><li>End-to-end support for cross-border procurement, customs, and logistics</li></ul>' },
  distribution:{ title:'Distribution &amp; Supply Chain Management', body:'<p>We optimize the flow of goods from point of origin to final delivery, ensuring products move efficiently, reliably, and cost-effectively across local and international markets.</p><h4 class="sub">Warehousing &amp; fulfilment</h4><ul><li>Strategically located storage with real-time inventory tracking</li><li>Efficient pick, pack, and ship processes</li><li>Same-day or next-day delivery options in key markets</li></ul><h4 class="sub">Transportation &amp; visibility</h4><ul><li>Multi-modal transportation (air, sea, road) for flexible routing</li><li>Route optimization and real-time shipment tracking</li><li>End-to-end supply chain mapping and demand forecasting</li></ul><h4 class="sub">Compliance &amp; value-added services</h4><ul><li>Adherence to international shipping regulations and customs requirements</li><li>Product labelling, repackaging, kitting, and reverse logistics</li><li>Scalable service levels for businesses of every size</li></ul>' },
  healthcare:{ title:'Healthcare Solutions Division', body:'<p>Sourcing and distribution of healthcare-related goods and consumables, run to the same standards of compliance and reliability as our wider trade network.</p>' },
  general:{ title:'General Supplies Solutions Division', body:'<p>A dedicated arm for everyday operational and institutional supply needs, covering broad general-merchandise sourcing for repeat, high-volume buyers.</p>' },
  education:{ title:'Educational Supplies Solutions Division', body:'<p>Supply solutions built for schools, training institutions, and educational bodies, from classroom materials to institutional bulk orders.</p>' },
  sinoauto:{ title:'SinoAuto Solutions Division', body:'<p>Our specialist division for automotive parts and accessories sourcing, connecting buyers with vetted manufacturing partners.</p>' }
};

function setBizTab(tab){
  document.querySelectorAll('#bizTabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.getElementById('bizPanelTitle').innerHTML = bizContent[tab].title;
  document.getElementById('bizPanelBody').innerHTML = bizContent[tab].body;
  document.getElementById('wholesaleExtra').style.display = (tab === 'wholesale') ? 'block' : 'none';
}

function goBiz(tab){
  setBizTab(tab);
  document.getElementById('business').scrollIntoView({behavior:'smooth'});
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('open'));
}

/* =========================================================
   3. PRODUCT CATALOG — icon renderer, moving merchandise
      carousel, and the wholesale/retail product grid
   ========================================================= */

function icon(name, stroke){
  const icons = {
    bag:'<path d="M28 35 h44 l-4 40 a5 5 0 0 1 -5 4 H37 a5 5 0 0 1 -5 -4 Z" fill="none" stroke="'+stroke+'" stroke-width="4"/><path d="M38 35 v-8 a12 12 0 0 1 24 0 v8" fill="none" stroke="'+stroke+'" stroke-width="4"/>',
    mug:'<path d="M25 30 h34 l-3 38 a5 5 0 0 1 -5 4 H33 a5 5 0 0 1 -5 -4 Z" fill="none" stroke="'+stroke+'" stroke-width="4"/><path d="M59 38 h8 a8 8 0 0 1 0 16 h-8" fill="none" stroke="'+stroke+'" stroke-width="4"/>',
    shirt:'<path d="M35 25 L25 35 l8 8 v32 h34 V43 l8 -8 -10 -10 -8 6 h-14 Z" fill="none" stroke="'+stroke+'" stroke-width="4"/>',
    bottle:'<rect x="38" y="18" width="14" height="10" rx="2" fill="none" stroke="'+stroke+'" stroke-width="4"/><path d="M34 28 h22 l3 8 v34 a5 5 0 0 1 -5 5 H36 a5 5 0 0 1 -5 -5 V36 Z" fill="none" stroke="'+stroke+'" stroke-width="4"/>',
    headphones:'<path d="M25 55 v-5 a25 25 0 0 1 50 0 v5" fill="none" stroke="'+stroke+'" stroke-width="4"/><rect x="20" y="53" width="12" height="18" rx="5" fill="none" stroke="'+stroke+'" stroke-width="4"/><rect x="68" y="53" width="12" height="18" rx="5" fill="none" stroke="'+stroke+'" stroke-width="4"/>',
    notebook:'<rect x="28" y="18" width="44" height="60" rx="4" fill="none" stroke="'+stroke+'" stroke-width="4"/><line x1="36" y1="30" x2="64" y2="30" stroke="'+stroke+'" stroke-width="3"/><line x1="36" y1="40" x2="64" y2="40" stroke="'+stroke+'" stroke-width="3"/>',
    backpack:'<path d="M32 40 a18 18 0 0 1 36 0 v28 a6 6 0 0 1 -6 6 H38 a6 6 0 0 1 -6 -6 Z" fill="none" stroke="'+stroke+'" stroke-width="4"/><path d="M38 40 v34 M62 40 v34" stroke="'+stroke+'" stroke-width="3"/>',
    cap:'<path d="M22 55 a28 16 0 0 1 56 0 Z" fill="none" stroke="'+stroke+'" stroke-width="4"/><path d="M50 39 v-8" stroke="'+stroke+'" stroke-width="4"/>'
  };
  return icons[name] || icons.bag;
}

const marqueeItems = [
  { name:'Insulated tumbler 20oz', price:'$6.40', icon:'mug', bg:'linear-gradient(160deg,#E4C177,#C9963E)', fg:'#3D1653' },
  { name:'Recycled cotton tote', price:'$3.10', icon:'bag', bg:'linear-gradient(160deg,#9B57C4,#6A2B8D)', fg:'#fff' },
  { name:'Everyday polo shirt', price:'$11.90', icon:'shirt', bg:'linear-gradient(160deg,#1F9C82,#0F6E56)', fg:'#fff' },
  { name:'Steel water bottle', price:'$5.75', icon:'bottle', bg:'linear-gradient(160deg,#4a4553,#221530)', fg:'#fff' },
  { name:'Wireless earbuds', price:'$14.20', icon:'headphones', bg:'linear-gradient(160deg,#E2703F,#a4502b)', fg:'#fff' },
  { name:'Kraft-cover notebook', price:'$2.85', icon:'notebook', bg:'linear-gradient(160deg,#efeae2,#c9c2b4)', fg:'#3D1653' },
  { name:'Canvas backpack', price:'$9.60', icon:'backpack', bg:'linear-gradient(160deg,#6A2B8D,#3D1653)', fg:'#fff' },
  { name:'Embroidered cap', price:'$4.30', icon:'cap', bg:'linear-gradient(160deg,#C9963E,#8a6425)', fg:'#fff' }
];

function renderMarquee(){
  const track = document.getElementById('marqueeTrack');
  const doubled = [...marqueeItems, ...marqueeItems];
  track.innerHTML = doubled.map(it => `
    <div class="m-card">
      <div class="icon-box" style="background:${it.bg};">
        <svg viewBox="0 0 100 100">${icon(it.icon, it.fg)}</svg>
      </div>
      <div class="p-name">${it.name}</div>
      <div class="p-price">${it.price} / unit</div>
    </div>`).join('');
}

const shopItems = [
  { name:'Bulk cotton t-shirts, blank or printed', price:'$2.10 – $4.80', moq:'MOQ 500 units', icon:'shirt', bg:'linear-gradient(160deg,#9B57C4,#6A2B8D)', fg:'#fff' },
  { name:'Stainless steel tumblers', price:'$3.40 – $6.90', moq:'MOQ 300 units', icon:'mug', bg:'linear-gradient(160deg,#E4C177,#C9963E)', fg:'#3D1653' },
  { name:'Canvas tote bags, custom print', price:'$1.20 – $2.90', moq:'MOQ 1000 units', icon:'bag', bg:'linear-gradient(160deg,#1F9C82,#0F6E56)', fg:'#fff' },
  { name:'Wireless earbud sets, retail boxed', price:'$8.50 – $15.00', moq:'MOQ 200 units', icon:'headphones', bg:'linear-gradient(160deg,#E2703F,#a4502b)', fg:'#fff' },
  { name:'Kraft notebooks, spiral or bound', price:'$0.90 – $2.30', moq:'MOQ 1000 units', icon:'notebook', bg:'linear-gradient(160deg,#efeae2,#c9c2b4)', fg:'#3D1653' },
  { name:'Insulated water bottles, 500ml', price:'$2.80 – $5.20', moq:'MOQ 500 units', icon:'bottle', bg:'linear-gradient(160deg,#4a4553,#221530)', fg:'#fff' },
  { name:'Embroidered caps, adjustable strap', price:'$1.60 – $3.50', moq:'MOQ 500 units', icon:'cap', bg:'linear-gradient(160deg,#C9963E,#8a6425)', fg:'#fff' },
  { name:'Canvas backpacks, laptop sleeve', price:'$5.90 – $11.40', moq:'MOQ 300 units', icon:'backpack', bg:'linear-gradient(160deg,#6A2B8D,#3D1653)', fg:'#fff' }
];

function renderShop(){
  document.getElementById('shopGrid').innerHTML = shopItems.map(it => `
    <div class="shop-card">
      <div class="shop-thumb" style="background:${it.bg};"><svg viewBox="0 0 100 100">${icon(it.icon, it.fg)}</svg></div>
      <div class="shop-info">
        <div class="badge-supplier">Verified supplier</div>
        <div class="s-name">${it.name}</div>
        <div class="s-price">${it.price}</div>
        <div class="s-moq">${it.moq}</div>
        <button class="btn btn-secondary btn-small" style="width:100%;">Contact supplier</button>
      </div>
    </div>`).join('');
}

/* =========================================================
   4. LIVE SHIPMENT BOARD — "departing the warehouse floor"
   ========================================================= */

const shipments = [
  { hub:'Chicago', dest:'Toronto, CA', order:'#NM-48213', items:'240 units', status:'departed' },
  { hub:'Berlin', dest:'Amsterdam, NL', order:'#NM-48219', items:'80 units', status:'customs' },
  { hub:'Singapore', dest:'Sydney, AU', order:'#NM-48225', items:'560 units', status:'packing' },
  { hub:'Mexico City', dest:'Bogotá, CO', order:'#NM-48231', items:'120 units', status:'departed' },
  { hub:'London', dest:'Dublin, IE', order:'#NM-48237', items:'310 units', status:'departed' },
  { hub:'Singapore', dest:'Tokyo, JP', order:'#NM-48244', items:'95 units', status:'customs' },
  { hub:'Chicago', dest:'Austin, US', order:'#NM-48250', items:'400 units', status:'packing' },
  { hub:'Berlin', dest:'Warsaw, PL', order:'#NM-48256', items:'150 units', status:'departed' }
];

const statusLabel = { departed:'Departed', customs:'In customs', packing:'Packing' };
const boardBody = document.getElementById('boardBody');

function renderBoard(list){
  boardBody.innerHTML = '';
  list.forEach(s => {
    const row = document.createElement('div');
    row.className = 'board-row flip';
    row.innerHTML = `<span class="hub">${s.hub}</span><span class="dest">${s.dest}</span><span class="mono">${s.order}</span><span>${s.items}</span><span class="status ${s.status}"><span class="dot"></span>${statusLabel[s.status]}</span>`;
    boardBody.appendChild(row);
  });
}

function pickRows(){
  return [...shipments].sort(() => Math.random() - 0.5).slice(0, 5);
}

/* =========================================================
   INITIALIZATION — runs once the script loads (placed at the
   end of <body>, so the DOM above it already exists)
   ========================================================= */

setAboutTab('story');
setBizTab('wholesale');
renderMarquee();
renderShop();
renderBoard(pickRows());
setInterval(() => { renderBoard(pickRows()); }, 4000);
