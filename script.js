const Button = document.querySelector("#btn");
const Input = document.querySelector("#ipt");
const Header = document.querySelector("#header");

var url;
 
function convertToBase64(e) {
    var reader = new FileReader();
    // console.log(e)
    reader.readAsDataURL(e.files[0]);
    try {
        reader.onload = () => {
            // console.log(reader.result)
            url = reader.result;
            console.log(url)
            const newImage = document.createElement('img');
            newImage.src = url
            Header.appendChild(newImage)
        };
    } catch (err) {
        return ("err", err)
    }
    reader.onerror = () => {
        console.log("Error : ", error)
    }
}

// Input.addEventListener("change", () => {
//     console.log(Event.target)
//     convertToBase64(Event)
// })


Button.addEventListener('click', () => {
    console.log(Input.files[0])
    if (Input){
       convertToBase64(Input);
       console.log(url)
   } else {
    console.log("err")
   }
})