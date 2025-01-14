// selector
const Form_Track_Cer = document.querySelector('.Form_Track_Cer');
const AddTrack = document.querySelector('.add_track');
//event listeners 
AddTrack.addEventListener('click' , Track_cer);
//function
function Track_cer(e) {
    event.preventDefault(); // to prevent form to submitte .

    //create Track certificat div
    const Div_Track_create = document.createElement("div");
    const TrackId = `section-${Date.now()}`;
    Div_Track_create.classList.add('Track_Cer');
    Div_Track_create.id = TrackId;

    //create label Track
    const label_Track = document.createElement("label");
    const id_input = `id-${Date.now()}`;
    label_Track.htmlFor = id_input;
    label_Track.innerHTML = "Track Name:";

     // Create input Track
     const input_track = document.createElement("input");
     input_track.type = "text";
     input_track.placeholder = "Add Track Name";
     input_track.id = id_input;
     input_track.style.background ="var(--num7-color)";

     // Create button to add certificates
    const button_cer = document.createElement("button");
    button_cer.className = 'add-cer';
    button_cer.innerHTML = "Certificate <i class='fa-solid fa-square-plus'></i>";
    button_cer.onclick = (e) => cer(e, TrackId);

    Form_Track_Cer.appendChild(Div_Track_create);
    Div_Track_create.append(label_Track , input_track , button_cer);
    
}


function cer(event, TrackId) {
    event.preventDefault();  // to prevent form to submitte .
    const CertificateContainer = document.getElementById(TrackId);

    if (!CertificateContainer) {
        console.error(`Section with ID "${TrackId}" not found.`);
        return;
    }

    // Create certificate container
    const cer_div_create = document.createElement("div");
    cer_div_create.classList.add("divcer");


    // Create file input for certificate image
    const inp_cer_img = document.createElement("input");
    inp_cer_img.classList.add("cer-img");
    inp_cer_img.type = "file";
    inp_cer_img.name = "cer-img";

    // Create label for certificate title
    const lab_cer = document.createElement("label");
    lab_cer.htmlFor = `input-${Date.now()}`;
    lab_cer.innerHTML = "Certificate Name:";

    // Create text input for certificate title
    const inp_cer = document.createElement("input");
    inp_cer.type = "text";
    inp_cer.id = `input-${Date.now()}`;
    inp_cer.maxLength = 200;
    inp_cer.placeholder = "Add Certificate Title";
    inp_cer.size = 50;

    // Create label for description
    const lab_desc = document.createElement("label");
    lab_desc.htmlFor = `textarea-${Date.now()}`;
    lab_desc.innerText = "Description:";

    // Create textarea for description
    const area_cer = document.createElement("textarea");
    area_cer.id = `textarea-${Date.now()}`;
    area_cer.cols = 30;
    area_cer.rows = 5;

    // Append elements to certificate container
    CertificateContainer.append(cer_div_create);
    cer_div_create.append(inp_cer_img, lab_cer, inp_cer, lab_desc, area_cer);
}

