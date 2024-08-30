create TABLE IF NOT EXISTS users (
    id serial primary key,
    firstName varchar(30) not null,
    lastName varchar(30) not null,
    email varchar(50) not null,
    pssword varchar(50) not null
);
insert into users(firstName,lastName,email,pssword)values
    ('Ali','Marzoug','alimarzoug@gmail.com','12345'),
    ('Mohamed','Marzoug','mohamedmarzoug@gmail.com','12345678'),
    ('Firas','Marzoug','firasmarzoug@gmail.com','11223344');
SELECT * from users