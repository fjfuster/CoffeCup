	/********************************/
	/*       GALERIA FOTOS          */
	/********************************/
function obtener_galeria(){
	var json;
	var xhr = Titanium.Network.createHTTPClient({
		onload: function(e){
			//alert(this.responseText);
			json=this.responseText;
			insertar_galeria(json);
			return json;
		},
		onerror: function(e){
			alert('Error en la conexión');
		},
		timeout: 10000 
	});
	
	xhr.open("GET",'http://servidordeprueba.net/webs/coffecup/galeria.php');
	xhr.send();
	
};
function insertar_galeria(json){
	var alto_foto=50;
	
	var galeria = Titanium.UI.createScrollView($$.galeria_scrollview);
	json = JSON.parse(json);
	 
	
	
	
	var col=0;
	var fila=0;
	var tope_i = json.length; //Nº de imagenes
	for(var i=0;i<tope_i;i++){
		if(i%3==0 && i>1){
			fila++;
			col=0;
		}
		var foto = Titanium.UI.createImageView($$.galeria_img);
		foto.image=json[i].img_p;
		foto.top = fila * alto_foto;
		foto._id=json[i].id;
		switch(col){
			case 0:
				foto.left='0dp';
				break;
			case 2:
				foto.right='0dp';
				break;
			default:
				
		}
		//Añadir eventos 
		foto.addEventListener('click',function(e){
			//alert(e.source._id);
			win_ficha.left=Titanium.Platform.displayCaps.platformWidth +1;
			load_datos_ficha(e.source._id);
			win_ficha.zIndex=3;
			
			win_ficha.open();
			win_ficha.animate({
					left: 0, 
					duration: 1500
				});
		
			//win_galeria.hide();
			//alert(win_ficha.left);
			
			
		})
		
		galeria._foto=foto;
		galeria.add(foto);
		col++;
		
	};
	win_galeria._galeria= galeria;
	win_galeria.add(galeria);
};
function crear_win_galeria(js){
	var alto_foto=50;
	
	var ventana = Titanium.UI.createWindow($$.win_galeria);
	var lbl_galeria = Titanium.UI.createLabel($$.galeria_lbl);
	lbl_galeria.text = '¿Quién es quién?';
	ventana._lbl_galeria = lbl_galeria;
	ventana.add(lbl_galeria);
	//var galeria = Titanium.UI.createScrollView($$.galeria_scrollview);
	
	var js = obtener_galeria();
	//js = JSON.parse(js);
	//js=eval('('+js+')');
	//alert(js);
	
	/*
	
	var col=0;
	var fila=0;
	var tope_i = 37; //Nº de imagenes
	for(var i=0;i<tope_i;i++){
		if(i%3==0 && i>1){
			fila++;
			col=0;
		}
		var foto = Titanium.UI.createImageView($$.galeria_img);
		foto.top = fila * alto_foto;
		foto._id=i;
		switch(col){
			case 0:
				foto.left='0dp';
				break;
			case 2:
				foto.right='0dp';
				break;
			default:
				
		}
		//Añadir eventos 
		foto.addEventListener('click',function(e){
			//alert(e.source._id);
			win_ficha.open();
			win_ficha.zIndex=3;
			win_galeria.hide();
		})
		
		galeria._foto=foto;
		galeria.add(foto);
		col++;
		
	}
	
	
	
	ventana._galeria= galeria;
	ventana.add(galeria);
	*/
	
	
	
	return ventana;
}


	/********************************/
	/*    FIN GALERIA FOTOS         */
	/********************************/


	/********************************/
	/*       FICHA INDIVIDUAL       */
	/********************************/
	
function crear_win_ficha(){
	var ventana = Titanium.UI.createWindow($$.win_ficha);
	
	var swipe_zona = Titanium.UI.createView($$.swipe_zona);
	ventana._swipe_zona=swipe_zona;
	ventana.add(swipe_zona);
	ventana.addEventListener('swipe', function(e){
		//alert(e.direction)
				if(e.direction==='right'){
					win_ficha.animate({
						left: Titanium.Platform.displayCaps.platformWidth +1, 
						duration: 1500
					});
					//win_ficha.close();
					//win_ficha.hide();
					//win_galeria.show();
					
				}
			})
	
	var view_sendsms = Titanium.UI.createView($$.view_sendsms);
	var view_sendsms_txtzone = Titanium.UI.createView($$.view_sendsms_txtzone);
	var txt_sms = Titanium.UI.createTextArea($$.txt_sms);
	view_sendsms_txtzone._txt_sms = txt_sms;
	view_sendsms_txtzone.add(txt_sms);
		
	var view_sendsms_btnzone = Titanium.UI.createView($$.view_sendsms_btnzone);
	var view_btnzone_sobre = Titanium.UI.createView($$.view_btnzone_sobre);
	var img_sobre = Titanium.UI.createImageView($$.img_sobre);
	var lbl_sendsms = Titanium.UI.createLabel($$.lbl_sendsms)
	
	view_btnzone_sobre._lbl_sendsms=lbl_sendsms;
	view_btnzone_sobre.add(lbl_sendsms);
	
	view_btnzone_sobre._img_sobre=img_sobre;
	view_btnzone_sobre.add(img_sobre);
	
	var view_btnzone_llamar = Titanium.UI.createView($$.view_btnzone_llamar);
	var img_tel = Titanium.UI.createImageView($$.img_tel);
	
	view_btnzone_llamar.addEventListener('click',function(e){
		desplegar_view_sendsms(false);
	})
	
	view_btnzone_llamar._img_tel=img_tel;
	view_btnzone_llamar.add(img_tel);
		
	view_sendsms_btnzone._view_btnzone_llamar=view_btnzone_llamar;	
	view_sendsms_btnzone.add(view_btnzone_llamar);
	view_sendsms_btnzone._view_btnzone_sobre=view_btnzone_sobre;
	view_sendsms_btnzone.add(view_btnzone_sobre);
	
	view_sendsms._view_sendsms_txtzone=view_sendsms_txtzone;
	view_sendsms._view_sendsms_btnzone=view_sendsms_btnzone;
	view_sendsms.add(view_sendsms_txtzone);
	view_sendsms.add(view_sendsms_btnzone);
	
	ventana._view_sendsms=view_sendsms;
	ventana.add(view_sendsms);
	
	/*****************/
		
	var win_ficha_deslizar_sup = crear_deslizar_sup();
	
	win_ficha_deslizar_sup.addEventListener('touchstart',function(e){
		this._yo=e.y;
		win_ficha._swipe_zona.left='-1000dp';
	});
	
	win_ficha_deslizar_sup.addEventListener('touchmove',function(e){
		var desplazamiento= e.y - this._yo;
		if ((ventana._view_sendsms._top == -200 && desplazamiento < 201  ) || (ventana._view_sendsms._top==0 && desplazamiento < 2 && desplazamiento > -205)){
			ventana._view_sendsms.animate({top: ventana._view_sendsms._top + desplazamiento + 'dp'});
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
			if (ventana._view_sendsms._top == -200){
				desplegar_view_sendsms(false);
			}else{
				desplegar_view_sendsms(true);
			}
		}
		win_ficha._swipe_zona.left='0dp';	
	});
	
	ventana.add(win_ficha_deslizar_sup);
	ventana._win_ficha_deslizar_sup = win_ficha_deslizar_sup; 
	
	var view_nombre = crear_view_nombre();
	view_nombre.addEventListener('touchstart',function(e){
		this._yo=e.y;
		Titanium.API.info(this._yo);
		win_ficha._swipe_zona.left='-1000dp';
	});
	view_nombre.addEventListener('touchend',function(e){
		var desplazamiento = e.y - this._yo;
		Titanium.API.info(desplazamiento);
		if(desplazamiento < -30){
			Titanium.API.info('Desplegar');
			ventana._view_datos.animate({top:'0dp',duration: 750})
			
		}
		win_ficha._swipe_zona.left='0dp';
	});
	
	ventana.add(view_nombre);
	ventana._view_nombre= view_nombre;
	
	var view_datos = crear_view_datos();
	view_datos.addEventListener('touchstart',function(e){
		this._yo=e.y;
	});
	view_datos.addEventListener('touchend',function(e){
		var desplazamiento = e.y - this._yo;
		if(desplazamiento > 30){
			ventana._view_datos.animate({top:Titanium.Platform.displayCaps.platformHeight +1, duration: 750})
			
		}
	});	
	
	ventana.add(view_datos);
	ventana._view_datos=view_datos;
	ventana._view_datos.top=Titanium.Platform.displayCaps.platformHeight +1;
	
	/*****************/
	
	return ventana;
};

function desplegar_view_sendsms(opt){
	if(opt){
		win_ficha._view_sendsms.animate({top: 0});
		win_ficha._view_sendsms._top=0;
		win_ficha._view_sendsms._view_sendsms_btnzone._view_btnzone_sobre.borderWidth=2;
		win_ficha._view_sendsms._view_sendsms_btnzone._view_btnzone_llamar.visible=true;
		win_ficha._view_sendsms._view_sendsms_btnzone._view_btnzone_sobre._img_sobre.image='images/sobre_act.png';
		win_ficha._win_ficha_deslizar_sup.top='200dp';
		win_ficha._win_ficha_deslizar_sup._desplegado=true;
		win_ficha._view_sendsms._view_sendsms_btnzone._view_btnzone_sobre._lbl_sendsms.visible=true;
	}else{
		win_ficha._view_sendsms.animate({top: '-200dp'});
		win_ficha._view_sendsms._top=-200;
		win_ficha._view_sendsms._view_sendsms_btnzone._view_btnzone_sobre.borderWidth=0;
		win_ficha._view_sendsms._view_sendsms_btnzone._view_btnzone_llamar.visible=false;
		win_ficha._view_sendsms._view_sendsms_btnzone._view_btnzone_sobre._img_sobre.image='images/sobre.png';
		win_ficha._win_ficha_deslizar_sup.top='2dp';
		win_ficha._win_ficha_deslizar_sup._desplegado=false;
		win_ficha._view_sendsms._view_sendsms_btnzone._view_btnzone_sobre._lbl_sendsms.visible=false;
		
	}
};
function crear_deslizar_sup(){
	var area = Titanium.UI.createView($$.deslizar_sup);
	area._yo=0;
	area._desplegado=false;
	
	return area;
};
function crear_view_nombre(){
	var area = Titanium.UI.createView($$.view_nombre);
	var lbl_nombre = Titanium.UI.createLabel($$.view_nombre_lbl_nombre);
	var lbl_puesto = Titanium.UI.createLabel($$.view_nombre_lbl_puesto);
	
	area._lbl_nombre=lbl_nombre;
	area._lbl_puesto=lbl_puesto;
	
	area.add(lbl_nombre);
	area.add(lbl_puesto);
	
	area._yo=0;
	
	return area;
};
function crear_view_datos(){
	var area = Titanium.UI.createView($$.view_ficha);
	var view_cumple = Titanium.UI.createView($$.view_cumple);
	var view_email = Titanium.UI.createView($$.view_email);
	var view_movil = Titanium.UI.createView($$.view_movil);
	var view_intereses = Titanium.UI.createView($$.view_intereses);
	var view_origen = Titanium.UI.createView($$.view_origen);
	
	var	lbl_cumple = Titanium.UI.createLabel($$.lbl_cumple);
	var lbl_email = Titanium.UI.createLabel($$.lbl_email);
	var lbl_movil = Titanium.UI.createLabel($$.lbl_movil);
	var lbl_intereses = Titanium.UI.createLabel($$.lbl_intereses);
	var lbl_origen = Titanium.UI.createLabel($$.lbl_origen);
	
	var	lbl_cumple_txt = Titanium.UI.createLabel($$.lbl_cumple_txt);
	var lbl_email_txt = Titanium.UI.createLabel($$.lbl_email_txt);
	var lbl_movil_txt = Titanium.UI.createLabel($$.lbl_movil_txt);
	var lbl_intereses_txt = Titanium.UI.createLabel($$.lbl_intereses_txt);
	var lbl_origen_txt = Titanium.UI.createLabel($$.lbl_origen_txt);
	
	view_cumple._lbl_cumple = lbl_cumple;
	view_email._lbl_email = lbl_email;
	view_movil._lbl_movil = lbl_movil;
	view_intereses._lbl_intereses = lbl_intereses;
	view_origen._lbl_origen = lbl_origen;
	
	view_cumple.add(lbl_cumple);
	view_email.add(lbl_email);
	view_movil.add(lbl_movil);
	view_intereses.add(lbl_intereses);
	view_origen.add(lbl_origen);
	
	
	
	
	view_cumple._lbl_cumple_txt = lbl_cumple_txt;
	view_email._lbl_email_txt = lbl_email_txt;
	view_movil._lbl_movil_txt = lbl_movil_txt;
	view_intereses._lbl_intereses_txt = lbl_intereses_txt;
	view_origen._lbl_origen_txt = lbl_origen_txt;	
	
	view_cumple.add(lbl_cumple_txt);
	view_email.add(lbl_email_txt);
	view_movil.add(lbl_movil_txt);
	view_intereses.add(lbl_intereses_txt);
	view_origen.add(lbl_origen_txt);
	
	
	
	
	
	area._view_cumple=view_cumple;
	area._view_email=view_email;
	area._view_movil=view_movil;
	area._view_origen=view_origen;
	area._view_intereses=view_intereses;
	
	
	area.add(view_cumple);
	area.add(view_email);
	area.add(view_movil);
	area.add(view_origen);
	area.add(view_intereses);
	
		
	return area;
	
};
function load_datos_ficha(id){
	
	var json;
	var xhr = Titanium.Network.createHTTPClient({
		onload: function(e){
			//alert(this.responseText);
			json=this.responseText;			
			json = JSON.parse(json);
			var cumple = new Date(json['cumple'].aaaa,json['cumple'].mm - 1,json['cumple'].dd,0,0,0,0);
			var hoy=new Date();
			hoy.setHours(00,00,00,000);
			var cumple_a = new Date(hoy.getFullYear(),cumple.getMonth(),cumple.getDate())
			var dias = Math.floor((cumple_a - hoy )/1000/60/60/24); 
			if(dias<0){
				cumple_a.setFullYear(hoy.getFullYear()+1);
				var dias = Math.floor((cumple_a - hoy )/1000/60/60/24); 
			}
			if(dias!=0){
				if(dias>1){
					dias='Faltan ' + dias + ' días';
				}else{
					dias='Falta ' + dias + ' día';
				}
			}else{
				dias='Hoy es su cumpleaños;'
			}
			win_ficha._view_nombre._lbl_nombre.setText(json['nombre']);
			win_ficha._view_nombre._lbl_puesto.setText(json['puesto']);
			win_ficha.backgroundImage = json['foto'];
			
			win_ficha._view_datos._view_cumple._lbl_cumple_txt.setText(json['cumple'].dd +'-'+json['cumple'].mm+'-'+json['cumple'].aaaa+'\n' + dias);
			win_ficha._view_datos._view_email._lbl_email_txt.setText(json['email']);
			win_ficha._view_datos._view_movil._lbl_movil_txt.setText(json['movil']);
			win_ficha._view_datos._view_intereses._lbl_intereses_txt.setText('\n'+json['intereses']);
			win_ficha._view_datos._view_origen._lbl_origen_txt.setText(json['origen']);	
			
			win_ficha._view_sendsms._view_sendsms_btnzone._view_btnzone_llamar.addEventListener('click',function(e){
				Titanium.Platform.openURL("tel:"+json['movil']);
			})
			
			
			
			
			
			
			
			return json;
		},
		onerror: function(e){
			alert('Error en la conexión');
		},
		timeout: 10000
	});
	
	xhr.open("GET",'http://servidordeprueba.net/webs/coffecup/ficha.php?id='+id);
	xhr.send();
	
	
	
	
	
	
}

	/********************************/
	/*   FIN FICHA INDIVIDUAL       */
	/********************************/

function cargar_galeria_fotos(){
	var numero_fotos = 8*3;
	for(var i=0; i < parseInt(numero_fotos/3 + 1); i++ ){
		for(var j=0;j < 3; j++){
			var img_foto_listado = Titanium.UI.createImageView({
				top: margen_img*(i+1) + alto*(i)+ancho_titulo + 'dp',
				left: margen_img*(j+1) + ancho*(j) + 'dp',
				width: ancho,
				height: alto,
				backgroundColor: '#000000',
				_id:j+' ' + i				
			});
			//win_list_fotos.add(img_foto_listado);
			
			img_foto_listado.addEventListener('click',function(e){
				cargar_ficha(e.source._id);
				//scroll_fotos.visible=false;
			});
			scroll_fotos.add(img_foto_listado);
		}
	}
}
function cargar_ficha(id){
	var yo =0;
	var desplazamiento =0;
	
	var sobre_arrastra = Titanium.UI.createImageView({
		backgroundColor: 'blue',
		height: '30dp',
		width: '40dp',
		top: 5,
		zIndex:10,
		opacity:0.0,
		_baja: true
		
	});
	win_list_fotos.add(sobre_arrastra);
	
	var sobre = Titanium.UI.createImageView({
		height: '25dp',
		width: '40dp',
		image: '/images/sobre.png'
		
	});
	var view_sobre= Titanium.UI.createView ({
		height: '40dp',
		width: '75dp',
		backgroundColor: '#59678E',
		bottom: '-25dp',
		zIndex: 9
	});
	view_sobre.add(sobre);
	
	var ficha = Titanium.UI.createView({
		backgroundColor: '#59678E',
		height: 150,
		top: -110,
		center: 0,
		scrollType: 'vertical',
		yo: 0
		
		
	});
	
	
	
	sobre_arrastra.addEventListener('touchstart',function(e){
		yo= e.y;
		Ti.API.info('EMPIEZA. yo=' + yo +' e.y='+ e.y );
	});
	
	sobre_arrastra.addEventListener('touchmove',function(e){
		desplazamiento = e.y - yo;
		Titanium.API.info('_baja=> ' + sobre_arrastra._baja + '\n desplazamiento:' + desplazamiento)
		if (sobre_arrastra._baja == true){
			if( desplazamiento + yo < 130 && desplazamiento + yo > -110){
				ficha.animate({top:ficha.top +desplazamiento});
			}
		}
		else{
			if( desplazamiento  < 0 && desplazamiento  > -110){
				ficha.animate({top:desplazamiento});
			}
		}
		
	});
	
	
	sobre_arrastra.addEventListener('touchend', function(e){
		if(yo < e.y){
			if(desplazamiento > 30){
			ficha.animate({top: '0dp', duration: 750});
			sobre_arrastra.top=ficha.height-25;
			sobre_arrastra._baja=false;
			}
			else
				ficha.animate({top: '-110dp', duration: 750});
		}
		else{
			if(desplazamiento < -30) {
				ficha.animate({top: '-110dp', duration: 750});
				sobre_arrastra.top=5;
				sobre_arrastra._baja=true;
			}
			else
				ficha.animate({top: '0dp', duration: 750});
		}
		Titanium.API.info('SOLTASTE. yo=' + ficha.yo +' e.y='+ e.y + 'sobre:'+sobre_arrastra.top );
			
	});
	
	
	
	
	ficha.add(view_sobre);
	
	
	
	
	
	
	var foto_main = Titanium.UI.createImageView({
		width: Titanium.Platform.displayCaps.platformWidth,
		height: Titanium.Platform.displayCaps.platformHeight - 10,
		backgroundColor: 'white',
		top: 10,
		left: 0

	});
	var nombre = "nombre";
	var desc = "descripcion";
	var datos = Titanium.UI.createView({
		width: 'auto',
		height: '48dp',
		bottom: 0,
		backgroundColor: '#ff3344'
	});
	var lbl_nombre = Titanium.UI.createLabel({
		text: nombre,
		textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
		font:{
			fontSize: 20,
			fontWeight: 'bold'
		},
		top: '0dp',
		left: '5dp'
	});
	var lbl_desc = Titanium.UI.createLabel({
		text: desc,
		textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
		font:{
			fontSize: 18,
			fontWeight: 'bold'
		},
		top: '21dp',
		left: '5dp'
	});
	datos.add(lbl_nombre);
	datos.add(lbl_desc);
	

	win_list_fotos.add(foto_main);
	win_list_fotos.add(ficha)
	
	win_list_fotos.add(datos);
	
	
	return true;
}
