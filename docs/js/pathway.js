/* ============================================
   pathway.js — Interactive nitrate runoff
   pathway flow diagram & modal logic
   ============================================ */

(function () {
  'use strict';

  const stages = [
    {
      id: 'field',
      title: 'Fertilized Field',
      subtitle: 'Source',
      loading: 'Baseline nitrogen input',
      chemistry:
        'Urea and ammonium fertilizer are applied to the soil. In the presence of water and urease enzymes, urea hydrolyzes to ammonium, which can then undergo nitrification if oxygen is available.',
      concentration: 'About 4 mg/L nitrate-nitrogen in soil water',
      example:
        'A corn field after spring fertilization can retain nitrogen in the root zone until the next rainfall event.'
    },
    {
      id: 'rain',
      title: 'Rainfall / Irrigation',
      subtitle: 'Transport trigger',
      loading: '2-3x transport increase',
      chemistry:
        'Water dissolves nitrate and flushes it downward through the soil profile. Because nitrate is negatively charged and highly soluble, it moves with the water rather than staying attached to soil particles.',
      concentration: 'Rises to roughly 11 mg/L in runoff water',
      example:
        'A storm shortly after fertilizer application can move nitrogen into roadside ditches and tile drains.'
    },
    {
      id: 'ditch',
      title: 'Drainage Ditch',
      subtitle: 'Conduit',
      loading: 'Mixed surface runoff',
      chemistry:
        'The ditch collects dissolved nitrate from multiple fields. Small suspended particles and dissolved nutrients combine, creating a concentrated pulse that enters the watershed.',
      concentration: 'Often near 8-12 mg/L as N',
      example:
        'Agricultural drainage ditches in intensive farming regions frequently carry nitrate spikes after rain.'
    },
    {
      id: 'stream',
      title: 'Stream / River',
      subtitle: 'Downstream transport',
      loading: 'Diluted but persistent',
      chemistry:
        'The water becomes mixed and diluted, but nitrate remains chemically stable enough to travel long distances. If sunlight and temperature support algae, the river also begins to act like a nutrient reactor.',
      concentration: 'Usually around 8 mg/L as N near farmed watersheds',
      example:
        'Rivers feeding the Gulf of Mexico carry nitrate from the Mississippi Basin into coastal waters.'
    },
    {
      id: 'lake',
      title: 'Lake / Reservoir',
      subtitle: 'Residence time',
      loading: 'Bloom-friendly water',
      chemistry:
        'Slow-moving water gives algae time to use the nitrate. As the bloom grows, the system can shift pH, shade submerged plants, and consume oxygen when the biomass decomposes.',
      concentration: 'Around 6 mg/L as N in the water column',
      example:
        'Reservoirs with long residence times often show summer algal blooms after repeated nitrogen loading.'
    },
    {
      id: 'bloom',
      title: 'Algal Bloom',
      subtitle: 'Biological response',
      loading: 'High ecological impact',
      chemistry:
        'Nitrate is incorporated into algal biomass through photosynthesis and amino acid synthesis. When the bloom collapses, bacteria break down the cells and consume dissolved oxygen, pushing the system toward hypoxia.',
      concentration: 'Biomass response rises even as dissolved nitrate drops',
      example:
        'Cyanobacterial blooms in warm lakes can produce toxins and foul-smelling water.'
    },
    {
      id: 'exposure',
      title: 'Fish & Human Exposure',
      subtitle: 'Final impact',
      loading: 'Food, water, and habitat effects',
      chemistry:
        'Fish suffer from low oxygen and habitat stress, while people are exposed through drinking water. Nitrate itself does not biomagnify, but it can still produce serious downstream risk when it contaminates wells and drives ecosystem collapse.',
      concentration: 'Well water can exceed 10-12 mg/L as N in vulnerable areas',
      example:
        'Private wells near fertilized farmland often require monitoring or treatment to stay below health guidelines.'
    }
  ];

  const diagram = document.getElementById('flowDiagram');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  if (!diagram || !overlay || !closeBtn) {
    return;
  }

  function openModal(stage) {
    document.getElementById('modalTitle').textContent = stage.title;
    document.getElementById('modalChemistry').textContent = stage.chemistry;
    document.getElementById('modalConcentration').textContent = stage.concentration + ' (' + stage.loading + ')';
    document.getElementById('modalExample').textContent = stage.example;
    overlay.classList.add('active');
  }

  function closeModal() {
    overlay.classList.remove('active');
  }

  stages.forEach(function (stage) {
    const node = document.createElement('button');
    node.type = 'button';
    node.className = 'flow-node';
    node.setAttribute('data-stage', stage.id);
    node.innerHTML =
      '<span class="node-title">' + stage.title + '</span>' +
      '<span class="node-subtitle">' + stage.subtitle + '</span>' +
      '<span class="node-meta">' + stage.loading + '</span>';
    node.addEventListener('click', function () {
      openModal(stage);
    });
    diagram.appendChild(node);
  });

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
})();
