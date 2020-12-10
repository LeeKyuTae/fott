INSERT INTO Users (user_id, password, nick_name) values ('testUser1', 'test', '디비유저1')
INSERT INTO Users (user_id, password, nick_name) values ('test', 'test', '디비유저2')


INSERT INTO otts (ott_name, max_user, price) values ('넷플릭스 스탠다드', 2, 12000)
INSERT INTO otts (ott_name, max_user, price) values ('넷플릭스 프리미엄', 4, 14500)
INSERT INTO otts (ott_name, max_user, price) values ('왓챠 프리미엄', 4, 12900)
INSERT INTO otts (ott_name, max_user, price) values ('웨이브 프리미엄', 2, 10900)
INSERT INTO otts (ott_name, max_user, price) values ('웨이브 프리미엄', 4, 13900)


INSERT INTO PARTYS (ott_id, user_count,open_chat_url, payment_day, payment_month) values (1, 1, 'open.kakao.com/o/gewt6HD', 3, 1)
INSERT INTO PARTYS (ott_id, user_count,open_chat_url, payment_day, payment_month) values (1, 2, 'open.kakao.com/o/gewt7D', 23, 1)
INSERT INTO PARTYS (ott_id, open_chat_url, payment_day, payment_month) values (2, 'open.kakao.com/o/qwew45HSD', 13, 6)

INSERT INTO USER_PARTY (user_id, party_id) values('testUser1', 1)
INSERT INTO USER_PARTY (user_id, party_id) values('testUser1', 2)
INSERT INTO USER_PARTY (user_id, party_id) values('testUser1', 3)