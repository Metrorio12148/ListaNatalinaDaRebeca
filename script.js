// dados (15 itens) — use exatos nomes de imagens: "imagem 1.png" ... "imagem 15.png"
const gifts = [
  { id:1, img:"imagem 1.png", title:"💗 Bálsamo Xapadinha Lola Cosmetics", reason:"Quero esse por gostar da linha, alinhar, ser antifrizz e protetor térmico. Deve ser entregue junto com o Leave-in Danos Vorazes ou Óleo reparador Danos Vorazes.", interest:5, utility:5, price:"R$ 22,31", store:"Amazon", link:"https://www.amazon.com.br/dp/B0CGBR1VST/?coliid=IGKI6Y4CE3VCX&colid=3K9602OM4IEVK&psc=1&language=en-US", bought:false },
  { id:2, img:"imagem 2.png", title:"💗 Leave-in Danos Vorazes", reason:"Quero para proteção térmica e alinhamento do cabelo. Deve ser comprado junto com o Xapadinha", interest:5, utility:5, price:"R$ 20,10", store:"Amazon", link:"https://www.amazon.com.br/dp/B08PPKQTFB/?coliid=IP8EXINLSX22G&colid=3K9602OM4IEVK&language=en-US&th=1", bought:false },
  { id:3, img:"imagem 3.png", title:"💗 Óleo reparador Danos Vorazes", reason:"Quero para finalizar o cabelo. Deve ser comprado junto com o Xapadinha", interest:3, utility:4, price:"R$ 18,90", store:"Amazon", link:"https://www.amazon.com.br/dp/B09GHN14FP/?coliid=I2Y4V5CLLYIXYL&colid=3K9602OM4IEVK&psc=1&language=en-US", bought:false },
  { id:4, img:"imagem 4.png", title:"💗 Gel de limpeza Principia", reason:"Quero para incluir na rotina de skincare", interest:2, utility:3, price:"R$ 44,10", store:"Amazon", link:"https://www.amazon.com.br/dp/B0B6LZ36XV?ref=cm_sw_r_cso_cp_apin_dp_60GWD5QM9W9HC7WGQ20J&social_share=cm_sw_r_cso_cp_apin_dp_60GWD5QM9W9HC7WGQ20J", bought:false },
  { id:5, img:"imagem 8.png", title:"💗 Limpador facial antioleosidade Creamy", reason:"Quero para complementar os produtos de skincare da linha e reduzir oleosidade da pele.", interest:5, utility:5, price:"R$ 52,12", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHvxNgu4w5Mw-hp29H/", bought:false },
  { id:6, img:"imagem 9.png", title:"💗 Lip Juice Mari Maria Menta", reason:"Quero por ter achado bonito.", interest:3, utility:2, price:"R$ 49,90", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHvxFM92RQWw-X69Sf/", bought:false },
  { id:7, img:"imagem 10.png", title:"💗 Cherry Gloss Vizzela", reason:"Quero por gostar de tons vermelhos.", interest:3, utility:2, price:"R$ 68,90", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHv9Rdj3LLJ6-yXKBN/", bought:false },
  { id:8, img:"imagem 11.png", title:"💗 Lip Oil Gummy Vizzela", reason:"Quero por gostar de lip oil e reagir com o ph da pele", interest:3, utility:2, price:"R$ 77,80", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHvapDyWumYv-esKl2/", bought:false },
  { id:9, img:"imagem 12.png", title:"💗 Lip Juice Mari Maria Melancia ", reason:"Quero por não ter nenhum rosinha dessa cor.", interest:3, utility:2, price:"R$ 49,90", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHvS6aWykexb-dc0yB/", bought:false },
  { id:10, img:"imagem 5.png", title:"💗 Kit Pincéis Coloridos", reason:"Quero para fazer maquiagem. Deve ser comprado junto do Love language", interest:2, utility:3, price:"R$ 19,95", store:"Shopee", link:"https://shopee.com.br/product/848308583/21552821946?d_id=249bb&uls_trackid=54164r65012k&utm_content=3VPWZWpNQtt9zvy4veNzu8sy9ofm", bought:false },
  { id:11, img:"imagem 6.png", title:"💗 Blush Love Language", reason:"Quero para fazer maquiagem e achar bonito (love language). Deve ser comprado junto dos pincéis coloridos.", interest:2, utility:2, price:"R$ 23,80", store:"Shopee", link:"https://shopee.com.br/product/848308583/22498918003?d_id=249bb&uls_trackid=54164r6q013h&utm_content=3VPWZWpNQvNUc7QncNG1g5y7n8zs", bought:false },
  { id:12, img:"imagem 7.png", title:"💗 Caderno de leituras", reason:"Quero para categorizar minhas leituras.", interest:3, utility:3, price:"R$ 45,00", store:"Shopee", link:"https://shopee.com.br/product/476388467/23698075891?d_id=249bb&uls_trackid=54164r8q002p&utm_content=3VPWZWpNQvdPLwCvjZTuy3DNDDAP", bought:false },
  { id:13, img:"imagem 15.png", title:"💗 Sabonete líquido boticário", reason:"Quero por ter achado interessante e gostar de cosméticos", interest:3, utility:4, price:"R$ 45,90", store:"Boticário", link:"https://www.boticario.com.br/sabonete-liquido-perfumado-nativa-spa-orquidea-lumiere-250ml?utm_source=compartilhar&utm_medium=site&utm_campaign=aon", bought:false },
  { id:14, img:"imagem 13.png", title:"💗 Kit Pincéis Urso Alchemia", reason:"Quero para fazer maquiagem melhor.", interest:4, utility:4, price:"R$ 49,90", store:"Renner", link:"https://www.lojasrenner.com.br/p/conjunto-de-pinceis-alchemia/-/A-929456648-br.lr?sku=929456656", bought:false },
  { id:15, img:"imagem 14.png", title:"💗 Kit Pincéis Cereja Alchemia", reason:"Quero para aprimorar minha maquiagem e por estar precisando.", interest:5, utility:4, price:"R$ 69,90", store:"Renner", link:"https://www.lojasrenner.com.br/p/kit-com-6-pinceis-e-necessaire-alchemia/-/A-929545190-br.lr?sku=929545202&p=refreshContent&utm_source=google&utm_medium=cpc&utm_campaign=google_rennerbr_conversao_venda_1p_beleza_geral_pmax", bought:false }
];

const grid = document.getElementById('grid');
const template = document.getElementById('gift-template').content;
const sortBtn = document.getElementById('sortBtn');
const filterBtn = document.getElementById('filterBtn');
// REMOVED: sortBtn.disabled = true;
// REMOVED: filterBtn.disabled = true;
// REMOVED: sortBtn.style.display = 'none';
// REMOVED: filterBtn.style.display = 'none';
const toggleBought = document.getElementById('toggleBought');
// REMOVED: toggleBought.style.display = 'none';

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalReason = document.getElementById('modalReason');
const modalInterest = document.getElementById('modalInterest');
const modalUtility = document.getElementById('modalUtility');
const modalPrice = document.getElementById('modalPrice');
const modalStore = document.getElementById('modalStore');
const modalLink = document.getElementById('modalLink');
const markBoughtBtn = document.getElementById('markBought');

let currentList = [...gifts];
let showBought = true;

/* helpers */
const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
const clearChildren = el=>{ while(el.firstChild) el.removeChild(el.firstChild); };
const createStars = count=>{
  const frag = document.createDocumentFragment();
  for(let i=1;i<=5;i++){
    const s = document.createElement('span');
    s.className = 'star' + (i<=count ? '' : ' empty');
    s.setAttribute('aria-hidden','true');
    frag.appendChild(s);
  }
  return frag;
};
const isTouchDevice = ()=> matchMedia('(pointer: coarse)').matches; // Helper to check for touch device

/* render one card */
function renderCard(g){
  const node = template.cloneNode(true);
  const article = node.querySelector('.gift');
  const img = node.querySelector('.gift-img');
  const title = node.querySelector('.gift-title');
  const reason = node.querySelector('.reason');
  const interestWrap = node.querySelector('.stars.interest');
  const utilityWrap = node.querySelector('.stars.utility');
  const price = node.querySelector('.price');
  const store = node.querySelector('.store');
  const viewLink = node.querySelector('.view-link');
  const markBtn = node.querySelector('.mark-bought');

  article.dataset.id = g.id;
  img.src = g.img;
  img.alt = g.title;
  title.textContent = g.title;
  reason.textContent = g.reason;
  price.textContent = g.price;
  store.textContent = g.store;
  viewLink.href = g.link;

  clearChildren(interestWrap); interestWrap.appendChild(createStars(clamp(g.interest,1,5)));
  clearChildren(utilityWrap); utilityWrap.appendChild(createStars(clamp(g.utility,1,5)));

  article.classList.toggle('bought', g.bought);

  // interactions
  viewLink.addEventListener('click', e=> e.stopPropagation());
  markBtn.addEventListener('click', e=>{ e.stopPropagation(); g.bought = !g.bought; article.classList.toggle('bought', g.bought); });

  // Mobile/Desktop Click/Tap: Always open modal
  article.addEventListener('click', (e)=>{
    // The previous complex touch logic is removed. Now, any tap/click opens the modal.
    // The hover-based overlay is handled by CSS (desktop only)
    openModal(g);
  });

  article.addEventListener('keydown', e=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); openModal(g); } });

  // Parallax effect: Only for fine pointer devices (desktop/mouse)
  let raf;
  if (!isTouchDevice()) {
      article.addEventListener('pointermove', ev=>{
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(()=>{
          const r = article.getBoundingClientRect();
          const px = (ev.clientX - r.left)/r.width - 0.5;
          const py = (ev.clientY - r.top)/r.height - 0.5;
          img.style.transform = `translate(${px*8}px, ${py*6}px) scale(1.03)`;
        });
      });
      article.addEventListener('pointerleave', ()=> img.style.transform = '');
  }


  // fallback for broken images
  img.addEventListener('error', ()=> img.src = 'placeholder.png');

  return node;
}

/* render list with cascade */
function renderAll(list){
  grid.innerHTML = '';
  const frag = document.createDocumentFragment();
  const visible = list.filter(g => showBought || !g.bought);
  visible.forEach(g => frag.appendChild(renderCard(g)));
  grid.appendChild(frag);

  Array.from(grid.children).forEach((el,i)=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    setTimeout(()=>{ el.style.transition = 'opacity 420ms ease, transform 420ms cubic-bezier(.2,.9,.2,1)'; el.style.opacity = 1; el.style.transform = ''; }, i*60);
  });
}

/* modal logic */
function openModal(g){
  modalImg.src = g.img; modalImg.alt = g.title;
  modalTitle.textContent = g.title; modalReason.textContent = g.reason;
  clearChildren(modalInterest); modalInterest.appendChild(createStars(clamp(g.interest,1,5)));
  clearChildren(modalUtility); modalUtility.appendChild(createStars(clamp(g.utility,1,5)));
  modalPrice.textContent = g.price; modalStore.textContent = g.store; modalLink.href = g.link;
  markBoughtBtn.textContent = g.bought ? 'Desmarcar comprado' : 'Marcar como comprado';
  markBoughtBtn.onclick = ()=>{ g.bought = !g.bought; markBoughtBtn.textContent = g.bought ? 'Desmarcar comprado' : 'Marcar como comprado'; renderAll(currentList); closeModal(); }; // Added closeModal() after action

  modal.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden';
  setTimeout(()=> modalClose.focus(), 50);
}
function closeModal(){ modal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }

/* controls */
sortBtn.addEventListener('click', ()=>{
  currentList.sort((a,b)=> (b.interest + b.utility) - (a.interest + a.utility));
  renderAll(currentList);
});
filterBtn.addEventListener('click', ()=>{
  if(currentList._filtered){ currentList = [...gifts]; currentList._filtered = false; filterBtn.textContent = 'Filtrar top'; }
  else { currentList = gifts.filter(i => i.interest >=4 || i.utility >=4); currentList._filtered = true; filterBtn.textContent = 'Mostrar todos'; }
  renderAll(currentList);
});
toggleBought.addEventListener('click', ()=>{
  showBought = !showBought;
  toggleBought.textContent = showBought ? 'Ocultar comprados' : 'Mostrar comprados';
  renderAll(currentList);
});

/* modal handlers */
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); }); // Check if modal is open

/* re-render on resize to avoid layout glitches */
let resizeTimer;
window.addEventListener('resize', ()=>{ clearTimeout(resizeTimer); resizeTimer = setTimeout(()=> renderAll(currentList), 180); });

/* init */
renderAll(currentList);