# 🧠 AI Exam Master - Interactive MCQ & Study Platform

An interactive, responsive, zero-dependency offline web application designed to prepare for and master Artificial Intelligence exams based on University curriculum slides.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/dadmohammad2005-spec/AI_exam)

---

## 🌐 Deploy to Render.com (1-Click or Manual)

### Option 1: 1-Click Automated Deployment
Click the button above or visit:
👉 **[https://render.com/deploy?repo=https://github.com/dadmohammad2005-spec/AI_exam](https://render.com/deploy?repo=https://github.com/dadmohammad2005-spec/AI_exam)**

Render will automatically read the included `render.yaml` Blueprint and configure your free static site or web service instantly!

### Option 2: Manual Setup on Render Dashboard
1. Go to **[dashboard.render.com](https://dashboard.render.com/)** and click **New + > Static Site**.
2. Connect your GitHub account and select repository: **`dadmohammad2005-spec/AI_exam`** (or paste `https://github.com/dadmohammad2005-spec/AI_exam`).
3. Set the following fields:
   - **Name**: `ai-exam-master`
   - **Branch**: `main`
   - **Build Command**: *(leave blank or `echo "Ready"`)*
   - **Publish Directory**: `.`
4. Click **Create Static Site**. Your application will be live in ~30 seconds with a free `*.onrender.com` URL!

---

## 🚀 Local & Alternative Hosting

1. **Direct Browser Launch**: Double-click [`Launch_AI_Exam_Software.bat`](./Launch_AI_Exam_Software.bat) or open [`index.html`](./index.html) in any web browser.
2. **Local Node.js Server**: Run `npm start` or `node server.js` to serve locally on `http://localhost:3000/`.
3. **GitHub Pages**: Go to **Settings > Pages** in this repository, select branch **`main`**, folder **`/(root)`**, and click **Save**.

---

## ✨ Features

- **🎯 107 Slide-Specific MCQs**:
  - Carefully mapped to course slides (Weeks 1, 2, 3, 5, 6, 6.1, and 7).
  - Instant visual feedback (green/red) with detailed conceptual explanations and slide citations.
  - Filter by week, difficulty (Easy, Medium, Hard), or search by topic keywords.
  - Question bookmarking / saving for focused revision.
- **⏱️ Timed Exam Simulator**:
  - Simulates a real university exam paper: 25 randomized questions under a 25-minute countdown timer.
  - Question palette with answered and flagged indicators.
  - Final score breakdown, pass/fail evaluation, time taken, and full question-by-question review.
- **🃏 Rapid Recall Flashcards**:
  - 3D flip flashcards covering definitions, PEAS tables, environment classifications, search complexities, and knowledge representation techniques.
  - Keyboard shortcut support: Press `Space` to flip, `ArrowLeft` / `ArrowRight` to navigate.
- **📖 Slide Super Notes & Cheat Sheets**:
  - Comprehensive collapsible notes distilled from all 7 slide decks.
  - Quick-reference comparison tables (Generative vs Agentic AI, 4 Agent Architectures, 6 Environment Dimensions, PEAS Framework, BFS vs DFS, 5 Knowledge Types).
  - **Exam Trap Alerts** highlighting common trick questions.
- **🧪 Interactive Problem Solver & Lab**:
  - Directed Graph Degree Calculator: Solves the exact slide problem (Vertices $u, v, w$) for in-degrees and out-degrees.
  - Environment Matrix Self-Quiz: Test your classification skills on automated taxi, chess with clock, mail sorting, and crossword puzzles.
- **🔊 Audio & Theme Controls**:
  - Built-in Web Audio API synthesizer for audio cues (correct/incorrect chimes).
  - One-click Dark / Light mode toggle.
  - Print-optimized CSS for generating hard-copy cheat sheets.

---

## 📚 Curriculum & Slide Decks Covered

1. **`week 1.pdf`**: Definitions of AI (Haugeland, Kurzweil, Winston, Poole), Historical Milestones (STANLEY, WAYMO, NASA Remote Agent, PackBot, Spam filters), Turing Test (1950), Cognitive Science, and Aristotle's Laws of Thought.
2. **`week 2.pdf`**: 1956 Dartmouth Workshop, Generative AI vs. Agentic AI, Weak AI vs. Strong AI, Rational Agent Approach, Machine Learning (Supervised vs. Unsupervised), ANNs & CNNs.
3. **`week 3.pdf`**: Agent Concept ($f: P^* \to A$), Agent Equations ($\text{Architecture} + \text{Program}$), Human / Robotic / Machine / Software / System Agents, and the 4 Core Architectures (Simple Reflex, Model-based Reflex, Goal-based, Utility-based).
4. **`week 5.pdf`**: Agent-Environment Feedback Loop, 6 Environment Dimensions (Observable, Deterministic, Episodic, Dynamic, Discrete, Multi-Agent).
5. **`week 6.pdf` & `week-6.1.pdf`**: Rational Agents, PEAS Framework (Taxi, Medical Diagnosis, English Tutor, Vacuum), Graph Theory (in-degree/out-degree calculation), Trees ($N-1$ edges), Problem Formulation, BFS vs. DFS (FIFO Queue vs. LIFO Stack, time/space complexities).
6. **`wk-7-Knowledge_Representation_AI.pdf`**: Knowledge Representation & Reasoning (KRR), 5 Knowledge Types (Declarative, Procedural, Meta, Heuristic, Structural), 4 KR Techniques (Logical, Semantic Networks with IS-A, Frames with Slots/Values, Production Rules with Recognize-Act cycle), and Applications.

---

## 💻 Tech Stack

- **HTML5 & CSS3**: Pure modern CSS with CSS variables, responsive grid/flexbox layouts, custom themes, and print media queries.
- **Vanilla JavaScript (ES6+)**: Zero external dependencies or npm packages required. 100% offline capable.
- **Node.js**: Native HTTP server implementation in `server.js` (zero dependencies).
- **Web Audio API**: Synthesized procedural audio feedback for interactive learning.

---

## 👤 Author

- **Dad Mohammad**
- Email: [dadmohammad2005@gmail.com](mailto:dadmohammad2005@gmail.com)
