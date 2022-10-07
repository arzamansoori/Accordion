const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");

function createFaq() {
  //1 div
   const newElementOne = document.createElement("div");
   newElementOne.classList.add('faq');
   accordianBody.append(newElementOne);
   //1 second div
   const divOne = document.createElement("div");
   divOne.classList.add("faq_header");
   newElementOne.append(divOne);
   //1 h3
   const heading = document.createElement("h3");
   divOne.append(heading);
   const textNode = document.createTextNode(faqData[0].question);
   heading.appendChild(textNode);
   //1 button
   const button = document.createElement("button");
   button.classList.add('show_btn');
   divOne.append(button);
   const buttonNode = document.createTextNode("+")
   button.appendChild(buttonNode);
   //1 p
   const para = document.createElement("p");
   para.classList.add('hidden');
   newElementOne.append(para);
   const paraNode = document.createTextNode(faqData[0].answer);
   para.appendChild(paraNode);


   //2 div
   const newElementTwo = document.createElement("div");
   newElementTwo.classList.add('faq');
   accordianBody.append(newElementTwo);
   //2 second div
   const divTwo = document.createElement("div");
   divTwo.classList.add("faq_header");
   newElementTwo.append(divTwo);
   //2 h3
   const headingTwo = document.createElement("h3");
   divTwo.append(headingTwo);
   const textNodeTwo = document.createTextNode(faqData[1].question);
   headingTwo.appendChild(textNodeTwo);
   //2 button
   const buttonTwo = document.createElement("button");
   buttonTwo.classList.add('show_btn');
   divTwo.append(buttonTwo);
   const buttonNodeTwo = document.createTextNode("+")
   buttonTwo.appendChild(buttonNodeTwo);
   //2 p
   const paraTwo = document.createElement("p");
   paraTwo.classList.add('hidden');
   newElementTwo.append(paraTwo);
   const paraNodeTwo = document.createTextNode(faqData[1].answer);
   paraTwo.appendChild(paraNodeTwo);


   //3 div
   const newElementThree = document.createElement("div");
   newElementThree.classList.add('faq');
   accordianBody.append(newElementThree);
   //2 third div
   const divThree = document.createElement("div");
   divThree.classList.add("faq_header");
   newElementThree.append(divThree);
   //3 h3
   const headingThree = document.createElement("h3");
   divThree.append(headingThree);
   const textNodeThree = document.createTextNode(faqData[2].question);
   headingThree.appendChild(textNodeThree);
   //3 button
   const buttonThree = document.createElement("button");
   buttonThree.classList.add('show_btn');
   divThree.append(buttonThree);
   const buttonNodeThree = document.createTextNode("+")
   buttonThree.appendChild(buttonNodeThree);
   //3 p
   const paraThree = document.createElement("p");
   paraThree.classList.add('hidden');
   newElementThree.append(paraThree);
   const paraNodeThree = document.createTextNode(faqData[2].answer);
   paraThree.appendChild(paraNodeThree);

}
createFaq();

function showFaq(btn, index) {
  let text = document.querySelectorAll(".faq p");
  if (text[index].hidden == true) {
    text[index].hidden = false;
    btn.innerHTML = "+";
    text[index].style.display = "none";

  } else {
    text[index].hidden = true;
    btn.innerHTML = "-";
    text[index].style.display = "block";
  }
}

function btnStatusUpdate() {
  const btn = document.querySelectorAll(".show_btn");
  btn.forEach((btn, index) => {
    btn.addEventListener("click", () =>
    {
      showFaq(btn, index);
    })
  })
}
btnStatusUpdate();



