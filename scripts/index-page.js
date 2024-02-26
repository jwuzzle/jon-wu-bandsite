//Array with default entries
const userTestimonials = [
    {
        Name: "Victor Pinto",
        Date: "11/02/2023",
        Comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        Name: "Christina Cabrera",
        Date: "10/28/2023",
        Comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        Name: "Isaac Tadesse",
        Date: "10/20/2023",
        Comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

//display the default entries
const testimonialList = document.getElementById("reviews"); //grabs the element in html to place the userTestimonials 

function displayTestimonials(testimonials) {
    testimonialList.innerHTML = ''; //this clears the strings after each form entry, that way the default do not display multiple times 
    testimonials.forEach((testimonial) => {
        const testimonialSub = document.createElement("div");
        testimonialSub.classList.add("reviews__submitted");
        testimonialList.appendChild(testimonialSub);

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
        nameEl.innerText = testimonial.Name;
        nameEl.classList.add("reviews__name");
        nameDateDiv.appendChild(nameEl);

        const dateEl = document.createElement("p");
        dateEl.innerText = testimonial.Date;
        dateEl.classList.add("reviews__date");
        nameDateDiv.appendChild(dateEl);

        const commentDiv = document.createElement("div");
        testimonialDiv.appendChild(commentDiv);

        const commentEl = document.createElement("p");
        commentEl.innerText = testimonial.Comment;
        commentEl.classList.add("reviews__comment");
        commentDiv.appendChild(commentEl);
    });
};

displayTestimonials(userTestimonials); //calls the displayTestimonials function by passing the array as an argument 

//Capure form submissions, create object and add to the beginning of the array. 
const testimonialForm = document.getElementById('commentsForm');

testimonialForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentDate = new Date(); //capturing the current date "new Date()" and assigning it to the currentDate variable. would stop here if we didn't need the date back in a specific format. 
    const formattedDate = formatDate(currentDate); //processing the currentDate variable in a function to reformat and assign to a new variable which would be used to display. 

    const formValues = {
        Name: e.target.fullName.value,
        Date: formattedDate, //used here because this is the reformatted current Date to display
        Comment: e.target.comment.value,
    }

    userTestimonials.unshift(formValues);
    displayTestimonials(userTestimonials);
    e.target.reset();
});

//function to format the date in the format of MM/DD/YYYY
function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}


