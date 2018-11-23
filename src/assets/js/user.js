
var i=2;
  window.onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(document.body.scrollTop, document.documentElement.scrollTop);
    var html = `<div class="diary-block">
      <a href="#" class="diary-day">
        <span>08月20日</span>
        <div class="get-more">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </a>
      <!--每天每次分享记录-->
      <div class="traing-diary">
        <img src="img/tools/diary-img.png" class="diary-img">
        <div class="traing-diary-wrapper">
          <div class="diary-title">
            <span> 完成 一字马竖叉 第19次</span>
          </div>
          <div class="diary-desc">遇到了减脂平台期怎么办🙀平台期也叫停滞期，很多人发现刚开始减脂那几个星期或者几个月，体重都是唰唰唰地掉，特别是对于基数大的人群。然而到了某一个时刻，你突然发现体重已连续两三周甚至一个多月没有动静了，或者相比较之前体重掉得非常缓慢，这就是我们所谓的平台期。怎么办呢？
          </div>
          <div class="diary-photo">
            <img src="img/user/user2-10.jpg">
          </div>
        </div>
      </div>
      <div class="traing-diary">
        <img src="img/tools/diary-img.png" class="diary-img">
        <div class="traing-diary-wrapper">
          <div class="diary-title">
            <span> 完成 瘦腿训练 第53次</span>
          </div>
          <div class="diary-desc">在健身房可以做的有氧运动👇
            ⭐️【有氧器械-跑步机】
            是有氧运动最普遍的器械之一，运动方式非常生活化，可以从慢走开始，逐渐增加强度到快走、慢跑、快跑。也可以调整坡度，有效地训练上坡跑/走，或者下坡跑/走。
            使用方法：1、上跑步机后应从慢走、慢跑等“动态”热身开始，逐步加大运动量，此过程通常以20分钟以上。2、跑步时一定要收腹挺胸、收紧腰背部肌肉。姿势正确，还可以起到很有效的练核心效果。3、结束后做压腿、下蹲、拉伸肌肉，使肌肉变得更加柔软。
            ⭐️【有氧器械-椭圆机VARIO】
            椭圆机是一种科学、健康的有氧运动机械，不仅可以帮助进行心肺功能训练，还能有效的减少身体脂肪。可以使使用者很长时间大幅度运动而且几乎不会对下肢关节造成很大的影响。并且对于膝踝关节不好的人，对关节的损伤比较小，而使用椭圆机锻炼则是更为安全、舒适的选择。
            使用方法：1、双手抓在可以摇动的把手上，手随着脚依次向前进行蹬踏运动2、等手脚的运动达到比较协调的程度后，再逐渐增加手的推力和拉力。可以提高背部线条3、做向前及向后的双向运动。练习时一般可以向前练习3分钟，再做向后练习3分钟，一组练习5～6分钟，最好每次活动能够练习3～4组。
            ⭐️【有氧器械-划船机】
            划船机是健身房最受欢迎的一种健身运动器械，可以使全身的肌肉得到锻炼，对身体的冲击也小。
            使用方法：1、膝盖像胸部弯曲，上半身向前稍微的倾斜，要抬头挺胸，不能弯腰驼背的。2、正确的姿势是靠双脚的力量，推动身体后仰，当双手靠近膝关节，上臂用力牵拉、屈肘，拉至胸部。在后拉时要保持背部正直，整个膝盖、臀、肩、髋充分伸展。3、最后，伸直手臂，弯曲膝盖，身体向前移动，回到开始时的状态。
            ⭐️【有氧器械-固定式单车】
            固定式单车几乎是所有健身中心的标配，只要调整好坐凳与把手的高度，实际的骑行体验，与日常骑自行车非常相似，功能性运动、可锻炼核心、因此通常是健身新人的最爱。
            使用方法：1、调整好坐垫的高度，使大腿充分伸展时膝关节处于稍屈位逐渐增加阻力2、减慢速度，自行车脚踏板的转速控制在每分钟70—80转。一旦转速超过了100转你的热量燃烧速率就开始下降。3、在使用无靠背坐垫的，不要像骑常规的自行车那样将背部挺直，两手死死地抓住把手，而是要求手掌稍用力向下压住把手，以减轻臀部对坐垫的压力，有利于腿部的血液循环。

             @Keep_精选  @Keep
          </div>
          <div class="diary-photo">
            <img src="img/user/user2-11.jpg">
          </div>
        </div>
      </div>
    </div>`;
    if(scrollTop>(2650+800*(i-2))){
      i++;
      console.log(i);
      $(".training-diary").append(html);
    }

  }
