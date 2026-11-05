import { useState } from 'react'
import './App.css'

type QuizQuestion = {
  question: string
  options: string[]
  answer: number
  explanation: string
}

type EbookChapter = {
  title: string
  eyebrow: string
  videoTime: string
  summary: string
  sections: { title: string; text: string }[]
  checklist: string[]
}

const quiz: QuizQuestion[] = [
  {
    question: 'O que caracteriza a aprendizagem colaborativa?',
    options: ['Cada pessoa trabalha sem compartilhar decisões', 'O grupo constrói conhecimento e assume responsabilidade pelo resultado', 'Apenas uma pessoa revisa todo o projeto'],
    answer: 1,
    explanation: 'A aprendizagem colaborativa combina construção conjunta de conhecimento, troca de ideias e responsabilidade pelo resultado.',
  },
  {
    question: 'Quando uma tarefa deve ir para “Concluído”?',
    options: ['Assim que o autor termina o código', 'Depois de ser revisada ou validada', 'Quando alguém pergunta pelo status'],
    answer: 1,
    explanation: 'Uma tarefa só deve ser concluída depois de passar por revisão ou validação.',
  },
  {
    question: 'O que registrar sobre o uso da IA?',
    options: ['Ferramenta, finalidade e como o resultado foi tratado', 'Todas as perguntas, sem contexto', 'Nada, para preservar a entrega'],
    answer: 0,
    explanation: 'O registro deve indicar qual ferramenta foi usada, com qual finalidade e como a equipe analisou, adaptou e testou o resultado.',
  },
  {
    question: 'Qual é uma boa prática para equipes que trabalham remotamente?',
    options: ['Manter decisões apenas na memória do grupo', 'Deixar todas as tarefas sem responsável', 'Registrar decisões e deixar o andamento das tarefas visível'],
    answer: 2,
    explanation: 'Decisões registradas e tarefas visíveis reduzem dúvidas, esquecimentos e retrabalho.',
  },
  {
    question: 'Qual é o objetivo da revisão entre colegas?',
    options: ['Encontrar culpados pelos problemas', 'Melhorar o trabalho com feedback e aprender com outras soluções', 'Impedir que outras pessoas contribuam'],
    answer: 1,
    explanation: 'A revisão deve melhorar a entrega e gerar aprendizagem para quem revisa e para quem recebe o feedback.',
  },
]

const ebookChapters: EbookChapter[] = [
  {
    title: 'Aprender juntos é mais do que dividir tarefas',
    eyebrow: 'CAPÍTULO 01 · 02:13',
    videoTime: '2m13s',
    summary: 'Aprendizagem colaborativa acontece quando o grupo constrói conhecimento, compartilha decisões e assume responsabilidade pelo resultado.',
    sections: [
      { title: 'O que caracteriza a colaboração', text: 'Cada pessoa pode ter uma função principal, mas o conhecimento não fica isolado. Quem programa pode aprender sobre testes; quem cuida do banco pode contribuir para as decisões de produto. Comunicação, compartilhamento de conhecimento, responsabilidade, colaboração e feedback formam a base do processo.' },
      { title: 'Divisão não é isolamento', text: 'Dividir o trabalho ajuda a organizar, mas não garante colaboração. A colaboração aparece quando a equipe acompanha o trabalho dos colegas, discute decisões, integra as partes e ajuda a resolver problemas.' },
    ],
    checklist: ['Compartilhe decisões, não apenas entregas.', 'Entenda como sua tarefa afeta o projeto inteiro.', 'Trate erros e feedback como oportunidades de aprendizagem.'],
  },
  {
    title: 'Organizar equipes que trabalham a distância',
    eyebrow: 'CAPÍTULO 02 · 05:15',
    videoTime: '5m15s',
    summary: 'No trabalho remoto, clareza e registro evitam tarefas esquecidas, retrabalho e a dúvida clássica: “eu achei que você estava fazendo”.',
    sections: [
      { title: 'Os desafios do trabalho remoto', text: 'A comunicação assíncrona impede que todos estejam disponíveis ao mesmo tempo. Sem um registro visível, duas pessoas podem fazer a mesma tarefa ou uma atividade pode ficar sem responsável. Decisões também podem se perder em mensagens, reuniões ou na memória do grupo.' },
      { title: 'Ferramentas apoiam o processo', text: 'Quadros como Trello e GitHub Projects ajudam a acompanhar tarefas e alterações. Discord, Teams e Meet apoiam a comunicação, enquanto a documentação registra decisões, requisitos e instruções. Nenhuma ferramenta substitui a conversa, a revisão e a responsabilidade da equipe.' },
    ],
    checklist: ['Defina como a equipe vai se comunicar.', 'Registre decisões e mudanças importantes.', 'Deixe o andamento das tarefas visível para todos.'],
  },
  {
    title: 'Transformar o projeto em tarefas executáveis',
    eyebrow: 'CAPÍTULO 03 · 07:39',
    videoTime: '7m39s',
    summary: 'Um projeto amplo fica mais fácil de executar quando é dividido em funcionalidades e tarefas pequenas, objetivas e acompanháveis.',
    sections: [
      { title: 'Responsabilidades principais', text: 'No exemplo do Teskedu, Ana cuida principalmente do front-end, Bruno do back-end, Carla do banco de dados e Diego dos testes e da documentação. Essa divisão esclarece responsabilidades, mas não impede que todos participem das discussões e revisões.' },
      { title: 'Do projeto ao cartão', text: 'Um sistema acadêmico pode ter funcionalidades como login, cadastro e dashboard. A funcionalidade de login, por exemplo, pode virar tarefas como criar o formulário, desenvolver o endpoint, criar a tabela de usuários e testar a autenticação.' },
    ],
    checklist: ['Dê a cada tarefa uma pessoa responsável.', 'Escreva o que precisa ser feito e como validar.', 'Observe onde está o atraso em vez de olhar apenas o projeto inteiro.'],
  },
  {
    title: 'Acompanhar, revisar e melhorar',
    eyebrow: 'CAPÍTULO 04 · 10:17',
    videoTime: '10m17s',
    summary: 'O ciclo “A fazer → Em andamento → Em revisão → Concluído” torna o progresso visível e garante que uma entrega seja validada antes de ser finalizada.',
    sections: [
      { title: 'O ciclo de uma tarefa', text: 'A tarefa começa em A fazer, passa para Em andamento quando alguém inicia o trabalho e segue para Em revisão quando existe uma primeira versão. Outro integrante verifica requisitos, funcionamento, organização, documentação e segurança. Se houver problemas, a tarefa volta para Em andamento; se estiver adequada, vai para Concluído.' },
      { title: 'Revisão entre colegas', text: 'Revisar é aprender, não procurar culpados. O feedback deve ser objetivo e focado no trabalho: em vez de “você está errado”, explique qual requisito não foi atendido e proponha um ajuste. Quem revisa aprende ao analisar outra solução; quem recebe o feedback melhora a própria entrega.' },
    ],
    checklist: ['Não marque uma tarefa como concluída antes da validação.', 'Faça comentários específicos e respeitosos.', 'Registre correções e o resultado da revisão.'],
  },
  {
    title: 'Usar a IA com transparência e responsabilidade',
    eyebrow: 'CAPÍTULO 05 · 12:57',
    videoTime: '12m57s',
    summary: 'A IA pode apoiar ideias, código, documentação e testes, mas a equipe precisa compreender, verificar, testar e assumir a responsabilidade pelo resultado.',
    sections: [
      { title: 'Onde a IA pode ajudar', text: 'Durante o planejamento, ela pode sugerir funcionalidades e caminhos. Também pode explicar conceitos, propor estruturas de código, apoiar a documentação, sugerir casos de teste e indicar situações que não foram consideradas.' },
      { title: 'O registro transparente', text: 'Em vez de escrever apenas “usei IA”, registre a ferramenta, a finalidade e o tratamento dado ao resultado. Por exemplo: o ChatGPT sugeriu uma estrutura inicial para uma função de validação; o estudante analisou, adaptou, testou e submeteu o código à revisão de um colega. Não é necessário documentar cada pergunta, mas sim as participações relevantes.' },
      { title: 'A responsabilidade continua humana', text: 'Uma resposta convincente pode conter problemas de segurança, desempenho ou compatibilidade. Antes de aceitar uma sugestão, pergunte: nós entendemos este código? Ele foi testado? Atende aos requisitos? Quais riscos existem? A IA apoia o trabalho, mas não substitui conhecimento e julgamento.' },
    ],
    checklist: ['Registre ferramenta, finalidade e alterações feitas.', 'Verifique e teste toda sugestão antes de usar.', 'Mantenha a equipe responsável pela decisão final.'],
  },
  {
    title: 'Aplicar o método no projeto Teskedu',
    eyebrow: 'CAPÍTULO 06 · 16:39',
    videoTime: '16m39s',
    summary: 'O exemplo prático reúne organização, colaboração, revisão, registro e reflexão em uma única tarefa: criar a tela de login.',
    sections: [
      { title: 'Do quadro à entrega', text: 'A equipe cria o quadro Teskedu com as colunas A fazer, Em andamento, Em revisão e Concluído. A tarefa “Criar tela de login” entra em A fazer, é atribuída a Ana e recebe a descrição do formulário e da validação dos campos.' },
      { title: 'Histórico e transparência', text: 'Ao avançar pelas colunas, a equipe registra o uso da IA no cartão, conversa sobre a implementação e pede a revisão de outro integrante. O histórico mostra o caminho completo da tarefa e mantém todos informados sobre o que aconteceu.' },
      { title: 'Cinco ações para levar adiante', text: 'O projeto se torna mais organizado e educativo quando a equipe consegue organizar as atividades, colaborar nas decisões, revisar as entregas, registrar contribuições e refletir sobre o processo.' },
    ],
    checklist: ['Crie um quadro com etapas claras.', 'Registre contexto, responsável e critérios da tarefa.', 'Finalize apenas depois de revisar e refletir sobre o processo.'],
  },
]

function App() {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [youtubeUrl, setYoutubeUrl] = useState('https://youtu.be/8kUPWs-L8Yk')
  const [slidesUrl, setSlidesUrl] = useState('/slides-aprendizagem-colaborativa.zip')
  const [ebookOpen, setEbookOpen] = useState(false)
  const [ebookChapter, setEbookChapter] = useState(0)
  const currentChapter = ebookChapters[ebookChapter]

  return <div className="app-shell">
    <header className="topbar">
      
      <div className="course-name">MINICURSO <b>/</b> APRENDIZAGEM COLABORATIVA</div>
    </header>

    <main className="course-summary">
      <p className="eyebrow">RESUMO DO MINICURSO</p>
      <h1>Aprendizagem colaborativa<br /><span>em projetos com IA.</span></h1>
      <p className="summary-lead">Como organizar equipes, acompanhar tarefas e aprender em conjunto em projetos de Computação a distância.</p>
      <div className="summary-grid">
        <article><span>01</span><h2>Organização</h2><p>Divida projetos em tarefas claras, defina responsabilidades e acompanhe cada etapa do trabalho.</p></article>
        <article><span>02</span><h2>Colaboração</h2><p>Compartilhe decisões, faça revisões entre colegas e assuma responsabilidade pelo resultado coletivo.</p></article>
        <article><span>03</span><h2>Transparência</h2><p>Registre contribuições, decisões e o uso da inteligência artificial durante o projeto.</p></article>
      </div>
      <details className="summary-details">
        <summary>Quer saber mais sobre o minicurso? <span>↓</span></summary>
        <p>Ao longo do minicurso, você vai conhecer práticas para transformar um projeto em tarefas menores, acompanhar o trabalho em equipe e revisar as entregas com respeito. Também vai aprender como usar a inteligência artificial como apoio, registrando suas contribuições e decisões com transparência.</p>
      </details>
    </main>

    <section className="resources-section">
      <div className="resources-heading">
        <p className="eyebrow">ASSISTA E ACESSE</p>
        <h2>Continue estudando<br /><span>com os materiais.</span></h2>
        <p>Assista à videoaula e baixe os slides para revisar os conteúdos do minicurso.</p>
      </div>
      <div className="resource-fields">
        <div className="resource-card">
          <span className="resource-icon">▶</span>
          <div className="resource-copy">
            <label htmlFor="youtube-link">Vídeo da aula no YouTube</label>
            <p>Acesse a videoaula completa.</p>
            <input id="youtube-link" type="url" value={youtubeUrl} onChange={(event) => setYoutubeUrl(event.target.value)} />
            <a className={`resource-button ${youtubeUrl ? '' : 'disabled'}`} href={youtubeUrl || undefined} target="_blank" rel="noreferrer" onClick={(event) => !youtubeUrl && event.preventDefault()}>Abrir vídeo <span>↗</span></a>
          </div>
        </div>
        <div className="resource-card">
          <span className="resource-icon download-icon">↓</span>
          <div className="resource-copy">
            <label htmlFor="slides-link">Download dos slides</label>
            <p>Baixe o arquivo com todos os slides da aula.</p>
            <input id="slides-link" type="text" value={slidesUrl} onChange={(event) => setSlidesUrl(event.target.value)} />
            <a className={`resource-button ${slidesUrl ? '' : 'disabled'}`} href={slidesUrl || undefined} download onClick={(event) => !slidesUrl && event.preventDefault()}>Baixar slides <span>↓</span></a>
          </div>
        </div>
        <div className="resource-card ebook-card">
          <span className="resource-icon ebook-icon">▤</span>
          <div className="resource-copy">
            <label htmlFor="ebook-button">E-book do minicurso</label>
            <p>Leia o conteúdo organizado em capítulos e acompanhe a lógica da videoaula.</p>
            <div className="ebook-actions">
              <button id="ebook-button" className="resource-button" type="button" onClick={() => { setEbookChapter(0); setEbookOpen(true) }}>Ler e-book <span>→</span></button>
              <a className="resource-button ebook-download" href="/ebook-aprendizagem-colaborativa.pdf" download>Baixar PDF <span>↓</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="quiz-section">
      <div><p className="eyebrow">QUIZ FINAL</p><h2>Você acompanhou o processo?</h2><p className="quiz-intro">Teste seus conhecimentos sobre organização, colaboração e uso responsável da IA.</p></div>
      <div className="quiz-list">{quiz.map((item, index) => {
        const selectedAnswer = quizAnswers[index]
        const answeredCorrectly = selectedAnswer === item.answer
        return <article className="quiz-card" key={item.question}><span>0{index + 1}</span><h3>{item.question}</h3>{item.options.map((option, optionIndex) => <button key={option} className={selectedAnswer === optionIndex ? (optionIndex === item.answer ? 'correct' : 'wrong') : ''} aria-pressed={selectedAnswer === optionIndex} onClick={() => setQuizAnswers({ ...quizAnswers, [index]: optionIndex })}>{option}</button>)}{selectedAnswer !== undefined && <div className={`feedback-box ${answeredCorrectly ? 'feedback-box-correct' : 'feedback-box-wrong'}`}><p className={answeredCorrectly ? 'feedback correct-text' : 'feedback'}>{answeredCorrectly ? 'Muito bem! Você acertou.' : `Ainda não. A resposta correta é: ${item.options[item.answer]}.`}</p><p className="feedback-explanation">{item.explanation}</p></div>}</article>
      })}</div>
    </section>

    <footer className="site-footer"><span>Aprendizagem colaborativa em projetos com IA</span><span>Bom estudo!</span></footer>
    {ebookOpen && <div className="ebook-overlay" role="presentation" onClick={(event) => event.target === event.currentTarget && setEbookOpen(false)}>
      <section className="ebook-modal" role="dialog" aria-modal="true" aria-labelledby="ebook-title">
        <div className="ebook-header">
          <div><p className="eyebrow">E-BOOK · APRENDIZAGEM COLABORATIVA</p><h2 id="ebook-title">Aprender juntos em projetos com IA</h2></div>
          <button className="ebook-close" type="button" aria-label="Fechar e-book" onClick={() => setEbookOpen(false)}>×</button>
        </div>
        <div className="ebook-layout">
          <nav className="ebook-nav" aria-label="Capítulos do e-book">
            <p>CONTEÚDO</p>
            {ebookChapters.map((chapter, index) => <button key={chapter.title} type="button" className={index === ebookChapter ? 'active' : ''} onClick={() => setEbookChapter(index)}><span>0{index + 1}</span>{chapter.title}</button>)}
          </nav>
          <article className="ebook-content">
            <div className="ebook-chapter-meta"><span>{currentChapter.eyebrow}</span><a href={`${youtubeUrl}${youtubeUrl.includes('?') ? '&' : '?'}t=${Math.floor((ebookChapter === 0 ? 133 : ebookChapter === 1 ? 315 : ebookChapter === 2 ? 459 : ebookChapter === 3 ? 617 : ebookChapter === 4 ? 777 : 999))}s`} target="_blank" rel="noreferrer">Acompanhar no vídeo ↗</a></div>
            <h3>{currentChapter.title}</h3>
            <p className="ebook-summary">{currentChapter.summary}</p>
            {currentChapter.sections.map((section) => <section key={section.title}><h4>{section.title}</h4><p>{section.text}</p></section>)}
            <div className="ebook-checklist"><strong>Para praticar</strong>{currentChapter.checklist.map((item) => <p key={item}><span>✓</span>{item}</p>)}</div>
            <div className="ebook-controls"><button type="button" disabled={ebookChapter === 0} onClick={() => setEbookChapter(ebookChapter - 1)}>← Anterior</button><span>{ebookChapter + 1} / {ebookChapters.length}</span><div className="ebook-control-actions"><a href="/ebook-aprendizagem-colaborativa.pdf" download>Baixar PDF</a><button type="button" disabled={ebookChapter === ebookChapters.length - 1} onClick={() => setEbookChapter(ebookChapter + 1)}>Próximo →</button></div></div>
          </article>
        </div>
      </section>
    </div>}
  </div>
}

export default App
