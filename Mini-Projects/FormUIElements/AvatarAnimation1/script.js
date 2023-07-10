class AvatarInput {
  percentage = 0;

  constructor(el) {
    this.root = el;
    this.label = el.querySelector(".avatar-input__label");
    this.input = el.querySelector(".avatar-input__input");
    this.addOutline();
    this.addPercentageText();
    this.addPreviewImage();
    this.addSuccessMessage();

    this.root.addEventListener("dragover", this.onDragOver.bind(this));
    this.root.addEventListener("dragleave", this.onDragLeave.bind(this));
    this.root.addEventListener("drop", this.onDrop.bind(this));

    this.reader = new FileReader();
    this.reader.addEventListener("load", this.onFileRead.bind(this));

    this.input.addEventListener("input", this.onFileSelect.bind(this));
  }

  onDragOver(e) {
    e.preventDefault();
    this.root.classList.add("avatar-input--dragover");
  }

  onDragLeave() {
    this.removeDragoverState();
  }

  removeDragoverState() {
    this.root.classList.remove("avatar-input--dragover");
  }

  addPercentageText() {
    this.percentageText = document.createElement("div");
    this.percentageText.classList.add("avatar-input__percentage");
    this.percentageText.textContent = "0%";
    this.percentageText.style.fontSize = `${this.root.clientWidth * 0.2}px`;
    this.root.appendChild(this.percentageText);
  }

  startUploading() {
    setTimeout(() => {
      this.uploadTick();
    }, 600);
  }

  addSuccessMessage() {
    this.success = document.createElement("div");
    this.success.classList.add("avatar-input__success");

    this.successSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    this.successSvg.setAttribute("viewBox", "0 0 24 24");
    this.successSvg.classList.add("avatar-input__success-icon");

    const svgIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    svgIcon.setAttribute(
      "d",
      "M3.36902 12.4213L9.0003 18.0527C9.20134 18.2537 9.52933 18.2469 9.72183 18.0376L20.8689 5.92126"
    );
    svgIcon.setAttribute("stroke", "currentColor");
    svgIcon.setAttribute("stroke-width", "2");
    svgIcon.setAttribute("stroke-linecap", "round");
    svgIcon.setAttribute("fill", "none");

    this.successSvg.appendChild(svgIcon);
    this.success.appendChild(this.successSvg);

    this.root.appendChild(this.success);

    this.totalCheckStrokeLength = Math.ceil(svgIcon.getTotalLength()) + 2;
    this.successSvg.style.setProperty(
      "--check-stroke-offset",
      this.totalCheckStrokeLength
    );
    this.successSvg.style.setProperty(
      "--check-total-stroke",
      this.totalCheckStrokeLength
    );
  }

  onDone() {
    this.root.classList.remove("avatar-input--uploading");
    this.successSvg.style.setProperty("--check-stroke-offset", 0);
    this.root.classList.add("avatar-input--success");
    setTimeout(() => {
      this.percentage = 0;
      this.updateText();
    }, 200);

    setTimeout(() => {
      this.successSvg.style.setProperty(
        "--check-stroke-offset",
        this.totalCheckStrokeLength
      );
    }, 800);

    setTimeout(() => {
      this.root.classList.remove("avatar-input--success");
      this.updateOutline();
    }, 1200);
  }

  uploadTick() {
    if (this.percentage === 100) {
      setTimeout(() => {
        this.onDone();
      }, 400);
      return;
    }
    this.percentage++;
    this.updateOutline();
    this.updateText();
    requestAnimationFrame(this.uploadTick.bind(this));
  }

  updateText() {
    this.percentageText.textContent = this.percentage + "%";
  }

  updateOutline() {
    this.outline.style.setProperty(
      "--outline-stroke-offset",
      this.totalOutlineStrokeLength -
        this.totalOutlineStrokeLength * this.percentage * 0.01
    );
  }

  addOutline() {
    const rootWidth = this.root.clientWidth;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttribute("viewBox", `0 0 ${rootWidth} ${rootWidth}`);
    svg.classList.add("avatar-input__outline");

    const svgCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    svgCircle.setAttribute("cx", "50%");
    svgCircle.setAttribute("cy", "50%");
    svgCircle.setAttribute("r", rootWidth / 2 - 3);
    svgCircle.setAttribute("fill", "none");
    svgCircle.setAttribute("stroke", "currentColor");
    svgCircle.setAttribute("stroke-width", "3px");

    svg.appendChild(svgCircle);
    this.outline = svg;
    this.root.appendChild(svg);

    this.totalOutlineStrokeLength = Math.ceil(svgCircle.getTotalLength()) + 2;
    svg.style.setProperty(
      "--outline-stroke-offset",
      this.totalOutlineStrokeLength
    );
    svg.style.setProperty(
      "--outline-total-stroke",
      this.totalOutlineStrokeLength
    );
  }

  onDrop(e) {
    e.preventDefault();
    const items = [...e.dataTransfer.items];
    if (!items || items?.[0].kind !== "file") return;
    const file = items[0].getAsFile();
    this.reader.readAsDataURL(file);
    setTimeout(() => {
      this.removeDragoverState();
      this.root.classList.add("avatar-input--uploading");
    }, 300);
  }

  onFileSelect() {
    const file = this.input.files[0];
    if (file) {
      this.root.classList.add("avatar-input--uploading");
      this.reader.readAsDataURL(file);
    }
  }

  setPreviewImage(src) {
    this.previewImage.src = src;
  }

  addPreviewImage() {
    this.previewImage = document.createElement("img");
    this.previewImage.classList.add("avatar-input__preview");
    this.label.appendChild(this.previewImage);
  }

  onFileRead() {
    const image = this.reader.result;
    this.setPreviewImage(image);
    this.startUploading();
  }
}

Array.from(document.querySelectorAll(".avatar-input")).forEach(
  (el) => new AvatarInput(el)
);
