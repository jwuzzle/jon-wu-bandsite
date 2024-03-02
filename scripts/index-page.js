import {BandSiteApi} from "./band-site-api.js";

const bandSite = new BandSiteApi("4ff1acf6-d299-4817-98e4-9289a44d89b5");

const renderComments = async (comments) => {
  const testimonialEl = document.getElementById("reviews");
  testimonialEl.innerHTML = '';

  comments.forEach((comment) => {
    const testimonialSub = document.createElement("div");
    testimonialSub.classList.add("reviews__submitted");
    testimonialEl.appendChild(testimonialSub);

    const avatarImgCont = document.createElement("div")
    avatarImgCont.classList.add("reviews__avatar-container");
    testimonialSub.appendChild(avatarImgCont);

    const avatarImg = document.createElement("img");
    avatarImg.classList.add("reviews__avatar");
    avatarImgCont.appendChild(avatarImg);

    const testimonialDiv = document.createElement("div");
    testimonialDiv.classList.add("reviews__data");
    testimonialSub.appendChild(testimonialDiv);

    const nameDateDiv = document.createElement("div");
    nameDateDiv.classList.add("reviews__id");
    testimonialDiv.appendChild(nameDateDiv);

    const nameEl = document.createElement("p");
    nameEl.innerText = comment.name;
    nameEl.classList.add("reviews__name");
    nameDateDiv.appendChild(nameEl);

    const timeStampEl = document.createElement("p");
    const formattedDate = new Date(comment.timestamp).toLocaleDateString(
      "en-US",
      {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }
    );
    timeStampEl.textContent = formattedDate;
    timeStampEl.classList.add("reviews__date");
    nameDateDiv.appendChild(timeStampEl);

    const commentDiv = document.createElement("div");
    testimonialDiv.appendChild(commentDiv);

    const commentEl = document.createElement("p");
    commentEl.innerText = comment.comment;
    commentEl.classList.add("reviews__comment");
    commentDiv.appendChild(commentEl);
  });
}

const getCommentsApi = async function getCommentsFromApi() {
  const bandSite = new BandSiteApi("4ff1acf6-d299-4817-98e4-9289a44d89b5");
  const data = await bandSite.getComments();
  renderComments(data.reverse());
}

getCommentsApi()

//Capure form submissions, create object and add to the beginning of the array.
const testimonialForm = document.getElementById("commentsForm");

testimonialForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userName = e.target.name.value;
    const userComment = e.target.comment.value;

    const formValues = {
        name: userName,
        comment: userComment,
    };

    await bandSite.postComments(formValues);
    
    testimonialForm.reset();

    const data = await bandSite.getComments();
    renderComments(data.reverse());
  });

