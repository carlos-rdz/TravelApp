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
user_id integer references users (id) on delete cascade
);


-- Interaction

create table comments(
    id serial primary key,
    content text,
    date timestamp,
    user_id integer references users (id) on delete cascade,
    place_id integer references place (id) on delete cascade
);

create table likes(
    -- id serial primary key,
    -- likes bool,
    user_id integer references users (id) on delete cascade,
    place_id integer references place (id) on delete cascade
);

create table followers(
    name integer references users (id) on delete cascade,
    follower integer references users (id) on delete cascade
);