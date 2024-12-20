function Track_cer(event) {
    
    event.preventDefault();  //ok

    const Form_Track_Cer = document.getElementById("Form_Track_Cer"); // Get the form element  //ok

    // Create unique section container
    const Div_Track_create = document.createElement("div");
    const TrackId = `section-${Date.now()}`; // Generate a unique ID for the section
    Div_Track_create.className = "Track_Cer";
    Div_Track_create.id = "TrackId";
    // Div_Track_create.style.border = "1px solid red";
    Div_Track_create.style.display = "flex";
    Div_Track_create.style.flexDirection = "column";


    // Create section label
    const label_Track = document.createElement("label");
    label_Track.htmlFor = "Track-name";
    label_Track.innerText = "Track Name:";
    // label_Track.id = "label_Track" ;

    // Create section input
    const input_track = document.createElement("input");
    input_track.type = "text";
    input_track.placeholder = "Add Track Name ";

    // Create 'Add Certificate' button
    const button_commit = document.createElement("button");
    button_commit.className = "add";
    // button_commit.innerHTML = "<i class='fa-solid fa-square-plus'></i>";
    // button_commit.onclick = "submit"; 
    // button_commit.style.width = "40px";
    // button_commit.style.display = "inline"


    const button_cer = document.createElement("button");
    button_cer.className = "add-cer";
    button_cer.innerHTML = "Certificate <i class='fa-solid fa-square-plus'></i>";
    button_cer.onclick = (e) => cer(e, sectionId); // Pass section ID to the `cer` function

    // Append elements to section
    Form_Track_Cer.append(Div_Track_create);
    Div_Track_create.append(label_Track, input_track, button_commit, button_cer );

}

function cer(event, sectionId) {
    event.preventDefault();

    const sectionContainer = document.getElementById(sectionId); // Get the specific section container

    // Create certificate container
    const cer_div_create = document.createElement("div");
    cer_div_create.className = "ncer";
    cer_div_create.style.margin = "10px 0px";

    // Create file input for certificate image
    const inp_cer_img = document.createElement("input");
    inp_cer_img.className = "cer-img";
    inp_cer_img.type = "file";
    inp_cer_img.name = "cer-img";
    inp_cer_img.title= "attach your certificate image";
    


    // Create label for certificate title
    const lab_cer = document.createElement("label");
    lab_cer.htmlFor = "cer-name";
    lab_cer.innerText = "Certificte Name :";

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
