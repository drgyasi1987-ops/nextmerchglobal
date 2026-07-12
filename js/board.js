// board.js
// Live "departing the warehouse floor" shipment status board —
// picks a random rotating subset of shipments every few seconds.

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

renderBoard(pickRows());
setInterval(() => {
  renderBoard(pickRows());
}, 4000);
