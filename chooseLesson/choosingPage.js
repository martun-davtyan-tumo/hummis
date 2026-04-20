const obj = [
        {
            "sectionName": "Բաժին 1",
            "chapters":
                [
                    {
                        "chapterName": "Գլուխ 2",
                        "lessons":
                            [
                                {
                                    "lessonName": "ԱԶԱՏԱԳՐԱԿԱՆ ՇԱՐԺՈՒՄՆԵՐ 17ՐԴ ԴԱՐԻ ԵՐԿՐՈՐԴ ԿԵՍԻՆ ԵՒ 18ՐԴ ԴԱՐՈՒՄ",
                                    "url": "https://rotxsczdbdglqqjagnwy.supabase.co/storage/v1/object/public/HUMmis/uploads/2_5415924691917379322.pptx_20260420_153948_0000_a1d0f9f9-4804-4012-9594-4d6fe4342882.pptx"
                                },

                                {
                                    "lessonName": "ԱՐԵՒՄՏՅԱՆ ՀԱՅԱՍՏԱՆԸ 19ՐԴ ԴԱՐԻ ՍԿԶԲՆԵՐԻՆ ԵՒ ՌՈՒՍ-ԹՈՒՐՔԱԿԱՆ ՊԱՏԵՐԱԶՄՆԵՐԸ",
                                    "url": "",
                                },


                                {
                                    "lessonName": "ՀԱՅԱՍՏԱՆԸ 19ՐԴ ԴԱՐԻ 30-40ԱԿԱՆ ԹՎԱԿԱՆՆԵՐԻՆ",
                                    "url": ""
                                }
                            ]
                    }
                ]
        }

    ];


// parameter section is an object
function make_section(section)
{
    const sectionDetails = document.createElement("details"); 
     

    const sectionSummary = document.createElement("summary");
    sectionSummary.textContent = section.sectionName;
    sectionSummary.className = "section";

    sectionDetails.appendChild(sectionSummary);
    
    
    // 'chapters' is an array

    for (let i in section.chapters)
    {
        const chapterDetails = make_chapter(section.chapters[i]);

        sectionDetails.appendChild(chapterDetails);
    }

    return sectionDetails;
}



// 'chapter' is an object
function make_chapter(chapter)
{
    const chapterDetails = document.createElement("details");

    const chapterSummary = document.createElement("summary");
    chapterSummary.textContent = chapter.chapterName;
    chapterSummary.className = "chapter";

    chapterDetails.append(chapterSummary);

    for (let i in chapter.lessons)
    {
        const lesson_button = make_lesson_button(chapter.lessons[i]);

        chapterDetails.append(lesson_button);
    }


    return chapterDetails;
}

// 'lesson' is an object
function make_lesson_button(lesson)
{
    const button = document.createElement("button");
    button.className = "lessonButton";
    button.textContent = lesson.lessonName;
    button.onclick = () => {
        window.location.href = `../presentationShower/presentationShower.html?url=${lesson.url}`;}; // I think smth like url="////" key

    return button;
}

document.body.appendChild(make_section(obj[0]));