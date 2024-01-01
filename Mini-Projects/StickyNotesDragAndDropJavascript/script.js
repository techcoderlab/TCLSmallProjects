const paperColors = ["#c7f9cc", "#a9def9", "#ffd6ff", "#fcf6bd", "#b8c0ff"];
const container = document.querySelector(".container");
const paperOptions = [
  {
    content: "<textarea type='text'></textarea>",
    zIndex: 3,
    position: { top: 20, left: 20 },
    dimension: { width: 350, height: 220 },
  },
  {
    content: "<textarea type='text'>Welcome to Tech Coder lab!</textarea>",
    zIndex: 2,
    position: { top: 40, left: 40 },
    dimension: { width: 350, height: 220 },
  },
  {
    content:
      "<textarea type='text'>If you like this project. \nPlease Give your valuable Feedback \nand \nshare it with others. Thanks </textarea>",
    zIndex: 1,
    position: { top: 60, left: 60 },
    dimension: { width: 350, height: 220 },
  },
];
createPapers(paperOptions);
container.addEventListener("pointerdown", userPressed, { passive: true });

function createPapers(paperOptions) {
  function generateUniqueInt() {
    if (!generateUniqueInt.uniqueSet) {
      generateUniqueInt.uniqueSet = new Set();
    }

    let uniqueInt;
    do {
      const min = 0;
      const max = paperColors.length - 1;
      uniqueInt = Math.floor(Math.random() * (max - min) + min);
    } while (generateUniqueInt.uniqueSet.has(uniqueInt));

    generateUniqueInt.uniqueSet.add(uniqueInt);

    return uniqueInt;
  }

  paperOptions.forEach((paperOption) => {
    const paperElement = document.createElement("div");
    paperElement.classList.add("paper");
    if (paperOption.dimension) {
      paperElement.style.width = `${paperOption.dimension.width}px`;
      paperElement.style.height = `${paperOption.dimension.height}px`;
    }
    if (paperOption.position) {
      paperElement.style.top = `${paperOption.position.top}px`;
      paperElement.style.left = `${paperOption.position.left}px`;
    }
    if (paperOption.zIndex) {
      paperElement.style.zIndex = paperOption.zIndex;
    }
    if (paperOption.content) {
      paperElement.innerHTML = paperOption.content;
    }

    paperElement.style.background = paperColors[generateUniqueInt()];

    container.appendChild(paperElement);
  });
}

function userPressed(event) {
  paperElement = event.target;

  if (paperElement.classList.contains("paper")) {
    paperElement.style.boxShadow = "-8px 8px 14px -8px rgba(0, 0, 0, 0.70)";
    paperElement.style.transform = "scale(1.05)";
    paperElement.style.cursor = "grabbing";

    const zIndexes = [...document.querySelectorAll(".paper")].map(
      (paper) => paper.style.zIndex
    );

    paperElement.style.zIndex = Math.max(...zIndexes) + 1;

    startX = event.clientX;
    startY = event.clientY;
    bpaper = paperElement.getBoundingClientRect();

    container.addEventListener("pointermove", userMoved, {
      passive: true,
    });
    container.addEventListener("pointerup", userReleased, {
      passive: true,
    });
    container.addEventListener("pointercancel", userReleased, {
      passive: true,
    });
  }
}

function userMoved(event) {
  const deltaX = event.clientX - startX;
  const deltaY = event.clientY - startY;
  paperElement.style.left = bpaper.left + deltaX + "px";
  paperElement.style.top = bpaper.top + deltaY + "px";
}

function userReleased() {
  paperElement.style.boxShadow = "-4px 4px 12px -6px rgba(0, 0, 0, 0.75)";
  paperElement.style.transform = "scale(1.00)";
  paperElement.style.cursor = "grab";
  container.removeEventListener("pointermove", userMoved);
  container.removeEventListener("pointerup", userReleased);
  container.removeEventListener("pointercancel", userReleased);
}
