const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

var base64Url;


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
      setTimeout(() => {
        const saveUrl = qr.querySelector('img').src;
        createSaveBtn(saveUrl);
        
      }, 50);

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
  const saveBtn = document.getElementById('save-link');
  if(saveBtn) {
    saveBtn.remove();
  }
};

const createSaveBtn = (saveUrl) => {
  base64Url = saveUrl;
  const link = document.createElement('a');
  link.id='save-link';
  link.classList = 'btn btn-outline-success w-30 fw-bolder py-3 m-auto my-5';
  link.target = '_blank';
  link.download = 'QRcode';
  link.href = base64Url;
  link.innerHTML = 'Save Image';
  document.getElementById('generated').appendChild(link);
};


hideSpinner();



form.addEventListener('submit', onGenerate);