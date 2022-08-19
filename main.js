const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');


const onGenerate = (e) => {
    e.preventDefault();
    clearUserInterFace();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

  if (url === '') {
    alert("Please enter a URL")
    
  } else {
    showSpinner();

    setTimeout(() => {

      hideSpinner();
      generateQR(url, size);
      
    }, 2000);

  }
};

const generateQR = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
}

const showSpinner = () => {
    const show = document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    const hide = document.getElementById('spinner').style.display = 'none';
}

const clearUserInterFace = ()=> {
  qr.innerHTML = '';
}


hideSpinner();



form.addEventListener('submit', onGenerate);