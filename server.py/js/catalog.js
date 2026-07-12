// catalog.js
// Shared product icon renderer, the moving merchandise carousel
// (marquee), and the wholesale/retail e-commerce product grid.

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

// ---------- Moving merchandise carousel ----------
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

// ---------- Wholesale & retail product grid ----------
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

renderMarquee();
renderShop();
