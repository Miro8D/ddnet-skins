const canvas = document.getElementById("skin");
const ctx = canvas.getContext("2d");

const skin = new Image();
skin.src = "assets/default.png";
skin.onload = () => {


    // Code from DDNet's website

	// scale
	const s = skin.naturalWidth / 256

	canvas.width = 96 * s;
	canvas.height = 64 * s;
	let ctx = canvas.getContext("2d");
	canvas.setAttribute("isrenderedskin", 1);

	ctx.drawImage(skin, 192 * s, 64 * s, 64 * s, 32 * s, 8 * s, 32 * s, 64 * s, 30 * s) //back feet shadow
	ctx.drawImage(skin, 96 * s, 0 * s, 96 * s, 96 * s, 16 * s, 0 * s, 64 * s, 64 * s) //body shadow
	ctx.drawImage(skin, 192 * s, 64 * s, 64 * s, 32 * s, 24 * s, 32 * s, 64 * s, 30 * s) //front feet shadow
	ctx.drawImage(skin, 192 * s, 32 * s, 64 * s, 32 * s, 8 * s, 32 * s, 64 * s, 30 * s) //back feet
	ctx.drawImage(skin, 0 * s, 0 * s, 96 * s, 96 * s, 16 * s, 0 * s, 64 * s, 64 * s) //body
	ctx.drawImage(skin, 192 * s, 32 * s, 64 * s, 32 * s, 24 * s, 32 * s, 64 * s, 30 * s) //front feet
	ctx.drawImage(skin, 64 * s, 96 * s, 32 * s, 32 * s, 39 * s, 18 * s, 26 * s, 26 * s) //left eye

	//right eye (flip and draw)
	ctx.save();
	ctx.scale(-1, 1);
	ctx.drawImage(skin, 64 * s, 96 * s, 32 * s, 32 * s, -73 * s, 18 * s, 26 * s, 26 * s)
	ctx.restore();s
};
const pngData = canvas.toDataURL("image/png"); // returns a base64 PNG string

const link = document.createElement("a");
link.href = pngData;
link.download = "canvas.png";
