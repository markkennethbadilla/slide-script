/* 
  =========================================
  CENTRALIZED ICON INVENTORY (Registry)
  All SVGs utilize currentColor and 100% dimensions
  for dynamic responsive themer compatibility
  =========================================
*/

const IconRegistry = {
  presentation: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>`,
  fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  upload: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
};

/* 
  =========================================
  CENTRALIZED BRAND ASSETS (Registry)
  Dynamically maps vector logo details to prevent mismatching.
  =========================================
*/

const BrandAssetRegistry = {
  logoMark: `<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block; vertical-align:middle;">
    <!-- Emerald Gem Motif -->
    <path d="M16 2L28 10V22L16 30L4 22V10L16 2Z" fill="url(#logo-gradient)" stroke="var(--color-luxury)" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- Gold Slide Overlay Accent -->
    <rect x="9" y="9" width="14" height="14" rx="2" stroke="var(--color-luxury)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <line x1="9" y1="16" x2="23" y2="16" stroke="var(--color-luxury)" stroke-width="1.5"/>
    <defs>
      <linearGradient id="logo-gradient" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="var(--color-accent)"/>
        <stop offset="100%" stop-color="var(--color-accent-dim)"/>
      </linearGradient>
    </defs>
  </svg>`,
  logoText: `<span style="font-family:var(--font-heading); font-weight:800; font-size:1.3rem; letter-spacing:-0.5px; margin-left:8px; vertical-align:middle; background:linear-gradient(135deg, var(--color-text) 60%, var(--color-accent) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">SlideScript</span>`
};

/* 
  =========================================
  DYNAMIC FAVICON SETTER
  Locks favicon directly to the Brand Logo Mark
  =========================================
*/

function initializeDynamicFavicon() {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M16 2L28 10V22L16 30L4 22V10L16 2Z" fill="hsl(165, 80%, 45%)" stroke="hsl(45, 90%, 55%)" stroke-width="2" stroke-linejoin="round"/>
    <rect x="9" y="9" width="14" height="14" rx="2" stroke="hsl(45, 90%, 55%)" stroke-width="2" fill="none"/>
  </svg>`;
  
  const encoded = encodeURIComponent(svgMarkup);
  const dataUri = `data:image/svg+xml,${encoded}`;
  
  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "shortcut icon";
    document.head.appendChild(link);
  }
  link.href = dataUri;
}

/* 
  =========================================
  APP INITIALIZATION & CORE BINDINGS
  =========================================
*/

document.addEventListener("DOMContentLoaded", () => {
  // Setup Dynamic Favicon & Logo elements
  initializeDynamicFavicon();
  
  const brandLogoBox = document.getElementById("brand-logo-container");
  if (brandLogoBox) {
    brandLogoBox.innerHTML = BrandAssetRegistry.logoMark + BrandAssetRegistry.logoText;
  }
  const footerLogoBox = document.getElementById("footer-logo-container");
  if (footerLogoBox) {
    footerLogoBox.innerHTML = BrandAssetRegistry.logoMark + BrandAssetRegistry.logoText;
  }

  // Inject standard UI icon containers
  injectStaticIcons();

  // Load interactive guidelines
  initializeGuide();

  // Setup Visual tabs
  initializeTabs();

  // Setup Theme Switcher
  initializeTheme();

  // Attach core logic hooks
  initializePresentationForm();
  initializeScriptParser();
});

/* 
  =========================================
  INJECT DYNAMIC ICONS FROM REGISTRY
  =========================================
*/

function injectStaticIcons() {
  const iconMaps = [
    { id: "theme-icon-slot", name: document.documentElement.getAttribute("data-theme") === "light" ? "moon" : "sun" },
    { id: "guide-toggle-icon", name: "chevronDown" },
    { id: "tab-create-icon-slot", name: "presentation" },
    { id: "tab-script-icon-slot", name: "fileText" },
    { id: "btn-create-icon-slot", name: "presentation" },
    { id: "drop-icon-slot", name: "upload" },
    { id: "output-header-icon-slot", name: "presentation" },
    { id: "placeholder-icon-slot", name: "presentation" },
    { id: "copy-btn-icon-slot", name: "copy" },
    { id: "gemini-link-icon-slot", name: "externalLink" },
    { id: "chatgpt-link-icon-slot", name: "externalLink" },
    { id: "claude-link-icon-slot", name: "externalLink" }
  ];

  iconMaps.forEach(map => {
    const el = document.getElementById(map.id);
    if (el) el.innerHTML = IconRegistry[map.name];
  });
}

/* 
  =========================================
  INTERACTIVE HOW IT WORKS ACCORDION
  =========================================
*/

const detailedSteps = [
  { step: 1, title: "Generate Canva Prompt", description: 'Use the "Create Presentation Prompt" tab, fill details and topic, and generate.' },
  { step: 2, title: "Create slides in Canva", description: "Open Canva → Magic Design AI → Paste prompt → Generate design → Pick layout." },
  { step: 3, title: "Download PDF slides", description: 'In Canva toolbar: "Share" → "Download" → Select PDF Standard → Download.' },
  { step: 4, title: "Upload PDF / PPTX", description: 'Switch to "Upload & Generate Script" tab → Drag & drop or browse the file.' },
  { step: 5, title: "Customize presenter options", description: "Select presenting tone style, time limits, and choose Q&A slide options." },
  { step: 6, title: "Copy generated prompt", description: "Press Generate to build script prompt, then copy to clipboard." },
  { step: 7, title: "Paste into AI chat", description: "Paste directly into Claude, Gemini, or ChatGPT to get your slides scripts." }
];

function initializeGuide() {
  const stepsGrid = document.getElementById("guide-steps-grid");
  const toggleBtn = document.getElementById("guide-toggle-btn");
  const toggleText = document.getElementById("guide-toggle-text");
  const toggleIcon = document.getElementById("guide-toggle-icon");

  if (stepsGrid) {
    stepsGrid.innerHTML = detailedSteps.map(step => `
      <div class="guide-step-card">
        <span class="step-number">${step.step}</span>
        <div>
          <p class="step-title">${step.title}</p>
          <p class="step-description">${step.description}</p>
        </div>
      </div>
    `).join("");
  }

  if (toggleBtn && stepsGrid) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = stepsGrid.classList.contains("hidden");
      if (isHidden) {
        stepsGrid.classList.remove("hidden");
        toggleText.textContent = "Hide steps";
        toggleIcon.classList.remove("rotated");
      } else {
        stepsGrid.classList.add("hidden");
        toggleText.textContent = "Show steps";
        toggleIcon.classList.add("rotated");
      }
    });
  }
}

/* 
  =========================================
  INTERACTIVE WORKSPACE TABS
  =========================================
*/

function initializeTabs() {
  const tabCreate = document.getElementById("tab-create-btn");
  const tabScript = document.getElementById("tab-script-btn");
  const paneCreate = document.getElementById("pane-create");
  const paneScript = document.getElementById("pane-script");

  if (tabCreate && tabScript && paneCreate && paneScript) {
    tabCreate.addEventListener("click", () => {
      tabCreate.classList.add("active");
      tabScript.classList.remove("active");
      paneCreate.classList.add("active");
      paneScript.classList.remove("active");
    });

    tabScript.addEventListener("click", () => {
      tabScript.classList.add("active");
      tabCreate.classList.remove("active");
      paneScript.classList.add("active");
      paneCreate.classList.remove("active");
    });
  }
}

/* 
  =========================================
  DYNAMIC LIGHT/DARK THEME SWITCHER
  =========================================
*/

function initializeTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const iconSlot = document.getElementById("theme-icon-slot");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      
      if (iconSlot) {
        iconSlot.innerHTML = IconRegistry[nextTheme === "dark" ? "sun" : "moon"];
      }
    });
  }
}

/* 
  =========================================
  STATE MANAGEMENT & OUTPUT RENDERING
  =========================================
*/

function showActivePrompt(promptText) {
  const placeholder = document.getElementById("output-placeholder");
  const activeContainer = document.getElementById("output-active-container");
  const promptBox = document.getElementById("prompt-output-box");

  if (placeholder && activeContainer && promptBox) {
    placeholder.classList.add("hidden");
    activeContainer.classList.remove("hidden");
    promptBox.value = promptText;
  }
}

function clearActivePrompt() {
  const placeholder = document.getElementById("output-placeholder");
  const activeContainer = document.getElementById("output-active-container");
  const promptBox = document.getElementById("prompt-output-box");

  if (placeholder && activeContainer && promptBox) {
    placeholder.classList.remove("hidden");
    activeContainer.classList.add("hidden");
    promptBox.value = "";
  }
}

// Clipboard copying state management
const copyBtn = document.getElementById("copy-prompt-btn");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const promptBox = document.getElementById("prompt-output-box");
    if (promptBox && promptBox.value) {
      await navigator.clipboard.writeText(promptBox.value);
      copyBtn.classList.add("copied");
      copyBtn.innerHTML = IconRegistry.check;
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.innerHTML = IconRegistry.copy;
      }, 2000);
    }
  });
}

/* 
  =========================================
  PANE 1: CREATE PRESENTATION PROMPT
  =========================================
*/

function initializePresentationForm() {
  const form = document.getElementById("form-create-prompt");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("create-name").value.trim();
    const role = document.getElementById("create-role").value.trim();
    const context = document.getElementById("create-context").value.trim();
    const slidesCount = document.getElementById("create-slides").value;
    const style = document.getElementById("create-style").value;
    const topic = document.getElementById("create-topic").value.trim();
    const subtopic = document.getElementById("create-subtopic").value.trim();
    const additional = document.getElementById("create-instructions").value.trim();

    const styleMap = {
      "layman-friendly": "layman-friendly and simplified — a good presenter makes complex topics understandable",
      academic: "academic and thorough — appropriate for a scholarly or PhD-level presentation",
      professional: "corporate, executive-ready and concise — suitable for business slide pitches",
      casual: "casual and conversational — highly engaging, relatable, and storytelling-focused"
    };

    let prompt = "";
    if (name || role) {
      prompt += `I am ${name || "[Name]"}`;
      if (role) prompt += `, ${role}`;
      prompt += ". ";
    }
    if (context) prompt += `${context} `;

    prompt += `It must be exactly ${slidesCount} slides total. The presentation must be complete in terms of content details so the viewers need not lookup external resources to fully comprehend it — it should be self-sufficient.\n\n`;
    prompt += `Make the presentation ${styleMap[style] || style}. Cover enough context so slide audience understanding is completely satisfied.\n\n`;
    prompt += `IMPORTANT: SLIDE IMAGES MUST NOT CONTAIN ANY INNER TEXT LABELS.\n\n`;
    prompt += `Tags: presentation, professional, ${slidesCount} pages, minimalist obsidian and gold design system\n\n`;
    
    if (additional) {
      prompt += `Special Design Rules:\n- ${additional}\n\n`;
    }

    prompt += `${slidesCount}-slide presentation outline and detailed contents for:\n`;
    prompt += topic;
    if (subtopic) prompt += `\nSubtopic focus: ${subtopic}`;

    showActivePrompt(prompt);
  });
}

/* 
  =========================================
  PANE 2: PDF/PPTX PARSING & PROMPT GENERATION
  =========================================
*/

let extractedSlides = [];

function initializeScriptParser() {
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("file-input");
  const browseBtn = document.getElementById("browse-btn");
  const loader = document.getElementById("extractor-loader");
  const workspace = document.getElementById("extracted-workspace");

  if (!dropZone || !fileInput) return;

  // Click file browse hook
  if (browseBtn) {
    browseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  }
  dropZone.addEventListener("click", () => fileInput.click());

  // Drag and Drop state styling
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file) handleUploadedFile(file);
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) handleUploadedFile(file);
  });

  // Remove File Hook
  const removeBtn = document.getElementById("btn-remove-file");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      extractedSlides = [];
      fileInput.value = "";
      workspace.classList.add("hidden");
      dropZone.classList.remove("hidden");
      clearActivePrompt();
    });
  }

  // Generate Script Hook
  const generateScriptBtn = document.getElementById("btn-generate-script");
  if (generateScriptBtn) {
    generateScriptBtn.addEventListener("click", () => {
      if (extractedSlides.length === 0) return;

      const name = document.getElementById("script-name").value.trim();
      const role = document.getElementById("script-role").value.trim();
      const context = document.getElementById("script-context").value.trim();
      const style = document.getElementById("script-style").value;
      const qna = parseInt(document.getElementById("script-qna").value) || 0;
      const mcq = parseInt(document.getElementById("script-mcq").value) || 1;
      const additional = document.getElementById("script-instructions").value.trim();

      const styleMap = {
        "layman-friendly": "layman-friendly and simplified — a great presenter makes complex topics easily understandable",
        academic: "academic and thorough — appropriate for a scholarly audience with complete coverage of context",
        professional: "professional, executive and concise — suitable for a corporate presentation",
        casual: "casual and conversational — engaging, relatable, storytelling-focused and easy to follow"
      };

      let prompt = "";
      if (name || role) {
        prompt += `I am ${name || "[Name]"}`;
        if (role) prompt += `, ${role}`;
        prompt += ". ";
      }
      if (context) prompt += `${context}\n\n`;
      else prompt += "\n\n";

      prompt += `I'm pasting the extracted contents of my presentation slides below. Please intelligently parse Slides 1 through ${extractedSlides.length} and the content of each, and create a complete, word-for-word presentation script that I can deliver.\n\n`;
      
      prompt += `Guidelines:\n`;
      prompt += `- Make the script ${styleMap[style] || style}\n`;
      prompt += `- Be comprehensive and cover enough context so the audience's understanding is complete\n`;
      prompt += `- The script should flow naturally as spoken words\n`;

      if (qna > 0) {
        prompt += `- Make the last ${qna} slide(s) have ${mcq} multiple choice question(s) each\n`;
        prompt += `- Include the answer key ONLY in the script (not visible on the slides themselves)\n`;
      }
      if (additional) {
        prompt += `- ${additional}\n`;
      }

      prompt += `\n# of content slides: ${extractedSlides.length}\n`;
      if (qna > 0) {
        prompt += `# of Q&A slides to add at the end: ${qna}\n`;
        prompt += `# of MCQ per Q&A slide: ${mcq}\n`;
      }
      prompt += `# of total slides: ${extractedSlides.length + qna}\n`;

      prompt += `\nParse the presentation contents below slide by slide and use exactly as provided:\n\n`;

      extractedSlides.forEach(slide => {
        prompt += `--- Slide ${slide.page} of ${extractedSlides.length} ---\n`;
        prompt += `${slide.text}\n\n`;
      });

      showActivePrompt(prompt);
    });
  }
}

async function handleUploadedFile(file) {
  const dropZone = document.getElementById("drop-zone");
  const loader = document.getElementById("extractor-loader");
  const workspace = document.getElementById("extracted-workspace");
  const errorBanner = document.getElementById("warning-empty-slides");

  dropZone.classList.add("hidden");
  loader.classList.remove("hidden");
  workspace.classList.add("hidden");
  if (errorBanner) errorBanner.classList.add("hidden");

  try {
    const extension = file.name.toLowerCase().slice(file.name.lastIndexOf("."));
    if (extension === ".pdf") {
      await processPdf(file);
    } else if (extension === ".pptx") {
      await processPptx(file);
    } else {
      throw new Error("Invalid file format. Please upload a PDF or PowerPoint (.pptx) file.");
    }

    // Load extracted slide preview panel
    renderSlidePreviews(file.name);
    loader.classList.add("hidden");
    workspace.classList.remove("hidden");
  } catch (err) {
    console.error("Slide extraction failure:", err);
    alert(err.message || "Failed to parse slides. Ensure the file is not corrupted or password-secured.");
    loader.classList.add("hidden");
    dropZone.classList.remove("hidden");
  }
}

/* 
  =========================================
  CLIENT-SIDE PDF TEXT EXTRACTION ENGINE
  =========================================
*/

async function processPdf(file) {
  const arrayBuffer = await file.arrayBuffer();
  
  // Dynamically load PDFJS Library worker via CDN
  const pdfjsLib = await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.624/build/pdf.min.mjs");
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.624/build/pdf.worker.min.mjs";

  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  extractedSlides = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const rawText = textContent.items
      .map(item => item.str || "")
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    extractedSlides.push({
      page: i,
      text: rawText || "(no extractable text on this slide)",
      hasText: rawText.length > 0
    });
  }
}

/* 
  =========================================
  CLIENT-SIDE PPTX ZIP-XML TEXT EXTRACTION
  =========================================
*/

async function processPptx(file) {
  const arrayBuffer = await file.arrayBuffer();
  if (typeof JSZip === "undefined") {
    throw new Error("Zip helper engine failed to load. Please verify your connection.");
  }
  
  const zip = await JSZip.loadAsync(arrayBuffer);
  const slideFiles = Object.keys(zip.files)
    .filter(name => /^ppt\/slides\/slide\d+\.xml$/.test(name))
    .sort((a, b) => {
      const numA = parseInt(a.match(/slide(\d+)/)?.[1] || "0");
      const numB = parseInt(b.match(/slide(\d+)/)?.[1] || "0");
      return numA - numB;
    });

  if (slideFiles.length === 0) {
    throw new Error("Empty PowerPoint file or no slides found in XML tree.");
  }

  const parser = new DOMParser();
  extractedSlides = [];

  for (let i = 0; i < slideFiles.length; i++) {
    const xml = await zip.files[slideFiles[i]].async("text");
    const xmlDoc = parser.parseFromString(xml, "application/xml");
    
    // Parse PowerPoint DrawingML text tag 'a:t' namespaces
    const tNodes = xmlDoc.getElementsByTagNameNS("http://schemas.openxmlformats.org/drawingml/2006/main", "t");
    let texts = [];
    for (let j = 0; j < tNodes.length; j++) {
      const val = tNodes[j].textContent?.trim();
      if (val) texts.push(val);
    }

    const rawText = texts.join(" ").replace(/\s+/g, " ").trim();
    extractedSlides.push({
      page: i + 1,
      text: rawText || "(no extractable text on this slide)",
      hasText: rawText.length > 0
    });
  }
}

/* 
  =========================================
  SLIDES WORKSPACE PREVIEW INJECTION
  =========================================
*/

function renderSlidePreviews(filename) {
  document.getElementById("meta-filename").textContent = filename;
  document.getElementById("meta-slidecount").textContent = `${extractedSlides.length} slide(s) extracted`;

  // Check for empty slides
  const emptySlides = extractedSlides.filter(s => !s.hasText).map(s => s.page);
  const warningBanner = document.getElementById("warning-empty-slides");
  
  if (warningBanner) {
    if (emptySlides.length > 0) {
      warningBanner.classList.remove("hidden");
      warningBanner.innerHTML = `
        <span class="warning-icon-slot" style="width:16px; height:16px;">${IconRegistry.warning}</span>
        <span>Warning: Slides [${emptySlides.join(", ")}] have no extractable text. Please ensure these slides aren't purely images.</span>
      `;
    } else {
      warningBanner.classList.add("hidden");
    }
  }

  // Populate Slide preview accordion list
  const container = document.getElementById("slides-accordion-list");
  if (container) {
    container.innerHTML = extractedSlides.map(slide => `
      <div class="accordion-item">
        <button type="button" class="accordion-header" onclick="toggleAccordionItem(this)">
          <div class="accordion-title-group">
            <span class="accordion-page-badge">${slide.page}</span>
            <span>Slide ${slide.page}</span>
            ${!slide.hasText ? `<span class="accordion-empty-badge">no text</span>` : ""}
          </div>
          <span class="accordion-chevron-slot">${IconRegistry.chevronDown}</span>
        </button>
        <div class="accordion-body hidden">${escapeHtml(slide.text)}</div>
      </div>
    `).join("");
  }

  // Set file icon
  const metaIcon = document.getElementById("meta-file-icon-slot");
  if (metaIcon) metaIcon.innerHTML = IconRegistry.fileText;
  
  const removeIcon = document.getElementById("remove-file-icon-slot");
  if (removeIcon) removeIcon.innerHTML = IconRegistry.close;

  const btnScriptIcon = document.getElementById("btn-script-gen-icon-slot");
  if (btnScriptIcon) btnScriptIcon.innerHTML = IconRegistry.presentation;
}

window.toggleAccordionItem = function(button) {
  const body = button.nextElementSibling;
  const chevron = button.querySelector(".accordion-chevron-slot");
  if (body) {
    const isHidden = body.classList.contains("hidden");
    if (isHidden) {
      body.classList.remove("hidden");
      if (chevron) chevron.classList.add("rotated");
    } else {
      body.classList.add("hidden");
      if (chevron) chevron.classList.remove("rotated");
    }
  }
};

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
