export const getBase64Img = (e, handler) => {
  const width = 145;
  const height = 205;
  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);

  reader.onload = event => {
    const img = new Image();
    img.src = event.target.result;

    img.onload = () => {
      const elem = document.createElement('canvas');
      elem.width = width;
      elem.height = height;
      const ctx = elem.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      let dataURL = elem.toDataURL();
      //console.log('from compressor', dataURL);
      handler(dataURL);

      // var newImage = document.createElement('img');
      // newImage.src = dataURL;
      // outImg.innerHTML = newImage.outerHTML;
    };
    reader.onerror = error => console.log(error);
  };
}

export function getUniqueId() {
  return 'id_' + new Date().getTime();
}