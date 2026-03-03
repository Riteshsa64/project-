function generateProfile() {

    // const: value cannot be changed
    const collegeName = "Dr.D.Y.Patil Institute of Tecnology,Pimpri,Pune";

    // let: value can be changed
    let studentName = "Ritesh";
    let branch = "Aritifical Intelligence and Data Science";
    let year = "1st Year";

    // var: old way (function scoped)
    var skills = "JavaScript, HTML, CSS";

    studentName = "Ritesh Sarode"; // updating let variable

    document.getElementById("output").innerHTML = `
        <h3>Student Details</h3>
        <p><b>Name:</b> ${studentName}</p>
        <p><b>College:</b> ${collegeName}</p>
        <p><b>Branch:</b> ${branch}</p>
        <p><b>Year:</b> ${year}</p>
        <p><b>Skills:</b> ${skills}</p>
    `;
}
