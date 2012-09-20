Titanium.UI.setBackgroundColor('#59678E');

var win = Titanium.UI.createWindow($$.win);
var win_ficha = crear_win_ficha();

/*

var win_ficha_deslizar_sup = crear_deslizar_sup();

win_ficha_deslizar_sup.addEventListener('touchstart',function(e){
	this._yo=e.y;
});

win_ficha_deslizar_sup.addEventListener('touchmove',function(e){
	var desplazamiento= e.y - this._yo;
	if ((win_ficha._view_sendsms._top == -200 && desplazamiento < 201  ) || (win_ficha._view_sendsms._top==0 && desplazamiento < 2 && desplazamiento > -205)){
		win_ficha._view_sendsms.animate({top: win_ficha._view_sendsms._top + desplazamiento + 'dp'});
	}
});

win_ficha_deslizar_sup.addEventListener('touchend',function(e){
	var desplazamiento= e.y - this._yo;
	if (desplazamiento > 45){
		desplegar_view_sendsms(true);
	}else if (desplazamiento < -45){
		desplegar_view_sendsms(false);
	}
	else{
		if (win_ficha._view_sendsms._top == -200){
			desplegar_view_sendsms(false);
		}else{
			desplegar_view_sendsms(true);
		}
	}	
});

win_ficha.add(win_ficha_deslizar_sup);
win_ficha._win_ficha_deslizar_sup = win_ficha_deslizar_sup; 


var view_nombre = crear_view_nombre();
view_nombre.addEventListener('touchstart',function(e){
	this._yo=e.y;
	Titanium.API.info(this._yo)
});
view_nombre.addEventListener('touchend',function(e){
	var desplazamiento = e.y - this._yo;
	Titanium.API.info(desplazamiento);
	if(desplazamiento < -30){
		Titanium.API.info('Desplegar');
		win_ficha._view_datos.animate({top:'0dp',duration: 750})
		
	}
});

win_ficha.add(view_nombre);
win_ficha._view_nombre= view_nombre;

var view_datos = crear_view_datos();
view_datos.addEventListener('touchstart',function(e){
	this._yo=e.y;
});
view_datos.addEventListener('touchend',function(e){
	var desplazamiento = e.y - this._yo;
	if(desplazamiento > 30){
		win_ficha._view_datos.animate({top:Titanium.Platform.displayCaps.platformHeight +1, duration: 750})
		
	}
});




win_ficha.add(view_datos);
win_ficha._view_datos=view_datos;
win_ficha._view_datos.top=Titanium.Platform.displayCaps.platformHeight +1;


*/

desplegar_view_sendsms(false);
load_datos_ficha(0);

win_ficha.open();

















/*
var margen_img=10;
var ancho_titulo = 35;

var ancho = parseInt((Titanium.Platform.displayCaps.platformWidth - (margen_img*4)) / 3);
var alto = parseInt((Titanium.Platform.displayCaps.platformHeight - (margen_img*4) - ancho_titulo) / 3);

var win_list_fotos = Titanium.UI.createWindow({
	title: '¿Quién es quién?',
	backgroundColor: '#59678E'
});
var win_foto = Titanium.UI.createWindow({
	title: 'Ficha',
	backgroundColor: '#59678E',
	exitOnClose: false
});

var view_fotos = Titanium.UI.createView({
	
});

var scroll_fotos = Titanium.UI.createScrollView({
	showVerticalScrollIndicator: false,
	showHorizontalScrollIndicator: true,
	scrollType: 'vertical'
});


cargar_galeria_fotos();


var titulo= Titanium.UI.createLabel({
	text: 'Quién es quién',
	color: '#FFFFFF',
	backgroundColor: '#59678E',
	zIndex: 10,
	font:{
		fontSize: 25
	},
	textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
	top: '2dp',
	width: '100%',
	height: ancho_titulo
})


view_fotos.add(titulo);
view_fotos.add(scroll_fotos);
win_list_fotos.add(view_fotos);
win_list_fotos.open();

*/


/*********/
/*
var win= Titanium.UI.createWindow({
	backgroundColor: '#121212',
	title: 'prueba maquetacion'
	
		
	})
	
	var view_sendsms = Titanium.UI.createView({
		height: '285dp',
		top: '0dp'
		
	});
	var view_sendsms_txtzone = Titanium.UI.createView({
		backgroundColor: '#59678E',
		height: '220dp',
		top: '0dp'
	});
	var txt_sms = Titanium.UI.createTextArea({
		keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
		height: '150dp',
		width: '300dp',
		top: '5dp',
		borderWidth: 0
	});
	view_sendsms_txtzone.add(txt_sms);
	
	
	var view_sendsms_btnzone = Titanium.UI.createView({
		height: '85dp',
		top: '150dp'
	});
	var view_btnzone_sobre = Titanium.UI.createView({
		backgroundColor: '#59678E',
		height: '65dp',
		width: '80dp',
		bottom: '0dp',
		borderColor: '#8994AF',
		borderWidth: 2	
	});
	var img_sobre = Titanium.UI.createImageView({
		image: 'sobre.png',
		bottom: '5dp'
	});
	var lbl_sendsms = Titanium.UI.createLabel({
		text: 'SEND',
		font:{
			fontSize: 25
		},
		top: '0dp'
	})
	view_btnzone_sobre.add(lbl_sendsms);
	view_btnzone_sobre.add(img_sobre);
	
	
	
	var view_btnzone_llamar = Titanium.UI.createView({
		backgroundColor: '#59678E',
		height: '65dp',
		top: '0dp'
		
	});
	var img_tel = Titanium.UI.createImageView({
		image: 'tel.png',
		right: '20dp'
	});
	view_btnzone_llamar.add(img_tel);
	
	
	
	view_sendsms_btnzone.add(view_btnzone_llamar);
	view_sendsms_btnzone.add(view_btnzone_sobre);
	
	view_sendsms.add(view_sendsms_txtzone);
	view_sendsms.add(view_sendsms_btnzone);
	
	win.add(view_sendsms);
	
	win.open();
	*/

