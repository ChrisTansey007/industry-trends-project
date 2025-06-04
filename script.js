const FONT_COLOR = "#073B4C";
const GRID_COLOR = "#d1d5db";
const PALETTE = {
  red: "#FF6B6B",
  yellow: "#FFD166",
  green: "#06D6A0",
  blue: "#118AB2",
  darkBlue: "#073B4C",
};

function wrapLabel(str, maxWidth) {
  if (typeof str !== "string") return str;
  if (str.length <= maxWidth) {
    return str;
  }
  const words = str.split(" ");
  const lines = [];
  let currentLine = "";
  for (const word of words) {
    if ((currentLine + word).length > maxWidth && currentLine.length > 0) {
      lines.push(currentLine.trim());
      currentLine = "";
    }
    currentLine += word + " ";
  }
  lines.push(currentLine.trim());
  return lines;
}

const sharedChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: FONT_COLOR,
        font: {
          family: "'Inter', sans-serif",
        },
      },
    },
    tooltip: {
      callbacks: {
        title: function (tooltipItems) {
          const item = tooltipItems[0];
          let label = item.chart.data.labels[item.dataIndex];
          if (Array.isArray(label)) {
            return label.join(" ");
          }
          return label;
        },
      },
      backgroundColor: "rgba(7, 59, 76, 0.9)",
      titleFont: {
        family: "'Inter', sans-serif",
        size: 14,
        weight: "bold",
      },
      bodyFont: {
        family: "'Inter', sans-serif",
        size: 12,
      },
      padding: 12,
      cornerRadius: 8,
      boxPadding: 4,
    },
  },
};

const competencyData = {
  labels: [
    wrapLabel("Technical Stack Fluency", 16),
    wrapLabel("ML Process & Deployment", 16),
    wrapLabel("Business Acumen & Problem Solving", 16),
    wrapLabel("Soft Skills & Collaboration", 16),
  ],
  datasets: [
    {
      label: "Competency Breakdown",
      data: [45, 30, 15, 10],
      backgroundColor: [
        PALETTE.blue,
        PALETTE.green,
        PALETTE.yellow,
        PALETTE.red,
      ],
      borderColor: "#f8fafc",
      borderWidth: 4,
      hoverOffset: 10,
    },
  ],
};

new Chart(document.getElementById("competencyDonutChart"), {
  type: "doughnut",
  data: competencyData,
  options: {
    ...sharedChartOptions,
    plugins: {
      ...sharedChartOptions.plugins,
      legend: {
        position: "bottom",
        labels: {
          color: FONT_COLOR,
          font: {
            family: "'Inter', sans-serif",
          },
          boxWidth: 20,
          padding: 20,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map(function (label, i) {
                const meta = chart.getDatasetMeta(0);
                const style = meta.controller.getStyle(i);
                return {
                  text: Array.isArray(label) ? label.join(" ") : label,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  lineWidth: style.borderWidth,
                  hidden:
                    isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
  },
});

const techStackBarChartCanvas = document.getElementById(
  "techStackBarChartCanvas"
);
const techStackCategories = [
  {
    label: "Cloud Platforms (AWS, GCP, Azure)",
    subtitle: "Fluency in deploying and managing GenAI workloads at scale.",
    contentId: "modal-tech-cloud-platforms-content",
    bgColor: PALETTE.blue,
  },
  {
    label: "LLMs (OpenAI, Claude, Mistral)",
    subtitle:
      "Selecting and optimizing the right foundation models for your use case.",
    contentId: "modal-tech-llms-content",
    bgColor: PALETTE.green,
  },
  {
    label: "Deployment (Docker, Kubernetes, CI/CD)",
    subtitle:
      "Containerization and automated pipelines for reliable GenAI delivery.",
    contentId: "modal-tech-deployment-content",
    bgColor: PALETTE.yellow,
  },
  {
    label: "Frameworks (PyTorch, TensorFlow)",
    subtitle:
      "Core DL frameworks for training, fine-tuning, and serving GenAI models.",
    contentId: "modal-tech-frameworks-content",
    bgColor: PALETTE.red,
  },
  {
    label: "Vector DBs (Pinecone, Chroma)",
    subtitle:
      "High-performance embedding stores for retrieval tasks (RAG, semantic search).",
    contentId: "modal-tech-vector-dbs-content",
    bgColor: PALETTE.darkBlue,
  },
  {
    label: "Orchestration (LangChain, LangGraph)",
    subtitle: "Building modular, multi-agent GenAI workflows and pipelines.",
    contentId: "modal-tech-orchestration-content",
    bgColor: "#EF476F", // A slightly different red for variety if needed, or use PALETTE.red
  },
];

const techStackChartData = {
  labels: techStackCategories.map((cat) => wrapLabel(cat.label, 20)),
  datasets: [
    {
      label: "Importance Score (Click for Details)",
      data: [95, 92, 85, 0, 75, 70], // Example scores (note: the 85 was changed to 0 to match the array length)
      backgroundColor: techStackCategories.map((cat) => cat.bgColor),
      borderRadius: 4,
      barThickness: 20,
    },
  ],
};

const techStackChart = new Chart(techStackBarChartCanvas, {
  type: "bar",
  data: techStackChartData,
  options: {
    ...sharedChartOptions,
    indexAxis: "y",
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const clickedElementIndex = elements[0].index;
        const category = techStackCategories[clickedElementIndex];
        openModal(
          category.contentId,
          `${category.label}: ${category.subtitle}`,
          category.bgColor
        );
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: GRID_COLOR, borderDash: [2, 4] },
        ticks: { color: FONT_COLOR },
      },
      y: {
        grid: { display: false },
        ticks: { color: FONT_COLOR, font: { size: 12 } },
      },
    },
    plugins: {
      ...sharedChartOptions.plugins,
      legend: { display: false },
      tooltip: {
        ...sharedChartOptions.plugins.tooltip,
        callbacks: {
          ...sharedChartOptions.plugins.tooltip.callbacks,
          footer: function () {
            return "Click bar for details";
          },
        },
      },
    },
  },
});

// Modal Pop-out Functionality
const modalTriggers = document.querySelectorAll(".modal-trigger-card");
let activeModal = null;
let backdrop = null;

function closeModal() {
  if (activeModal) {
    activeModal.classList.remove("open");
    setTimeout(() => {
      if (activeModal) activeModal.remove();
      activeModal = null;
    }, 300);
  }
  if (backdrop) {
    backdrop.classList.remove("open");
    setTimeout(() => {
      if (backdrop) backdrop.remove();
      backdrop = null;
    }, 300);
  }
  document.body.style.overflow = "";
}

function openModal(
  contentSourceId,
  modalTitleText,
  headerBgColorOverride = null
) {
  const contentSource = document.getElementById(contentSourceId);
  if (!contentSource) {
    console.error("Modal content source not found:", contentSourceId);
    return;
  }

  backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  document.body.appendChild(backdrop);
  setTimeout(() => backdrop.classList.add("open"), 10);

  activeModal = document.createElement("div");
  activeModal.className =
    "modal-container bg-white rounded-xl shadow-2xl flex flex-col";

  const modalHeader = document.createElement("div");
  let headerBgClass = headerBgColorOverride || "bg-gray-200";
  let headerTextClass = "text-[#073B4C]";

  // Adjust text color for dark backgrounds
  const darkBgs = [PALETTE.blue, PALETTE.red, PALETTE.darkBlue, "#EF476F"];
  if (darkBgs.includes(headerBgClass)) {
    headerTextClass = "text-white";
  }
  // If it's a direct color string, use it. Otherwise, it's a class.
  const styleOrClass =
    headerBgClass.startsWith("#") || headerBgClass.startsWith("rgb")
      ? `style="background-color: ${headerBgClass}"`
      : `class="${headerBgClass}"`;

  modalHeader.className = `p-4 md:p-5 flex justify-between items-center rounded-t-xl ${headerTextClass}`;
  if (headerBgClass.startsWith("#") || headerBgClass.startsWith("rgb")) {
    modalHeader.style.backgroundColor = headerBgClass;
  } else {
    modalHeader.classList.add(headerBgClass);
  }

  const modalTitleElement = document.createElement("h3");
  modalTitleElement.className = "text-xl md:text-2xl font-bold";
  modalTitleElement.textContent = modalTitleText;

  const closeButton = document.createElement("button");
  closeButton.className = `text-2xl font-bold leading-none hover:opacity-75 ${headerTextClass}`;
  closeButton.innerHTML = "&times;";
  closeButton.onclick = closeModal;

  modalHeader.appendChild(modalTitleElement);
  modalHeader.appendChild(closeButton);
  activeModal.appendChild(modalHeader);

  const modalContentArea = document.createElement("div");
  modalContentArea.className = "modal-content-area p-6 text-[#073B4C]";
  modalContentArea.innerHTML = contentSource.innerHTML;
  activeModal.appendChild(modalContentArea);

  document.body.appendChild(activeModal);
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    if (activeModal) activeModal.classList.add("open");
  }, 10);

  backdrop.onclick = closeModal;
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modalTargetId = trigger.dataset.modalTarget;
    const modalTitleText =
      trigger.dataset.modalTitle || trigger.querySelector("h3").textContent;
    let headerBgColor = null;
    // Logic to get specific background color from trigger if needed
    if (trigger.classList.contains("bg-[#118AB2]"))
      headerBgColor = PALETTE.blue;
    else if (trigger.classList.contains("bg-[#06D6A0]"))
      headerBgColor = PALETTE.green;
    else if (trigger.classList.contains("bg-[#FFD166]"))
      headerBgColor = PALETTE.yellow;
    else if (trigger.classList.contains("bg-[#FF6B6B]"))
      headerBgColor = PALETTE.red;

    openModal(modalTargetId + "-content", modalTitleText, headerBgColor);
  });
});
