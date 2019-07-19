$(function () {
  //全程监听
  $(document).mousemove(function (e) {
    if (!!this.move) {
      console.log(this.move,'move');
      // let posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
      //   callback = document.call_down || function () {
      //     $(this.move_target).css({
      //       'top': e.pageY - posix.y,
      //       'left': e.pageX - posix.x
      //     });
      //   };
      // callback.call(this, e, posix);
    }
  }).mouseup(function (e) {
    //鼠标抬起时监听
    if (!!this.move) {
      let callback = document.call_up || function () {};
      $.extend(this, {
        'move': false,
        'move_target': null,
        'call_down': false,
        'call_up': false
      });
    }
  });

  //在box内按下触发，拖动圆点不触发
  let $box = $('#drapBox').mousedown(function (e) {
    let offset = $(this).offset();
    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
    $.extend(document, {'move': true, 'move_target': this});
  }).on('mousedown', '#point', function (e) {
    //按下圆点那一刻的数据
    let posix = {
      'w': $box.width(),
      'h': $box.height(),
      'x': e.pageX,
      'y': e.pageY
    };
    //拖动圆点一直触发
    $.extend(document, {
      'move': true, 'call_down': function (e) {
        //box的宽最小为500
        $box.css({
          'width': Math.max(500, e.pageX - posix.x + posix.w),
          'height': Math.max(500, e.pageY - posix.y + posix.h)
        });
      }
    });
    return false;
  });
});
