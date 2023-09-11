function handleSubmit() {
    var textInput = document.getElementById('text-input').value;
    var imageInput = document.getElementById('image-input').files[0]?.name;
    var radioButtons = document.getElementsByName('radio-buttons');
    var radioButtonValue;
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioButtonValue = radioButtons[i].value;
            break;
        }
    }
    var checkboxInput = document.getElementById('checkbox-input').checked ? 'Selected' : 'Not selected';

    document.getElementById('table-text').innerText = textInput;
    document.getElementById('table-image').innerText = imageInput || 'Not selected';
    document.getElementById('table-radio').innerText = radioButtonValue || 'Not selected';
    document.getElementById('table-checkbox').innerText = checkboxInput;
}