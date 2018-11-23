
PATH="$PATH":/usr/local/mysql/bin
mysql -u root -p
无密码
gsi&bGwBH9+i
---------------------c
mysql

create database keep charset=utf8;
use keep;

--用户信息表
create table k_user(
  uid int primary key auto_increment,
  uname varchar(25),
  unickname varchar(25),
  upwd varchar(32),
  phone varchar(16),
  introduce varchar(500),
  address varchar(64),
  avatar varchar(128),
  gender smallint,
  status smallint,
  email varchar(64),
  register_time datetime,
  register_ip varchar(16),
  login_time datetime,
  login_ip varchar(16),
  background_img varchar(128)
);
uid           用户id
uname         用户名
unickname     用户昵称
upwd          用户密码
phone         用户电话
introduce     用户简介
address       用户地址
avatar        用户头像
gender        用户性别
status        用户登陆状态
email         用户邮箱
register_time 用户注册时间
register_ip   用户注册ip
login_time    用户登陆时间
login_ip      用户登陆ip
background_img用户背景图片
ALTER TABLE k_user ADD background_img VARCHAR(128);
insert into k_user values(null, "Cathy", "凯凯西Cathy", md5("123"), "18918224567", "welcome American","美国",'http://localhost:8084/img/user/user2.jpg',0,0,"", NULL, NULL, NULL,NULL,"http://localhost:8084/img/user/user2-1.jpg");
insert into k_user values(null, "carmen", "唐卡豆子", md5("123"), "15618224567", "welcome 大广州","广州",'',0,0,"http://localhost:8084/img/user/user1.jpg", NULL, NULL, NULL,NULL,"http://localhost:8084/img/user/user1-1.jpg");
insert into k_user values(null, "tom", "猫咪", md5("123"), "15618224567", "巴扎","北京",'http://localhost:8084/img/user/user3.jpg',0,0,"", NULL, NULL, NULL,NULL,"http://localhost:8084/img/user/user3-1.jpg");
insert into k_user values(null, "lily", "Lily一名化妆师", md5("123"), "15618224567", "一名健身爱好者，对减脂，腹肌，倒立，化妆还比较有心得","北京,朝阳",'http://localhost:8084/img/user/user4.jpg',0,0,"", NULL, NULL, NULL,NULL,"http://localhost:8084/img/user/user4-1.jpg");
insert into k_user values(null, "Derek", "Derek_大骏", md5("123"), "15618224567", "身高188，体重目前89kg 微博：Derek_大骏，讨论群：ICANGYM （备注：Keep）喜欢运动平时也会拍点视频分享，人在上海，有开自己的品牌ICON健身.","上海市，徐汇区",'http://localhost:8084/img/user/user5.jpg',1,0,"", NULL, NULL, NULL,NULL,"http://localhost:8084/img/user/user5-1.jpg");

--运动日记,打卡
create table k_training_diary(
  did int primary key auto_increment,
  title varchar(64),
  content varchar(500),
  location varchar(100),
  create_time DATETIME,
  pic varchar(500),
  time int,
  tid int,
  uid int,
  training_count smallint,
  star_count int,
  comment_count int,
  foreign key (uid) references k_user(uid),
  foreign key (tid) references k_traing_type(tid)
);
ALTER TABLE k_training_diary ADD star_count int;
ALTER TABLE k_training_diary ADD comment_count int;
id 打卡id
title
content        打卡分享内容
location       打卡地点
create_time    打卡时间
pic            打卡分享图片
time           视频时长 分钟
tid            k_traing_type
uid            k_user
training_count 打卡次数   

star_count     点赞次数
comment_count  评论次数
ALTER TABLE k_training_diary ADD time int;
-- 获取前6个hot 新闻
SELECT did,uid,tid,title,content,location,pic,training_count,star_count,comment_count, create_time 
FROM k_training_diary ORDER BY star_count desc LIMIT 0,6
-- uid=5
insert into k_training_diary values(null, "马甲线养成", "哈哈哈哈下来体脂，瘦下来马甲线才会露出来，可以通过大量的有氧训练来减脂2",
'上海',now(), "http://localhost:8084/img/user/user5-1.jpg",12,1,5,3,null,null);
insert into k_training_diary values(null, "小腿按摩", "小腿按摩 小腿按摩",
'上海',now(), "http://localhost:8084/img/user/user5-2.jpg",15,3,5,1,null,null);
insert into k_training_diary values(null, "腹肌训练入门", "腹肌训练入门 腹肌训练入门",
'上海',now(), "http://localhost:8084/img/user/user5-3.jpg",13,4,5,1,null,null);
-- uid=4
insert into k_training_diary values(null, "小腿按摩", "小腿按摩 小腿按摩",
'上海',now(), "http://localhost:8084/img/user/user4-1.jpg",15,3,4,1,null,null);
insert into k_training_diary values(null, "腹肌训练入门", "腹肌训练入门 腹肌训练入门",
'上海',now(), "http://localhost:8084/img/user/user4-2.jpg",13,4,4,1,null,null);
insert into k_training_diary values(null, "小腿按摩", "小腿按摩 小腿按摩",
'上海',now(), "http://localhost:8084/img/user/user4-4.jpg",15,3,4,2,null,null);
insert into k_training_diary values(null, "腹肌训练入门", "腹肌训练入门 腹肌训练入门",
'上海',now(), "http://localhost:8084/img/user/user4-5.jpg",13,4,4,2,null,null);
-- uid=3
insert into k_training_diary values(null, "小腿按摩", "小腿按摩 小腿按摩",
'北京',now(), "http://localhost:8084/img/user/user3-1.jpg",15,3,3,1,null,null);
insert into k_training_diary values(null, "腹肌训练入门", "腹肌训练入门 腹肌训练入门",
'北京',now(), "http://localhost:8084/img/user/user3-1.jpg",13,4,3,1,null,null);
--  uid=1
insert into k_training_diary values(null, "马甲线养成", "第一步一定要减下来体脂，瘦下来马甲线才会露出来，可以通过大量的有氧训练来减脂",
'美国',now(), "http://localhost:8084/img/user/user2-1.jpg",12,1,1,1,3,3);
insert into k_training_diary values(null, "马甲线养成2", "第一步一定要减下来体脂，瘦下来马甲线才会露出来，可以通过大量的有氧训练来减脂2",
'美国',now(), "http://localhost:8084/img/user/user2-2.jpg",12,1,1,2,3,3);
insert into k_training_diary values(null, "马甲线养成3", "第一步一定要减下来体脂，瘦下来马甲线才会露出来，可以通过大量的有氧训练来减脂2",
'美国',now(), "http://localhost:8084/img/user/user2-2.jpg",12,1,1,3,1,1);
insert into k_training_diary values(null, "廋腿训练", "廋腿训练廋腿训练111111111111",
'广州',now(), "http://localhost:8084/img/user/user2-3.jpg",13,2,1,1,null,null);
insert into k_training_diary values(null, "廋腿训练2", "廋腿训练廋腿训练2222222222",
'广州',now(), "http://localhost:8084/img/user/user2-4.jpg",13,2,1,2,2,3);
insert into k_training_diary values(null, "廋腿训练3", "廋腿训练廋腿训练333333333",
'广州',now(), "http://localhost:8084/img/user/user2-4.jpg",13,2,1,3,null,null);
--  uid=2
insert into k_training_diary values(null, "马甲线养成", "马甲线很漂亮 加油",
'广州',now(), "http://localhost:8084/img/user/user2-2.jpg",12,1,2,1,null,null);
insert into k_training_diary values(null, "廋腿训练", "我要我要 廋腿训练廋腿训练",
'广州',now(), "http://localhost:8084/img/user/user2-3.jpg",13,2,2,1,null,null);


--评论
create table k_diary_comment(
  id int primary key auto_increment,
  unickname varchar(32),
  content varchar(500),
  add_time datetime,
  star smallint default 0,
  did int,
  uid int,   
  comment_uid int,  
  foreign key (did) references k_training_diary(did),
  foreign key (comment_uid) references k_training_diary(did),
  foreign key (uid) references k_user(uid)
);


--star   点赞 1, 没有点赞为0
 --uid int,       ## 当前评论所属的用户
--comment_uid int,   ## 评论用户

-- uid=1    did=1
insert into k_diary_comment values(null, "唐卡豆子", "唐卡豆子这厉害呀，能坚持这么久", now(),1, 1,1,2);
insert into k_diary_comment values(null, "Derek_大骏", "Derek_大骏这厉害呀，能坚持这么久", now(),1, 1,1,5);
insert into k_diary_comment values(null, "猫咪", "猫，能坚持这么久", now(),1,1, 1,3); 

insert into k_diary_comment values(null, "Derek_大骏", "这厉害呀，能坚持这么久", now(), 1,2,1,5);
insert into k_diary_comment values(null, "猫咪", "这厉害呀，能坚持这么久", now(), 1,2,1,3);

insert into k_diary_comment values(null, "Derek_大骏", "Derek_大骏 不错呀", now(),1, 5,1,5);
insert into k_diary_comment values(null, "唐卡豆子", "唐卡豆子 不错呀", now(),1, 5,1,2);
insert into k_diary_comment values(null, "Lily一名化妆师", "Lily一名化妆师这厉害呀，能坚持这么久", now(), 0,5,1,4);

insert into k_diary_comment values(null, "Lily一名化妆师", "嗯呢恩额", now(),1, 3,1,4);
--uid=2    did=8
insert into k_diary_comment values(null, "Derek_大骏", "Derek_大骏 不错呀", now(),1, 8,2,5);
insert into k_diary_comment values(null, "凯凯西Cathy", "凯凯西Cathy 不错呀", now(),1, 8,2,1);
insert into k_diary_comment values(null, "Lily一名化妆师", "Lily一名化妆师这厉害呀，能坚持这么久", now(), 0,8,2,4);

--uid=3    did=10
insert into k_diary_comment values(null, "Derek_大骏", "Derek_大骏 不错呀", now(),1, 10,3,5);
insert into k_diary_comment values(null, "凯凯西Cathy", "凯凯西Cathy 不错呀", now(),1, 10,3,1);
insert into k_diary_comment values(null, "Lily一名化妆师", "Lily一名化妆师这厉害呀，能坚持这么久", now(), 0,10,3,4);
--   did=11
insert into k_diary_comment values(null, "喵咪", "喵咪 喵咪 化妆师这厉害呀，能坚持这么久", now(), 1,11,3,3);

--uid=4    did=12
insert into k_diary_comment values(null, "Derek_大骏", "Derek_大骏 不错呀", now(),1, 12,4,5);
insert into k_diary_comment values(null, "凯凯西Cathy", "凯凯西Cathy 不错呀", now(),1, 12,4,1);
--  did=13
insert into k_diary_comment values(null, "唐卡豆子", "唐卡豆子 不错呀", now(),1, 13,1,2);
insert into k_diary_comment values(null, "凯凯西Cathy", "凯凯西Cathy 不错呀", now(),1, 13,1,1);
insert into k_diary_comment values(null, "喵咪", "喵咪 喵咪 化妆师这厉害呀，能坚持这么久", now(), 1,13,1,3);
insert into k_diary_comment values(null, "Lily一名化妆师", "Lily一名化妆师这厉害呀，能坚持这么久", now(), 0,13,4,4);

--  did=14
insert into k_diary_comment values(null, "凯凯西Cathy", "凯凯西Cathy 不错呀", now(),1, 14,5,1);






--运动类型
create table k_traing_type(
  tid int primary key auto_increment,
  title varchar(64),
  content varchar(500),
  cal smallint,
  time int,
  action int,
  level smallint,
  complete int,
  isEquipment smallint,
  current int
);

content     描述
cal         千卡
time        视频时长 分钟
action      记录多少个动作
level       难度系数
complete    多少人完成练习
isEquipment 是否需要器械   0 不需要 / 1 需要
current     当前正在练习的人数
insert into k_traing_type values(null, "马甲线养成", "这是针对马甲线的专门运动",61,12, 17, 3, 23436546, 0, 31);
insert into k_traing_type values(null, "廋腿训练", "廋腿成功率高达69%",61,13, 13, 2, 643127, 0, 22);
insert into k_traing_type values(null, "小腿按摩", "跑步,逛街以及长时间穿高跟鞋很容易赵成小腿肌肉僵硬变粗..",49,15, 16, 1, 10412810, 0, 17);
insert into k_traing_type values(null, "腹肌训练入门", "通过简单的动作，让你感受到腹肌的存在。如果你在连其他腹肌课程是会出现腰痛，脖子疼，大腿酸等问题，说明腹肌力量还比较弱...",28,13, 16, 1, 30020776, 0, 14);
insert into k_traing_type values(null, "腿部塑形", "通过均衡腿部的肌肉力量，让腿部肌肉更加匀称..",32,13, 14, 1, 15144618, 0, 12);

--运动练习视频，数据固定，一般不变
create table k_training_video(
  id int primary key auto_increment,
  sequence smallint,
  title varchar(32),
  time int,
  num int,
  url varchar(100),
  tid int,
  foreign key (tid) references k_traing_type(tid)
);
id       视频id
sequence 视频顺序
title    视频标题
time     播放时间，以s 为单位
num      一个视频动作重复次数
url      视频地址
tid      k_traing_type id 外键

insert into k_training_video values(null,1,"单腿屈腿两头起",null , 12,"video/v", 1);
insert into k_training_video values(null,2,"屈膝收腹",null, 15,"video/v",  1);
insert into k_training_video values(null,3,"西西里卷腹",null , 15,"video/v",  1);
insert into k_training_video values(null,4,"倒蹬车",30 , null,"video/v",  1);
insert into k_training_video values(null,5,"平板支撑",30 , null,"video/v",  1);




--打卡照片
create table k_diary_photo(
  pid int primary key auto_increment,
  uid int,
  did int,
  pic varchar(500),
  foreign key (uid) references k_user(uid),
  foreign key (did) references k_training_diary(did)
);
select pic from k_diary_photo where uid=1 and did=1
pid   照片id
uid   用户id
did   打卡日记id
pic   打卡照片
insert into k_diary_photo values(null, 1, 1, 'http://localhost:8084/img/user/user2-1.jpg');
insert into k_diary_photo values(null, 1, 2, 'http://localhost:8084/img/user/user2-1.jpg');
insert into k_diary_photo values(null, 1, 2, 'img/user1.png');
insert into k_diary_photo values(null, 1, 2, 'img/user2.png');

--粉丝和关注
create table k_friend(
  id int primary key auto_increment,
  uid int,
  fid int,
  status smallint,
  foreign key (uid) references k_user(uid),
  foreign key (fid) references k_user(uid)
);
status
0 uid 被关注 fid
1 uid 关注 fid
2 uid 互相关注 fid



粉丝 0 select count(*) from k_friend where uid=1 and  status in (0,2)
关注 1 select count(*) from k_friend where uid=1 and  status in (1,2)

insert into k_friend values(null, 1, 2, 0);
insert into k_friend values(null, 2, 1, 1);
insert into k_friend values(null, 1, 3, 2);
insert into k_friend values(null, 3, 1, 2);
insert into k_friend values(null, 2, 3, 2);
insert into k_friend values(null, 3, 2, 2);
------------------------------------------
--话题 topic
create table k_topic(
  id int primary key auto_increment,
  pic varchar(500),
  title varchar(100),
  count int,
  content varchar(1000)
);
INSERT INTO k_topic VALUES(null,"http://localhost:8084/img/explore/topic/topic1.jpg","# 生活中如何顺利挤出健身时间？ #", 2199,
"爱健身的人，如何顺利在生活中“挤出”健身的时间？如何处理一时“想犯懒”的冲动？
欢迎 Keepers 说出你的经验！图片 from @___长腿姑娘");
INSERT INTO k_topic VALUES(null,"http://localhost:8084/img/explore/topic/topic2.jpg","# 全家一起来Keep #", 190,
"全家一起Keep 一起动起来");
INSERT INTO k_topic VALUES(null,"http://localhost:8084/img/explore/topic/topic4.jpg","# 极简健身餐 #", 222,
"极简健身餐 快来尝试吧");
INSERT INTO k_topic VALUES(null,"http://localhost:8084/img/explore/topic/topic6.jpg","#  最近解锁的健身新技能 #", 408,
"最近健身有没有 Get 新技能？终于练成瑜伽“头倒立”，跑过 10km，解锁俯卧撑，举起新重量……每一此进步都值得纪念！图片 from @唐幼馨Tina");

--话题 大家的讨论
create table k_topic_content(
  id int primary key auto_increment,
  uid int,
  unickname varchar(100),
  create_time datetime,
  content varchar(1000),
  likes int,
  comment int,
  star int,
  pic varchar(500),
  avatar varchar(500),
  starUid int,
  isfollow smallint 
);
starUid 关注我的id
ALTER TABLE k_topic_content ADD status smallint;

// 2 
INSERT INTO k_topic_content VALUES(null,1,"凯凯西Cathy",now(),"",32,56,45,
"'http://localhost:8084/img/user/user2-8.jpg'",
'http://localhost:8084/img/user/user2.jpg'
);
INSERT INTO k_topic_content VALUES(null,2,"唐卡豆子",now(),"",174,22,71,
"'http://localhost:8084/img/user/user1-3.jpg'",
'http://localhost:8084/img/user/user1.jpg');
INSERT INTO k_topic_content VALUES(null,3,"猫咪",now(),"",12,16,10,
"'http://localhost:8084/img/user/user3-3.jpg'",
'http://localhost:8084/img/user/user3.jpg');
INSERT INTO k_topic_content VALUES(null,5,"Derek_大骏",now(),"",12,9,3,
"'http://localhost:8084/img/user/user5-2.jpg','http://localhost:8084/img/user/user5-4.jpg'",
'http://localhost:8084/img/user/user5.jpg');

--1
INSERT INTO k_topic_content VALUES(null,1,"凯凯西Cathy",now(),"",534,356,245,
"'http://localhost:8084/img/user/user2-9.jpg'",
'http://localhost:8084/img/user/user2.jpg'
);
INSERT INTO k_topic_content VALUES(null,2,"唐卡豆子",now(),"",674,222,171,
"'http://localhost:8084/img/user/user1-5.jpg'",
'http://localhost:8084/img/user/user1.jpg');
INSERT INTO k_topic_content VALUES(null,3,"猫咪",now(),"",134,26,101,
"'http://localhost:8084/img/user/user3-4.jpg'",
'http://localhost:8084/img/user/user3.jpg');
INSERT INTO k_topic_content VALUES(null,4,"Lily一名化妆师",now(),"",234,100,61,
"'http://localhost:8084/img/user/user4-3.jpg','http://localhost:8084/imge/user/user4-7.jpg'",
'http://localhost:8084/img/user/user4.jpg');
INSERT INTO k_topic_content VALUES(null,2,"唐卡豆子",now(),"",67,13,11,
"'http://localhost:8084/img/user/user1-4.jpg'",
'http://localhost:8084/img/user/user1.jpg');
INSERT INTO k_topic_content VALUES(null,5,"Derek_大骏",now(),"",22,6,1,
"'http://localhost:8084/img/user/user5.jpg'",
'http://localhost:8084/img/user/user5.jpg');


--合集 collection
create table k_collection(
  id int primary key auto_increment,
  pic varchar(500),
  title varchar(100),
  subTitle varchar(500),
  count int
);
INSERT INTO k_collection VALUES(null,"http://localhost:8084/img/explore/collection/collection1.jpg",
"塑形瑜伽训练成果", "来吧 塑形瑜伽训练成果",11);
INSERT INTO k_collection VALUES(null,"http://localhost:8084/img/explore/collection/collection2.jpg",
"最甜蜜不过一起健身”", "最甜蜜不过一起健身 看完这几篇饮食建议，再不会胖得“不明不白”了！",76);
INSERT INTO k_collection VALUES(null,"http://localhost:8084/img/explore/collection/collection4.jpg",
"O型腿、X型腿矫正攻略", "O型腿、X型腿矫正攻略",241);
INSERT INTO k_collection VALUES(null,"http://localhost:8084/img/explore/collection/collection5.jpg",
"宿舍党减脂饮食全攻略", "开学拒绝胖一圈，这份饮食建议请收好！",289);

--banner
create table k_banner(
  id int primary key auto_increment,
  pic varchar(500),
  title varchar(100)
);
INSERT INTO k_banner VALUES(null,"http://localhost:8084/img/explore/banner/banner1.jpg","111");
INSERT INTO k_banner VALUES(null,"http://localhost:8084/img/explore/banner/banner2.jpg","22");
INSERT INTO k_banner VALUES(null,"http://localhost:8084/img/explore/banner/banner3.jpg","333");