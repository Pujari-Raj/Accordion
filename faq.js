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
// const faqs = [];

function showFaq() {

  faqData.forEach((allfaqs) => {

  // creating div
  var creatediv = document.createElement("div");
  creatediv.classList.add("faq");

  // faq_header div
  let faqheaderdiv = document.createElement("div");
  faqheaderdiv.classList.add("faq_header");
  creatediv.appendChild(faqheaderdiv);

  //creating header
  let headingtag = document.createElement("h3");
  let headingcontent = document.createTextNode(allfaqs.question);

  // adding head tag inside div
  headingtag.appendChild(headingcontent);
  faqheaderdiv.appendChild(headingtag);
  
  // creating para-tag insdie(creatediv) and adding (hidden) class to it
  let dropdownanswer = document.createElement("p");
  let dropdownanswercontent = document.createTextNode(allfaqs.answer);
  dropdownanswer.classList.add("hidden");
  dropdownanswer.appendChild(dropdownanswercontent);
  creatediv.appendChild(dropdownanswer);

  //adding whole faq-div inside accordian_body(div)
  accordianBody.appendChild(creatediv);

  // creating dropdown button
  var dropbtndiv = document.createElement("button");
  dropbtndiv.classList.add("show_btn");
  
  //adding dropdown button inside faqheaderdiv bcz its div(flex) 
  faqheaderdiv.appendChild(dropbtndiv);
  
  //eventlisetner
  let dynamicdropdown = true;
  dropbtndiv.addEventListener("click", () =>{

    // condition to show the dropdown , if its true then make it display
    // property to block else make it hidden(i.e display-none)
    if(dynamicdropdown)
    {
      dropdownanswer.style.display = "block";
      console.log("inside if...");
      dynamicdropdown = false;
    }
    else{
      dropdownanswer.style.display = "none"; 
      console.log("inside else...");
      dynamicdropdown = true;
    }
  });

  });  
}

function createFaq() {

} 

function btnStatusUpdate() {
  
}

window.addEventListener("load", showFaq);