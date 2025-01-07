
export const ButtonFade = (isClicked) => ({
  animate: { 
    x: isClicked ? 160 : 0 ,
    transition: { duration: 0.2 }, 
},
});


export const ButtonTextFade = (isClicked) => {
  return {
    animate: { 
        opacity: isClicked ? 0 : 1,
        transition: { duration: 0.2 },
     }, 
  };
};




