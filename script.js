let currentFile = null;
let editor = document.getElementById('editor');

  
function saveAsFile() {
    let fileName = prompt('Enter file name:');
    if (fileName) {
        currentFile = fileName;
        let blob = new Blob([editor.value], { type: 'text/plain' });
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = currentFile;
        a.click();
        URL.revokeObjectURL(url);
    }
}
function saveFile() {
let fileName = prompt('Enter file name:');
if (fileName) {
    currentFile = fileName;
    let blob = new Blob([editor.value], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = currentFile;
    a.click();
    URL.revokeObjectURL(url);
}
}


function createNewFile() {
    currentFile = null;
    editor.value = '';
}

function openFile() {
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt'; // Optionally limit to text files
    fileInput.onchange = function (event) {
        let file = event.target.files[0];
        if (file) {
            // Read the file content and set it to the editor
            let reader = new FileReader();
            reader.onload = function (e) {
                editor.value = e.target.result;
            };
            reader.readAsText(file);
            currentFile = file.name;
            alert('Opened file: ' + currentFile);
        }
    };
    fileInput.click();
}
