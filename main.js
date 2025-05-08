const canvas = document.getElementById("skin");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "assets/default.png";
img.onload = () => {

    // Drawing the black circle (skin's background ig)
    ctx.drawImage(img,
        96, 0, 96, 96,
        0, 0, 96, 96
    );

    //Drawing one leg before the body so it appears on the other side
    //Left leg
    ctx.drawImage(img, 
        192, 64, 64, 32,
        -8, 46, 90, 46
    );

    ctx.drawImage(img, 
        192, 32, 64, 32,
        -8, 46, 90, 46
    );

    // Right leg
    ctx.drawImage(img, 
        192, 64, 64, 32,
        17, 46, 90, 46
    );

    // Drawing the tee's body
    ctx.drawImage(img,
        0, 0, 96, 96,
        0, 0, 96, 96
    );
    
    // Right leg

    ctx.drawImage(img, 
        192, 32, 64, 32,
        17, 46, 90, 46
    );

    // Eyes

    ctx.drawImage(img, 
        64, 96, 32, 32,
        43, 25, 40, 40
    );

    ctx.drawImage(img, 
        64, 96, 32, 32,
        31, 25, 40, 40
    );
};
const pngData = canvas.toDataURL("image/png"); // returns a base64 PNG string

const link = document.createElement("a");
link.href = pngData;
link.download = "canvas.png";
link.click();
