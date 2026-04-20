

function normalize_url(file_url)
{
    if (file_url.endsWith(".pptx") || file_url.endsWith(".ppt"))
    {
        return `https://view.officeapps.live.com/op/embed.aspx?src=${file_url}&embedded=true`;
    }

    return file_url
}

const presentationIframe = document.getElementById("presentationIframe");

const params = new URLSearchParams(window.location.search);
const file_url = params.get("url");

presentationIframe.src = normalize_url(file_url)