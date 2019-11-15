create schema assistance;

create table assistance.passenger (
  id               serial primary key,
  first_name        text not null check (char_length(first_name) < 80),
  pic              text,
  assistance       text not null,
  created_at       timestamp default now()
);

create table assistance.request (
  id               serial primary key,
  start            text not null,
  stop             text not null,
  passenger_id     integer not null references assistance.passenger(id)
);
