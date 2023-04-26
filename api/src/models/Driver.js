const {DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('driver', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		foto: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		contraseña: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		correo: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		edad: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		direccion: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
	);
};