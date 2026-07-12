// navigation.js
// Top nav mega-menu toggling, and the About Us / Business Activities
// tabbed-content logic (content data + tab switching + scroll-to-section).

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

// ---------- About Us content ----------
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

// ---------- Business Activities content ----------
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

// Initialize default tabs on page load
setAboutTab('story');
setBizTab('wholesale');
