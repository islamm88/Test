function Track_cer(event) {
    event.preventDefault();
    const Form_Track_Cer = document.getElementById("Form_Track_Cer");

    // Create unique section container
    const Div_Track_create = document.createElement("div");
    const TrackId = `section-${Date.now()}`;
    Div_Track_create.className = "Track_Cer";
    Div_Track_create.id = TrackId;
    Div_Track_create.style.display = "flex";
    Div_Track_create.style.flexDirection = "column";

    // Create section label
    const label_Track = document.createElement("label");
    const id_input = `id-${Date.now()}`;
    label_Track.htmlFor = id_input;
    label_Track.innerText = "Track Name:";

    // Create section input
    const input_track = document.createElement("input");
    input_track.type = "text";
    input_track.placeholder = "Add Track Name";
    input_track.id = id_input;

    // Create button to add certificates
    const button_cer = document.createElement("button");
    button_cer.className = "add-cer";
    button_cer.innerHTML = "Certificate <i class='fa-solid fa-square-plus'></i>";
    button_cer.onclick = (e) => cer(e, TrackId);

    // Append elements to section
    Form_Track_Cer.append(Div_Track_create);
    Div_Track_create.append(label_Track, input_track, button_cer);
}

function cer(event, sectionId) {
    event.preventDefault();
    const sectionContainer = document.getElementById(sectionId);

    if (!sectionContainer) {
        console.error(`Section with ID "${sectionId}" not found.`);
        return;
    }

    // Create certificate container
    const cer_div_create = document.createElement("div");
    cer_div_create.className = "divcer";
    cer_div_create.style.margin = "10px 0px";
    cer_div_create.style.border = "1px solid var(--num1-color)";
    cer_div_create.style.borderRadius = "22px";
    cer_div_create.style.padding = "5px" ;
    cer_div_create.style.display = "flex";
    cer_div_create.style.flexDirection = "column";


    // Create file input for certificate image
    const inp_cer_img = document.createElement("input");
    inp_cer_img.className = "cer-img";
    inp_cer_img.type = "file";
    inp_cer_img.name = "cer-img";
    inp_cer_img.title = "Attach your certificate image";

    // Create label for certificate title
    const lab_cer = document.createElement("label");
    lab_cer.htmlFor = "cer-name";
    lab_cer.innerText = "Certificate Name:";

    // Create text input for certificate title
    const inp_cer = document.createElement("input");
    inp_cer.type = "text";
    inp_cer.name = "cer-name";
    inp_cer.maxLength = 200;
    inp_cer.placeholder = "Add Certificate Title";
    inp_cer.size = 50;

    // Create label for description
    const lab_desc = document.createElement("label");
    lab_desc.htmlFor = "cer-description";
    lab_desc.innerText = "Description:";

    // Create textarea for description
    const area_cer = document.createElement("textarea");
    area_cer.name = "cer-description";
    area_cer.cols = 30;
    area_cer.rows = 5;

    // Append elements to certificate container
    sectionContainer.append(cer_div_create);
    cer_div_create.append(inp_cer_img, lab_cer, inp_cer, lab_desc, area_cer);
}




function sec_pro(event)
{
    const pro_form = document.getElementById("");
}
