drop table assistance.request;
drop table assistance.passenger;
(select to_json(r) FROM (SELECT * FROM assistance.request WHERE id = NEW.id) r)
