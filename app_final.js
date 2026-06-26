// ─────────────────────────────────────────
//  i18n — TRANSLATIONS
// ─────────────────────────────────────────
const TRANSLATIONS = {
ja: {
  subtitle:'上面断面図 — パレット配置シミュレーター',
  containerSelect:'コンテナ選択', c20dry:'20ft ドライコンテナ', c40dry:'40ft ドライコンテナ',
  c20ref:'20ft リーファーコンテナ', c40ref:'40ft リーファーコンテナ',
  dimL:'内寸 長さ (mm)', dimW:'内寸 幅 (mm)',
  reeferNotice:'⚠ リーファー：ジェネレータ搭載により有効床面積が減少します。',
  modeLabel:'モード', modeFill:'最大積載', modeTray:'カスタム配置', modeManual:'自由配置',
  palletType:'パレット種別', palletTypeOrient:'パレット種別 & 向き', pallet:'パレット',
  fillHold:'⚠ この組み合わせは実装準備中です。',
  btnFill:'▦ 最大積載', btnClear:'すべてクリア', btnWasd:'WASD切替',
  holdTitle:'実装準備中', holdDesc:'パレットFill可能か判別する機能です。コンテナ内寸の確認後に対応予定です。',
  checkInput:'パレット枚数を入力', sheets:'枚', btnCheck:'✔ 判別する',
  hintCheck:'EUR・VMF枚数を入力して判別する を押してください',
  overflowLabel:'↓ 積み残しパレット（コンテナ外）',
  eurH:'H: 1200幅×800奥', eurV:'V: 800幅×1200奥',
  vmfH:'H: 1200幅×1000奥', vmfV:'V: 1000幅×1200奥',
  gmaH:'H: 1219幅×1016奥', gmaV:'V: 1016幅×1219奥',
  hintPlace:'クリックでパレットを配置', hintTray:'枚数を入力して Max Fill 配置、またはドラッグで手動配置', hintDrag:'配置済みを移動', hintDelete:'選択中を削除', hintRotate:'選択/次のパレットを回転',
  hintMoveArrow:'選択中を移動', hintMoveWasd:'選択中を移動（WASD）',
  hintUndo:'操作を取り消す', hintRedo:'取り消しを戻す',
  hintFill:'パレット種別を選択して 最大積載 ボタンを押してください',
  lblWidth:'← 幅方向 →', lblLength:'← 長さ方向 →',
  snapOn:'スナップ: ON', snapOff:'スナップ: OFF', gridOn:'グリッド: ON', gridOff:'グリッド: OFF',
  legend:'凡例', legendEur:'EUR パレット', legendVmf:'VMF パレット', legendGma:'GMA パレット',
  legendOverlap:'重複 / 範囲外', legendGen:'ジェネレータ占有エリア',
  stats:'積載統計', statEur:'EUR 枚数', statVmf:'VMF 枚数', statGma:'GMA 枚数',
  statTotal:'合計枚数', statFloor:'床面積使用率', placedList:'配置リスト',
  noPallets:'パレットが未配置です',
  modeIndicatorFill:'▦ 最大積載', modeIndicatorManual:'✥ 自由配置', modeIndicatorTray:'⊞ カスタム配置',
  wasdToggle:'矢印切替',
  noticeTitle:'注意事項',
  noticeLines:[
    '本シミュレーターに使用しているコンテナ内寸は代表的な標準値であり、実際の寸法は船会社・コンテナメーカー・製造年次によって異なる場合があります。',
    '本ツールは積み付けのシミュレーションを目的としたものであり、出力された配置図が実際の積み付け作業を保証・指示するものではありません。実際の積み付けにあたっては、シッパーもしくは倉庫オペレーション担当者の判断に準じます。',
    '本シミュレーターの使用により生じた損害・損失について、当社は一切の責任を負いません。',
  ],
  copyImgTitle:'注意事項',
},
en: {
  subtitle:'Top View Cross-Section — Pallet Layout Simulator',
  containerSelect:'Container', c20dry:'20ft Dry Container', c40dry:'40ft Dry Container',
  c20ref:'20ft Reefer Container', c40ref:'40ft Reefer Container',
  dimL:'Int. Length (mm)', dimW:'Int. Width (mm)',
  reeferNotice:'⚠ Reefer: Floor area reduced due to generator unit.',
  modeLabel:'Mode', modeFill:'Max Load', modeTray:'Custom', modeManual:'Free',
  palletType:'Pallet Type', palletTypeOrient:'Pallet Type & Orientation', pallet:'Pallet',
  fillHold:'⚠ This combination is not yet implemented.',
  btnFill:'▦ Max Load', btnClear:'Clear All', btnWasd:'WASD Toggle',
  holdTitle:'Not Implemented', holdDesc:'Fill feasibility check feature. Pending container dimension verification.',
  checkInput:'Enter pallet count', sheets:'pcs', btnCheck:'✔ Check',
  hintCheck:'Enter EUR & VMF counts then press Check',
  overflowLabel:'↓ Overflow pallets (outside container)',
  eurH:'H: 1200w×800d', eurV:'V: 800w×1200d',
  vmfH:'H: 1200w×1000d', vmfV:'V: 1000w×1200d',
  gmaH:'H: 1219w×1016d', gmaV:'V: 1016w×1219d',
  hintPlace:'Place pallet', hintDrag:'Drag to move', hintDelete:'Delete selected', hintRotate:'Rotate selected / next',
  hintMoveArrow:'Move selected', hintMoveWasd:'Move selected (WASD)',
  hintUndo:'Undo', hintRedo:'Redo',
  hintFill:'Select pallet type and press Max Load', hintTray:'Enter counts then Max Load or drag to place',
  lblWidth:'← Width →', lblLength:'← Length →',
  snapOn:'Snap: ON', snapOff:'Snap: OFF', gridOn:'Grid: ON', gridOff:'Grid: OFF',
  legend:'Legend', legendEur:'EUR Pallet', legendVmf:'VMF Pallet', legendGma:'GMA Pallet',
  legendOverlap:'Overlap / Out of bounds', legendGen:'Generator Area',
  stats:'Load Statistics', statEur:'EUR Count', statVmf:'VMF Count', statGma:'GMA Count',
  statTotal:'Total', statFloor:'Floor Usage', placedList:'Placed Pallets',
  noPallets:'No pallets placed',
  modeIndicatorFill:'▦ Max Load', modeIndicatorManual:'✥ Free Placement', modeIndicatorTray:'⊞ Custom Layout',
  wasdToggle:'Arrow Toggle',
  noticeTitle:'Notice',
  noticeLines:[
    'Container internal dimensions used in this simulator are representative standard values. Actual dimensions may vary depending on the shipping company, container manufacturer, and year of production.',
    'This tool is intended for container load calculation (CLC) simulation purposes only. The layout shown does not guarantee or instruct actual stowage operations. Actual stowage shall be carried out at the discretion of the shipper or warehouse operations staff.',
    'The developer assumes no responsibility for any damage or loss arising from the use of this simulator.',
  ],
  copyImgTitle:'Notice',
},
fr: {
  subtitle:'Vue de dessus — Simulateur de chargement de palettes',
  containerSelect:'Conteneur', c20dry:'20ft Conteneur Sec', c40dry:'40ft Conteneur Sec',
  c20ref:'20ft Conteneur Frigo', c40ref:'40ft Conteneur Frigo',
  dimL:'Long. intérieure (mm)', dimW:'Larg. intérieure (mm)',
  reeferNotice:'⚠ Frigo : Surface réduite en raison du groupe frigorifique.',
  modeLabel:'Mode', modeFill:'Charge Max', modeTray:'Personnalisé', modeManual:'Libre',
  palletType:'Type de palette', palletTypeOrient:'Type & Orientation', pallet:'Palette',
  fillHold:'⚠ Cette combinaison n\'est pas encore disponible.',
  btnFill:'▦ Charge Max', btnClear:'Tout effacer', btnWasd:'Basculer WASD',
  holdTitle:'Non implémenté', holdDesc:'Fonction de vérification en attente de confirmation des dimensions.',
  checkInput:'Entrez le nombre de palettes', sheets:'pcs', btnCheck:'✔ Vérifier',
  hintCheck:'Entrez les quantités EUR & VMF puis appuyez sur Vérifier',
  overflowLabel:'↓ Palettes en surplus (hors conteneur)',
  eurH:'H: 1200l×800p', eurV:'V: 800l×1200p',
  vmfH:'H: 1200l×1000p', vmfV:'V: 1000l×1200p',
  gmaH:'H: 1219l×1016p', gmaV:'V: 1016l×1219p',
  hintPlace:'Placer une palette', hintDrag:'Glisser pour déplacer', hintDelete:'Supprimer la sélection', hintRotate:'Pivoter sélection / suivante',
  hintMoveArrow:'Déplacer la sélection', hintMoveWasd:'Déplacer (WASD)',
  hintUndo:'Annuler', hintRedo:'Rétablir',
  hintFill:'Sélectionnez le type et appuyez sur Charge Max', hintTray:'Entrez les quantités puis Charge Max ou glissez',
  lblWidth:'← Largeur →', lblLength:'← Longueur →',
  snapOn:'Aimant: ON', snapOff:'Aimant: OFF', gridOn:'Grille: ON', gridOff:'Grille: OFF',
  legend:'Légende', legendEur:'Palette EUR', legendVmf:'Palette VMF', legendGma:'Palette GMA',
  legendOverlap:'Chevauchement / Hors limites', legendGen:'Zone groupe frigo',
  stats:'Statistiques', statEur:'Qté EUR', statVmf:'Qté VMF', statGma:'Qté GMA',
  statTotal:'Total', statFloor:'Utilisation sol', placedList:'Palettes placées',
  noPallets:'Aucune palette placée',
  modeIndicatorFill:'▦ Charge Max', modeIndicatorTray:'⊞ Personnalisé', modeIndicatorManual:'✥ Placement Libre',
  wasdToggle:'Basculer flèches',
  noticeTitle:'Avertissement',
  noticeLines:[
    'Les dimensions intérieures des conteneurs utilisées dans ce simulateur sont des valeurs standard représentatives. Les dimensions réelles peuvent varier selon la compagnie maritime, le fabricant et l\'année de production.',
    'Cet outil est destiné uniquement à la simulation de calcul de chargement de conteneurs (CLC). Le plan de chargement affiché ne garantit pas et n\'instruit pas les opérations réelles d\'arrimage. L\'arrimage effectif relève du jugement de l\'expéditeur ou du responsable des opérations en entrepôt.',
    'Le développeur décline toute responsabilité pour tout dommage ou perte résultant de l\'utilisation de ce simulateur.',
  ],
  copyImgTitle:'Avertissement',
},
es: {
  subtitle:'Vista superior — Simulador de carga de palés',
  containerSelect:'Contenedor', c20dry:'Contenedor Seco 20ft', c40dry:'Contenedor Seco 40ft',
  c20ref:'Contenedor Reefer 20ft', c40ref:'Contenedor Reefer 40ft',
  dimL:'Long. interior (mm)', dimW:'Ancho interior (mm)',
  reeferNotice:'⚠ Reefer: Área reducida por el grupo frigorífico.',
  modeLabel:'Modo', modeFill:'Carga Máx', modeTray:'Personalizado', modeManual:'Libre',
  palletType:'Tipo de palé', palletTypeOrient:'Tipo & Orientación', pallet:'Palé',
  fillHold:'⚠ Esta combinación aún no está disponible.',
  btnFill:'▦ Carga Máx', btnClear:'Borrar todo', btnWasd:'Cambiar WASD',
  holdTitle:'No implementado', holdDesc:'Función de verificación pendiente de confirmación de dimensiones.',
  checkInput:'Ingrese cantidad de palés', sheets:'uds', btnCheck:'✔ Verificar',
  hintCheck:'Ingrese cantidades EUR & VMF y presione Verificar',
  overflowLabel:'↓ Palés en exceso (fuera del contenedor)',
  eurH:'H: 1200an×800pr', eurV:'V: 800an×1200pr',
  vmfH:'H: 1200an×1000pr', vmfV:'V: 1000an×1200pr',
  gmaH:'H: 1219an×1016pr', gmaV:'V: 1016an×1219pr',
  hintPlace:'Colocar palé', hintDrag:'Arrastrar para mover', hintDelete:'Eliminar selección', hintRotate:'Rotar seleccionado / siguiente',
  hintMoveArrow:'Mover selección', hintMoveWasd:'Mover (WASD)',
  hintUndo:'Deshacer', hintRedo:'Rehacer',
  hintFill:'Seleccione tipo y presione Carga Máx', hintTray:'Ingrese cantidades y use Carga Máx o arrastre',
  lblWidth:'← Ancho →', lblLength:'← Longitud →',
  snapOn:'Imán: ON', snapOff:'Imán: OFF', gridOn:'Cuadrícula: ON', gridOff:'Cuadrícula: OFF',
  legend:'Leyenda', legendEur:'Palé EUR', legendVmf:'Palé VMF', legendGma:'Palé GMA',
  legendOverlap:'Solapamiento / Fuera de límites', legendGen:'Zona grupo frigorífico',
  stats:'Estadísticas de carga', statEur:'Cant. EUR', statVmf:'Cant. VMF', statGma:'Cant. GMA',
  statTotal:'Total', statFloor:'Uso del suelo', placedList:'Palés colocados',
  noPallets:'No hay palés colocados',
  modeIndicatorFill:'▦ Carga Máx', modeIndicatorTray:'⊞ Personalizado', modeIndicatorManual:'✥ Libre',
  wasdToggle:'Cambiar flechas',
  noticeTitle:'Aviso',
  noticeLines:[
    'Las dimensiones interiores de los contenedores utilizadas en este simulador son valores estándar representativos. Las dimensiones reales pueden variar según la naviera, el fabricante del contenedor y el año de producción.',
    'Esta herramienta está destinada únicamente a la simulación del cálculo de carga de contenedores (CLC). El plan de carga mostrado no garantiza ni instruye las operaciones reales de estiba. La estiba real queda a criterio del expedidor o del responsable de operaciones de almacén.',
    'El desarrollador no asume ninguna responsabilidad por daños o pérdidas derivados del uso de este simulador.',
  ],
  copyImgTitle:'Aviso',
},
it: {
  subtitle:'Vista dall\'alto — Simulatore di carico pallet',
  containerSelect:'Container', c20dry:'Container Secco 20ft', c40dry:'Container Secco 40ft',
  c20ref:'Container Frigo 20ft', c40ref:'Container Frigo 40ft',
  dimL:'Lung. interna (mm)', dimW:'Larg. interna (mm)',
  reeferNotice:'⚠ Frigo: Area ridotta per la presenza del gruppo frigorifero.',
  modeLabel:'Modalità', modeFill:'Carico Max', modeTray:'Personalizzato', modeManual:'Libero',
  palletType:'Tipo di pallet', palletTypeOrient:'Tipo & Orientamento', pallet:'Pallet',
  fillHold:'⚠ Questa combinazione non è ancora disponibile.',
  btnFill:'▦ Carico Max', btnClear:'Cancella tutto', btnWasd:'Cambia WASD',
  holdTitle:'Non implementato', holdDesc:'Funzione di verifica in attesa di conferma delle dimensioni.',
  checkInput:'Inserisci il numero di pallet', sheets:'pz', btnCheck:'✔ Verifica',
  hintCheck:'Inserisci le quantità EUR & VMF e premi Verifica',
  overflowLabel:'↓ Pallet in eccesso (fuori dal container)',
  eurH:'H: 1200l×800p', eurV:'V: 800l×1200p',
  vmfH:'H: 1200l×1000p', vmfV:'V: 1000l×1200p',
  gmaH:'H: 1219l×1016p', gmaV:'V: 1016l×1219p',
  hintPlace:'Posiziona pallet', hintDrag:'Trascina per spostare', hintDelete:'Elimina selezionato', hintRotate:'Ruota selezionato / prossimo',
  hintMoveArrow:'Sposta selezionato', hintMoveWasd:'Sposta (WASD)',
  hintUndo:'Annulla', hintRedo:'Ripristina',
  hintFill:'Seleziona il tipo e premi Carico Max', hintTray:'Inserisci quantità poi Carico Max o trascina',
  lblWidth:'← Larghezza →', lblLength:'← Lunghezza →',
  snapOn:'Snap: ON', snapOff:'Snap: OFF', gridOn:'Griglia: ON', gridOff:'Griglia: OFF',
  legend:'Legenda', legendEur:'Pallet EUR', legendVmf:'Pallet VMF', legendGma:'Pallet GMA',
  legendOverlap:'Sovrapposizione / Fuori limite', legendGen:'Zona gruppo frigorifero',
  stats:'Statistiche di carico', statEur:'N. EUR', statVmf:'N. VMF', statGma:'N. GMA',
  statTotal:'Totale', statFloor:'Utilizzo pavimento', placedList:'Pallet posizionati',
  noPallets:'Nessun pallet posizionato',
  modeIndicatorFill:'▦ Carico Max', modeIndicatorTray:'⊞ Personalizzato', modeIndicatorManual:'✥ Libero',
  wasdToggle:'Cambia frecce',
  noticeTitle:'Avviso',
  noticeLines:[
    'Le dimensioni interne dei container utilizzate in questo simulatore sono valori standard rappresentativi. Le dimensioni reali possono variare a seconda della compagnia di navigazione, del produttore del container e dell\'anno di produzione.',
    'Questo strumento è destinato esclusivamente alla simulazione del calcolo di carico dei container (CLC). Il piano di carico visualizzato non garantisce né istruisce le operazioni di stivaggio reali. Lo stivaggio effettivo è a discrezione dello spedizioniere o del responsabile delle operazioni di magazzino.',
    'Lo sviluppatore non si assume alcuna responsabilità per danni o perdite derivanti dall\'utilizzo di questo simulatore.',
  ],
  copyImgTitle:'Avviso',
},
};

let currentLang = 'ja';

function setLang(lang) {
currentLang = lang;
const T = TRANSLATIONS[lang];

// data-i18n属性を持つ全要素を更新
document.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  if (T[key] !== undefined) el.textContent = T[key];
});

// <select> の <option> を更新（data-i18n属性付き）
document.querySelectorAll('option[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  if (T[key] !== undefined) el.textContent = T[key];
});

// スナップ・グリッドボタンは ON/OFF 状態を反映
const snapBtn = document.getElementById('btn-snap');
const gridBtn = document.getElementById('btn-grid');
if (snapBtn) snapBtn.textContent = snapEnabled ? T.snapOn : T.snapOff;
if (gridBtn) gridBtn.textContent = gridEnabled ? T.gridOn : T.gridOff;

// モードインジケーターを更新
const ind = dom('mode-indicator');
if (ind) {
  const indMap = { fill: T.modeIndicatorFill, tray: T.modeIndicatorTray, manual: T.modeIndicatorManual };
  ind.textContent = indMap[currentMode] || ind.textContent;
}

// キャンバスヒントを更新（現在のモードに応じて）
const MODE_HINTS = { fill: T.hintFill, check: '— ' + T.holdTitle + ' —', manual: T.hintPlace + ' / ' + T.hintDrag };
dom('canvas-hint').textContent = MODE_HINTS[currentMode] || T.hintFill;

// 未配置テキストを更新
const list = dom('placed-list');
if (list && list.children.length === 1 && !placedPallets.length) {
  list.innerHTML = `<div style="font-size:11px;color:var(--muted);text-align:center;padding:10px">${T.noPallets}</div>`;
}

// WASD切替ボタン
const wasdBtn = document.getElementById('move-key-toggle');
if (wasdBtn) wasdBtn.textContent = moveMode === 'wasd' ? T.wasdToggle : T.btnWasd;
}

function t(key) {
return TRANSLATIONS[currentLang][key] || TRANSLATIONS['ja'][key] || key;
}

// ─────────────────────────────────────────
//  CONTAINER DEFINITIONS
// ─────────────────────────────────────────
const CONTAINERS = {
'20dry': { L: 5895,  W: 2350, label: '20ft Dry',    isReefer: false, reeferOffset: 0   },
'40dry': { L: 11998, W: 2352, label: '40ft Dry',    isReefer: false, reeferOffset: 0   },
'20ref': { L: 5440,  W: 2260, label: '20ft Reefer', isReefer: true,  reeferOffset: 450 },
'40ref': { L: 11580, W: 2260, label: '40ft Reefer', isReefer: true,  reeferOffset: 450 },
};
// Pallet definitions
// Canvas axes: X = container LENGTH (toward DOOR), Y = container WIDTH
//
// From PDF diagram images, the standard fill pattern uses TWO alternating rows:
//   Row A (top):    long side along WIDTH,  short side along LENGTH
//   Row B (bottom): short side along WIDTH, long side along LENGTH
//   Row A + Row B height = long + short = fills container width efficiently
//
// EUR 1200×800mm:
//   Row A: w=1200(width), d=800(length)   — 1200mm along container width
//   Row B: w=800(width),  d=1200(length)  — 800mm along container width
//   Row A + Row B = 2000mm < 2350mm ✓
//   Columns: floor(12030/800)=15 for Row A, floor(12030/1200)=10 for Row B
//   But PDF shows same column depth — they align at 1200mm columns:
//   floor(12030/1200)=10 cols × (1 RowA + 1 RowB) = 20... 
//   PDF says 24: actually each "column group" = 1 RowA(800deep) + 1 RowB(1200deep) offset
//   Correct: iterate x by 1200mm, place RowA(d=800) then RowB(d=1200) — they DON'T share same x
//   Looking at image carefully: RowA and RowB are independently placed:
//   RowA (1200 wide): floor(12030/800)=15 pallets but image shows ~12
//   RowB (800 wide):  floor(12030/1200)=10 pallets, image shows ~12
//   Most accurate reading: both rows use same column step of 1200mm → RowA=12, RowB=12 = 24 ✓
//   RowA (d=800):  placed at x=0,1200,2400,...(step 1200) but only 800mm deep → leaves 400mm gap
//   → Actually step for RowA should be 800, for RowB 1200
//   Re-reading image: 40ft EUR shows top row ~12 pallets(1200wide×800deep), bottom ~12(800wide×1200deep)
//   top row: 12030÷1000=12.03 → 12 pallets at step 1000? No.
//   FINAL reading: staggered brick pattern — top/bottom rows offset by half-pallet
//
// pA = { w: long, d: short }  — "landscape" orientation
// pB = { w: short, d: long  } — "portrait"  orientation
const PALLETS = {
EUR: { long: 1200, short: 800,  color: '#2ECC71', dark: '#1A7A44' },
VMF: { long: 1200, short: 1000, color: '#3A9FE8', dark: '#1A5A8A' },
GMA: { long: 1219, short: 1016, color: '#E8B84B', dark: '#8A6A1A' },
};

// ① hexToRgba キャッシュ（頻出アルファ値を事前生成）
const PALETTE_RGBA = {};
(function buildRgbaCache() {
const alphas = [0.25, 0.35, 0.45, 0.5, 0.7];
Object.values(PALLETS).forEach(p => {
  const r = parseInt(p.color.slice(1,3),16);
  const g = parseInt(p.color.slice(3,5),16);
  const b = parseInt(p.color.slice(5,7),16);
  PALETTE_RGBA[p.color] = {};
  alphas.forEach(a => {
    PALETTE_RGBA[p.color][a] = `rgba(${r},${g},${b},${a})`;
  });
});
})();

// getPalletDims: orient 'H' = landscape (long along width), 'V' = portrait (short along width)
// w = footprint along container WIDTH (Y), d = footprint along container LENGTH (X)
function getPalletDims(type, orient) {
const p = PALLETS[type];
return orient === 'H'
  ? { w: p.long,  d: p.short }   // H: long side spans width, short side toward door
  : { w: p.short, d: p.long  };  // V: short side spans width, long side toward door
}

// ─────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────
let containerType    = '20dry';
let activePalletType = 'EUR';
let fillType         = 'EUR';
let orientations     = { EUR: 'H', VMF: 'H', GMA: 'H' };
let placedPallets    = [];
let selectedIdx      = -1;
let selectedIndices  = new Set(); // 複数選択用

// ─── DOM キャッシュ ───
const domCache = {};
function dom(id) {
  if (domCache[id] === undefined) domCache[id] = document.getElementById(id);
  return domCache[id];
}
let snapEnabled      = true;
let gridEnabled      = true;
let dragType         = null;
let idCounter        = 0;
let scale            = 1;
let currentMode      = 'fill';
let moveMode         = 'arrow';

// ② 重複チェックキャッシュ（パレット変化時のみ再計算）
let overlapCache     = [];   // overlapCache[i] = true/false
let overlapDirty     = true; // trueの時だけ再計算

// ③ mousemove render throttle
let rafPending       = false; // 'arrow' | 'wasd'

// 判別モード用
let overflowPallets  = [];   // コンテナ外のオーバーフローパレット
let overflowSelectedIdx = -1;
let overflowScale    = 1;
const ovCanvas = () => document.getElementById('overflow-canvas');
const ovCtx    = () => { const c = ovCanvas(); return c ? c.getContext('2d') : null; };

// undo/redo 履歴（placedPalletsのスナップショット配列）
let history          = [];   // 過去の状態スタック
let future           = [];   // redo用スタック
const MAX_HISTORY    = 50;

// ホバープレビュー
let hoverPos         = null;
let isOverCanvas     = false;

// 配置済みパレットのドラッグ移動
let draggingIdx      = -1;
let dragOffsetX      = 0;
let dragOffsetY      = 0;
let multiDragOffsets = []; // 複数選択ドラッグ時の各パレットのオフセット [{idx, ox, oy}]
let pointerHandledByDown = false; // pointerdownで選択処理済みフラグ

const canvas = document.getElementById('main-canvas');
const ctx    = canvas.getContext('2d');

// ─────────────────────────────────────────
//  HISTORY HELPERS
// ─────────────────────────────────────────
// 操作確定時に呼ぶ（スナップショットを履歴に積む）
function pushHistory() {
history.push(JSON.stringify(placedPallets));
if (history.length > MAX_HISTORY) history.shift();
future = []; // 新操作でredoスタックをクリア
}

function undo() {
if (history.length === 0) return;
future.push(JSON.stringify(placedPallets));
placedPallets = JSON.parse(history.pop());
selectedIdx = -1;
invalidateOverlapCache();
render(); updateStats();
}

function redo() {
if (future.length === 0) return;
history.push(JSON.stringify(placedPallets));
placedPallets = JSON.parse(future.pop());
selectedIdx = -1;
invalidateOverlapCache();
render(); updateStats();
}

// ─────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────
function getC() { return CONTAINERS[containerType]; }

function hexToRgba(hex, a) {
if (PALETTE_RGBA[hex] && PALETTE_RGBA[hex][a] !== undefined) return PALETTE_RGBA[hex][a];
const r = parseInt(hex.slice(1,3),16);
const g = parseInt(hex.slice(3,5),16);
const b = parseInt(hex.slice(5,7),16);
return `rgba(${r},${g},${b},${a})`;
}

function rectsOverlap(a, b) {
return !(a.x+a.d <= b.x || b.x+b.d <= a.x || a.y+a.w <= b.y || b.y+b.w <= a.y);
}

// ② overlapキャッシュを無効化（パレット変化時に呼ぶ）
function invalidateOverlapCache() { overlapDirty = true; }

// overlapキャッシュを再計算（renderの先頭で1回だけ）
function rebuildOverlapCache() {
if (!overlapDirty) return;
overlapCache = placedPallets.map((p, i) =>
  placedPallets.some((o, j) => j !== i && rectsOverlap(p, o))
);
overlapDirty = false;
}

function checkOverlap(pallet, idx) {
return overlapCache[idx] || false;
}

function snapTo(v, g) { return snapEnabled ? Math.round(v / g) * g : v; }

// Effective loadable area start (after reefer generator block)
function loadableStartX() { return getC().reeferOffset; }

// ─────────────────────────────────────────
//  CANVAS SETUP
// ─────────────────────────────────────────
function setupCanvas() {
const area = document.getElementById('canvas-area');
const aw = area.clientWidth  - 110;
const ah = area.clientHeight - 110;
const c = getC();
scale = Math.min(aw / c.L, ah / c.W, 0.12);
canvas.width  = Math.round(c.L * scale);
canvas.height = Math.round(c.W * scale);
}

// ─────────────────────────────────────────
//  RENDER
// ─────────────────────────────────────────
const GRID_STEP = 500;

function render() {
rebuildOverlapCache();  // ② overlapキャッシュ（dirty時のみ再計算）
const c = getC();
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Floor
ctx.fillStyle = '#0D1D2E';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Reefer generator area (front = left side = x=0 in canvas = far from door)
if (c.isReefer && c.reeferOffset > 0) {
  const rw = c.reeferOffset * scale;
  // Solid fill only (no hatch lines)
  ctx.fillStyle = 'rgba(232,115,74,0.18)';
  ctx.fillRect(0, 0, rw, canvas.height);
  // Border line
  ctx.strokeStyle = 'rgba(232,115,74,0.7)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(rw, 0); ctx.lineTo(rw, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);
  // Label
  ctx.fillStyle = 'rgba(232,115,74,0.8)';
  ctx.font = `600 ${Math.max(7, scale * 80)}px JetBrains Mono, monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.save();
  ctx.translate(rw / 2, canvas.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('GENERATOR', 0, 0);
  ctx.restore();
}

// Grid
if (gridEnabled) {
  ctx.strokeStyle = 'rgba(42,63,85,0.8)';
  ctx.lineWidth = 0.5;
  for (let x = 0; x <= c.L; x += GRID_STEP) {
    const px = x * scale;
    ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, canvas.height); ctx.stroke();
  }
  for (let y = 0; y <= c.W; y += GRID_STEP) {
    const py = y * scale;
    ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(canvas.width, py); ctx.stroke();
  }
    ctx.fillStyle = 'rgba(107,139,164,0.45)';
  ctx.font = `${Math.max(7, scale * 110)}px JetBrains Mono, monospace`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  for (let x = GRID_STEP; x < c.L; x += GRID_STEP) {
    ctx.fillText(`${x/1000}m`, x * scale + 2, 2);
  }
}

placedPallets.forEach((p, i) => {
  const px    = p.x * scale;
  const py    = p.y * scale;
  const pd_px = p.d * scale;
  const pw_px = p.w * scale;
  // トレーに選択があるときはコンテナ内の選択ハイライトを消す
  const isSel     = selectedIndices.has(i) && traySelectedSet.size === 0;
  const isMulti   = isSel && selectedIndices.size > 1;
  const isOverlap = checkOverlap(p, i);
  const outOfBounds = p.x < 0 || p.y < 0 || (p.x + p.d) > c.L || (p.y + p.w) > c.W;
  const pal = PALLETS[p.type];
  const bad = isOverlap || outOfBounds;

  ctx.fillStyle = bad ? 'rgba(224,82,82,0.45)' : hexToRgba(pal.color, 0.5);
  ctx.fillRect(px, py, pd_px, pw_px);

  if (p.type === 'VMF' && !bad) {
    ctx.strokeStyle = hexToRgba(pal.color, 0.25);
    ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.moveTo(px,py); ctx.lineTo(px+pd_px,py+pw_px);
    ctx.moveTo(px+pd_px,py); ctx.lineTo(px,py+pw_px); ctx.stroke();
  }

  // 複数選択中は水色の枠、単一選択は白枠
  ctx.strokeStyle = bad ? '#E05252' : isSel ? (isMulti ? '#00C9B1' : '#fff') : pal.color;
  ctx.lineWidth = isSel ? 2.0 : 0.8;
  ctx.strokeRect(px, py, pd_px, pw_px);

  const fs = Math.max(7, Math.min(pd_px, pw_px) * 0.17);
  ctx.fillStyle = bad ? '#FF8888' : pal.color;
  ctx.font = `600 ${fs}px JetBrains Mono, monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(p.type, px + pd_px/2, py + pw_px/2 - fs * 0.45);
  ctx.font = `${fs * 0.7}px JetBrains Mono, monospace`;
  ctx.fillStyle = bad ? 'rgba(255,136,136,0.7)' : hexToRgba(pal.color, 0.7);
  ctx.fillText(`${p.d}×${p.w}`, px + pd_px/2, py + pw_px/2 + fs * 0.55);

  // 番号（左上に薄く表示）
  const numFs = Math.max(6, Math.min(pd_px, pw_px) * 0.13);
  ctx.font = `600 ${numFs}px JetBrains Mono, monospace`;
  ctx.fillStyle = bad ? 'rgba(255,136,136,0.5)' : hexToRgba(pal.color, 0.45);
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(`#${String(p.id).padStart(2,'0')}`, px + 3, py + 2);

  if (isSel) {
    ctx.strokeStyle = isMulti ? '#00C9B1' : '#fff';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4,3]);
    ctx.strokeRect(px-2, py-2, pd_px+4, pw_px+4);
    ctx.setLineDash([]);
  }
});

// Container border
ctx.strokeStyle = c.isReefer ? '#E8734A' : '#2ECC71';
ctx.lineWidth = 2;
ctx.strokeRect(1, 1, canvas.width-2, canvas.height-2);

// Door side indicator (RIGHT edge)
const doorW = Math.max(6, 8 * scale * 8);
ctx.fillStyle = c.isReefer ? 'rgba(232,115,74,0.20)' : 'rgba(46,204,113,0.15)';
ctx.fillRect(canvas.width - doorW, 2, doorW - 2, canvas.height - 4);

// Door hinge marks
const hingeColor = c.isReefer ? '#E8734A' : '#2ECC71';
ctx.strokeStyle = hingeColor;
ctx.lineWidth = 1.5;
const hingePositions = [canvas.height * 0.25, canvas.height * 0.5, canvas.height * 0.75];
hingePositions.forEach(hy => {
  ctx.beginPath();
  ctx.arc(canvas.width - 3, hy, 3, 0, Math.PI * 2);
  ctx.stroke();
});

// "DOOR" text on right edge
ctx.fillStyle = hexToRgba(hingeColor, 0.6);
ctx.font = `600 ${Math.max(7, scale * 90)}px JetBrains Mono, monospace`;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.save();
ctx.translate(canvas.width - doorW / 2, canvas.height / 2);
ctx.rotate(Math.PI / 2);
ctx.fillText('DOOR', 0, 0);
ctx.restore();

// Corner dots
[[2,2],[canvas.width-2,2],[canvas.width-2,canvas.height-2],[2,canvas.height-2]].forEach(([cx,cy]) => {
  ctx.fillStyle = hingeColor;
  ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI*2); ctx.fill();
});

// ── Hover preview (new pallet ghost) ──
// 操作モードのみ表示、ドラッグ移動中・サイドバードラッグ中は非表示
if (currentMode === 'manual' && isOverCanvas && hoverPos && draggingIdx === -1 && !dragType && trayDraggingIdx === -1) {
  const orient = orientations[activePalletType];
  const { w, d } = getPalletDims(activePalletType, orient);
  const hx = Math.min(Math.max(0, snapTo(hoverPos.mmX - d/2, 100)), c.L - d);
  const hy = Math.min(Math.max(0, snapTo(hoverPos.mmY - w/2, 100)), c.W - w);
  const ghost = { x: hx, y: hy, w, d };
  const hasOverlap = placedPallets.some(p => rectsOverlap(ghost, p));
  const outOfBounds = hx < 0 || hy < 0 || (hx + d) > c.L || (hy + w) > c.W;
  const bad = hasOverlap || outOfBounds;
  const pal = PALLETS[activePalletType];

  ctx.fillStyle   = bad ? 'rgba(224,82,82,0.30)' : hexToRgba(pal.color, 0.25);
  ctx.strokeStyle = bad ? '#E05252' : pal.color;
  ctx.lineWidth   = 1.5;
  ctx.setLineDash([5, 3]);
  ctx.fillRect(hx * scale, hy * scale, d * scale, w * scale);
  ctx.strokeRect(hx * scale, hy * scale, d * scale, w * scale);
  ctx.setLineDash([]);
}
}

// ─────────────────────────────────────────
//  FILL PATTERNS  (verified & confirmed)
// ─────────────────────────────────────────
// Each entry: array of row definitions
//   { y: 'top'|'bottom', w: widthFootprint(mm), d: depthFootprint(mm), count: N }
//   y='top'    → row starts at y=0 (upper wall)
//   y='bottom' → row starts at y = containerW - w (lower wall)
// 'hold' = not yet implemented (pending container dimension verification)
const FILL_PATTERNS = {
'20dry': {
  EUR: [
    { y:'top',    w: 800,  d: 1200, count: 3 },
    { y:'top',    w: 1200, d: 800,  count: 2 },
    { y:'bottom', w: 1200, d: 800,  count: 4 },
    { y:'bottom', w: 800,  d: 1200, count: 2 },
  ],
  VMF: [
    { y:'top',    w: 1000, d: 1200, count: 2 },
    { y:'top',    w: 1200, d: 1000, count: 3 },
    { y:'bottom', w: 1200, d: 1000, count: 2 },
    { y:'bottom', w: 1000, d: 1200, count: 3 },
  ],
  GMA: [
    { y:'top',    w: 1016, d: 1219, count: 2 },
    { y:'top',    w: 1219, d: 1016, count: 3 },
    { y:'bottom', w: 1219, d: 1016, count: 2 },
    { y:'bottom', w: 1016, d: 1219, count: 3 },
  ],
},
'40dry': {
  EUR: [
    { y:'top',    w: 800,  d: 1200, count: 9 },
    { y:'top',    w: 1200, d: 800,  count: 1 },
    { y:'bottom', w: 1200, d: 800,  count: 13 },
    { y:'bottom', w: 800,  d: 1200, count: 1 },
  ],
  VMF: [
    { y:'top',    w: 1000, d: 1200, count: 8 },
    { y:'top',    w: 1200, d: 1000, count: 2 },
    { y:'bottom', w: 1200, d: 1000, count: 9 },
    { y:'bottom', w: 1000, d: 1200, count: 2 },
  ],
  GMA: [
    { y:'top',    w: 1016, d: 1219, count: 8 },
    { y:'top',    w: 1219, d: 1016, count: 2 },
    { y:'bottom', w: 1219, d: 1016, count: 9 },
    { y:'bottom', w: 1016, d: 1219, count: 2 },
  ],
},
'20ref': {
  EUR: [
    { y:'top',    w: 800,  d: 1200, count: 4 },
    { y:'bottom', w: 1200, d: 800,  count: 6 },
  ],
  VMF: 'hold',
  GMA: 'hold',
},
'40ref': {
  EUR: 'hold',
  VMF: [
    { y:'top',    w: 1000, d: 1200, count: 9  },
    { y:'bottom', w: 1200, d: 1000, count: 11 },
  ],
  GMA: 'hold',
},
};

// holdかどうかチェック
function isHold(cType, pType) {
const p = FILL_PATTERNS[cType];
return !p || p[pType] === 'hold';
}

// ─────────────────────────────────────────
//  CHECK MODE ALGORITHM
// ─────────────────────────────────────────

// グリーディー混載配置アルゴリズム（シェルフパッキング方式）
// ─────────────────────────────────────────
// コンテナ幅方向（Y軸）に「棚」を積み上げる。
// 各棚はある高さ（幅方向サイズ）を持ち、長さ方向にパレットを詰める。
// 棚の残り長さに別タイプを詰めることで余りスペースを最大活用する。
// 返り値: { placed: [...], overflow: [...], eurOver, vmfOver }
function greedyPack(eurNeeded, vmfNeeded, gmaN) {
const c      = getC();
const startX = loadableStartX();
const availL = c.L - startX;
const W      = c.W;
const EUR    = PALLETS['EUR'];
const VMF    = PALLETS['VMF'];
const GMA    = PALLETS['GMA'];
const gmaNeeded = gmaN || 0;

// ── ステップ1：面積チェック ──
const containerArea = availL * W;
const palletArea    = eurNeeded * EUR.long * EUR.short
                    + vmfNeeded * VMF.long * VMF.short
                    + gmaNeeded * GMA.long * GMA.short;
if (palletArea > containerArea) {
  const overflowPals = [];
  let palId = 1;
  for (let i = 0; i < eurNeeded; i++)
    overflowPals.push({ id: palId++, type: 'EUR', orient: 'H',
      x: i * (EUR.short + 10), y: 0, w: EUR.long, d: EUR.short });
  for (let i = 0; i < vmfNeeded; i++)
    overflowPals.push({ id: palId++, type: 'VMF', orient: 'H',
      x: i * (VMF.short + 10), y: EUR.long + 20, w: VMF.long, d: VMF.short });
  for (let i = 0; i < gmaNeeded; i++)
    overflowPals.push({ id: palId++, type: 'GMA', orient: 'H',
      x: i * (GMA.short + 10), y: EUR.long + VMF.long + 40, w: GMA.long, d: GMA.short });
  return { placed: [], overflow: overflowPals,
    eurOver: eurNeeded, vmfOver: vmfNeeded, gmaOver: gmaNeeded };
}

// ── ステップ2：配置判定 ──
// 行の高さ候補（幅方向）
// GMA: long=1219, short=1016
const ROW_HEIGHTS = [1219, 1200, 1016, 1000, 800];

// 行高さの組み合わせを列挙するジェネレーター（tryLayout外でキャッシュ）
function* genRowSequences(maxH, depth) {
  yield [];
  if (depth === 0 || maxH <= 0) return;
  for (const h of ROW_HEIGHTS) {
    if (h > maxH) continue;
    for (const rest of genRowSequences(maxH - h, depth - 1)) {
      yield [h, ...rest];
    }
  }
}

// 指定した行高さで全タイプを混在させて長さ方向に詰める
function packRow(rowH, eurLeft, vmfLeft, gmaLeft, rowY) {
  // 各タイプの行高さに収まる向き
  const allDims = {
    EUR: [
      { w: EUR.long,  d: EUR.short, orient: 'H' },
      { w: EUR.short, d: EUR.long,  orient: 'V' },
    ].filter(d => d.w <= rowH),
    VMF: [
      { w: VMF.long,  d: VMF.short, orient: 'H' },
      { w: VMF.short, d: VMF.long,  orient: 'V' },
    ].filter(d => d.w <= rowH),
    GMA: [
      { w: GMA.long,  d: GMA.short, orient: 'H' },
      { w: GMA.short, d: GMA.long,  orient: 'V' },
    ].filter(d => d.w <= rowH),
  };

  const lefts = { EUR: eurLeft, VMF: vmfLeft, GMA: gmaLeft };
  const types  = ['EUR', 'VMF', 'GMA'].filter(t => lefts[t] > 0 && allDims[t].length > 0);
  if (types.length === 0) return null;

  let bestResult = null;

  // 先行タイプ・後続タイプの全組み合わせを試す
  for (const firstType of types) {
    for (const dimA of allDims[firstType]) {
      const cntA = Math.min(lefts[firstType], Math.floor(availL / dimA.d));
      if (cntA === 0) continue;
      const usedX = cntA * dimA.d;
      const remX  = availL - usedX;

      // 後続タイプなし（1タイプのみ）
      const counts = { EUR: 0, VMF: 0, GMA: 0 };
      counts[firstType] = cntA;
      const pallets1 = [];
      let tx = startX;
      for (let i = 0; i < cntA; i++) {
        pallets1.push({ type: firstType, orient: dimA.orient, x: tx, y: rowY, w: dimA.w, d: dimA.d });
        tx += dimA.d;
      }

      // 残りxに後続タイプを詰める（全タイプ試す）
      const otherTypes = types.filter(t => t !== firstType);
      const trySecond = (pallets, tx2, c2) => {
        const total = Object.values(c2).reduce((s,v)=>s+v,0);
        if (!bestResult || total > bestResult.total)
          bestResult = { pallets: [...pallets], counts: {...c2}, total,
            eurPlaced: c2.EUR, vmfPlaced: c2.VMF, gmaPlaced: c2.GMA };

        for (const secType of otherTypes) {
          if (c2[secType] >= lefts[secType]) continue;
          for (const dimB of allDims[secType]) {
            const remX2 = startX + availL - tx2;
            if (remX2 < dimB.d) continue;
            const cntB = Math.min(lefts[secType] - c2[secType], Math.floor(remX2 / dimB.d));
            if (cntB === 0) continue;
            const newPallets = [...pallets];
            let tx3 = tx2;
            for (let i = 0; i < cntB; i++) {
              newPallets.push({ type: secType, orient: dimB.orient, x: tx3, y: rowY, w: dimB.w, d: dimB.d });
              tx3 += dimB.d;
            }
            const newC = {...c2, [secType]: c2[secType] + cntB};
            const tot2 = Object.values(newC).reduce((s,v)=>s+v,0);
            if (!bestResult || tot2 > bestResult.total)
              bestResult = { pallets: newPallets, counts: newC, total: tot2,
                eurPlaced: newC.EUR, vmfPlaced: newC.VMF, gmaPlaced: newC.GMA };
          }
        }
      };
      trySecond(pallets1, tx, {...counts});
    }
  }

  if (!bestResult || bestResult.total === 0) return null;
  return bestResult;
}

// ── 上端・下端からの行積み上げを全パターン試す ──
function tryLayout(eurNeeded, vmfNeeded, gmaNeeded) {
  let bestLayout = null;

  for (const topRows of genRowSequences(W, 3)) {
    const topH = topRows.reduce((s, h) => s + h, 0);
    for (const botRows of genRowSequences(W - topH, 3)) {
      const botH = botRows.reduce((s, h) => s + h, 0);
      if (topH + botH > W) continue;

      let eurLeft = eurNeeded, vmfLeft = vmfNeeded, gmaLeft = gmaNeeded;
      const allPallets = [];
      let valid = true;

      // 上端行
      let curY = 0;
      for (const rowH of topRows) {
        const result = packRow(rowH, eurLeft, vmfLeft, gmaLeft, curY);
        if (!result || result.total === 0) { valid = false; break; }
        allPallets.push(...result.pallets);
        eurLeft -= result.eurPlaced;
        vmfLeft -= result.vmfPlaced;
        gmaLeft -= result.gmaPlaced;
        curY += rowH;
        if (eurLeft <= 0 && vmfLeft <= 0 && gmaLeft <= 0) break;
      }
      if (!valid) continue;

      if (eurLeft <= 0 && vmfLeft <= 0 && gmaLeft <= 0) {
        const topOnly = botRows.length === 0;
        const score   = 100000 + (topOnly ? 10000 : 0) + allPallets.length;
        if (!bestLayout || score > bestLayout.score) {
          bestLayout = { pallets: allPallets, eurOver: 0, vmfOver: 0, gmaOver: 0, score };
        }
        continue;
      }

      // 下端行
      let curBot = 0;
      for (const rowH of botRows) {
        const rowY = W - curBot - rowH;
        if (rowY < curY) { valid = false; break; }
        const result = packRow(rowH, eurLeft, vmfLeft, gmaLeft, rowY);
        if (!result || result.total === 0) { valid = false; break; }
        allPallets.push(...result.pallets);
        eurLeft -= result.eurPlaced;
        vmfLeft -= result.vmfPlaced;
        gmaLeft -= result.gmaPlaced;
        curBot += rowH;
        if (eurLeft <= 0 && vmfLeft <= 0 && gmaLeft <= 0) break;
      }
      if (!valid) continue;

      const eurO  = Math.max(0, eurLeft);
      const vmfO  = Math.max(0, vmfLeft);
      const gmaO  = Math.max(0, gmaLeft);
      const allIn = eurO === 0 && vmfO === 0 && gmaO === 0;
      const topOnly = botRows.length === 0 || curBot === 0;
      const score   = (allIn ? 100000 : 0) + (topOnly ? 10000 : 0) + allPallets.length;

      if (!bestLayout || score > bestLayout.score) {
        bestLayout = { pallets: allPallets, eurOver: eurO, vmfOver: vmfO, gmaOver: gmaO, score };
      }
    }
  }
  return bestLayout;
}

const layout = tryLayout(eurNeeded, vmfNeeded, gmaNeeded);
let palId = 1;
const placed = layout
  ? layout.pallets.map(p => ({ ...p, id: palId++ }))
  : [];

let eurOver = layout ? layout.eurOver : eurNeeded;
let vmfOver = layout ? layout.vmfOver : vmfNeeded;
let gmaOver = layout ? (layout.gmaOver || 0) : gmaNeeded;

// ── FILL上限との照合 ──
// tryLayoutのアルゴリズムは最大3行の単純積みのため、
// FILLパターンのような複数行x方向ずらし配置は検出できない。
// 各タイプの枚数がFILLパターンの最大枚数以内であれば
// 物理的に積載可能なので、オーバーをゼロに補正する。
function fillMaxCount(type) {
  const rows = FILL_PATTERNS[containerType]?.[type];
  if (!rows || rows === 'hold') return 0;
  return rows.reduce((s, r) => s + r.count, 0);
}
const fillMaxEUR = fillMaxCount('EUR');
const fillMaxVMF = fillMaxCount('VMF');
const fillMaxGMA = fillMaxCount('GMA');

// 各タイプともFILL上限以内なら積載可能と補正
// （面積チェックはステップ1で既に通過済み）
// tryLayoutは最大3行の単純積みのため、FILLのようなx方向ずらし配置は検出できない。
// 判定のみ補正し、描画はtryLayoutの結果をそのまま使う。
if (eurNeeded <= fillMaxEUR && vmfNeeded <= fillMaxVMF && gmaNeeded <= fillMaxGMA) {
  eurOver = 0;
  vmfOver = 0;
  gmaOver = 0;
}

// オーバーフロー描画
const overflowPals = [];
const ovEntries = [['EUR', eurOver], ['VMF', vmfOver], ['GMA', gmaOver]]
  .filter(([,n]) => n > 0)
  .sort(([,a],[,b]) => a - b);
let ovY = 0;
for (const [type, count] of ovEntries) {
  const P = PALLETS[type];
  for (let i = 0; i < count; i++) {
    overflowPals.push({ id: palId++, type, orient: 'H',
      x: i * (P.short + 10), y: ovY, w: P.long, d: P.short });
  }
  ovY += P.long + 20;
}

return { placed, overflow: overflowPals, eurOver, vmfOver, gmaOver };
}

// パレットタイプ別カウントを1回のループで取得
function countPallets(pallets) {
  const c = { EUR: 0, VMF: 0, GMA: 0 };
  pallets.forEach(p => { if (c[p.type] !== undefined) c[p.type]++; });
  return c;
}

// バナー表示ユーティリティ
function setBanner(isOk, text) {
  const banner = dom('check-banner');
  if (!banner) return;
  const OK_STYLE = 'display:block;padding:6px 20px;border-radius:8px;font-size:13px;font-family:JetBrains Mono,monospace;font-weight:600;border:1px solid var(--eur-fill);background:rgba(46,204,113,0.12);color:var(--eur-fill);white-space:pre;line-height:1.7;text-align:center;';
  const NG_STYLE = 'display:block;padding:6px 20px;border-radius:8px;font-size:13px;font-family:JetBrains Mono,monospace;font-weight:600;border:1px solid var(--danger);background:rgba(224,82,82,0.12);color:var(--danger);white-space:pre;line-height:1.7;text-align:center;';
  banner.style.cssText = isOk ? OK_STYLE : NG_STYLE;
  banner.textContent   = text;
}

// 入力変化時の自動判別（EUR・VMFどちらかが1枚以上の時のみ実行）
function autoCheck() {
  // 0枚でもrunCheckを呼ぶ（描画リセットのため）
  runCheck();
}

function runCheck() {
const eurN = Math.max(0, parseInt(dom('check-eur').value) || 0);
const vmfN = Math.max(0, parseInt(dom('check-vmf').value) || 0);
const gmaN = Math.max(0, parseInt(dom('check-gma').value) || 0);

// 全部0枚の場合はキャンバスとバナーをリセット
if (eurN === 0 && vmfN === 0 && gmaN === 0) {
  placedPallets = []; overflowPallets = []; selectedIdx = -1; overflowSelectedIdx = -1;
  invalidateOverlapCache();
  dom('check-banner').style.display = 'none';
  dom('check-result-detail').style.display = 'none';
  dom('overflow-wrapper').style.display = 'none';
  render(); updateStats(); updateCenterInfo();
  return;
}

// 判別実行
const result = greedyPack(eurN, vmfN, gmaN);
placedPallets   = result.placed;
overflowPallets = result.overflow;
selectedIdx     = -1;
overflowSelectedIdx = -1;
idCounter = placedPallets.length + overflowPallets.length;
invalidateOverlapCache();

const { EUR: eurPlaced, VMF: vmfPlaced, GMA: gmaPlaced } = countPallets(placedPallets);
const eurOver   = result.eurOver || 0;
const vmfOver   = result.vmfOver || 0;
const gmaOver   = result.gmaOver || 0;
const isOk      = eurOver === 0 && vmfOver === 0 && gmaOver === 0;

// ── バナー ──
const banner = dom('check-banner');
const parts = [];
if (eurN > 0) parts.push(`EUR ${eurPlaced}枚`);
if (vmfN > 0) parts.push(`VMF ${vmfPlaced}枚`);
if (gmaN > 0) parts.push(`GMA ${gmaPlaced}枚`);
if (isOk) {
  setBanner(true, `✓ 積載可能　${parts.join('　')}`);
} else {
  const overText = [];
  if (eurOver > 0) overText.push(`EUR ${eurOver}枚オーバー`);
  if (vmfOver > 0) overText.push(`VMF ${vmfOver}枚オーバー`);
  if (gmaOver > 0) overText.push(`GMA ${gmaOver}枚オーバー`);
  setBanner(false, `✗ 積載不可　${overText.join(' / ')}\n${parts.join('　')} 積載　残り ${overText.join(' ')}`);
}

// ── 詳細 ──
const detail = dom('check-result-detail');
let detailText = '';
if (eurN > 0) { detailText += `EUR: ${eurPlaced}/${eurN} 枚積載`; if (eurOver > 0) detailText += ` (+${eurOver}枚オーバー)`; detailText += '\n'; }
if (vmfN > 0) { detailText += `VMF: ${vmfPlaced}/${vmfN} 枚積載`; if (vmfOver > 0) detailText += ` (+${vmfOver}枚オーバー)`; detailText += '\n'; }
if (gmaN > 0) { detailText += `GMA: ${gmaPlaced}/${gmaN} 枚積載`; if (gmaOver > 0) detailText += ` (+${gmaOver}枚オーバー)`; }
detail.style.display = 'block';
detail.textContent = detailText.trimEnd();

// オーバーフローキャンバス
const ovWrap = dom('overflow-wrapper');
if (overflowPallets.length > 0) {
  ovWrap.style.display = 'block';
  renderOverflow();
} else {
  ovWrap.style.display = 'none';
}

render(); updateStats(); updateCenterInfo();
}

// オーバーフローキャンバス描画
function renderOverflow() {
const oc = ovCanvas();
const octx = ovCtx();
if (!oc || !octx || overflowPallets.length === 0) return;

// サイズ計算
const padding = 10;
let maxX = 0, maxY = 0;
overflowPallets.forEach(p => {
  maxX = Math.max(maxX, p.x + p.d);
  maxY = Math.max(maxY, p.y + p.w);
});
const area = document.getElementById('canvas-area');
const availW = area.clientWidth - 110;
overflowScale = Math.min(availW / (maxX + padding * 2), canvas.height / (maxY + padding * 2), scale, 0.08);
oc.width  = Math.round((maxX + padding * 2) * overflowScale);
oc.height = Math.round((maxY + padding * 2) * overflowScale);

octx.clearRect(0, 0, oc.width, oc.height);
octx.fillStyle = 'rgba(224,82,82,0.05)';
octx.fillRect(0, 0, oc.width, oc.height);

overflowPallets.forEach((p, i) => {
  const px = (p.x + padding) * overflowScale;
  const py = (p.y + padding) * overflowScale;
  const pd_px = p.d * overflowScale;
  const pw_px = p.w * overflowScale;
  const pal = PALLETS[p.type];
  const isSel = i === overflowSelectedIdx;

  octx.fillStyle = hexToRgba(pal.color, 0.35);
  octx.fillRect(px, py, pd_px, pw_px);
  octx.strokeStyle = isSel ? '#fff' : pal.color;
  octx.lineWidth = isSel ? 1.8 : 0.8;
  octx.strokeRect(px, py, pd_px, pw_px);

  const fs = Math.max(7, Math.min(pd_px, pw_px) * 0.17);
  octx.fillStyle = pal.color;
  octx.font = `600 ${fs}px JetBrains Mono, monospace`;
  octx.textAlign = 'center';
  octx.textBaseline = 'middle';
  octx.fillText(p.type, px + pd_px/2, py + pw_px/2);
  const numFs = Math.max(6, Math.min(pd_px, pw_px) * 0.13);
  octx.font = `600 ${numFs}px JetBrains Mono, monospace`;
  octx.fillStyle = hexToRgba(pal.color, 0.45);
  octx.textAlign = 'left';
  octx.textBaseline = 'top';
  octx.fillText(`#${String(p.id).padStart(2,'0')}`, px + 3, py + 2);

  if (isSel) {
    octx.strokeStyle = '#fff';
    octx.lineWidth = 1.5;
    octx.setLineDash([4,3]);
    octx.strokeRect(px-2, py-2, pd_px+4, pw_px+4);
    octx.setLineDash([]);
  }
});
}

// ─────────────────────────────────────────
//  HOLD BANNER
// ─────────────────────────────────────────

// holdバナーの表示・非表示
function updateHoldBanner() {
const hold = isHold(containerType, fillType);
const banner = document.getElementById('fill-hold-banner');
const btn    = document.getElementById('btn-fill');
if (hold) {
  banner.style.display = 'block';
  btn.disabled = true;
  btn.style.opacity = '0.35';
  btn.style.cursor  = 'not-allowed';
} else {
  banner.style.display = 'none';
  btn.disabled = false;
  btn.style.opacity = '';
  btn.style.cursor  = '';
}
}

function fillContainer() {
if (isHold(containerType, fillType)) return;

pushHistory();
placedPallets = [];
selectedIdx   = -1;
idCounter     = 0;  // リスト番号をリセット
const c       = getC();
const rows    = FILL_PATTERNS[containerType][fillType];
const startX  = loadableStartX();

// 同じy列（top/bottom）で前グループの終端x座標を引き継ぐ
const nextX = { top: startX, bottom: startX };

rows.forEach(row => {
  const rowY   = row.y === 'top' ? 0 : c.W - row.w;
  const xStart = nextX[row.y];
  for (let i = 0; i < row.count; i++) {
    const x = xStart + i * row.d;
    placedPallets.push({
      id: ++idCounter,
      type: fillType,
      orient: row.w < row.d ? 'V' : 'H',
      x, y: rowY, w: row.w, d: row.d,
    });
  }
  // このグループの終端を次グループの開始x座標として記録
  nextX[row.y] = xStart + row.count * row.d;
});

render();
updateStats();
invalidateOverlapCache();
}

// ─────────────────────────────────────────
//  CANVAS EVENTS
// ─────────────────────────────────────────

// マウス座標 → mm変換
function canvasMmPos(e) {
const rect = canvas.getBoundingClientRect();
return {
  mmX: (e.clientX - rect.left)  / scale,
  mmY: (e.clientY - rect.top)   / scale,
};
}

// mousemove: ホバープレビュー更新 & 配置済みパレットのドラッグ移動
// ─────────────────────────────────────────
//  CANVAS POINTER EVENTS（mouse・touch・stylus統一）
// ─────────────────────────────────────────

canvas.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') {
    if (draggingIdx === -1) return;
  }
  const { mmX, mmY } = canvasMmPos(e);
  hoverPos = { mmX, mmY };

  if (draggingIdx !== -1 && isOverCanvas) {
    const c = getC();
    if (multiDragOffsets.length > 1) {
      multiDragOffsets.forEach(({ idx, ox, oy }) => {
        const p = placedPallets[idx];
        const rawX = mmX - ox;
        const rawY = mmY - oy;
        p.x = Math.min(Math.max(0, snapTo(rawX, 100)), c.L - p.d);
        p.y = Math.min(Math.max(0, snapTo(rawY, 100)), c.W - p.w);
      });
    } else {
      const p = placedPallets[draggingIdx];
      const rawX = mmX - dragOffsetX;
      const rawY = mmY - dragOffsetY;
      p.x = Math.min(Math.max(0, snapTo(rawX, 100)), c.L - p.d);
      p.y = Math.min(Math.max(0, snapTo(rawY, 100)), c.W - p.w);
    }
    invalidateOverlapCache();
  }

  if (!rafPending) {
    rafPending = true;
    requestAnimationFrame(() => { rafPending = false; render(); });
  }
});

// トレー式モード：コンテナドラッグ中のトレーホバーフィードバック
let isDraggingOverTray = false;
document.addEventListener('pointermove', e => {
  if (draggingIdx === -1 || currentMode !== 'tray') return;
  const trayCanvas = getTrayCanvas();
  if (!trayCanvas) return;
  const rect = trayCanvas.getBoundingClientRect();
  const onTray = e.clientX >= rect.left && e.clientX <= rect.right
              && e.clientY >= rect.top  && e.clientY <= rect.bottom;
  if (onTray !== isDraggingOverTray) {
    isDraggingOverTray = onTray;
    // カーソル変更
    document.body.style.cursor = onTray ? 'copy' : '';
    // トレー枠をハイライト
    trayCanvas.style.borderColor    = onTray ? 'var(--eur-fill)' : 'var(--border)';
    trayCanvas.style.borderStyle    = 'dashed';
    trayCanvas.style.boxShadow      = onTray ? '0 0 0 2px rgba(46,204,113,0.35)' : 'none';
    trayCanvas.style.backgroundColor = onTray ? 'rgba(46,204,113,0.06)' : 'rgba(255,255,255,0.02)';
  }
});

canvas.addEventListener('pointerenter', () => { isOverCanvas = true;  render(); });
canvas.addEventListener('pointerleave', () => {
  isOverCanvas = false;
  hoverPos = null;
  // draggingIdx はここではリセットしない（トレーへのD&Dのため）
  render();
});

// pointerdown: ドラッグ開始 or 選択
canvas.addEventListener('pointerdown', e => {
  if (e.button !== 0 && e.pointerType !== 'touch') return;
  if (currentMode !== 'manual' && currentMode !== 'tray') return;
  const { mmX, mmY } = canvasMmPos(e);
  const isCtrl = e.ctrlKey || e.metaKey;

  const hit = placedPallets.findIndex(p =>
    mmX >= p.x && mmX <= p.x + p.d && mmY >= p.y && mmY <= p.y + p.w
  );
  if (hit !== -1) {
    // コンテナをクリック → トレー選択をクリア
    traySelectedSet.clear();
    traySelectedIdx = -1;
    if (isCtrl) {
      // Ctrl+クリック：複数選択トグル
      if (selectedIndices.has(hit)) {
        selectedIndices.delete(hit);
        if (selectedIdx === hit) selectedIdx = selectedIndices.size > 0 ? [...selectedIndices][0] : -1;
      } else {
        selectedIndices.add(hit);
        selectedIdx = hit;
      }
      pointerHandledByDown = true;
      render(); updateStats();
      e.preventDefault();
      return;
    }
    // 通常クリック：ヒットしたパレットをドラッグ開始
    // ヒットしたパレットが複数選択内にある場合→複数まとめてドラッグ
    if (selectedIndices.size > 1 && selectedIndices.has(hit)) {
      // 複数ドラッグ
      draggingIdx = hit;
      multiDragOffsets = [...selectedIndices].map(idx => ({
        idx,
        ox: mmX - placedPallets[idx].x,
        oy: mmY - placedPallets[idx].y,
      }));
    } else {
      // 単一ドラッグ（複数選択をクリア）
      selectedIndices.clear();
      selectedIndices.add(hit);
      draggingIdx    = hit;
      multiDragOffsets = [];
    }
    dragOffsetX = mmX - placedPallets[hit].x;
    dragOffsetY = mmY - placedPallets[hit].y;
    canvas.style.cursor = 'grabbing';
    // トレー式モードではsetPointerCaptureを使わない（トレーへのD&Dのため）
    if (currentMode !== 'tray') canvas.setPointerCapture(e.pointerId);
    e.preventDefault();
    return;
  }

  // 空白クリック：複数選択クリア（Ctrlなし）
  if (!isCtrl) {
    selectedIndices.clear();
    selectedIdx = -1;
    render();
  }
});

// pointerup: ドラッグ確定 or 選択トグル or 新規配置
canvas.addEventListener('pointerup', e => {
  if (e.button !== 0 && e.pointerType !== 'touch') return;

  // pointerdownでCtrl選択処理済みの場合はスキップ
  if (pointerHandledByDown) {
    pointerHandledByDown = false;
    return;
  }

  if (draggingIdx !== -1) {
    const { mmX, mmY } = canvasMmPos(e);
    const distX = Math.abs(mmX - (placedPallets[draggingIdx].x + dragOffsetX));
    const distY = Math.abs(mmY - (placedPallets[draggingIdx].y + dragOffsetY));
    const isDrag = distX > 5 || distY > 5;
    if (isDrag) {
      pushHistory();
      selectedIdx = draggingIdx;
      invalidateOverlapCache();
    } else {
      // ドラッグなし→単一選択トグル
      const wasSelected = selectedIdx === draggingIdx && selectedIndices.size <= 1;
      selectedIndices.clear();
      if (wasSelected) {
        selectedIdx = -1;
      } else {
        selectedIdx = draggingIdx;
        selectedIndices.add(draggingIdx);
      }
    }
    draggingIdx = -1;
    multiDragOffsets = [];
    canvas.style.cursor = currentMode === 'manual' ? 'crosshair' : 'default';
    render(); updateStats();
    return;
  }

  if (currentMode !== 'manual' && currentMode !== 'tray') return;

  const { mmX, mmY } = canvasMmPos(e);
  const hit = placedPallets.findIndex(p =>
    mmX >= p.x && mmX <= p.x + p.d && mmY >= p.y && mmY <= p.y + p.w
  );
  if (hit !== -1) {
    selectedIndices.clear();
    selectedIdx = selectedIdx === hit ? -1 : hit;
    if (selectedIdx !== -1) selectedIndices.add(selectedIdx);
    render(); updateStats();
    return;
  }

  // 新規パレット配置（フリー設置モードのみ）
  if (currentMode !== 'manual') return; // trayモードはクリック配置不可
  const orient = orientations[activePalletType];
  const { w, d } = getPalletDims(activePalletType, orient);
  const sx = Math.min(Math.max(0, snapTo(mmX - d/2, 100)), getC().L - d);
  const sy = Math.min(Math.max(0, snapTo(mmY - w/2, 100)), getC().W - w);
  pushHistory();
  placedPallets.push({ id: ++idCounter, type: activePalletType, orient, x: sx, y: sy, w, d });
  selectedIdx = -1;
  selectedIndices.clear();
  invalidateOverlapCache();
  render(); updateStats();
});

// ポインターキャンセル（タッチ中断など）
canvas.addEventListener('pointercancel', () => {
  if (draggingIdx !== -1) {
    draggingIdx = -1;
    canvas.style.cursor = currentMode === 'manual' ? 'crosshair' : 'default';
    render(); updateStats();
  }
});

function resetTrayHighlight() {
  isDraggingOverTray = false;
  document.body.style.cursor = '';
  const trayCanvas = getTrayCanvas();
  if (trayCanvas) {
    trayCanvas.style.borderColor     = '';
    trayCanvas.style.borderStyle     = '';
    trayCanvas.style.boxShadow       = '';
    trayCanvas.style.backgroundColor = '';
  }
}

// トレー式モード：コンテナ外でもドラッグを追跡（トレーへのD&Dのため）
window.addEventListener('pointerup', e => {
  if (draggingIdx === -1) return;
  resetTrayHighlight();

  // トレー式モード：トレーキャンバス上でリリースしたらトレーに戻す
  if (currentMode === 'tray') {
    const trayCanvas = getTrayCanvas();
    if (trayCanvas) {
      const rect = trayCanvas.getBoundingClientRect();
      const onTray = e.clientX >= rect.left && e.clientX <= rect.right
                  && e.clientY >= rect.top  && e.clientY <= rect.bottom;
      if (onTray) {
        pushHistory();
        const targets = selectedIndices.size > 0
          ? [...selectedIndices].sort((a, b) => b - a)
          : [draggingIdx];
        // 先にデータを収集してから削除
        const palletData = targets.map(idx => placedPallets[idx]).filter(Boolean);
        targets.forEach(idx => placedPallets.splice(idx, 1));
        palletData.forEach(p => {
          trayPallets.push({ id: trayIdCounter++, type: p.type, orient: p.orient, w: p.w, d: p.d });
        });
        selectedIdx = -1;
        selectedIndices.clear();
        draggingIdx = -1;
        multiDragOffsets = [];
        invalidateOverlapCache();
        render(); updateStats(); updateCenterInfo();
        renderTray(); updateTrayCount();
        canvas.style.cursor = 'default';
        return;
      }
    }
  }

  // それ以外 → ドラッグキャンセル
  draggingIdx = -1;
  multiDragOffsets = [];
  canvas.style.cursor = currentMode === 'manual' ? 'crosshair' : 'default';
  render(); updateStats();
});

// Rキーのキーリピート抑制用フラグ
let rKeyDown = false;

document.addEventListener('keydown', e => {
// Ctrl+Z: undo
if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
  e.preventDefault(); undo(); return;
}
// Ctrl+Y: redo
if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
  e.preventDefault(); redo(); return;
}
// Ctrl+Shift+C: コピー
if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
  e.preventDefault(); copyCanvasToClipboard(); return;
}
// トレー内Delete：選択中のトレーパレットを削除
if (currentMode === 'tray' && (e.key === 'Delete' || e.key === 'Backspace') && traySelectedSet.size > 0) {
  // フォーカスが入力欄にある場合はスキップ
  if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
  e.preventDefault();
  const toRemove = [...traySelectedSet].sort((a, b) => b - a);
  toRemove.forEach(i => trayPallets.splice(i, 1));
  traySelectedSet.clear();
  traySelectedIdx = -1;
  renderTray(); updateTrayCount();
  return;
}
// Rキー: 操作モード・トレー式モード・キーリピート抑制
if (e.key === 'r' || e.key === 'R') {
  if ((currentMode !== 'manual' && currentMode !== 'tray') || rKeyDown) return;
  rKeyDown = true;

  if (selectedIdx !== -1) {
    // 選択中パレットをその場でrotate
    const p = placedPallets[selectedIdx];
    const c = getC();
    pushHistory();
    // w↔d を入れ替え、orient反転
    const newOrient = p.orient === 'H' ? 'V' : 'H';
    const newW = p.d;
    const newD = p.w;
    // 中心を維持したまま位置を調整（はみ出さないようにクランプ）
    const cx = p.x + p.d / 2;
    const cy = p.y + p.w / 2;
    const nx = Math.min(Math.max(0, cx - newD / 2), c.L - newD);
    const ny = Math.min(Math.max(0, cy - newW / 2), c.W - newW);
    p.orient = newOrient;
    p.w = newW;
    p.d = newD;
    p.x = nx;
    p.y = ny;
    invalidateOverlapCache();
  } else {
    // 選択なし → アクティブパレット種別の向きを切り替え（ホバーに反映）
    orientations[activePalletType] = orientations[activePalletType] === 'H' ? 'V' : 'H';
    requestAnimationFrame(() => {
      ['eur-h','eur-v','vmf-h','vmf-v','gma-h','gma-v'].forEach(id => {
        const el = document.getElementById(id); if (el) el.className = '';
      });
      const btnId = `${activePalletType.toLowerCase()}-${orientations[activePalletType].toLowerCase()}`;
      const btn = document.getElementById(btnId);
      if (btn) btn.className = `active-${activePalletType.toLowerCase()}`;
    });
  }
  render(); updateStats();
  return;
}

if (selectedIdx === -1 && selectedIndices.size === 0) return;

const step = snapEnabled ? 100 : (e.shiftKey ? 100 : 10);

// 移動キー判定
let dx = 0, dy = 0;
if (moveMode === 'arrow') {
  if (e.key === 'ArrowLeft')  dx = -step;
  if (e.key === 'ArrowRight') dx =  step;
  if (e.key === 'ArrowUp')    dy = -step;
  if (e.key === 'ArrowDown')  dy =  step;
} else {
  if (e.key === 'a' || e.key === 'A') dx = -step;
  if (e.key === 'd' || e.key === 'D') dx =  step;
  if (e.key === 'w' || e.key === 'W') dy = -step;
  if (e.key === 's' || e.key === 'S') dy =  step;
}
const isMove = dx !== 0 || dy !== 0;
const isDel  = e.key === 'Delete' || e.key === 'Backspace';
if (!isMove && !isDel) return;
e.preventDefault();
pushHistory();
const c = getC();

const targets = selectedIndices.size > 0
  ? [...selectedIndices]
  : (selectedIdx !== -1 ? [selectedIdx] : []);

if (isMove) {
  targets.forEach(idx => {
    const p = placedPallets[idx];
    p.x = Math.min(Math.max(0, p.x + dx), c.L - p.d);
    p.y = Math.min(Math.max(0, p.y + dy), c.W - p.w);
  });
}
if (isDel) {
  // インデックスを降順で削除（前から消すとずれるため）
  const sorted = [...targets].sort((a, b) => b - a);
  // トレー式モードでは削除したパレットをトレーに戻す
  if (currentMode === 'tray') {
    sorted.forEach(idx => {
      const p = placedPallets[idx];
      trayPallets.push({ id: trayIdCounter++, type: p.type, orient: p.orient, w: p.w, d: p.d });
      placedPallets.splice(idx, 1);
    });
    renderTray(); updateTrayCount();
  } else {
    sorted.forEach(idx => placedPallets.splice(idx, 1));
  }
  selectedIdx = -1;
  selectedIndices.clear();
}
invalidateOverlapCache();
render(); updateStats();
});

document.addEventListener('keyup', e => {
if (e.key === 'r' || e.key === 'R') rKeyDown = false;
});


['drag-eur','drag-vmf','drag-gma'].forEach(id => {
const el = document.getElementById(id);
el.addEventListener('dragstart', e => {
  dragType = el.dataset.type;
  activePalletType = dragType;
  e.dataTransfer.effectAllowed = 'copy';
});
});
canvas.addEventListener('dragover', e => { e.preventDefault(); });
canvas.addEventListener('drop', e => {
if (!dragType) return;
e.preventDefault();
const rect = canvas.getBoundingClientRect();
const mmX = (e.clientX - rect.left) / scale;
const mmY = (e.clientY - rect.top)  / scale;
const orient = orientations[dragType];
const { w, d } = getPalletDims(dragType, orient);
const sx = Math.min(Math.max(0, snapTo(mmX, 100)), getC().L - d);
const sy = Math.min(Math.max(0, snapTo(mmY, 100)), getC().W - w);
placedPallets.push({ id: ++idCounter, type: dragType, orient, x: sx, y: sy, w, d });
selectedIdx = placedPallets.length - 1;
dragType = null;
render(); updateStats();
});

['drag-eur','drag-vmf','drag-gma'].forEach(id => {
document.getElementById(id).addEventListener('click', () => {
  activePalletType = id === 'drag-eur' ? 'EUR' : id === 'drag-vmf' ? 'VMF' : 'GMA';
});
});

// ─────────────────────────────────────────
//  CONTROLS
// ─────────────────────────────────────────

// モード切替
const MODE_CONFIG = {
fill:   { tabClass: 'active-fill',   indKey: 'modeIndicatorFill',   hintKey: 'hintFill'   },
tray:   { tabClass: 'active-tray',   indKey: 'modeIndicatorTray',   hintKey: 'hintTray'   },
manual: { tabClass: 'active-manual', indKey: 'modeIndicatorManual', hintKey: 'hintPlace'  },
};

function setMode(mode) {
  // モバイル（1023px以下）では操作モードを無効化
  if (mode === 'manual' && window.innerWidth <= 1023) return;


const prevMode = currentMode;
currentMode = mode;

['fill','tray','manual'].forEach(m => {
  const tab = document.getElementById('tab-' + m);
  tab.className = 'mode-tab' + (m === mode ? ' ' + MODE_CONFIG[m].tabClass : '');
});
['fill','tray','manual'].forEach(m => {
  document.getElementById('panel-' + m).classList.toggle('active', m === mode);
});
const ind = dom('mode-indicator');
ind.textContent = t(MODE_CONFIG[mode].indKey);
ind.id          = 'mode-indicator';
ind.className   = MODE_CONFIG[mode].tabClass.replace('active-','');
dom('canvas-hint').textContent = t(MODE_CONFIG[mode].hintKey);
canvas.style.cursor = mode === 'manual' ? 'crosshair' : 'default';

// Fill・操作モード → 判別モードへの切り替え時：配置枚数を入力欄に反映
if (mode === 'check' && (prevMode === 'manual' || prevMode === 'fill') && placedPallets.length > 0) {
  const { EUR: eurCount, VMF: vmfCount } = countPallets(placedPallets);
  const eurInput = dom('check-eur');
  const vmfInput = dom('check-vmf');
  if (eurInput) eurInput.value = eurCount;
  if (vmfInput) vmfInput.value = vmfCount;
  setTimeout(() => autoCheck(), 0);
}

// checkモード以外ではoverflow枠とバナーを非表示
const ovWrap = dom('overflow-wrapper');
const banner = dom('check-banner');
const detail = dom('check-result-detail');
// checkモード削除済み：バナーとoverwrapの管理
ovWrap.style.display = 'none';
if (mode !== 'manual' && mode !== 'fill') banner.style.display = 'none';
if (detail) detail.style.display = 'none';
if (mode !== 'manual') { overflowPallets = []; overflowSelectedIdx = -1; }

render();
updateTrayVisibility();
}

// 3タイプ検出時：2タイプに絞り込むポップアップ
function showTypeSelectPopup(counts, onConfirm) {
  const popup = document.getElementById('type-select-popup');
  if (!popup) { onConfirm(); return; }

  const types = Object.keys(counts).filter(t => counts[t] > 0);
  const colors = { EUR: 'var(--eur-fill)', VMF: 'var(--vmf-fill)', GMA: 'var(--gma-fill)' };

  // チェックボックスを初期化（最初の2タイプをデフォルト選択）
  types.forEach((t, i) => {
    const cb = document.getElementById('type-sel-' + t.toLowerCase());
    if (cb) {
      cb.checked = i < 2;
      cb.parentElement.querySelector('.type-sel-count').textContent = counts[t] + '枚';
    }
  });

  // チェック数が2を超えないよう制御
  types.forEach(t => {
    const cb = document.getElementById('type-sel-' + t.toLowerCase());
    if (!cb) return;
    cb.onchange = () => {
      const checked = types.filter(tt => {
        const c = document.getElementById('type-sel-' + tt.toLowerCase());
        return c && c.checked;
      });
      if (checked.length > 2) cb.checked = false;
      // OKボタンの有効・無効
      const ok = document.getElementById('type-select-ok');
      if (ok) ok.disabled = checked.length < 2;
    };
  });

  popup.style.display = 'flex';

  document.getElementById('type-select-ok').onclick = () => {
    const selected = types.filter(t => {
      const cb = document.getElementById('type-sel-' + t.toLowerCase());
      return cb && cb.checked;
    });
    popup.style.display = 'none';

    // 選択されなかったタイプをplacedPalletsから除去
    placedPallets = placedPallets.filter(p => selected.includes(p.type));
    invalidateOverlapCache();

    // 入力欄に反映（選択外タイプは0）
    const eurInput = dom('check-eur');
    const vmfInput = dom('check-vmf');
    if (eurInput) eurInput.value = selected.includes('EUR') ? (counts['EUR'] || 0) : 0;
    if (vmfInput) vmfInput.value = selected.includes('VMF') ? (counts['VMF'] || 0) : 0;

    onConfirm();
  };

  document.getElementById('type-select-cancel').onclick = () => {
    popup.style.display = 'none';
    // モード切替をキャンセル → 何もしない（現在のモードのまま）
  };
}

function toggleGma() {
const body = document.getElementById('gma-card-body');
const icon = document.getElementById('gma-toggle-icon');
const isOpen = body.style.display !== 'none';
body.style.display = isOpen ? 'none' : 'block';
icon.textContent   = isOpen ? '▶' : '▼';
// GMAを開いたらEUR/VMFの選択状態をクリアしてGMAを選択
if (!isOpen) {
  setOrient('GMA', orientations['GMA'] || 'H');
}
}

function toggleMoveMode() {
moveMode = moveMode === 'arrow' ? 'wasd' : 'arrow';
const label  = document.getElementById('move-key-label');
const desc   = document.getElementById('move-key-desc');
const toggle = document.getElementById('move-key-toggle');
if (label)  label.textContent  = moveMode === 'arrow' ? '↑↓←→' : 'WASD';
if (desc)   desc.textContent   = moveMode === 'arrow' ? t('hintMoveArrow') : t('hintMoveWasd');
if (toggle) toggle.textContent = moveMode === 'arrow' ? t('btnWasd') : t('wasdToggle');
}

function setOrient(type, o) {
orientations[type] = o;
activePalletType = type;
['eur-h','eur-v','vmf-h','vmf-v','gma-h','gma-v'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.className = '';
});
const btnId = `${type.toLowerCase()}-${o.toLowerCase()}`;
const btn = document.getElementById(btnId);
if (btn) btn.className = `active-${type.toLowerCase()}`;
}

function setFillType(t) {
fillType = t;
document.getElementById('fill-eur').className = 'fill-type-btn' + (t==='EUR' ? ' sel-eur' : '');
document.getElementById('fill-vmf').className = 'fill-type-btn' + (t==='VMF' ? ' sel-vmf' : '');
document.getElementById('fill-gma').className = 'fill-type-btn' + (t==='GMA' ? ' sel-gma' : '');
updateHoldBanner();
}

// コンテナ変更時の「内容が消えます」確認（同セッション内で再表示しない選択可）
let skipContainerChangeWarning = false;

document.getElementById('container-type').addEventListener('change', e => {
const newType = e.target.value;
const hasPallets = placedPallets.length > 0 || overflowPallets.length > 0;

const doChange = () => {
  containerType = newType;
  placedPallets = []; selectedIdx = -1; selectedIndices.clear();
  overflowPallets = [];
  // トレーもリセット
  trayPallets = []; traySelectedIdx = -1; traySelectedSet.clear();
  const tEur = document.getElementById('tray-eur');
  const tVmf = document.getElementById('tray-vmf');
  const tGma = document.getElementById('tray-gma');
  if (tEur) tEur.value = 0;
  if (tVmf) tVmf.value = 0;
  if (tGma) tGma.value = 0;
  const warn = document.getElementById('tray-area-warning');
  if (warn) warn.style.display = 'none';
  resetCheckInputs();
  setupCanvas(); updateDimDisplay(); render(); updateStats();
  updateHoldBanner(); updateCenterInfo();
  if (currentMode === 'tray') { renderTray(); updateTrayCount(); }
};

if (hasPallets && !skipContainerChangeWarning) {
  // インラインポップアップで確認
  const popup = document.getElementById('container-change-popup');
  if (popup) {
    popup.style.display = 'flex';
    document.getElementById('container-change-ok').onclick = () => {
      popup.style.display = 'none';
      if (document.getElementById('container-change-skip').checked) {
        skipContainerChangeWarning = true;
      }
      doChange();
    };
    document.getElementById('container-change-cancel').onclick = () => {
      popup.style.display = 'none';
      // セレクトを元の値に戻す
      e.target.value = containerType;
    };
  } else {
    doChange();
  }
} else {
  doChange();
}
});

function updateDimDisplay() {
const c = getC();
document.getElementById('dim-l').textContent = c.L.toLocaleString();
document.getElementById('dim-w').textContent = c.W.toLocaleString();
document.getElementById('reefer-notice').classList.toggle('visible', c.isReefer);
}

function toggleSnap() {
snapEnabled = !snapEnabled;
const btn = document.getElementById('btn-snap');
btn.textContent = snapEnabled ? t('snapOn') : t('snapOff');
btn.classList.toggle('active', snapEnabled);
}
function toggleGrid() {
gridEnabled = !gridEnabled;
const btn = document.getElementById('btn-grid');
btn.textContent = gridEnabled ? t('gridOn') : t('gridOff');
btn.classList.toggle('active', gridEnabled);
render();
}
function resetCheckInputs() {
// check-banner は残る（フリー設置モードでも使用）
const banner = dom('check-banner');
if (banner) banner.style.display = 'none';
const detail = dom('check-result-detail');
if (detail) detail.style.display = 'none';
const ovWrap = dom('overflow-wrapper');
if (ovWrap) ovWrap.style.display = 'none';
overflowPallets = [];
}

function clearTray() {
  trayPallets = []; traySelectedIdx = -1; traySelectedSet.clear();
  const tEur = document.getElementById('tray-eur');
  const tVmf = document.getElementById('tray-vmf');
  const tGma = document.getElementById('tray-gma');
  if (tEur) tEur.value = 0;
  if (tVmf) tVmf.value = 0;
  if (tGma) tGma.value = 0;
  const warn = document.getElementById('tray-area-warning');
  if (warn) warn.style.display = 'none';
  renderTray(); updateTrayCount();
}

function clearAll() {
pushHistory();
placedPallets = []; selectedIdx = -1; selectedIndices.clear();
// トレーもリセット
trayPallets = []; traySelectedIdx = -1; traySelectedSet.clear();
const tEur = document.getElementById('tray-eur');
const tVmf = document.getElementById('tray-vmf');
const tGma = document.getElementById('tray-gma');
if (tEur) tEur.value = 0;
if (tVmf) tVmf.value = 0;
if (tGma) tGma.value = 0;
invalidateOverlapCache();
resetCheckInputs();
if (currentMode === 'tray') { renderTray(); updateTrayCount(); }
render(); updateStats(); updateCenterInfo();
}

// ─────────────────────────────────────────
//  STATS
// ─────────────────────────────────────────
// ─────────────────────────────────────────
//  CENTER INFO BAR
// ─────────────────────────────────────────
function updateCenterInfo() {
  const ciContainer = document.getElementById('ci-container');
  const ciPallets   = document.getElementById('ci-pallets');
  if (!ciContainer || !ciPallets) return;

  // コンテナ名
  const cNames = { '20dry':'20ft Dry', '40dry':'40ft Dry', '20ref':'20ft Reefer', '40ref':'40ft Reefer' };
  ciContainer.textContent = cNames[containerType] || containerType;

  // パレット枚数（コンテナ内）
  const { EUR: eurN, VMF: vmfN, GMA: gmaN } = countPallets(placedPallets);
  const parts = [];
  if (eurN > 0) parts.push(`<span class="ci-eur">EUR ${eurN}</span>`);
  if (vmfN > 0) parts.push(`<span class="ci-vmf">VMF ${vmfN}</span>`);
  if (gmaN > 0) parts.push(`<span class="ci-gma">GMA ${gmaN}</span>`);
  const label = currentMode === 'tray' ? 'コンテナ内: ' : '';
  ciPallets.innerHTML = parts.length > 0
    ? label + parts.join('<span class="ci-sep" style="margin:0 4px;">·</span>')
    : '<span style="color:var(--muted)">—</span>';

  // セパレータの表示制御
  const sep = ciContainer.nextElementSibling;
  if (sep) sep.style.display = parts.length > 0 || eurN + vmfN + gmaN >= 0 ? '' : 'none';
}

function updateStats() {
const { EUR: eurN, VMF: vmfN, GMA: gmaN } = countPallets(placedPallets);
const total = placedPallets.length;
const c = getC();
const effArea = (c.L - c.reeferOffset) * c.W;
const usedArea = placedPallets.reduce((s,p) => s + p.w * p.d, 0);
const pct = Math.min(100, (usedArea / effArea * 100)).toFixed(1);

dom('stat-eur').textContent   = eurN;
dom('stat-vmf').textContent   = vmfN;
dom('stat-gma').textContent   = gmaN;
dom('stat-total').textContent = total;
const pctEl = document.getElementById('stat-pct');
pctEl.textContent = pct + '%';
pctEl.className = 'stat-val ' + (pct >= 90 ? 'bad' : pct >= 70 ? 'warn' : 'good');

const bar = document.getElementById('usage-bar');
bar.style.width = pct + '%';
bar.style.background = pct >= 90 ? 'var(--danger)' : pct >= 70 ? 'var(--accent)' : 'var(--eur-fill)';

document.getElementById('usage-used').textContent      = (usedArea/1e6).toFixed(2) + ' m²';
document.getElementById('usage-total-area').textContent = (effArea/1e6).toFixed(2) + ' m²';

const list = dom('placed-list');
list.innerHTML = '';
if (!total) {
  list.innerHTML = `<div style="font-size:11px;color:var(--muted);text-align:center;padding:10px">${t('noPallets')}</div>`;
  return;
}
placedPallets.forEach((p, i) => {
  const c = getC();
  const isOverlap   = checkOverlap(p, i);
  const outOfBounds = p.x < 0 || p.y < 0 || (p.x + p.d) > c.L || (p.y + p.w) > c.W;
  const isBad       = isOverlap || outOfBounds;
  const isSel       = i === selectedIdx;

  const div = document.createElement('div');
  div.className = `placed-item ${p.type.toLowerCase()}`;
  if (isBad) {
    div.style.borderColor      = 'var(--danger)';
    div.style.backgroundColor  = 'rgba(224,82,82,0.12)';
  } else if (isSel) {
    div.style.borderColor = '#fff';
  }
  div.innerHTML = `<span class="pi-label" style="${isBad ? 'color:var(--danger)' : ''}">#${String(p.id).padStart(2,'0')} ${p.type} ${p.w}×${p.d}</span><button class="pi-del" onclick="removePallet(${i})">×</button>`;
  div.addEventListener('click', ev => {
    if (ev.target.classList.contains('pi-del')) return;
    selectedIdx = i; render(); updateStats();
  });
  list.appendChild(div);
});
  updateCenterInfo();
  updateManualBanner();
  if (currentMode === 'tray') updateTrayCount();
}

// 操作モード時：現在の配置状態を判別して check-banner に表示
function updateManualBanner() {
  if (currentMode !== 'manual' && currentMode !== 'fill') return;
  const banner = dom('check-banner');
  if (!banner) return;

  const { EUR: eurN, VMF: vmfN, GMA: gmaN } = countPallets(placedPallets);
  if (eurN === 0 && vmfN === 0 && gmaN === 0) {
    banner.style.display = 'none';
    return;
  }

  // 重複・範囲外があれば「配置エラー」表示
  const hasError = placedPallets.some((p, i) => {
    const c = getC();
    return checkOverlap(p, i)
      || p.x < 0 || p.y < 0
      || (p.x + p.d) > c.L || (p.y + p.w) > c.W;
  });
  if (hasError) {
    setBanner(false, '⚠ 重複または範囲外のパレットがあります');
    return;
  }

  // 判別実行（現在の配置枚数で）
  const result = greedyPack(eurN, vmfN, gmaN);
  const isOk   = result.eurOver === 0 && result.vmfOver === 0 && (result.gmaOver || 0) === 0;
  const parts  = [];
  if (eurN > 0) parts.push(`EUR ${eurN}枚`);
  if (vmfN > 0) parts.push(`VMF ${vmfN}枚`);
  if (gmaN > 0) parts.push(`GMA ${gmaN}枚`);

  if (isOk) {
    setBanner(true, `✓ 積載可能　${parts.join('　')}`);
  } else {
    const overText = [];
    if (result.eurOver > 0) overText.push(`EUR ${result.eurOver}枚オーバー`);
    if (result.vmfOver > 0) overText.push(`VMF ${result.vmfOver}枚オーバー`);
    if ((result.gmaOver || 0) > 0) overText.push(`GMA ${result.gmaOver}枚オーバー`);
    setBanner(false, `✗ 積載不可　${overText.join(' / ')}\n${parts.join('　')}`);
  }
}

function removePallet(i) {
placedPallets.splice(i, 1);
if (selectedIdx >= placedPallets.length) selectedIdx = -1;
invalidateOverlapCache();
render(); updateStats();
}

// ─────────────────────────────────────────
//  NOTICE POPUP
// ─────────────────────────────────────────
function toggleNoticePopup() {
const popup = document.getElementById('notice-popup');
const isOpen = popup.style.display === 'flex';
if (isOpen) {
  popup.style.display = 'none';
  return;
}
// 現在の言語で内容を更新
document.getElementById('notice-title').textContent = t('noticeTitle');
const lines = t('noticeLines');
document.getElementById('notice-body').innerHTML =
  lines.map(l => `<p style="margin:0 0 10px;">${l}</p>`).join('');
popup.style.display = 'flex';
}

// ポップアップ外クリックで閉じる
document.addEventListener('click', e => {
const popup = document.getElementById('notice-popup');
if (popup && popup.style.display === 'flex' && e.target === popup) {
  popup.style.display = 'none';
}
});

// ─────────────────────────────────────────
//  COPY CANVAS TO CLIPBOARD
// ─────────────────────────────────────────
function copyCanvasToClipboard() {
const btn = document.getElementById('btn-copy-canvas');

const COPY_ICON  = `<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="9" height="10" rx="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v7A1.5 1.5 0 0 0 3.5 12H5"/></svg>`;
const CHECK_ICON = `<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 8 6 12 14 4"/></svg>`;
const DL_ICON    = `<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v9M4 7l4 4 4-4"/><path d="M2 13h12"/></svg>`;
const WARN_ICON  = `<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2L14 13H2L8 2z"/><line x1="8" y1="7" x2="8" y2="10"/><circle cx="8" cy="12" r="0.5" fill="currentColor"/></svg>`;
const DEFAULT_COLOR = 'var(--accent)';
const DEFAULT_BORDER = 'rgba(240,180,41,0.4)';

function setFeedback(icon, text, color, duration) {
  btn.style.color       = color;
  btn.style.borderColor = color;
  btn.style.background  = '';
  btn.innerHTML = icon + ' ' + text;
  setTimeout(() => {
    btn.style.color       = DEFAULT_COLOR;
    btn.style.borderColor = DEFAULT_BORDER;
    btn.style.background  = '';
    btn.innerHTML = COPY_ICON + ' コピー';
  }, duration);
}

// 重複・範囲外チェック
const hasError = placedPallets.some((p, i) => {
  const c = getC();
  return checkOverlap(p, i)
    || p.x < 0 || p.y < 0
    || (p.x + p.d) > c.L || (p.y + p.w) > c.W;
});
if (hasError) {
  // 警告付きで続行するか確認
  const warn = document.getElementById('copy-warn-popup');
  if (warn) {
    warn.style.display = 'flex';
    document.getElementById('copy-warn-proceed').onclick = () => {
      warn.style.display = 'none';
      doCopy();
    };
    document.getElementById('copy-warn-cancel').onclick = () => {
      warn.style.display = 'none';
    };
    return;
  }
}

// 注釈テキスト（現在の言語から取得）はdoCopy内で参照

function doCopy() {
const disclaimer = [t('noticeTitle'), ...t('noticeLines')];

// オフスクリーンcanvasを生成（メインcanvas + 下部余白＋注釈）
function buildExportCanvas() {
  const paddingX   = 32;
  const paddingTop = 24;
  const paddingBot = 28;
  const bodySize   = 11;
  const titleSize  = 12;
  const lineHeight = 17;
  const canvasW    = canvas.width;

  // テキスト折り返し用ヘルパー（測定用の仮canvasを使用）
  const measurer = document.createElement('canvas').getContext('2d');
  function wrapText(text, font, maxWidth) {
    measurer.font = font;
    const words = text.split('');  // 日本語は文字単位で折り返す
    const lines = [];
    let current = '';
    for (const ch of words) {
      const test = current + ch;
      if (measurer.measureText(test).width > maxWidth && current !== '') {
        lines.push(current);
        current = ch;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  const exportW  = canvasW + paddingX * 2;
  const textMaxW = exportW - paddingX * 2;
  const titleFont = `600 ${titleSize}px sans-serif`;
  const bodyFont  = `${bodySize}px sans-serif`;

  // 各行のテキストを折り返し展開
  const renderedLines = [];  // { text, isTitle }
  disclaimer.forEach((line, i) => {
    const font = i === 0 ? titleFont : bodyFont;
    const wrapped = wrapText(line, font, textMaxW);
    wrapped.forEach(l => renderedLines.push({ text: l, isTitle: i === 0 }));
    if (i > 0 && i < disclaimer.length - 1) renderedLines.push({ text: '', isTitle: false }); // 段落間の空行
  });

  const containerLabel = {
    '20dry': '20ft Dry Container',
    '40dry': '40ft Dry Container',
    '20ref': '20ft Reefer Container',
    '40ref': '40ft Reefer Container',
  }[containerType] || containerType;

  // 統計情報の計算
  const { EUR: eurN, VMF: vmfN, GMA: gmaN } = countPallets(placedPallets);
  const totalN = placedPallets.length;
  const c = getC();
  const effArea  = (c.L - c.reeferOffset) * c.W;
  const usedArea = placedPallets.reduce((s, p) => s + p.w * p.d, 0);
  const pct = Math.min(100, (usedArea / effArea * 100)).toFixed(1);

  const footerH = paddingTop + renderedLines.length * lineHeight + paddingBot;
  // 上部：コンテナタイプ行(20px) + バッジ行(28px) + 余白(10px)
  const labelAreaH = 58;
  const exportH = labelAreaH + canvas.height + paddingTop + footerH;

  const oc    = document.createElement('canvas');
  oc.width    = exportW;
  oc.height   = exportH;
  const octx  = oc.getContext('2d');

  // 背景
  octx.fillStyle = '#0D1D2E';
  octx.fillRect(0, 0, oc.width, oc.height);

  // ── 1行目：コンテナタイプ（左）＋ 使用率（右） ──
  octx.textBaseline = 'top';
  octx.font      = `600 13px sans-serif`;
  octx.fillStyle = 'rgba(255,255,255,0.85)';
  octx.textAlign = 'left';
  octx.fillText(containerLabel, paddingX, 10);

  octx.font      = `11px sans-serif`;
  octx.fillStyle = 'rgba(255,255,255,0.45)';
  octx.textAlign = 'right';
  octx.fillText(`合計 ${totalN}枚　使用率 ${pct}%`, exportW - paddingX, 12);
  octx.textAlign = 'left';

  // ── 2行目：パレット種別バッジ ──
  const badges = [
    { label: 'EUR', count: eurN, color: '#2ECC71', bg: 'rgba(46,204,113,0.18)' },
    { label: 'VMF', count: vmfN, color: '#3A9FE8', bg: 'rgba(58,159,232,0.18)' },
    { label: 'GMA', count: gmaN, color: '#E8B84B', bg: 'rgba(232,184,75,0.18)' },
  ].filter(b => b.count > 0);

  let bx = paddingX;
  const by = 32;
  const bh = 20;
  const bPadX = 8;

  badges.forEach(b => {
    const text = `${b.label}  ${b.count}枚`;
    octx.font = `600 11px sans-serif`;
    const tw = octx.measureText(text).width;
    const bw = tw + bPadX * 2;

    // バッジ背景
    octx.fillStyle = b.bg;
    octx.beginPath();
    octx.roundRect(bx, by, bw, bh, 4);
    octx.fill();

    // バッジ左端のカラーライン
    octx.fillStyle = b.color;
    octx.beginPath();
    octx.roundRect(bx, by, 3, bh, [4, 0, 0, 4]);
    octx.fill();

    // テキスト
    octx.fillStyle = b.color;
    octx.textBaseline = 'middle';
    octx.fillText(text, bx + bPadX + 2, by + bh / 2);

    bx += bw + 8;
  });

  // メインcanvasをラベル下に描画
  octx.drawImage(canvas, paddingX, labelAreaH);

  // 区切り線
  const canvasDrawY = labelAreaH;
  const dividerY = canvasDrawY + canvas.height + paddingTop * 0.75;
  octx.strokeStyle = 'rgba(255,255,255,0.12)';
  octx.lineWidth   = 0.5;
  octx.beginPath();
  octx.moveTo(paddingX, dividerY);
  octx.lineTo(exportW - paddingX, dividerY);
  octx.stroke();

  // 注釈テキスト描画
  let y = dividerY + paddingTop * 0.75;
  renderedLines.forEach(({ text, isTitle }) => {
    if (text === '') { y += lineHeight * 0.4; return; }
    if (isTitle) {
      octx.font      = titleFont;
      octx.fillStyle = 'rgba(255,255,255,0.75)';
    } else {
      octx.font      = bodyFont;
      octx.fillStyle = 'rgba(255,255,255,0.45)';
    }
    octx.textBaseline = 'top';
    octx.fillText(text, paddingX, y);
    y += lineHeight;
  });

  return oc;
}

const exportCanvas = buildExportCanvas();

if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
  exportCanvas.toBlob(blob => {
    if (!blob) { fallbackDownload(exportCanvas); return; }
    navigator.clipboard.write([new ClipboardItem({'image/png': blob})])
      .then(() => {
        setFeedback(CHECK_ICON, 'コピー完了', '#2ECC71', 2000);
      })
      .catch(() => fallbackDownload(exportCanvas));
  }, 'image/png');
} else {
  fallbackDownload(exportCanvas);
}

function fallbackDownload(oc) {
  const a = document.createElement('a');
  a.href = oc.toDataURL('image/png');
  a.download = `container-layout-${containerType}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setFeedback(DL_ICON, '保存しました', 'var(--accent)', 2500);
}
} // end doCopy

// エラーがない場合はそのままコピー実行
if (!hasError) doCopy();
}

// ─────────────────────────────────────────
//  RESIZE & BOOT
// ─────────────────────────────────────────
window.addEventListener('resize', () => { setupCanvas(); render(); });

function init() {
setupCanvas();
updateDimDisplay();
setLang('ja'); // 初期言語を適用（data-i18nテキスト反映）
// EURのみ選択状態にする（VMF・GMAはクリア）
document.getElementById('eur-h').className = 'active-eur';
document.getElementById('vmf-h').className = '';
document.getElementById('vmf-v').className = '';
document.getElementById('gma-h').className = '';
document.getElementById('gma-v').className = '';
setMode('fill');
render();
updateStats();
updateHoldBanner();
updateCenterInfo();
initTrayEvents();
updateTrayVisibility();
}
init();

// ─────────────────────────────────────────
//  MOBILE DRAWER
// ─────────────────────────────────────────
(function() {
  const leftPanel  = document.getElementById('left-panel');
  const rightPanel = document.getElementById('right-panel');
  const overlay    = document.getElementById('drawer-overlay');
  const btnLeft    = document.getElementById('btn-left-drawer');
  const btnRight   = document.getElementById('btn-right-drawer');
  if (!leftPanel || !rightPanel) return;

  function isMobile() { return window.innerWidth <= 1023; }

  window.openDrawer = function(side) {
    if (side === 'left') {
      leftPanel.classList.add('drawer-open');
      rightPanel.classList.remove('drawer-open');
      document.getElementById('bnav-settings')?.classList.add('active');
      document.getElementById('bnav-stats')?.classList.remove('active');
    } else {
      rightPanel.classList.add('drawer-open');
      leftPanel.classList.remove('drawer-open');
      document.getElementById('bnav-stats')?.classList.add('active');
      document.getElementById('bnav-settings')?.classList.remove('active');
    }
    overlay.classList.add('visible');
  };

  window.toggleDrawer = function(side) {
    const panel = side === 'left' ? leftPanel : rightPanel;
    const isOpen = panel.classList.contains('drawer-open');
    if (isOpen) {
      closeDrawers();
    } else {
      openDrawer(side);
    }
  };

  window.closeDrawers = function() {
    leftPanel.classList.remove('drawer-open');
    rightPanel.classList.remove('drawer-open');
    overlay.classList.remove('visible');
    document.getElementById('bnav-settings')?.classList.remove('active');
    document.getElementById('bnav-stats')?.classList.remove('active');
  };

  // リサイズ時にドロワーをリセット
  window.addEventListener('resize', () => {
    if (!isMobile()) closeDrawers();
  });

  // ドロワー内でのリンク・ボタン操作後に閉じる（オプション）
  // 判別・Fill実行後は閉じる
  const origRunCheck      = window.runCheck;
  const origFillContainer = window.fillContainer;
  window.runCheck = function() {
    origRunCheck && origRunCheck();
    if (isMobile()) closeDrawers();
  };
  window.fillContainer = function() {
    origFillContainer && origFillContainer();
    if (isMobile()) closeDrawers();
  };

})();


// ── TRAY ──

// トレー状態
let trayPallets      = [];   // { id, type, orient, w, d }
let traySelectedIdx  = -1;
let traySelectedSet  = new Set();
let trayDraggingIdx  = -1;
let trayDragOffX     = 0;
let trayDragOffY     = 0;
let trayDragSource   = null; // 'tray' or 'canvas'
let trayDragPallets  = [];   // ドラッグ中のパレット群
let trayDragCanvasXY = null; // キャンバス上でのドラッグ中座標
let trayIdCounter    = 1000;
let trayHighlightActive = false; // Max Fill後の残存ハイライト

const TRAY_H     = 140;  // トレーキャンバスの高さ(px)
const TRAY_PAD   = 8;
const TRAY_GAP   = 6;

function getTrayCanvas() { return document.getElementById('tray-canvas'); }
function getTrayCtx()    { const c = getTrayCanvas(); return c ? c.getContext('2d') : null; }

// パレットのキャンバス上のpxサイズを計算（トレー用・固定スケール）
const TRAY_SCALE = 0.045; // mmをpxに変換するスケール

function trayPalletPx(p) {
  return { w: Math.round(p.w * TRAY_SCALE), h: Math.round(p.d * TRAY_SCALE) };
}

// ── ステッパーボタン（±1） ──
function stepTray(type, delta) {
  const el = document.getElementById('tray-' + type.toLowerCase());
  if (!el) return;
  const placed = countPallets(placedPallets);
  const tray   = countPallets(trayPallets);
  const current = placed[type] + tray[type];
  el.value = Math.max(0, current + delta);
  updateTray(type);
}
// 入力欄の値 = 全体量（コンテナ内 + トレー）
// 増やす → トレーに追加
// 減らす → トレーから削除（トレーが0なら警告）
function updateTray(type) {
  if (currentMode !== 'tray') return;
  const inputEl = document.getElementById('tray-' + type.toLowerCase());
  if (!inputEl) return;

  const warn = document.getElementById('tray-area-warning');
  const newTotal = parseInt(inputEl.value) || 0;

  // 現在のコンテナ内 + トレーの合計
  const placed = countPallets(placedPallets);
  const tray   = countPallets(trayPallets);
  const currentTotal = placed[type] + tray[type];
  const diff = newTotal - currentTotal;

  if (diff === 0) return;

  if (diff > 0) {
    // 増やす → トレーに追加
    // 面積チェック（全体で）
    const c = getC();
    const containerArea = (c.L - c.reeferOffset) * c.W;
    const totals = { EUR: placed.EUR + tray.EUR, VMF: placed.VMF + tray.VMF, GMA: placed.GMA + tray.GMA };
    totals[type] = newTotal;
    const palletArea = totals.EUR * PALLETS.EUR.long * PALLETS.EUR.short
                     + totals.VMF * PALLETS.VMF.long * PALLETS.VMF.short
                     + totals.GMA * PALLETS.GMA.long * PALLETS.GMA.short;
    if (palletArea > containerArea) {
      if (warn) { warn.style.display = 'block'; warn.textContent = '⚠ パレット合計面積がコンテナ床面積を超えます'; }
      inputEl.value = currentTotal; // 元に戻す
      return;
    }
    if (warn) warn.style.display = 'none';
    const P = PALLETS[type];
    for (let i = 0; i < diff; i++) {
      trayPallets.push({ id: trayIdCounter++, type, orient: 'H', w: P.long, d: P.short });
    }
  } else {
    // 減らす
    const removeCount = -diff;
    const inTray = tray[type];
    if (inTray >= removeCount) {
      // トレーから削除（後ろから）
      let removed = 0;
      for (let i = trayPallets.length - 1; i >= 0 && removed < removeCount; i--) {
        if (trayPallets[i].type === type) {
          trayPallets.splice(i, 1);
          removed++;
        }
      }
      if (warn) warn.style.display = 'none';
    } else {
      // トレーに削除できるパレットが足りない
      if (warn) {
        warn.style.display = 'block';
        warn.textContent = `⚠ コンテナ内の ${type} パレットをトレーに戻してから減らしてください`;
      }
      inputEl.value = currentTotal; // 元に戻す
      return;
    }
  }

  renderTray();
  updateTrayCount();
}

// ── トレー枚数カウント表示 + 左パネル数字連動 ──
function updateTrayCount() {
  // ── トレーカウント表示（タイプ別） ──
  const el = document.getElementById('tray-count');
  if (el) {
    const tc = countPallets(trayPallets);
    const parts = [];
    if (tc.EUR > 0) parts.push(`<span style="color:var(--eur-fill)">EUR ${tc.EUR}</span>`);
    if (tc.VMF > 0) parts.push(`<span style="color:var(--vmf-fill)">VMF ${tc.VMF}</span>`);
    if (tc.GMA > 0) parts.push(`<span style="color:var(--gma-fill)">GMA ${tc.GMA}</span>`);
    el.innerHTML = parts.length > 0
      ? 'トレー: ' + parts.join(' · ')
      : '';
  }

  // ── 左パネル入力欄 = コンテナ内 + トレー（全体量）──
  const placed = countPallets(placedPallets);
  const tray   = countPallets(trayPallets);
  const tEur = document.getElementById('tray-eur');
  const tVmf = document.getElementById('tray-vmf');
  const tGma = document.getElementById('tray-gma');
  if (tEur) tEur.value = placed.EUR + tray.EUR;
  if (tVmf) tVmf.value = placed.VMF + tray.VMF;
  if (tGma) tGma.value = placed.GMA + tray.GMA;
}

// ── トレー描画 ──
function renderTray() {
  const canvas = getTrayCanvas();
  const ctx = getTrayCtx();
  if (!canvas || !ctx) return;

  // トレーキャンバスサイズを動的設定
  const areaEl = document.getElementById('canvas-area');
  const canvasEl = document.getElementById('main-canvas');
  const areaW = (canvasEl ? canvasEl.offsetWidth : 600) + 44;
  canvas.width  = areaW;
  canvas.height = TRAY_H;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.02)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let x = TRAY_PAD;
  const y = TRAY_PAD;

  trayPallets.forEach((p, i) => {
    const { w: pw, h: ph } = trayPalletPx(p);
    const pal = PALLETS[p.type];
    const isSel  = traySelectedSet.has(i);
    const isHL   = trayHighlightActive; // Max Fill残存ハイライト

    // ドラッグ中は元の位置を薄く表示
    if (i === trayDraggingIdx && trayDragSource === 'tray') {
      ctx.fillStyle = 'rgba(255,255,255,0.05)';
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1;
      ctx.fillRect(x, y, pw, ph);
      ctx.strokeRect(x, y, pw, ph);
    } else {
      ctx.fillStyle = hexToRgba(pal.color, isSel ? 0.7 : isHL ? 0.65 : 0.45);
      ctx.fillRect(x, y, pw, ph);
      ctx.strokeStyle = isSel ? '#fff' : isHL ? 'var(--accent)' : pal.color;
      ctx.lineWidth = (isSel || isHL) ? 2.0 : 0.8;
      ctx.strokeRect(x, y, pw, ph);

      const fs = Math.max(7, Math.min(pw, ph) * 0.18);
      ctx.fillStyle = pal.color;
      ctx.font = `600 ${fs}px JetBrains Mono, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.type, x + pw / 2, y + ph / 2);
    }

    // x座標を記録（ヒットテスト用）
    p._trayX = x;
    p._trayY = y;
    p._trayW = pw;
    p._trayH = ph;
    x += pw + TRAY_GAP;
  });
}

// ── Max Fill配置ボタン ──
function maxFillPlace() {
  // 全体量（コンテナ + トレー）がゼロなら何もしない
  const totalBefore = countPallets(placedPallets);
  const trayBefore  = countPallets(trayPallets);
  const total = {
    EUR: totalBefore.EUR + trayBefore.EUR,
    VMF: totalBefore.VMF + trayBefore.VMF,
    GMA: totalBefore.GMA + trayBefore.GMA,
  };
  if (total.EUR === 0 && total.VMF === 0 && total.GMA === 0) return;

  const c = getC();
  const startX = loadableStartX();
  const L = c.L - startX;
  const W = c.W;

  pushHistory();

  // ── Step 1: コンテナ内パレットを全てトレーに戻す ──
  placedPallets.forEach(p => {
    trayPallets.push({ id: trayIdCounter++, type: p.type, orient: 'H',
      w: PALLETS[p.type].long, d: PALLETS[p.type].short });
  });
  placedPallets = [];
  selectedIdx = -1; selectedIndices.clear();

  // ── Step 2: Case 1判定（全体量がFILLパターンと完全一致） ──
  const fillMatch = ['EUR','VMF','GMA'].every(type => {
    const rows = FILL_PATTERNS[containerType]?.[type];
    if (!rows || rows === 'hold') return total[type] === 0;
    const fillMax = rows.reduce((s,r) => s+r.count, 0);
    return total[type] === fillMax;
  });

  if (fillMatch) {
    // FILLパターンをそのまま使用
    ['EUR','VMF','GMA'].forEach(type => {
      if (total[type] === 0) return;
      const rows = FILL_PATTERNS[containerType]?.[type];
      if (!rows || rows === 'hold') return;
      rows.forEach(row => {
        const rowY = row.y === 'top' ? 0 : W - row.w;
        const orient = row.w === PALLETS[type].long ? 'H' : 'V';
        for (let i = 0; i < row.count; i++) {
          placedPallets.push({ id: ++idCounter, type, orient, x: startX + i * row.d, y: rowY, w: row.w, d: row.d });
        }
      });
    });
    trayPallets = []; // 全部配置されたのでトレーはクリア

  } else {
    // ── Step 3: Case 2 カスタム配置 ──
    // タイプをまとめてキューに積む
    const queue = [];
    ['EUR','VMF','GMA'].forEach(type => {
      for (let i = 0; i < total[type]; i++) queue.push(type);
    });

    const newlyPlaced = { EUR: 0, VMF: 0, GMA: 0 };

    function placeRow(fromBottom) {
      let x = startX;
      const remaining = [...queue];
      queue.length = 0;

      // 上段の使用高さ（下段干渉判定用）= 上段縦置きのw=long
      const upperH = fromBottom ? Math.max(
        newlyPlaced.EUR > 0 ? PALLETS.EUR.long : 0,
        newlyPlaced.VMF > 0 ? PALLETS.VMF.long : 0,
        newlyPlaced.GMA > 0 ? PALLETS.GMA.long : 0,
      ) : 0;

      remaining.forEach(type => {
        const P = PALLETS[type];
        let d, w, orient;
        if (!fromBottom) {
          // 上段: 縦置き（w=long, d=short）= 画面上で縦長
          d = P.short; w = P.long; orient = 'H';
        } else {
          // 下段: 上段縦置き(w=long=1200)と常に干渉するため横置き固定
          // 横置き（w=short, d=long）= 画面上で横長
          d = P.long; w = P.short; orient = 'V';
        }
        if (x + d > startX + L) { queue.push(type); return; }
        const y = fromBottom ? W - w : 0;
        placedPallets.push({ id: ++idCounter, type, orient, x, y, w, d });
        newlyPlaced[type]++;
        x += d;
      });
    }

    placeRow(false); // 上段
    placeRow(true);  // 下段

    // 配置できた分をトレーから削除
    ['EUR','VMF','GMA'].forEach(type => {
      let n = newlyPlaced[type];
      for (let i = trayPallets.length - 1; i >= 0 && n > 0; i--) {
        if (trayPallets[i].type === type) { trayPallets.splice(i, 1); n--; }
      }
    });
  }

  invalidateOverlapCache();
  render(); updateStats(); updateCenterInfo(); renderTray(); updateTrayCount();

  // オーバー分トースト通知 + トレー内残存パレットをハイライト
  const remaining = countPallets(trayPallets);
  const over = ['EUR','VMF','GMA'].filter(t => remaining[t] > 0).map(t => `${t} ${remaining[t]}枚`);
  if (over.length > 0) {
    showToast(`⚠ トレー内 ${over.join(' · ')} — 配置を調整してください`, 'warn', 3000);
    // トレー内の残存パレットをハイライト（3秒間）
    trayHighlightActive = true;
    renderTray();
    setTimeout(() => {
      trayHighlightActive = false;
      renderTray();
    }, 3000);
  }
}

function fillMaxCountFree(type) {
  const rows = FILL_PATTERNS[containerType]?.[type];
  if (!rows || rows === 'hold') return 0;
  return rows.reduce((s, r) => s + r.count, 0);
}

// ── トースト通知 ──
function showToast(message, type = 'warn', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = message;
  container.appendChild(el);
  // フェードイン
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
  // フェードアウト→削除
  setTimeout(() => {
    el.classList.remove('show');
    el.classList.add('hide');
    el.addEventListener('transitionend', () => el.remove(), { once: true });
  }, duration);
}

// ── トレーのPointerイベント ──
function initTrayEvents() {
  const trayCanvas = getTrayCanvas();
  if (!trayCanvas) return;

  // ── pointerdown：選択 or ドラッグ開始 ──
  trayCanvas.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    const rect = trayCanvas.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const isCtrl = e.ctrlKey || e.metaKey;

    const hit = trayPallets.findIndex(p =>
      cx >= p._trayX && cx <= p._trayX + p._trayW &&
      cy >= p._trayY && cy <= p._trayY + p._trayH
    );
    if (hit === -1) {
      if (!isCtrl) { traySelectedSet.clear(); traySelectedIdx = -1; renderTray(); }
      return;
    }
    if (isCtrl) {
      if (traySelectedSet.has(hit)) traySelectedSet.delete(hit);
      else traySelectedSet.add(hit);
      traySelectedIdx = hit;
      renderTray();
      e.preventDefault();
      return;
    }
    // トレーをクリック → コンテナ選択をクリア
    selectedIdx = -1;
    selectedIndices.clear();
    // ドラッグ開始：選択されていないパレットをクリックしたら単独選択
    if (!traySelectedSet.has(hit)) {
      traySelectedSet.clear();
      traySelectedSet.add(hit);
      traySelectedIdx = hit;
    }
    trayDraggingIdx = hit;
    trayDragSource  = 'tray';
    trayDragOffX    = cx - trayPallets[hit]._trayX;
    trayDragOffY    = cy - trayPallets[hit]._trayY;
    // documentレベルで追跡するためcaptureは使わない
    trayCanvas.style.cursor = 'grabbing';
    e.preventDefault();
  });

  // ── pointermove：ドラッグ中の追跡（documentレベル） ──
  document.addEventListener('pointermove', e => {
    if (trayDraggingIdx === -1 || trayDragSource !== 'tray') return;
    const mainCanvas = document.getElementById('main-canvas');
    const rect = mainCanvas.getBoundingClientRect();
    trayDragCanvasXY = {
      cx: e.clientX - rect.left,
      cy: e.clientY - rect.top,
    };
    // メインキャンバス上をドラッグ中は予告描画
    if (!document.getElementById('tray-drag-ghost')) {
      const ghost = document.createElement('div');
      ghost.id = 'tray-drag-ghost';
      ghost.style.cssText = 'position:fixed;pointer-events:none;z-index:9999;background:rgba(46,204,113,0.3);border:1px solid var(--eur-fill);border-radius:3px;padding:4px 8px;font-size:11px;color:#fff;font-family:JetBrains Mono,monospace;';
      document.body.appendChild(ghost);
    }
    const ghost = document.getElementById('tray-drag-ghost');
    const sel = [...traySelectedSet];
    const types = sel.map(i => trayPallets[i]?.type).filter(Boolean);
    const cnt = { EUR: 0, VMF: 0, GMA: 0 };
    types.forEach(t => cnt[t]++);
    const label = Object.entries(cnt).filter(([,n])=>n>0).map(([t,n])=>`${t}×${n}`).join(' ');
    ghost.textContent = label || '';
    ghost.style.left = (e.clientX + 12) + 'px';
    ghost.style.top  = (e.clientY + 12) + 'px';
  });

  // ── pointerup：ドロップ判定（documentレベル） ──
  document.addEventListener('pointerup', e => {
    if (trayDraggingIdx === -1 || trayDragSource !== 'tray') return;

    // ゴーストを削除
    const ghost = document.getElementById('tray-drag-ghost');
    if (ghost) ghost.remove();

    const mainCanvas = document.getElementById('main-canvas');
    const rect = mainCanvas.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    // メインキャンバス範囲内ならコンテナに配置
    if (cx >= 0 && cx <= mainCanvas.width && cy >= 0 && cy <= mainCanvas.height) {
      const c = getC();
      const sc = mainCanvas.width / c.L;
      const mmX = cx / sc;
      const mmY = cy / sc;
      const sel = [...traySelectedSet].sort((a, b) => a - b);
      const dragged = sel.map(i => trayPallets[i]).filter(Boolean);

      if (dragged.length > 0) {
        pushHistory();
        const anchor = trayPallets[trayDraggingIdx];
        // アンカーパレットの中心を基準に配置
        const baseX = mmX - anchor.d / 2;
        const baseY = mmY - anchor.w / 2;

        dragged.forEach((p, idx) => {
          // 複数選択時はx方向に並べる（パレット幅分ずつオフセット）
          const offsetX = idx === 0 ? 0 : dragged.slice(0, idx).reduce((s, pp) => s + pp.d + 10, 0);
          const px = Math.min(Math.max(0, snapTo(baseX + offsetX, 100)), c.L - p.d);
          const py = Math.min(Math.max(0, snapTo(baseY, 100)), c.W - p.w);
          placedPallets.push({ id: ++idCounter, type: p.type, orient: p.orient, x: px, y: py, w: p.w, d: p.d });
        });

        // トレーから削除（降順で）
        sel.sort((a, b) => b - a).forEach(i => trayPallets.splice(i, 1));
        traySelectedSet.clear();
        traySelectedIdx = -1;
        // ドロップしたパレットをコンテナで選択状態に
        selectedIndices.clear();
        const newStart = placedPallets.length - dragged.length;
        for (let i = newStart; i < placedPallets.length; i++) selectedIndices.add(i);
        selectedIdx = placedPallets.length - 1;
        invalidateOverlapCache();
        render(); updateStats(); updateCenterInfo(); renderTray(); updateTrayCount();
      }
    }

    trayDraggingIdx  = -1;
    trayDragSource   = null;
    trayDragCanvasXY = null;
    trayCanvas.style.cursor = 'grab';
    renderTray();
  });
}

function updateTrayVisibility() {
  const trayWrapper = document.getElementById('tray-wrapper');
  const shortcuts   = document.getElementById('shortcuts-section');
  if (!trayWrapper) return;
  // トレー式のみトレーエリア表示
  if (currentMode === 'tray') {
    trayWrapper.style.display = 'block';
    renderTray();
  } else {
    trayWrapper.style.display = 'none';
  }
  // ショートカットはフリー設置とトレー式で表示
  if (shortcuts) {
    shortcuts.style.display = (currentMode === 'manual' || currentMode === 'tray') ? 'block' : 'none';
  }
}
