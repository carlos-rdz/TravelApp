-- Setup

create table users
(id serial primary key,
name text,
age integer
);

create table place
(id serial primary key,
location text,
image text,
user_id integer references users (id)
);


-- Interaction

create table comments(
    id serial primary key,
    content text,
    date timestamp,
    user_id integer references users (id),
    place_id integer references place (id)
);

create table likes(
    -- id serial primary key,
    -- likes bool,
    user_id integer references users (id),
    place_id integer references place (id)
);

create table followers(
    name integer references users (id),
    follower integer references users (id)
);