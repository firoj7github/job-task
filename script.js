const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const uploadSteps = document.querySelectorAll(".upload-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;
let uploadStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    uploadStepsNum++;
    updateFormSteps();
    updateProgressbar();
    updateUploadSteps();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    uploadStepsNum--;
    updateFormSteps();
    updateProgressbar();
    updateUploadSteps();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}
function updateUploadSteps() {
  uploadSteps.forEach((uploadStep) => {
    uploadStep.classList.contains("upload-step-active") &&
    uploadStep.classList.remove("upload-step-active");
  });

  uploadSteps[uploadStepsNum].classList.add("upload-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}