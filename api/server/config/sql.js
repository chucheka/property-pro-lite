// USERS SQL QUERIES
const createUser = {
	text:
		'INSERT INTO users(email,first_name,last_name,password,phonenumber,address,is_admin) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *',
	values: [ 'ryanucheka@gmail.com', 'Chike', 'Ucheka', 'chike22ucheka', '09030467496', 'N0 14 Alfa Oyo street', true ]
};
const deleteUser = {
	text: "DELETE FROM users WHERE email = 'johndoe@gmail.com'"
};
// PROPERTIES SQL QUERIES
const createProperty = {
	text:
		'INSERT INTO properties(owner,state,city,address,type,status,price,image_url) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
	values: [
		'1',
		'Imo',
		'Owerri',
		'Area M, World Bank Housing Estate',
		'2 Bedroom',
		'available',
		'50,000',
		'/images/avatar.png'
	]
};
export { createUser, deleteUser, createProperty };
