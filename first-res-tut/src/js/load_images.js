const fs = require('fs');

const imagesFolder = '../assets/images/';

fs.readdir('../assets/images/', 'utf-8', function (err, data) {
    console.log(data);
});

// document.getElementById('fileInput').addEventListener('change', function(event) {
//     const files = event.target.files;
//     const imageList = document.getElementById('imageList');
  
//     // Clear previous content
//     imageList.innerHTML = '';
  
//     // Iterate through the selected folder's files
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
  
//       // Check if the file is an image (you can add more specific checks if needed)
//       if (file.type.startsWith('image/')) {
//         const img = document.createElement('img');
//         img.src = URL.createObjectURL(file);
//         img.alt = file.name;
//         img.width = 150; // Adjust the image width as needed
  
//         imageList.appendChild(img);
//       }
//     }
//   });
  