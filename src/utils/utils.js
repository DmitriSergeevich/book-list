export const getBase64Img = (e) => {
  return new Promise(resolve => {
    const width = 145;
  const height = 205;
  const reader = new FileReader();
  reader.readAsDataURL(e);

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
      resolve(dataURL);
    };
    reader.onerror = error => console.log(error);
  };

  })
  
}

export function getUniqueId() {
  return 'id_' + new Date().getTime();
}