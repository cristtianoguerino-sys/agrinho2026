const states = {
  AC: {
    name: 'Acre',
    climate: 'Clima tropical úmido com forte estação seca.',
    tip: 'Use irrigação de precisão, plantio em linha e manejo de solo para reduzir perdas na seca.',
    solution: 'Priorize biofertilizantes, cobertura vegetal e sistemas de captação de água da chuva.'
  },
  AL: {
    name: 'Alagoas',
    climate: 'Clima tropical com chuvas concentradas.',
    tip: 'Evite erosão com curvas de nível e cultivo de cobertura entre safras.',
    solution: 'Aposte em drenagem eficiente, adubação orgânica e manejo integrado de pragas.'
  },
  AP: {
    name: 'Amapá',
    climate: 'Clima equatorial e solo muito úmido.',
    tip: 'Trabalhe com áreas de preservação e manejo agroflorestal.',
    solution: 'Use agricultura de baixo impacto, compostagem e sistemas agroflorestais para manter a biodiversidade.'
  },
  AM: {
    name: 'Amazonas',
    climate: 'Clima quente e muito chuvoso.',
    tip: 'Aproveite o potencial da agrofloresta e da recuperação de áreas degradadas.',
    solution: 'Combine produção sustentável com conservação e uso de bioinsumos para reduzir queimadas.'
  },
  BA: {
    name: 'Bahia',
    climate: 'Clima variado, com semiárido e áreas de mata.',
    tip: 'Adapte a técnica para o bioma: irrigação no semiárido e cobertura no litoral.',
    solution: 'Utilize cisternas, sistemas de irrigação localizada e plantio diversificado.'
  },
  CE: {
    name: 'Ceará',
    climate: 'Semiárido com baixa pluviometria.',
    tip: 'Priorize conservação de água e produção de culturas resistentes.',
    solution: 'Implemente irrigação por gotejamento, captação de água de chuva e adubação orgânica.'
  },
  DF: {
    name: 'Distrito Federal',
    climate: 'Clima tropical de altitude com estações bem definidas.',
    tip: 'Planeje a produção com base na umidade do solo e na vegetação local.',
    solution: 'Use manejo de solo, rotação de culturas e tecnologias de monitoramento ambiental.'
  },
  ES: {
    name: 'Espírito Santo',
    climate: 'Clima tropical úmido e relevo montanhoso.',
    tip: 'Controle erosão em encostas com cerca viva e plantio em curvas de nível.',
    solution: 'Combine conservação do solo, irrigação controlada e biofertilizantes.'
  },
  GO: {
    name: 'Goiás',
    climate: 'Clima tropical com período seco marcado.',
    tip: 'Recupere áreas de pasto com integração lavoura-pecuária-floresta.',
    solution: 'Adote plantio direto, rotação e uso de bioinsumos para manter produtividade.'
  },
  MA: {
    name: 'Maranhão',
    climate: 'Clima tropical com chuvas intensas.',
    tip: 'Proteja o solo da erosão com cobertura vegetal e drenagem adequada.',
    solution: 'Use agricultura de baixo impacto, consórcio e manejo integrado da água.'
  },
  MT: {
    name: 'Mato Grosso',
    climate: 'Clima tropical com estações bem definidas.',
    tip: 'A produtividade exige planejamento de solo, irrigação e prevenção a queimadas.',
    solution: 'Invista em plantio direto, sensores e fertilização baseada em análise de solo.'
  },
  MS: {
    name: 'Mato Grosso do Sul',
    climate: 'Clima tropical com seca prolongada e solos sensíveis.',
    tip: 'Use manejo de pastagem e recuperação de áreas degradadas.',
    solution: 'Aposte em pastagem rotacionada, irrigação eficiente e cobertura vegetal.'
  },
  MG: {
    name: 'Minas Gerais',
    climate: 'Clima tropical com variações de altitude.',
    tip: 'Ajuste as técnicas para áreas serranas e de cerrado.',
    solution: 'Use conservação do solo, agroecologia e sistemas de monitoramento climático.'
  },
  PA: {
    name: 'Pará',
    climate: 'Clima quente e chuvoso, com solos férteis.',
    tip: 'Evite desmatamento e priorize produção com baixa emissão.',
    solution: 'Use agrofloresta, manejo sustentável e recuperação de áreas já impactadas.'
  },
  PB: {
    name: 'Paraíba',
    climate: 'Clima semiárido e forte irregularidade das chuvas.',
    tip: 'Dependa de sistemas de armazenamento e uso racional de água.',
    solution: 'Implemente cisternas, irrigação por gotejamento e cultivos resistentes.'
  },
  PR: {
    name: 'Paraná',
    climate: 'Clima subtropical com boa disponibilidade hídrica.',
    tip: 'Aproveite a umidade para sistemas de integração e produção intensiva.',
    solution: 'Use manejo sustentável, adubação balanceada e controle biológico de pragas.'
  },
  PE: {
    name: 'Pernambuco',
    climate: 'Clima tropical e semiárido em parte do estado.',
    tip: 'Planeje por bacia hidrográfica e solo de cada região.',
    solution: 'Use irrigação localizada, cobertura do solo e bioinsumos para reduzir perdas.'
  },
  PI: {
    name: 'Piauí',
    climate: 'Semiárido intenso e baixa umidade.',
    tip: 'Escolha culturas tolerantes à seca e sistemas de retenção de água.',
    solution: 'Aposte em cisternas, irrigação inteligente e recuperação de pastagens.'
  },
  RJ: {
    name: 'Rio de Janeiro',
    climate: 'Clima tropical úmido com relevo acidentado.',
    tip: 'Proteja encostas e matas ciliares com manejo de conservação.',
    solution: 'Use terraceamento, plantio de cobertura e produção orgânica de baixo impacto.'
  },
  RN: {
    name: 'Rio Grande do Norte',
    climate: 'Semiárido e ventos fortes.',
    tip: 'Priorize retenção de umidade e proteção do solo.',
    solution: 'Implemente barreiras vegetativas, irrigação eficiente e compostagem.'
  },
  RS: {
    name: 'Rio Grande do Sul',
    climate: 'Clima subtropical com chuvas bem distribuídas.',
    tip: 'Aproveite a umidade com sistemas de integração e rotação.',
    solution: 'Use plantio direto, adubação de precisão e controle biológico.'
  },
  RO: {
    name: 'Rondônia',
    climate: 'Clima tropical úmido com forte sazonalidade.',
    tip: 'Mantenha áreas de preservação e use cultivos diversificados.',
    solution: 'Aposte em agrofloresta, recuperação de áreas degradadas e manejo sustentável.'
  },
  RR: {
    name: 'Roraima',
    climate: 'Clima quente e úmido com forte biodiversidade.',
    tip: 'Priorize sistemas que respeitem o solo e a vegetação local.',
    solution: 'Use agroecologia, bioinsumos e manejo de baixa emissão.'
  },
  SC: {
    name: 'Santa Catarina',
    climate: 'Clima subtropical com áreas de altitude.',
    tip: 'Ajuste as técnicas conforme o relevo e o microclima.',
    solution: 'Use sistemas de irrigação precisa, conservação do solo e manejo integrado.'
  },
  SP: {
    name: 'São Paulo',
    climate: 'Clima tropical com variações regionais.',
    tip: 'Combine alta produtividade com monitoramento ambiental e eficiência hídrica.',
    solution: 'Use sensoriamento, fertilização de precisão e produção sustentável.'
  },
  SE: {
    name: 'Sergipe',
    climate: 'Clima tropical com chuvas intensas.',
    tip: 'Use drenagem eficiente e manejo de solo para evitar perdas.',
    solution: 'Aposte em cobertura vegetal, biofertilizantes e produção sustentável.'
  },
  TO: {
    name: 'Tocantins',
    climate: 'Clima tropical com estação seca marcada.',
    tip: 'Mantenha a umidade do solo com cobertura e manejo adequado.',
    solution: 'Use irrigação localizada, rotação de culturas e recuperação de pastagens.'
  }
};

const buttonsContainer = document.getElementById('stateButtons');
const detailBox = document.getElementById('stateDetail');
const legacyAliases = {
  SOU: 'AM',
  IR: 'GO',
  EM: 'MS',
  RP: 'PR',
  Enfermeira: 'RS'
};

Object.keys(states).forEach((code) => {
  const button = document.createElement('button');
  button.className = 'state-btn';
  button.type = 'button';
  button.textContent = code;
  button.addEventListener('click', () => showState(code));
  buttonsContainer.appendChild(button);
});

function showState(code) {
  const normalizedCode = legacyAliases[code] || code;
  const state = states[normalizedCode];
  if (!state) return;

  detailBox.innerHTML = `
    <h3>${state.name} (${normalizedCode})</h3>
    <p><strong>Clima:</strong> ${state.climate}</p>
    <p><strong>Boa prática:</strong> ${state.tip}</p>
    <p><strong>Solução recomendada:</strong> ${state.solution}</p>
  `;

  document.querySelectorAll('.state-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.textContent === normalizedCode);
  });
}
