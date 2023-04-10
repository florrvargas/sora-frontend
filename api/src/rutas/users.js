const {Router} = require('express');
const router = Router();
const {User, Driver} = require('../db');
const {encrypt, compare} = require('../helpers/bcrypt');
const {tokenSign} = require('../helpers/generarToken');
const {mailUsuarioCreado} = require('../helpers/mailsService');

router.post('/registro', async (req, res) => {
	const {nombre, contraseña, correo} = req.body;

	try {
		const contraseñaHash = await encrypt(contraseña);
		const createUser = await User.create({
			nombre,
			contraseña: contraseñaHash,
			correo,
		});

		///// notificación por mail - usuario registrado

		const asunto = 'Bienvenid@ a Sora';

		const texto = `<p>Hola ${nombre}!<br><br>Estamos muy felices de recibirte en Sora!<br><br>A partir de ahora vas a poder usar nuestro servicio y viajar feliz y segura!<br><br>
						<br><br>Nos vemos!</p>`;

		mailUsuarioCreado(correo, asunto, texto);

		/////////

		res.status(200).send(createUser);
	} catch (error) {
		res.status(400).send({error: error.message});
	}
});

router.post('/login', async (req, res) => {
	const {correo, contraseña} = req.body;
console.log(correo, contraseña)
	try {
		const usuario = await User.findOne({
			where: {
				correo: correo,
			},
		});

		if (!usuario) {
			res.status(404).send({error: 'Usuario no encontrado'});
		}
		const checkContraseña = await compare(contraseña, usuario.contraseña);
		const tokenSesion = await tokenSign(usuario);
		if (checkContraseña) {
			res.status(200).send({usuario, tokenSesion});
		}
		if (!checkContraseña) {
			res.status(400).send({error: 'contraseña incorrecta'});
		}
	} catch (error) {
		res.status(400).send({error: 'contraseña incorrecta'});
	}
});


//// USUARIO FAVORITOS PRODUCTO ////

// trae todos los productos de la lista de favoritos del usuario por id

router.get('/favoritos-producto', async (req, res) => {
	const {userId} = req.query;
	try {
		const usuario = await User.findOne({
			where: {
				id: userId,
			},
		});
		const favoritosUsuario = usuario.favoritoProducto;
		if (!usuario) {
			return res.status(400).send('No existe usuario');
		} else if (!favoritosUsuario) {
			return res.status(400).send('Este usuario no tiene favoritos');
		} else {
			return res.status(200).json(favoritosUsuario);
		}
	} catch (error) {
		console.log(error);
	}
});

// agrega productos a la lista de favoritos del usuario por id

router.post('/favoritos-producto', async (req, res) => {
	const {userId, productId} = req.body;
	try {
		const usuario = await User.findByPk(userId);
		const producto = await Product.findByPk(productId);
		if (!producto) {
			res.status(400).send('El producto no existe');
		} else if (!usuario.favoritoProducto.includes(productId)) {
			await usuario.update({
				favoritoProducto: [...usuario.favoritoProducto, productId],
			});
			res.status(200).send('Agregado con exito!');
		} else {
			res.status(400).send('El producto ya esta agregado a favoritos');
		}
	} catch (error) {
		res.status(404).send(error);
	}
});

// elimina productos de la lista de favoritos del usuario por id

router.delete("/favoritos-producto", async function(req, res) {
    const {userId, productId} = req.body;
	try {
		const user = await User.findByPk(userId);
        await user.update({
			favoritoProducto: user.favoritoProducto.filter(e => e !== productId)
		});
        res.status(200).send('El producto fue eliminado de favoritos')
    } catch (error) { 
        res.status(404).send(error);
    }
})

//// FIN USUARIO FAVORITOS PRODUCTO ////



//// USUARIO FAVORITOS MASCOTA ////

router.get('/favoritos-mascota', async (req, res) => {
	const {userId} = req.query;
	try {
		const usuario = await User.findOne({
			where: {
				id: userId,
			},
		});
		const favoritosMascotaUsuario = usuario.favoritoMascota;
		if (!usuario) {
			return res.status(400).send('No existe usuario');
		} else if (!favoritosMascotaUsuario) {
			return res.status(400).send('Este usuario no tiene mascotas en favoritos');
		} else {
			return res.status(200).json(favoritosMascotaUsuario);
		}
	} catch (error) {
		console.log(error);
	}
});

router.post('/favoritos-mascota', async (req, res) => {
	const {userId, petId} = req.body;
	try {
		const usuario = await User.findByPk(userId);
		const mascota = await Pet.findByPk(petId);
		if (!mascota) {
			res.status(400).send('La mascota no existe');
		} else if (!usuario.favoritoMascota.includes(petId)) {
			await usuario.update({
				favoritoMascota: [...usuario.favoritoMascota, petId],
			});
			res.status(200).send('Agregado con exito!');
		} else {
			res.status(400).send('La mascota ya esta agregada a favoritos');
		}
	} catch (error) {
		res.status(404).send(error);
	}
});

router.delete("/favoritos-mascota", async function(req, res) {
    const {userId, petId} = req.body;
	try {
		const user = await User.findByPk(userId);
        await user.update({
			favoritoMascota: user.favoritoMascota.filter(e => e !== petId)
		});
        res.status(200).send('La mascota fue eliminada de favoritos')
    } catch (error) { 
        res.status(404).send(error);
    }
})

//// FIN USUARIO FAVORITOS MASCOTA ////

module.exports = router;
