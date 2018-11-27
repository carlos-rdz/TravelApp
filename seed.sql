insert into users
(name,age, username, pwhash)
values
('Carlos',24,'Carlos','Password'),('James',50,'James','Password'),('RandomUser',100,'RandomUser','Password'),('James',50,'James','Password');


insert into place
(location, user_id)
values
('New York',1),('Atlanta',2),('Mars',3),('----',4),('Atlanta2',25;



insert into comments
(content, date, user_id, place_id)
values
('I live here its not that great','2012-11-08',1,2);


insert into likes
(user_id, place_id)
values
(3,1),(1,1),(1,2),(1,3),(2,1),(3,2);


insert into followers
(name,follower)
values
(1,2),(1,3),(2,1);