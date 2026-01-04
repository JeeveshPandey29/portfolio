document.getElementById('download-resume').addEventListener('click', function () {
    const link = document.createElement('a'); // Create a temporary anchor element
    link.href = 'resume.pdf'; // Path to your resume file
    link.download = 'Jeevesh_Pandey_Resume.pdf'; // The name of the downloaded file
    document.body.appendChild(link); // Append the link to the DOM
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link from the DOM
  });
  