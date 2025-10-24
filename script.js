// MODIFICAÇÃO PARA PERSISTÊNCIA: O array original foi renomeado para 'defaultGifts'.
const defaultGifts = [
  { id:1, img:"imagem 1.png", title:"💗 Bálsamo Xapadinha Lola Cosmetics", reason:"Quero esse por gostar da linha, alinhar, ser antifrizz e protetor térmico. Deve ser entregue junto com o Leave-in Danos Vorazes ou Óleo reparador Danos Vorazes.", interest:5, utility:5, price:"R$ 22,31", store:"Amazon", link:"https://www.amazon.com.br/dp/B0CGBR1VST/?coliid=IGKI6Y4CE3VCX&colid=3K9602OM4IEVK&psc=1&language=en-US", bought:false },
  { id:2, img:"imagem 2.png", title:"💗 Leave-in Danos Vorazes", reason:"Quero para proteção térmica e alinhamento do cabelo. Deve ser comprado junto com o Xapadinha", interest:5, utility:5, price:"R$ 20,10", store:"Amazon", link:"https://www.amazon.com.br/dp/B08PPKQTFB/?coliid=IP8EXINLSX22G&colid=3K9602OM4IEVK&language=en-US&th=1", bought:false },
  { id:3, img:"imagem 3.png", title:"💗 Óleo reparador Danos Vorazes", reason:"Quero para finalizar o cabelo. Deve ser comprado junto com o Xapadinha", interest:3, utility:4, price:"R$ 18,90", store:"Amazon", link:"https://www.amazon.com.br/dp/B09GHN14FP/?coliid=I2Y4V5CLLYIXYL&colid=3K9602OM4IEVK&psc=1&language=en-US", bought:false },
  { id:4, img:"imagem 4.png", title:"💗 Gel de limpeza Principia", reason:"Quero para incluir na rotina de skincare", interest:2, utility:3, price:"R$ 44,10", store:"Amazon", link:"https://www.amazon.com.br/dp/B0B6LZ36XV?ref=cm_sw_r_cso_cp_apin_dp_60GWD5QM9W9HC7WGQ20J&social_share=cm_sw_r_cso_cp_apin_dp_60GWD5QM9W9HC7WGQ20J", bought:false },
  { id:5, img:"imagem 8.png", title:"💗 Limpador facial antioleosidade Creamy", reason:"Quero para complementar os produtos de skincare da linha e reduzir oleosidade da pele.", interest:5, utility:5, price:"R$ 36,48", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHvxNgu4w5Mw-hp29H/", bought:false },
  { id:6, img:"imagem 9.png", title:"💗 Lip Juice Mari Maria Menta", reason:"Quero por ter achado bonito.", interest:3, utility:2, price:"R$ 44,90", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHvxFM92RQWw-X69Sf/", bought:false },
  { id:7, img:"imagem 10.png", title:"💗 Cherry Gloss Vizzela", reason:"Quero por gostar de tons vermelhos.", interest:3, utility:2, price:"R$ 48,23", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHv9Rdj3LLJ6-yXKBN/", bought:false },
  { id:8, img:"imagem 11.png", title:"💗 Lip Oil Gummy Vizzela", reason:"Quero por gostar de lip oil e reagir com o ph da pele", interest:3, utility:2, price:"R$ 54,46", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHvapDyWumYv-esKl2/", bought:false },
  { id:9, img:"imagem 12.png", title:"💗 Lip Juice Mari Maria Melancia ", reason:"Quero por não ter nenhum rosinha dessa cor.", interest:3, utility:2, price:"R$ 44,90", store:"TikTok Shop", link:"https://vm.tiktok.com/ZMHvS6aWykexb-dc0yB/", bought:false },
  { id:10, img:"imagem 5.png", title:"💗 Kit Pincéis Coloridos", reason:"Para ter mais pincéis de olho, pois os meus são antigos", interest:2, utility:5, price:"R$ 38,00", store:"Shopee", link:"https://shp.ee/8636gfw", bought:false },
  { id:11, img:"imagem 6.png", title:"💗 Corretivo de Olheiras Melu", reason:"Para ter um corretivo mais leve e com a minha cor", interest:4, utility:4, price:"R$ 15,90", store:"Shopee", link:"https://shp.ee/5l998t3", bought:false },
  { id:12, img:"imagem 7.png", title:"💗 Hello Kitty em Kawaii", reason:"Para ter um item de decoração ou usar como prendedor de cabelo", interest:5, utility:2, price:"R$ 13,00", store:"Shopee", link:"https://shp.ee/fxg4n5n", bought:false },
  { id:13, img:"imagem 13.png", title:"💗 Funko Harry Potter Luna Lovegood", reason:"Quero para colecionar", interest:5, utility:1, price:"R$ 138,90", store:"Amazon", link:"https://www.amazon.com.br/Funko-Harry-Potter-Lovegood-Collectable/dp/B07R8T519L?ref_=ast_sto_dp&th=1", bought:false },
  { id:14, img:"imagem 14.png", title:"💗 Blusa Hello Kitty", reason:"Para usar em casa ou sair", interest:4, utility:3, price:"R$ 50,00", store:"Shopee", link:"https://shp.ee/w7g93a5", bought:false },
  { id:15, img:"imagem 15.png", title:"💗 Blusa Sanrio", reason:"Para usar em casa ou sair", interest:4, utility:3, price:"R$ 55,00", store:"Shopee", link:"https://shp.ee/j13q9s3", bought:false }
];
// FIM DO ARRAY

// MODIFICAÇÃO PARA PERSISTÊNCIA: Inicializa 'gifts' com dados salvos ou padrão.
// A variável deve ser 'let' para permitir modificações.
let gifts = loadGifts(defaultGifts);

// global variables
const grid = document.getElementById('grid');
const sortBtn = document.getElementById('sortBtn');
const filterBtn = document.getElementById('filterBtn');
const toggleBought = document.getElementById('toggleBought');
let showBought = false; // State for showing/hiding bought items

// Lista usada para exibição (filtros, ordenação, etc.)
let currentList = [...gifts];

// modal elements
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalReason = document.getElementById('modalReason');
const modalPrice = document.getElementById('modalPrice');
const modalStore = document.getElementById('modalStore');
const modalLink = document.getElementById('modalLink');
const markBought = document.getElementById('markBought'); // Selecionar o botão 'Marcar como comprado'

/* helper functions */
function createStars(rating, type) {
  let html = '';
  for(let i=1; i<=5; i++) {
    html += `<span class="star ${i<=rating ? 'filled' : ''}" aria-label="${type} ${i} de 5" data-rating="${i}"></span>`;
  }
  return html;
}

function renderGift(item) {
  const template = document.getElementById('gift-template');
  const gift = template.content.cloneNode(true).querySelector('.gift');
  
  // Set content
  gift.querySelector('.gift-img').src = item.img;
  gift.querySelector('.gift-img').alt = `Imagem de: ${item.title}`;
  gift.querySelector('.gift-title').textContent = item.title;
  gift.querySelector('.badge.price').textContent = item.price;
  gift.querySelector('.badge.store').textContent = item.store;
  gift.querySelector('.reason').textContent = item.reason;
  gift.querySelector('.stars.interest').innerHTML = createStars(item.interest, 'interesse');
  gift.querySelector('.stars.utility').innerHTML = createStars(item.utility, 'utilidade');
  gift.querySelector('.view-link').href = item.link;

  // Atualiza o estado de "comprado" no card
  if (item.bought) {
      gift.classList.add('bought-item');
      const templateMarkBought = gift.querySelector('.overlay-actions .btn:last-child');
      if (templateMarkBought) {
           templateMarkBought.textContent = 'Item Comprado';
           templateMarkBought.disabled = true;
           templateMarkBought.classList.add('bought'); // Adicionar uma classe CSS para estilo
      }
  }

  // Open Modal logic
  gift.addEventListener('click', () => openModal(item));
  gift.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openModal(item);
  });
  
  return gift;
}

function renderAll(list) {
  grid.innerHTML = '';
  const fragment = document.createDocumentFragment();

  list.forEach(item => {
    // Lógica de filtragem: oculta se 'bought' for true e 'showBought' for false
    if (item.bought && !showBought) return; 

    const giftElement = renderGift(item);
    fragment.appendChild(giftElement);
  });
  
  // Se estiver filtrado, atualiza o botão
  if (list._filtered) {
      filterBtn.textContent = 'Mostrar todos';
  } else {
      filterBtn.textContent = 'Filtrar top';
  }

  grid.appendChild(fragment);
}

/* modal open/close */
function openModal(item) {
    // ... (set content)
    modal.dataset.giftId = item.id; // Salvar o ID para uso posterior
    modalTitle.textContent = item.title;
    modalReason.textContent = item.reason;
    modalPrice.textContent = item.price;
    modalStore.textContent = item.store;
    modalLink.href = item.link;

    // Atualiza o estado do botão no modal principal
    markBought.textContent = item.bought ? 'Item Comprado' : 'Marcar como comprado';
    markBought.disabled = item.bought;

    modal.setAttribute('aria-hidden','false'); 
    document.body.style.overflow = 'hidden';
    setTimeout(()=> modalClose.focus(), 50);
}
function closeModal(){ modal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }

/* controls */
sortBtn.addEventListener('click', ()=> {
  // O sort afeta o array original, mas aqui estamos usando currentList
  currentList.sort((a,b)=> (b.interest + b.utility) - (a.interest + a.utility));
  renderAll(currentList);
});
filterBtn.addEventListener('click', ()=> {
  if(currentList._filtered){ 
    currentList = [...gifts]; 
    currentList._filtered = false; 
  }
  else { 
    currentList = gifts.filter(i => i.interest >=4 || i.utility >=4); 
    currentList._filtered = true; 
  }
  renderAll(currentList);
});
toggleBought.addEventListener('click', ()=> {
  showBought = !showBought;
  toggleBought.textContent = showBought ? 'Ocultar comprados' : 'Mostrar comprados';
  renderAll(currentList);
});

/* modal handlers */
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); }); 

// MODIFICAÇÃO PARA PERSISTÊNCIA: Lógica para salvar o status de comprado
markBought.addEventListener('click', () => {
    const giftId = modal.dataset.giftId;
    // Encontra o item no array principal 'gifts' pelo ID
    const giftToUpdate = gifts.find(g => g.id === Number(giftId));

    if (giftToUpdate && !giftToUpdate.bought) {
        giftToUpdate.bought = true;
        
        // 2. Salva o array 'gifts' atualizado no localStorage
        saveGifts(gifts);
        
        // Atualiza o modal para feedback imediato
        markBought.textContent = 'Item Comprado';
        markBought.disabled = true;

        // Re-renderiza a lista para refletir a mudança (ocultar se 'showBought' for false)
        renderAll(currentList);

        closeModal();
    }
});


/* initialization */
// Inicia o carregamento dos presentes e a renderização
renderAll(currentList);

/* re-render on resize to avoid layout glitches */
let resizeTimer;
window.addEventListener('resize', ()=> {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => renderAll(currentList), 200);
});