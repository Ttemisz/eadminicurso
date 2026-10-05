import { useState } from 'react'
import './App.css'

type QuizQuestion = {
  question: string
  options: string[]
  answer: number
}

const quiz: QuizQuestion[] = [
  {
    question: 'O que caracteriza a aprendizagem colaborativa?',
    options: ['Cada pessoa trabalha sem compartilhar decisões', 'O grupo constrói conhecimento e assume responsabilidade pelo resultado', 'Apenas uma pessoa revisa todo o projeto'],
    answer: 1,
  },
  {
    question: 'Quando uma tarefa deve ir para “Concluído”?',
    options: ['Assim que o autor termina o código', 'Depois de ser revisada ou validada', 'Quando alguém pergunta pelo status'],
    answer: 1,
  },
  {
    question: 'O que registrar sobre o uso da IA?',
    options: ['Ferramenta, finalidade e como o resultado foi tratado', 'Todas as perguntas, sem contexto', 'Nada, para preservar a entrega'],
    answer: 0,
  },
  {
    question: 'Qual é uma boa prática para equipes que trabalham remotamente?',
    options: ['Manter decisões apenas na memória do grupo', 'Deixar todas as tarefas sem responsável', 'Registrar decisões e deixar o andamento das tarefas visível'],
    answer: 2,
  },
  {
    question: 'Qual é o objetivo da revisão entre colegas?',
    options: ['Encontrar culpados pelos problemas', 'Melhorar o trabalho com feedback e aprender com outras soluções', 'Impedir que outras pessoas contribuam'],
    answer: 1,
  },
]

function App() {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [youtubeUrl, setYoutubeUrl] = useState('https://youtu.be/8kUPWs-L8Yk')
  const [slidesUrl, setSlidesUrl] = useState('/slides-aprendizagem-colaborativa.zip')

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
      </div>
    </section>

    <section className="quiz-section">
      <div><p className="eyebrow">QUIZ FINAL</p><h2>Você acompanhou o processo?</h2><p className="quiz-intro">Teste seus conhecimentos sobre organização, colaboração e uso responsável da IA.</p></div>
      <div className="quiz-list">{quiz.map((item, index) => <article className="quiz-card" key={item.question}><span>0{index + 1}</span><h3>{item.question}</h3>{item.options.map((option, optionIndex) => <button key={option} className={quizAnswers[index] === optionIndex ? (optionIndex === item.answer ? 'correct' : 'wrong') : ''} onClick={() => setQuizAnswers({ ...quizAnswers, [index]: optionIndex })}>{option}</button>)}{quizAnswers[index] !== undefined && <p className={quizAnswers[index] === item.answer ? 'feedback correct-text' : 'feedback'}>{quizAnswers[index] === item.answer ? 'Muito bem! Essa é a prática recomendada.' : 'Releia o resumo e tente novamente.'}</p>}</article>)}</div>
    </section>

    <footer className="site-footer"><span>Aprendizagem colaborativa em projetos com IA</span><span>Bom estudo!</span></footer>
  </div>
}

export default App
