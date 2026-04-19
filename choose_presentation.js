let current_presentation_name = null;
let dynamic_page = document.getElementById("dynamic");

async function make_buttons_list()
{
    let file_names = await get_files_names();

    for (let file_name_i in file_names)
    {
        let file_name = file_names[file_name_i];

        const button = document.createElement("button");
        button.id = file_name;
        button.textContent = file_name;
        button.className = "presentationButton";
        button.addEventListener("click", () => {current_presentation_name = file_name; make_screen_with_iframe();})

        dynamic_page.appendChild(button);
    }
}

async function clear_dynamic_page()
{
    dynamic_page.innerHTML = "";
}

async function make_screen_with_iframe()
{
    clear_dynamic_page();

    await make_iframe();
    make_button_to_list();
}

function make_screen_with_presentations_buttons()
{
    clear_dynamic_page();

    make_buttons_list();
}

async function make_iframe()
{
    if (!current_presentation_name) return;

    const presentationIframe = document.createElement("iframe");
    const iframe_src = await get_public_url_from_file(current_presentation_name);
    presentationIframe.src = `https://view.officeapps.live.com/op/embed.aspx?src=${iframe_src}&embedded=true`;
    presentationIframe.id = "presentationIframe"

    dynamic_page.appendChild(presentationIframe);

    console.log(presentationIframe.src);
}

function make_button_to_list()
{
    const button = document.createElement("button");
    button.id = "backToPresentationsListButton";
    button.onclick = () => {current_presentation_name = null; make_screen_with_presentations_buttons();};
    button.textContent = "To List";

    dynamic_page.appendChild(button);
}

make_screen_with_presentations_buttons();