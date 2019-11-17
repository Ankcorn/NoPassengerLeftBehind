create schema assistance;

create table assistance.passenger (
  id               serial primary key,
  name             text not null check (char_length(name) < 80),
  pic              text,
  assistance       text,
  created_at       timestamp default now(),
  email            text,
  phone            text,
  bio              text
);

create table assistance.staff (
  id               serial primary key,
  name             text not null,
  pic              text not null,
  phone            text
);

create table assistance.request (
  id               serial primary key,
  start            text,
  stop             text,
  toc              text,
  start_time       timestamp,
  current_position integer[],
  comment          text,
  status           text,
  passenger_id     integer not null references assistance.passenger(id)
);

create table assistance.action (
  id            serial primary key,
  request_id    INT REFERENCES assistance.request (id),
  staff_id      INT REFERENCES assistance.staff (id),
  stage text not null,
  done  boolean
);


create table assistance.review (
  id          serial primary key,
  number      int not null check (number < 6),
  comment     text,
  assistance_id int references assistance.action(id)
);

CREATE FUNCTION trigger_job() RETURNS trigger AS $$
BEGIN
  PERFORM graphile_worker.add_job(TG_ARGV[0], json_build_object(
    'schema', TG_TABLE_SCHEMA,
    'table', TG_TABLE_NAME,
    'op', TG_OP,
    'id', (CASE WHEN TG_OP = 'DELETE' THEN OLD.id ELSE NEW.id END),
    'data', to_json(NEW)
  ));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql VOLATILE;

CREATE TRIGGER create_request_email
  AFTER INSERT ON assistance.request
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_job('send_email');
