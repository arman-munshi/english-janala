const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
        .then(res => res.json()) //promise of json data
        .then(json => displayLeasson(json.data));
    
}

const displayLeasson = (lessons) => {
    // 1.get the container and empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2.get into every lessons
    for (let lesson of lessons) {
        console.log(lesson);
        // 3.create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
                        <a href="" class="btn btn-outline btn-primary">
                        <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
                        </a>
        `
        //append into container
        levelContainer.append(btnDiv);
    }
    
    
};
loadLessons();