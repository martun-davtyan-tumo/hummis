const sb = supabase.createClient("https://rotxsczdbdglqqjagnwy.supabase.co", "sb_publishable__Xit9TvYTOCG5XY9Nj9E7Q_m6T_gMPi");


async function upload_file_to_supabase(e)
{
    const file = e.target.files[0];

    const { data, error } = await sb.storage.from("HUMmis").upload(`uploads/${file.name}`, file, {upsert: true})

    console.log(data, error);
}

async function get_files_names()
{
    let files_names = [];
    const {data, error} = await sb.storage.from("HUMmis").list("uploads");

    console.log(data, error);

    
    return data.filter(file => !file.name.startsWith('.')).map(file => file.name);
}

async function get_public_url_from_file(file_name)
{
    return sb.storage.from("HUMmis").getPublicUrl(`uploads/${file_name}`).data.publicUrl;
}