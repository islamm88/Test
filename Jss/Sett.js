function sec_cer(event) {
    
    event.preventDefault();  //ok

    const cer_form = document.getElementById("cer_form"); // Get the form element  //ok

    // Create unique section container
    const sec_div_create = document.createElement("div");
    const sectionId = `section-${Date.now()}`; // Generate a unique ID for the section
    sec_div_create.className = "cont cer";
    sec_div_create.id = sectionId;
    

    // Create section label
    const lab_sec = document.createElement("label");
    lab_sec.htmlFor = "sec-name";
    lab_sec.innerText = "Field Name:";

    // Create section input
    const inp_sec = document.createElement("input");
    inp_sec.type = "text";
    inp_sec.name = "sec-name";
    inp_sec.maxLength = 30;
    inp_sec.placeholder = "Profile Name";
    inp_sec.size = 50;

    // Create 'Add Certificate' button
    const button_cer = document.createElement("button");
    button_cer.className = "add-cer";
    button_cer.innerHTML = "Add Certificate <i class='fa-solid fa-square-plus'></i>";
    button_cer.onclick = (e) => cer(e, sectionId); // Pass section ID to the `cer` function

    // Append elements to section
    cer_form.append(sec_div_create);
    sec_div_create.append(lab_sec, inp_sec, button_cer);
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

    // Create label for certificate title
    const lab_cer = document.createElement("label");
    lab_cer.htmlFor = "cer-name";
    lab_cer.innerText = "Title:";

    // Create text input for certificate title
    const inp_cer = document.createElement("input");
    inp_cer.type = "text";
    inp_cer.name = "cer-name";
    inp_cer.maxLength = 200;
    inp_cer.placeholder = "Certificate Title";
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
