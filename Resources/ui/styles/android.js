module.exports = {
	
	win:{
		exitOnClose: true,
		backgroundColor: 'red'
	},
	
	/********************************/
	/*       FICHA INDIVIDUAL       */
	/********************************/
	win_ficha:{
		backgroundRepeat: false,
		exitOnClose: false
	},
	
		/******* ZONA MENSAJERIA ***********/
	view_sendsms:{
		height: '285dp',
		top:'-200dp',
		_top: -200
	},
	view_sendsms_txtzone:{
		backgroundColor: '#59678E',
		height: '220dp',
		top: '0dp'
	},
	txt_sms:{
		keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
		height: '150dp',
		width: '300dp',
		top: '5dp',
		borderWidth: 0
	},
	view_sendsms_btnzone:{
		height: '85dp',
		top: '150dp'
	},
	view_btnzone_sobre:{
		backgroundColor: '#59678E',
		height: '65dp',
		width: '80dp',
		bottom: '0dp',
		borderColor: '#8994AF',
		borderWidth: 0	
	},
	img_sobre:{
		image: 'images/sobre.png',
		bottom: '5dp'
	},
	lbl_sendsms:{
		text: 'SEND',
		font:{
			fontSize: 25
		},
		top: '0dp'
	},
	view_btnzone_llamar:{
		backgroundColor: '#59678E',
		height: '65dp',
		top: '0dp'
		
	},
	img_tel:{
		image: 'images/tel.png',
		right: '20dp'
	},
	deslizar_sup:{
		width: '80dp',
		height: '40dp',
		opacity: 0.0
	},	
		/******* ZONA DATOS ***********/
	view_nombre:{
		height: '70dp',
		bottom: '0dp',
		backgroundColor: '#59678E',
		opacity: 0.9
	},
	view_nombre_lbl_nombre:{
		height: '30dp',
		top: '2dp',
		left: '5dp',
		font:{
			fontSize: 25
		}
	},
	view_nombre_lbl_puesto:{
		height: '30dp',
		bottom: '5dp',
		left: '5dp',
		font:{
			fontSize: 25
		}
	},
	view_ficha:{
		backgroundColor: '#59678E',
		height: Titanium.Platform.displayCaps.platformheight,
		bottom: Titanium.Platform.displayCaps.platformHeight * -1
	},
	view_cumple:{
		top: '10dp',
		height: '70dp',
		borderColor: '#8994AF',
		borderWidth: 1,	
		width: '95%'
	},
	view_email:{
		top: '90dp',
		height: '50dp',
		borderColor: '#8994AF',
		borderWidth: 1,
		width: '95%'
	},
	view_movil:{
		top: '150dp',
		height: '50dp',
		borderColor: '#8994AF',
		borderWidth: 1,
		width: '95%'
	},
	view_origen:{
		top: '210dp',
		height: '50dp',
		borderColor: '#8994AF',
		borderWidth: 1,
		width: '95%'
	},
	view_intereses:{
		top: '270dp',
		height: '100dp',
		borderColor: '#8994AF',
		borderWidth: 1,
		width: '95%'
	},
	
	
	lbl_cumple:{
	text: 'Cumpleaños:',
	top: 0,		
	textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
	left: 15,
	font:{
			fontSize: 20
		}
	},
	lbl_email:{
	text: 'Email:',
	top: 0,		
	textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
	left: 15,
	font:{
			fontSize: 20
		}
	},
	lbl_movil:{
	text: 'Movil',
	top: 0,		
	textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
	left: 15,
	font:{
			fontSize: 20
		}
	},
	lbl_intereses:{
	text: 'Hablame de:',
	top: 0,	
	textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
	left: 15,
	font:{
			fontSize: 20
		}
	},
	lbl_origen:{
	text: 'Vengo de:',
	top: 0,		
	textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
	left: 15,
	font:{
			fontSize: 20
		}
	},		
		
	lbl_cumple_txt:{
	textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
	top: 0,	
	right: 15,
	font:{
			fontSize: 18
		}
	},
	lbl_email_txt:{
	textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
	top: 0,	
	right: 15,
	font:{
			fontSize: 18
		}
	},
	lbl_movil_txt:{
	textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
	top: 0,	
	right: 15,
	font:{
			fontSize: 18
		}
	},
	lbl_intereses_txt:{
	textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
	top: 0,	
	right: 15,
	font:{
			fontSize: 18
		}
	},
	lbl_origen_txt:{
	textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
	top: 0,	
	right: 15,
	font:{
			fontSize: 18
		}
	}
		/******* ZONA FOTO ***********/
	/******* ZONA MENSAJERIA ***********/		
}
