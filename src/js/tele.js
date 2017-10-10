var canvas = document.getElementById('canvas')
  , context = canvas.getContext('2d')
  , img = new Image()
  , img2 = new Image()
  , w
  , h
  , flag = 0
  , pos = 0
  , speed
  , displacement = 0;

img2.src = 'src/img/tele.png';
img.src = 'src/img/telebig.jpg';
img.onload = function() {
	setTimeout(init,1000);
	window.onresize = init;
};

var init = function() {
	canvas.width = img.width*2;
	w = img.width;
	canvas.height = h = img.height;
	context.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
	context.drawImage(img2, 0, 0, img2.width, img2.height, img.width, 0, w, h);
	setTimeout(glitch,2000);
};

function moveLeft() {
	if ( displacement > w) {
		if (!flag){
			context.drawImage(img2, 0, 0, img2.width, img2.height, 0, 0, w, h);
			context.drawImage(img, 0, 0, img.width, img.height, img2.width, 0, w, h);
			pos = 0;
			flag = 1;
			displacement=0;
		}
		else {
			context.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
			context.drawImage(img2, 0, 0, img2.width, img2.height, img.width, 0, w, h);
			pos = 0;
			flag = 0;
			displacement=0;
		}
		return 	setTimeout(glitch,2000);		
	}
	if (displacement > w - 200) {
		if(displacement > w - 100) {
			if (displacement > w - 50) {
				if (displacement > w - 20){
					speed = 1;
				} else speed = 3;
			} else speed = 5;
		} else speed = 10;
	} else speed = 15;
	displacement = displacement + speed;
	context.clearRect(canvas, 0, 0,  img.width*2, img.height*2, 0, 0, w*2, h*2);
	context.drawImage(canvas, speed, 0, img.width*2, img.height*2, 0, 0, w*2, h*2);
	requestAnimationFrame(moveLeft);
		
  }

  function glitch() {
	if(pos > 2) {
		pos = 0;
		return requestAnimationFrame(glitch2);
	}
	pos += 1;
	for (var i = 0; i < 100; i++) {
		var y = i/360 * h;
		var x = 150 + ~~(Math.random() * 20 + 1);
		context.drawImage(canvas, x, y, 1350 - x, y/i*2, x - pos*20, y, 1350 + pos*20 - x, y/i*2);
	}
	for (var i = 0; i < 100; i++) {
		var y = i/360 * h;
		var x = 550 + ~~(Math.random() * 100 + 1);
		context.drawImage(canvas, x, y, 1350 - x, y/i*2, x - pos*10, y, 1350 + pos*10 - x, y/i*2);
	}
	for (var i = 100; i < 180; i++) {
		var y = i/360 * h;
		var x = 0 + ~~(Math.random() * 150 + 1)-i;
		context.drawImage(canvas, x, y, 1350 - x, y/i*2, x - pos*6, y, 1350 + pos*6 - x, y/i*2);
	}
	for (var i = 100; i < 180; i++) {
		var y = i/360 * h;
		var x = 750 + ~~(Math.random() * 130 + 1)-i;
		context.drawImage(canvas, x, y, 1350 - x, y/i*2, x - pos*15, y, 1350 + pos*15 - x, y/i*2);
	}
	for (var i = 180; i < 250; i++) {
		var y = i/360 * h;
		var x = 150 + ~~(Math.random() * 20 + 1);
		context.drawImage(canvas, x, y, 1350 - x, y/i*2, x - pos*20, y, 1350 + pos*20 - x, y/i*2);
	}
	for (var i = 180; i < 250; i++) {
		var y = i/360 * h;
		var x = 550 + ~~(Math.random() * 100 + 1);
		context.drawImage(canvas, x, y, 1350 - x, y/i*2, x - pos*7, y, 1350 + pos*7 - x, y/i*2);
	}
	for (var i = 250; i < 360; i++) {
		var y = i/360 * h;
		var x = 250 + ~~(Math.random() * 40 + 1);
		context.drawImage(canvas, x, y, 1310 - x, y/i*2, x - pos*14, y, 1310 + pos*14 - x, y/i*2);
	}
	for (var i = 250; i < 360; i++) {
		var y = i/360 * h;
		var x = 650 + ~~(Math.random() * 100 + 1);
		context.drawImage(canvas, x, y, 1310 - x, y/i*2, x - pos*18, y, 1310 + pos*18 - x, y/i*2);
	}
	requestAnimationFrame(glitch);
  }

  function glitch2() {
	if(pos > 3) return requestAnimationFrame(moveLeft);
	pos += 1;
	for (var i = 260; i < 360; i++) {
		var y = i/360 * h;
		var x = 0 + ~~(Math.random() * 260 + 1)-i;
		context.drawImage(canvas, x, y, 1050 - x, y/i*2, x - pos*16, y, 1050 + pos*16 - x, y/i*2);
	}
	for (var i = 170; i < 260; i++) {
		var y = i/360 * h;
		var x = 0 + ~~(Math.random() * 80 + 1) - i;
		context.drawImage(canvas, x, y, 1200 - x, y/i*2, x - pos*3, y, 1200 + pos*3 - x, y/i*2);
	}
	for (var i = 80; i < 170; i++) {
		var y = i/360 * h;
		var x = 150 + ~~(Math.random() * 65 + 1) - i;
		context.drawImage(canvas, x, y, 1000 - x, y/i*2, x - pos*14, y, 1000 + pos*14 - x, y/i*2);		
	}
	for (var i = 0; i < 80; i++) {
		var y = i/360 * h;
		var x = 0 + ~~(Math.random() * 130 + 1) - i;
		context.drawImage(canvas, x, y, 1050 - x, y/i*2, x - pos*9, y, 1050 + pos*9 - x, y/i*2);		
	}
	requestAnimationFrame(glitch2);
  }