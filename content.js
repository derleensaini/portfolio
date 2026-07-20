/* =============================================================================
   ✏️  EDIT YOUR PORTFOLIO HERE
   -----------------------------------------------------------------------------
   This is the ONLY file you need to touch to change any wording on your site.
   Edit the text between the quotation marks "like this" and save the file,
   then refresh your browser to see the changes.

   Tips:
   - Keep the quotation marks "" around your text.
   - Keep the commas at the end of each line.
   - To add a new item to a list, copy an existing { ... } block and edit it.
   - Lines starting with //  are notes to you and are ignored by the website.
   ============================================================================= */

const CONTENT = {

  /* --- BASIC INFO (used in the navbar, hero, footer) --------------------- */
  meta: {
    name: "Derleen Saini",
    // The script/cursive accent words shown under your name in the hero
    scriptAccent: "AI and Analytics",
    // Short one-liner under your name in the hero
    tagline: "Turning messy data into actionable decisions with SQL, Tableau, and AI-powered analytics.",
    
  },

  /* --- HERO SECTION ------------------------------------------------------ */
  hero: {
    eyebrow: "Welcome to my portfolio",
    // The big intro words (your name). Each line stacks on top of the other.
    headlineTop: "Derleen",
    headlineBottom: "Saini",
    photo: "assets/derleen.jpg",      // your photo
    ctaPrimary: "View my work",       // button that scrolls to projects
    ctaSecondary: "Get in touch",     // button that scrolls to contact
  },

  /* --- ABOUT SECTION ----------------------------------------------------- */
  about: {
    heading: "ABOUT ME",
    // You can write one or more paragraphs. Each "..." is its own paragraph.
    paragraphs: [
      "Hi, I'm Derleen! I recently completed my Master of Science in Information Systems at Santa Clara University, building on an undergraduate degree in MIS and Business Analytics. My work sits where business meets technology, turning data into decisions through analytics, visualization, and AI.",
      "Through roles with Microsoft, Beats by Dre, and Distribind, I've led end-to-end projects using Python, SQL, Tableau, and modern AI tooling. At Microsoft, I co-authored a whitepaper (published on the Microsoft Tech Blog and arXiv) analyzing sentiment across earnings calls, benchmarking AI platforms, and building a GPT-4o chatbot, work that turned messy text into signals finance teams could actually use.",
      "I gravitate toward ambiguous problems and ship working solutions quickly. I'm comfortable across the technical stack, but most of the real work is figuring out what's worth answering in the first place.",
    ],
    // Skill icons shown in a row under the About text (left to right order).
    icons: [
      { src: "assets/icon-excel.svg", alt: "Excel" },
      { src: "assets/icon-sql-data.svg", alt: "SQL / data" },
      { src: "assets/icon-visualize.svg", alt: "Data visualization" },
      { src: "assets/icon-ai-sparkle.svg", alt: "AI" },
    ],
    // Small highlight stats shown beside the about text. Keep to 3 for best layout.
    stats: [
      { value: "9", label: "LLM & NLP tools benchmarked" },
      { value: "21M+", label: "records engineered in BI projects" },
      { value: "4+", label: "years across data internships" },
    ],
  },

  /* --- EXPERIENCE SECTION ------------------------------------------------ */
  experience: {
    heading: "Experience",
    // Most recent first. Copy a { ... } block to add another role.
    jobs: [
      {
        company: "Microsoft",
        role: "Data Analyst Intern (MSIS Practicum)",
        timeline: "Jan 2025 – Jun 2025",
        description: "Benchmarked 9 LLM and NLP tools (Copilot, GPT-4o, Gemini, Azure AI, FinBERT) on 4,800+ labeled financial sentences and built a multi-model sentiment analysis pipeline over 8+ quarters of earnings call transcripts. Co-authored a published whitepaper on the Microsoft Tech Blog and prototyped a Streamlit + GPT-4o chatbot for stakeholder self-service querying.",
        // Optional links shown under the description (add { label, url } items).
        links: [
          { label: "Microsoft Tech Blog", url: "https://techcommunity.microsoft.com/blog/microsoft365copilotblog/llms-can-read-but-can-they-understand-wall-street-benchmarking-their-financial-i/4412043" },
          { label: "arXiv paper", url: "https://arxiv.org/abs/2505.16090v1" },
        ],
      },
      {
        company: "Beats by Dre",
        role: "Consumer Insight Data Analytics Extern",
        timeline: "Aug 2024 – Sep 2024",
        description: "Delivered a consumer insights dashboard analyzing 1,000+ Amazon reviews with Python, NLP, and Gemini AI, surfacing 10 high-impact themes that lifted targeting effectiveness 10%. Presented KPIs and segmentation insights to cross-functional marketing stakeholders.",
        // Optional links shown under the description (add { label, url } items).
        links: [
          { label: "View project notebook", url: "https://colab.research.google.com/drive/11itJM6EfiFcAuHBafAV3WADOS75TtPUb?usp=sharing" },
        ],
      },
      {
        company: "Distribind",
        role: "Data Analyst Intern",
        timeline: "Jun 2022 – Aug 2022",
        description: "Customized and transformed client datasets in Excel to onboard 7 enterprise clients, improving operational efficiency 5%. Resolved critical errors that reduced processing failures 34%, and launched the U.S. client analytics platform driving a 20% reduction in portfolio risk exposure.",
      },
    ],
  },

  /* --- SKILLS SECTION (split into 3 categories) -------------------------- */
  skills: {
    heading: "Skills",
    categories: [
      {
        name: "BI / Analytics / ML",
        items: ["Tableau", "Power BI", "KPI Design", "Natural Language Processing", "Machine Learning", "Generative AI", "Data Warehousing (ETL)", "Prompt Engineering", "Claude", "GPT", "Copilot"],
      },
      {
        name: "Tools & Platforms",
        items: ["Microsoft Excel", "Azure", "GCP", "AWS", "Jupyter Notebook", "VS Code", "Streamlit"],
      },
      {
        name: "Languages",
        items: ["Python", "SQL", "PySpark", "UNIX / Linux", "HTML", "CSS", "JavaScript"],
      },
    ],
  },

  /* --- PROJECTS SECTION -------------------------------------------------- */
  projects: {
    heading: "Projects",
    // Each project has: title, summary, context, data, results, and tags.
    items: [
      {
        title: "AI Data Analyst Agent",
        summary: "A web app that lets anyone query a dataset in plain English.",
        context: "Users upload a CSV or pick a sample, ask a question, and an AI agent writes and runs the SQL and Python to answer it, then charts the result.",
        data: "Built an agent loop with tool calling, automatic data-quality profiling, and an interactive cleaning panel that requires confirmation for judgment calls and logs every change.",
        results: "Validated accuracy with an 11-question hand-graded eval, which caught and fixed an ungrounded-number bug and guided the production model choice.",
        tags: ["Streamlit", "DuckDB", "Plotly", "Anthropic API"],
        links: [
          { label: "View live app", url: "https://ai-data-analyst-derleensaini.streamlit.app/" },
          { label: "View on GitHub", url: "https://github.com/derleensaini/ai-data-analyst" },
        ],
      },
      {
        title: "Divvy Bike Share — Data Warehousing & BI",
        summary: "A full analytics lifecycle for a city bike share system, from raw trips to executive dashboards.",
        context: "Built an end-to-end pipeline to help operations teams make pricing, station rebalancing, and membership decisions.",
        data: "21M+ trip records loaded into a MySQL star schema via ETL, then visualized in interactive Tableau dashboards.",
        results: "Delivered recommendations on pricing tiers, station rebalancing, and membership growth backed by the full dataset.",
        tags: ["Python", "ETL", "SQL", "Tableau", "EDA"],
        // Optional links shown at the bottom of the card (add { label, url } items).
        links: [
          { label: "View project PDF", url: "assets/divvy.pdf" },
        ],
      },
      {
        title: "Generative AI Storytelling Product",
        summary: "An interactive app that generates illustrated stories with text, images, and narration.",
        context: "Explored applications of generative AI in digital media as an end-to-end product experience.",
        data: "Combined LLMs, NLTK, and LangChain with image generation (DALL·E) and text-to-speech.",
        results: "Produced a working interactive product that generates text, illustrations, and narrated audio on demand.",
        tags: ["Python", "Streamlit", "LangChain", "OpenAI", "DALL·E"],
      },
      {
        title: "Predicting Stock Price Movement",
        summary: "Machine learning models that predict price movement from earnings call language.",
        context: "Framed financial decision-making as a predictive product using NLP features from call transcripts.",
        data: "40 healthcare earnings call transcripts processed with SpaCy and a document-term matrix.",
        results: "Achieved an F1 score of 0.80 across Random Forest, Logistic Regression, AutoGluon, and SVM models.",
        tags: ["SpaCy", "Random Forest", "Logistic Regression", "AutoGluon", "SVM"],
      },
      {
        title: "TravelMinds — Travel Attractions Itinerary Recommendation System",
        summary: "An AI-powered system that recommends personalized travel attraction itineraries using semantic search.",
        context: "Built a retrieval-augmented recommendation product that matches travelers to attractions based on their inputs.",
        data: "Embedded a dataset of 6,808 locations and 3,286 cities with a Hugging Face sentence transformer, stored in Pinecone for similarity search.",
        results: "Delivered an interactive Streamlit interface that generates a personalized attraction itinerary from user inputs.",
        tags: ["RAG", "Semantic Search", "Hugging Face", "Pinecone", "Streamlit", "APIs"],
        links: [
          { label: "View project PDF", url: "assets/travelminds.pdf" },
        ],
      },
    ],
  },

  /* --- EDUCATION SECTION ------------------------------------------------- */
  education: {
    heading: "Education",
    items: [
      {
        degree: "M.S. Information Systems",
        school: "Santa Clara University",
        timeline: "Sep 2023 – Jun 2025",
      },
      {
        degree: "B.S. Management Information Systems & Business Analytics",
        school: "Santa Clara University",
        timeline: "Sep 2020 – Mar 2024",
      },
    ],
  },

  /* --- LEADERSHIP SECTION (with space for your photos) ------------------- */
  leadership: {
    heading: "My Interests",
    // Bubbles shown ABOVE the photos.
    items: [
      {
        role: "Cultural Show Director & Bhangra Choreographer",
        org: "SCU Intandesh Club",
        timeline: "2020 – 2024",
        description: "Directed a 3-hour culture show and Indian celebrations like Diwali and Holi, coordinating across campus organizations and marketing teams to attract 500+ attendees and generate $7,000+ in profit. Choreographed and led a 12-member Bhangra dance team that drove a 30% increase in event attendance.",
      },
    ],
    // PHOTO SPACE: these show in a row. Put the 4 image files in the "assets"
    // folder named interest1.jpg, interest2.jpg, interest3.jpg, interest4.jpg.
    // Add a caption in "" if you want text over a photo (leave "" for none).
    photos: [
      { src: "assets/interest1.jpg", caption: "" },
      { src: "assets/interest2.jpg", caption: "" },
      { src: "assets/interest3.jpg", caption: "" },
      { src: "assets/interest4.jpg", caption: "" },
    ],
    // Bubbles shown BELOW the photos.
    itemsBelow: [
      {
        role: "Teaching Assistant",
        org: "Sikh Gurdwara San Jose, California",
        timeline: "Aug 2015 – Mar 2020",
        description: "Dedicated 500+ hours of service as a teaching assistant every Sunday at Guru Nanak Khalsa School, teaching children ages 4–6 about Sikh culture and history through crafts, interactive games, and hands-on projects. Coordinated activities to keep children engaged and learning while developing innovative teaching styles and collaboration skills, and continue to share knowledge of the Sikh religion with those who may be unaware.",
      },
    ],
  },

  /* --- RESUME SECTION ---------------------------------------------------- */
  resume: {
    heading: "Resume",
    blurb: "View my full resume inline below, or download a PDF copy.",
    file: "assets/Derleen_Saini_Resume.pdf",   // the PDF shown + downloaded
    downloadLabel: "Download PDF",
    viewLabel: "Open in new tab",
  },

  /* --- CONTACT SECTION --------------------------------------------------- */
  contact: {
    heading: "Let's Connect",
    blurb: "I'm open to data/business analyst, business intelligence and generative AI roles. The best way to reach me is by email or LinkedIn.",
    email: "Derleen101@gmail.com",
    linkedin: "https://www.linkedin.com/in/derleen-saini",
    // The text shown for the LinkedIn link (without https://)
    linkedinLabel: "linkedin.com/in/derleen-saini",
  },

  /* --- FOOTER ------------------------------------------------------------ */
  footer: {
    note: "Designed & built by Derleen Saini",
  },
};
