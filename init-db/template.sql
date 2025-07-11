create table Persons (
	id SERIAL PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	emso VARCHAR(13) NOT NULL UNIQUE,
	date_of_birth DATE NOT NULL,
	email VARCHAR(64) NOT NULL,
	phone_number VARCHAR(16),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)